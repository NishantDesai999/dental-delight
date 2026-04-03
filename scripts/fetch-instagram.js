/**
 * scripts/fetch-instagram.js
 * Dental Delight – Instagram feed sync (Node 18+, zero npm dependencies)
 *
 * ─────────────────────────────────────────────────────────────────────────
 * ONE-TIME SETUP (do this once, then GitHub Actions handles everything)
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Convert the @dentaldelightdg Instagram account to a Business or Creator
 *    account: Instagram app → Settings → Account type and tools → Switch to
 *    Professional Account (free, reversible).
 *
 * 2. Create a Meta Developer App:
 *    a. Go to https://developers.facebook.com → My Apps → Create App
 *    b. Choose "Business" type, give it a name (e.g. "Dental Delight Feed")
 *    c. Add product: "Instagram Graph API"
 *    d. Under Instagram → Basic Display (or Instagram API), link your IG account
 *    e. Generate a short-lived user token, then exchange it for a long-lived token:
 *       GET https://graph.facebook.com/v22.0/oauth/access_token
 *         ?grant_type=fb_exchange_token
 *         &client_id={app-id}
 *         &client_secret={app-secret}
 *         &fb_exchange_token={short-lived-token}
 *    f. Note: long-lived tokens expire in ~60 days; the refresh workflow
 *       (refresh-instagram-token.yml) re-extends it every 50 days automatically.
 *
 * 3. Find your Instagram User ID:
 *    GET https://graph.facebook.com/v22.0/me?fields=id,name&access_token={token}
 *
 * 4. Add secrets to your GitHub repository:
 *    Settings → Secrets and variables → Actions → New repository secret
 *    • INSTAGRAM_ACCESS_TOKEN  ← the long-lived token from step 2e
 *    • INSTAGRAM_USER_ID       ← the numeric user ID from step 3
 *
 * 5. Connect Netlify to your GitHub repo (replaces Netlify Drop):
 *    Netlify dashboard → Sites → [your site] → Site configuration →
 *    Build & deploy → Link to Git → choose GitHub → select this repo →
 *    branch: main, publish directory: . (root), no build command needed.
 *    After linking, every push to main auto-deploys (including the JSON
 *    commits that the sync workflow creates).
 * ─────────────────────────────────────────────────────────────────────────
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const USER_ID      = process.env.INSTAGRAM_USER_ID;

if (!ACCESS_TOKEN || !USER_ID) {
  console.error('[fetch-instagram] Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID env vars.');
  process.exit(1);
}

const API_URL =
  `https://graph.facebook.com/v22.0/${USER_ID}/media` +
  `?fields=id,media_url,thumbnail_url,caption,permalink,timestamp,media_type` +
  `&limit=10` +
  `&access_token=${ACCESS_TOKEN}`;

async function main() {
  let res;
  try {
    res = await fetch(API_URL);
  } catch (err) {
    console.error('[fetch-instagram] Network error:', err.message);
    process.exit(1);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error(`[fetch-instagram] API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const json = await res.json();

  if (!json.data || !Array.isArray(json.data)) {
    console.error('[fetch-instagram] Unexpected API response:', JSON.stringify(json));
    process.exit(1);
  }

  // Filter to IMAGE and CAROUSEL_ALBUM; use thumbnail_url as fallback for VIDEO
  const posts = json.data
    .filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM' || p.media_type === 'VIDEO')
    .slice(0, 10)
    .map(p => ({
      id:        p.id,
      media_url: p.media_url || p.thumbnail_url || '',
      caption:   p.caption   || '',
      permalink: p.permalink || '',
      timestamp: p.timestamp || '',
      media_type: p.media_type
    }));

  const output = {
    updated: new Date().toISOString(),
    posts:   posts
  };

  const outPath = path.join(__dirname, '..', 'data', 'instagram.json');
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`[fetch-instagram] Wrote ${posts.length} posts to data/instagram.json`);
}

main();
