# Implementation Plan: JT (旅) Landing Page

## Overview

Build a bilingual (EN/TH) static landing page for the JT Planner iOS app using vanilla HTML, CSS, and JavaScript. The implementation follows a mobile-first approach, creating the CSS foundation first, then the HTML structure with all content, then the JavaScript interactivity, and finally the separate docs pages.

## Tasks

- [x] 1. Create CSS foundation with theming and responsive layout
  - [x] 1.1 Create `css/style.css` with CSS custom properties for all color tokens (light and dark mode), typography (Inter, Noto Sans Thai, system fallbacks), and base reset styles
    - Define `:root` variables for all colors from the brand identity
    - Add `@media (prefers-color-scheme: dark)` overrides
    - Add language visibility rules (`.lang-th` class toggling `[lang="en"]` / `[lang="th"]` display)
    - Add Seigaiha wave pattern as CSS SVG background
    - _Requirements: 2.1, 2.2, 2.4, 19.2, 19.4, 1.5_
  - [x] 1.2 Add responsive layout styles: navigation bar (sticky, backdrop blur), grid system, section spacing, and breakpoints at 768px and 1024px
    - Mobile-first base styles (single column)
    - Tablet media query (2-column grid)
    - Desktop media query (3-column feature grid)
    - Sticky nav with hamburger menu on mobile
    - _Requirements: 3.1, 5.2, 5.3, 5.4, 15.1, 15.2_
  - [x] 1.3 Add component styles: feature cards, FAQ accordion, screenshot carousel (horizontal scroll-snap), hero section, pills/tags, CTA buttons, footer
    - Focus indicators on all interactive elements
    - Smooth transitions for FAQ expand/collapse
    - _Requirements: 18.4, 19.1_

- [x] 2. Build the main HTML page structure and content
  - [x] 2.1 Create `index.html` with `<head>` section: meta tags, SEO title, meta description, Open Graph tags, JSON-LD structured data, favicon, CSS link
    - Set `lang="en"` on `<html>`
    - Include all OG tags (og:title, og:description, og:image, og:url, og:type)
    - Include JSON-LD SoftwareApplication schema
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_
  - [x] 2.2 Add `<header>` with sticky navigation bar: logo "JT (旅)", nav links (Features, How It Works, Screenshots, FAQ, Support), language toggle button (EN/TH), App Store CTA button
    - All nav link text bilingual with `<span lang="en">` / `<span lang="th">`
    - Hamburger menu button for mobile (hidden on desktop)
    - _Requirements: 3.2, 3.3, 3.5, 3.6_
  - [x] 2.3 Add Hero section: bilingual headline, subheadline, CTA button, iPhone mockup image using `apple-iphone-17-pro-max-frame.png` composited with a screenshot
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  - [x] 2.4 Add Features section: 11 feature cards in a responsive grid, each with emoji icon, bilingual title, and bilingual description
    - All content from the brief's feature table
    - _Requirements: 5.1_
  - [x] 2.5 Add How It Works section: 3 numbered steps with emoji icons, bilingual titles, bilingual descriptions, and screenshot placeholder areas
    - _Requirements: 6.1, 6.2, 6.3_
  - [x] 2.6 Add Screenshots Gallery section: horizontally scrollable carousel with all 6 screenshots, bilingual title and caption, `loading="lazy"` on all images
    - _Requirements: 7.1, 7.2, 7.3_
  - [x] 2.7 Add remaining sections: What Makes It Special (2 highlight cards), Perfect For (6 traveler type pills), FAQ (5 accordion items with bilingual Q&A), Download CTA (App Store badge + Discord placeholder), and Footer (app name, links, copyright, disclaimer)
    - Use semantic HTML: `<details>`/`<summary>` or `<button>` with ARIA for FAQ
    - All text bilingual
    - Alt text on all images
    - Proper heading hierarchy (h1 → h2 → h3)
    - _Requirements: 8.1, 8.2, 9.1, 9.2, 10.1, 11.1, 11.2, 11.3, 12.1, 12.2, 12.3, 12.4, 18.1, 18.2, 18.3_

