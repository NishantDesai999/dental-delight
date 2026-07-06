# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for "Dental Delight · Pure Cure", a dental clinic in Vejalpur, Ahmedabad run by Dr. Disha Goria. No build system, package manager, or backend — just vanilla HTML/CSS/JS served directly.

## Development

Open `index.html` directly in a browser. No build step, no server required.

For a local dev server with live reload:
```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no tests, linting tools, or CI/CD pipelines.

## Architecture

Single file per layer — `index.html`, `css/style.css`, `js/main.js`, `js/i18n.js`.

**main.js** is structured as a single IIFE with self-contained feature blocks:
1. Navbar scroll state (adds background at >20px scroll)
2. Mobile hamburger menu (drawer toggle, outside-click + Escape to close)
3. Smooth scrolling with offset for sticky navbar
4. Scroll-spy (highlights active nav link by section visibility)
5. Scroll-triggered fade-in animations via `IntersectionObserver`
6. Back-to-top button (visible at >300px scroll), stacked above the fixed contact bar
7. Appointment modal + WhatsApp integration — form validates name/phone, then opens `https://wa.me/919023039280?text={encoded_message}`
8. Dynamic copyright year in the footer
9. FAQ accordion (single-open, toggled via `aria-expanded`)
10. Reviews carousel (arrow/dot navigation, autoplay, touch swipe, responsive cards-per-view)

All `.open-modal` triggers (navbar CTA, hero button, services CTA, contact CTA, the contact bar's WhatsApp half) share one click binding that opens the appointment modal.

**Fixed floating controls** — a `.contact-bar` (split pill: WhatsApp half opens the appointment modal, Call half is a `tel:` link) sits bottom-right on all breakpoints, with `.back-to-top` stacked directly above it so the two never overlap.

**style.css** uses CSS custom properties defined in `:root` for the color palette (navy primary `#1A2B6B`, teal accent `#3EC8C8`, plus semantic tokens for error/overlay/shadow/glow colors), a border-radius scale (`--radius-sm/md/lg`, `--radius-pill`, `--radius-icon`), and spacing. Typography uses `clamp()` for fluid scaling. Animations are CSS classes (`.animate-on-scroll`, `.visible`) toggled by JS via `IntersectionObserver`.

Shared CTA buttons are `.btn-primary` (filled teal pill) and `.btn-outline` (outlined), with a `.btn-sm` size modifier for compact contexts (e.g. the navbar). Icons are Lucide (`<i data-lucide="name">`, rendered by `lucide.createIcons()`), used consistently across the page — including the modal close button and inline icons that previously used emoji/text glyphs.

## i18n Status

Implemented in `js/i18n.js`: a translations object for English / हिंदी / ગુજરાતી, applied via `data-i18n` (textContent), `data-i18n-html` (innerHTML, for markup with nested `<span>`/`<br>`), and `data-i18n-placeholder` (input placeholders). The navbar/drawer language switcher buttons call `applyTranslations()` on click, and the chosen language persists via `localStorage` (`lang` key, restored on load).
