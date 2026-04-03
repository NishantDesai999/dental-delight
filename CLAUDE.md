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

Single file per layer — `index.html`, `css/style.css`, `js/main.js`.

**main.js** is structured as a single IIFE with seven self-contained feature blocks:
1. Navbar scroll state (adds background at >20px scroll)
2. Mobile hamburger menu (drawer toggle, outside-click + Escape to close)
3. Smooth scrolling with offset for sticky navbar
4. Scroll-spy (highlights active nav link by section visibility)
5. Scroll-triggered fade-in animations via `IntersectionObserver`
6. Back-to-top button (visible at >300px scroll)
7. Appointment modal + WhatsApp integration — form validates name/phone, then opens `https://wa.me/919023039280?text={encoded_message}`

**style.css** uses CSS custom properties defined in `:root` for the color palette (navy primary `#1A2B6B`, teal accent `#3EC8C8`) and spacing. Typography uses `clamp()` for fluid scaling. Animations are CSS classes (`.fade-in`, `.visible`) toggled by JS.

## i18n Status

The HTML has `data-i18n="key"` attributes throughout and a language switcher UI (English / हिंदी / ગુજરાતી) in the navbar, but **the translation logic is not yet implemented** — no translation JSON files exist and no language-switching JS exists. This is the primary unfinished feature.