- [x] 3. Implement JavaScript interactivity
  - [x] 3.1 Create `js/main.js` with language toggle: read/write `jt-lang` in localStorage, toggle `.lang-th` class on `<html>`, update toggle button text, handle localStorage unavailability with try/catch fallback
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  - [x] 3.2 Add FAQ accordion: click and keyboard (Enter/Space) handlers on question elements, toggle `active` class, manage `aria-expanded` and `aria-controls` attributes
    - _Requirements: 10.2, 10.3, 10.4_
  - [x] 3.3 Add smooth scroll for nav links (offset for sticky nav height) and mobile hamburger menu toggle
    - _Requirements: 3.4_
  - [x] 3.4 Add screenshot carousel navigation (optional arrow buttons for desktop) and any scroll-based animations
    - _Requirements: 7.1_

- [x] 4. Checkpoint — Verify core page functionality
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Create separate docs pages
  - [x] 5.1 Create `docs/privacy.html` with full privacy policy content, shared CSS via `../css/style.css`, header with "Back to Home" link, light/dark mode support
    - _Requirements: 13.1, 13.2, 13.3_
  - [x] 5.2 Create `docs/support.html` with support information (email, response time, troubleshooting, bug reporting, feature requests), shared CSS, header with "Back to Home" link
    - _Requirements: 14.1, 14.2, 14.3_

- [x] 6. Accessibility and performance validation
  - [x] 6.1 Verify and fix heading hierarchy, alt text on all images, focus indicators, keyboard navigation, ARIA attributes on interactive elements, and `lang` attributes on Thai content
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 1.6_
  - [x] 6.2 Verify total page weight (HTML + CSS + JS) is under 500KB, all below-fold images have `loading="lazy"`, and no framework dependencies exist in JS
    - _Requirements: 16.1, 16.2, 16.3_

- [x] 7. Checkpoint — Final verification
  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 8. Write property-based and unit tests
  - [ ]* 8.1 Set up Vitest with jsdom environment and fast-check, create test directory structure
  - [ ]* 8.2 Write property test: Bilingual markup completeness — verify all text containers have both lang="en" and lang="th" children and toggle visibility works
    - **Property 1: Bilingual markup completeness**
    - **Validates: Requirements 1.2, 1.5, 1.6**
  - [ ]* 8.3 Write property test: Language preference round-trip — verify storing and restoring language via localStorage produces consistent state
    - **Property 2: Language preference round-trip**
    - **Validates: Requirements 1.3, 1.4**
  - [ ]* 8.4 Write property test: Feature cards structural completeness — verify all 11 cards have icon, bilingual title, and bilingual description
    - **Property 3: Feature cards structural completeness**
    - **Validates: Requirements 5.1**
  - [ ]* 8.5 Write property test: Image lazy-loading — verify all below-fold img elements have loading="lazy"
    - **Property 4: Image lazy-loading**
    - **Validates: Requirements 7.3, 16.2**
  - [ ]* 8.6 Write property test: FAQ accordion toggle round-trip — verify double-toggle returns to original state via click and keyboard
    - **Property 5: FAQ accordion toggle round-trip**
    - **Validates: Requirements 10.2, 10.3, 10.4**
  - [ ]* 8.7 Write property test: Heading hierarchy validity — verify no heading level is skipped by more than 1
    - **Property 6: Heading hierarchy validity**
    - **Validates: Requirements 18.2**
  - [ ]* 8.8 Write property test: Image alt text completeness — verify all img elements have non-empty alt attributes
    - **Property 7: Image alt text completeness**
    - **Validates: Requirements 18.3**
  - [ ]* 8.9 Write property test: Color contrast compliance — verify all text/background color pairs have WCAG contrast ratio >= 4.5:1
    - **Property 8: Color contrast compliance**
    - **Validates: Requirements 2.5**
  - [ ]* 8.10 Write unit tests: SEO meta tags, nav structure, hero content, section existence, footer content, page weight, semantic HTML
    - _Requirements: 17.1–17.5, 3.2–3.6, 4.1–4.4, 12.1–12.4, 16.1, 18.1_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using fast-check
- Unit tests validate specific examples and edge cases using Vitest + jsdom
- All content text is defined in `temp/LANDING_PAGE_BRIEF.md` — reference it during implementation
- Images already exist in `images/` folder — no placeholder generation needed
- App Store URL is a placeholder (`id0000000000`) — easy to find-and-replace later
