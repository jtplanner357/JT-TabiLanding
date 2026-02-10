# Requirements Document

## Introduction

This document defines the requirements for the JT (旅) — Japan Travel Planner landing page: a bilingual (English/Thai), single-page static website hosted on GitHub Pages. The landing page promotes the JT Planner iOS app, providing information about features, screenshots, FAQ, and download links. It supports light/dark mode, is mobile-first responsive, and uses a clean Apple-inspired aesthetic with subtle Japanese design touches.

## Glossary

- **Landing_Page**: The single-page static website at `https://jtplanner357.github.io/JT-TabiLanding/` that promotes the JT Planner iOS app
- **Language_Toggle**: A UI control that switches all visible text between English (EN) and Thai (TH)
- **Theme_System**: The mechanism that applies light or dark visual styles based on the user's operating system preference
- **Navigation_Bar**: The sticky top bar containing the logo, section links, language toggle, and download CTA
- **Feature_Grid**: The responsive grid layout displaying 11 feature cards
- **FAQ_Accordion**: The expandable/collapsible question-and-answer section
- **Screenshot_Gallery**: The horizontally scrollable carousel of app screenshots
- **Hero_Section**: The top section containing the headline, subheadline, CTA button, and app mockup
- **Privacy_Page**: The separate HTML page at `docs/privacy.html` containing the privacy policy
- **Support_Page**: The separate HTML page at `docs/support.html` containing support information
- **Seigaiha_Pattern**: A traditional Japanese wave pattern used as decorative background element
- **CTA_Button**: A call-to-action button linking to the App Store download

## Requirements

### Requirement 1: Bilingual Language Support

**User Story:** As a visitor, I want to switch between English and Thai, so that I can read the landing page content in my preferred language.

#### Acceptance Criteria

1. THE Landing_Page SHALL default to English when no language preference is stored
2. WHEN a visitor clicks the Language_Toggle, THE Landing_Page SHALL switch all visible text between English and Thai
3. WHEN a visitor selects a language, THE Landing_Page SHALL store the preference in localStorage
4. WHEN a visitor returns to the Landing_Page, THE Landing_Page SHALL restore the previously selected language from localStorage
5. THE Landing_Page SHALL include both English and Thai text in the HTML markup, controlling visibility via CSS class toggling
6. THE Landing_Page SHALL mark Thai content with `lang="th"` attributes for accessibility

### Requirement 2: Light and Dark Mode Theming

**User Story:** As a visitor, I want the landing page to match my system color scheme, so that I have a comfortable viewing experience.

#### Acceptance Criteria

1. THE Theme_System SHALL apply light mode styles when the operating system preference is light or unset
2. THE Theme_System SHALL apply dark mode styles when the operating system preference is dark
3. WHEN the operating system color scheme changes, THE Theme_System SHALL update the Landing_Page styles to match
4. THE Theme_System SHALL use the color tokens defined in the brand identity (Primary Light `#2196F3`, Primary Dark `#42ADFF`, Background Light `#FFFFFF`, Background Dark `#1C1C1E`, Surface Light `#F5F5F7`, Surface Dark `#2C2C2E`, Text Primary Light `#1D1D1F`, Text Primary Dark `#F5F5F7`)
5. THE Theme_System SHALL maintain a minimum color contrast ratio of 4.5:1 for all text elements

### Requirement 3: Sticky Navigation Bar

**User Story:** As a visitor, I want a persistent navigation bar, so that I can quickly jump to any section of the page.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL remain fixed at the top of the viewport during scrolling
2. THE Navigation_Bar SHALL display the app logo/name "JT (旅)"
3. THE Navigation_Bar SHALL contain links to Features, How It Works, Screenshots, FAQ, and Support sections
4. WHEN a visitor clicks a navigation link, THE Landing_Page SHALL smooth-scroll to the corresponding section
5. THE Navigation_Bar SHALL contain the Language_Toggle control
6. THE Navigation_Bar SHALL contain a CTA_Button linking to the App Store

### Requirement 4: Hero Section

**User Story:** As a visitor, I want to see an engaging introduction to the app, so that I understand its purpose immediately.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the headline "Plan Your Japan Trip, Effortlessly" in English and "วางแผนเที่ยวญี่ปุ่น ง่ายๆ" in Thai
2. THE Hero_Section SHALL display the subheadline text describing the app's core capabilities in both languages
3. THE Hero_Section SHALL contain a CTA_Button linking to the App Store download
4. THE Hero_Section SHALL display an iPhone mockup image of the app

### Requirement 5: Feature Cards Display

**User Story:** As a visitor, I want to browse the app's features, so that I can understand what the app offers.

#### Acceptance Criteria

1. THE Feature_Grid SHALL display 11 feature cards, each with an emoji icon, title, and description in both languages
2. THE Feature_Grid SHALL render as 3 columns on desktop viewports wider than 1024px
3. THE Feature_Grid SHALL render as 2 columns on tablet viewports between 768px and 1024px
4. THE Feature_Grid SHALL render as 1 column on mobile viewports narrower than 768px

### Requirement 6: How It Works Section

**User Story:** As a visitor, I want to see how the app works in simple steps, so that I can understand the user experience before downloading.

#### Acceptance Criteria

1. THE Landing_Page SHALL display a 3-step visual flow with numbered steps: "Browse & Pick", "Organize Your Days", and "Go Explore!"
2. EACH step SHALL display an emoji icon, title, and description in both English and Thai
3. EACH step SHALL include a placeholder area for an app screenshot

### Requirement 7: Screenshot Gallery

**User Story:** As a visitor, I want to see screenshots of the app, so that I can preview the interface before downloading.

#### Acceptance Criteria

1. THE Screenshot_Gallery SHALL display app screenshots in a horizontally scrollable carousel
2. THE Screenshot_Gallery SHALL display a section title and caption in both English and Thai
3. THE Screenshot_Gallery SHALL lazy-load all screenshot images

### Requirement 8: What Makes It Special Section

**User Story:** As a visitor, I want to understand what differentiates this app, so that I can decide if it meets my needs.

#### Acceptance Criteria

1. THE Landing_Page SHALL display highlight cards for "Japan-Focused Database" and "Offline-First Architecture"
2. EACH highlight card SHALL display an emoji icon, title, and description in both English and Thai

### Requirement 9: Perfect For Section

**User Story:** As a visitor, I want to see who the app is designed for, so that I can identify if it suits my travel style.

#### Acceptance Criteria

1. THE Landing_Page SHALL display traveler type tags as a row of pills or badges
2. THE Landing_Page SHALL display 6 traveler types in both English and Thai

### Requirement 10: FAQ Accordion

**User Story:** As a visitor, I want to read answers to common questions, so that I can resolve doubts before downloading.

#### Acceptance Criteria

1. THE FAQ_Accordion SHALL display 5 question-and-answer pairs in both English and Thai
2. WHEN a visitor clicks a question, THE FAQ_Accordion SHALL expand to reveal the answer
3. WHEN a visitor clicks an expanded question, THE FAQ_Accordion SHALL collapse the answer
4. THE FAQ_Accordion SHALL be keyboard-navigable using Enter and Space keys

### Requirement 11: Download CTA Section

**User Story:** As a visitor, I want a clear download prompt, so that I can easily get the app.

#### Acceptance Criteria

1. THE Landing_Page SHALL display a download section with the headline in both English and Thai
2. THE Landing_Page SHALL display an App Store download badge linking to the App Store URL
3. THE Landing_Page SHALL display a "Coming soon to Discord" placeholder

### Requirement 12: Footer

**User Story:** As a visitor, I want to access legal and support links, so that I can find additional information.

#### Acceptance Criteria

1. THE Footer SHALL display the app name "JT (旅) — Japan Travel Planner"
2. THE Footer SHALL contain links to the Privacy_Page, Support_Page, and FAQ section
3. THE Footer SHALL display a copyright notice "© 2025 JT Planner. All rights reserved."
4. THE Footer SHALL display a JR Pass disclaimer in both English and Thai

### Requirement 13: Privacy Policy Page

**User Story:** As a visitor, I want to read the privacy policy, so that I understand how my data is handled.

#### Acceptance Criteria

1. THE Privacy_Page SHALL be accessible at `docs/privacy.html`
2. THE Privacy_Page SHALL display the complete privacy policy content including sections on information collected, usage, data sharing, storage, user rights, and children's privacy
3. THE Privacy_Page SHALL include a link back to the Landing_Page

### Requirement 14: Support Page

**User Story:** As a visitor, I want to access support information, so that I can get help or report issues.

#### Acceptance Criteria

1. THE Support_Page SHALL be accessible at `docs/support.html`
2. THE Support_Page SHALL display the support email address, response time, troubleshooting steps, bug reporting guidelines, and feature request information
3. THE Support_Page SHALL include a link back to the Landing_Page

### Requirement 15: Responsive Design

**User Story:** As a visitor on any device, I want the page to display correctly, so that I have a good experience regardless of screen size.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a mobile-first responsive layout
2. THE Landing_Page SHALL adapt layout at breakpoints: mobile (<768px), tablet (768px–1024px), and desktop (>1024px)
3. THE Landing_Page SHALL render all sections legibly on viewports as narrow as 320px

### Requirement 16: Performance

**User Story:** As a visitor, I want the page to load quickly, so that I do not abandon the page due to slow loading.

#### Acceptance Criteria

1. THE Landing_Page SHALL have a total page weight under 500KB excluding images
2. THE Landing_Page SHALL lazy-load all images below the fold
3. THE Landing_Page SHALL use vanilla JavaScript with no heavy framework dependencies

### Requirement 17: SEO and Structured Data

**User Story:** As a product owner, I want the page to be discoverable by search engines, so that potential users can find the app.

#### Acceptance Criteria

1. THE Landing_Page SHALL include a `<title>` tag: "JT (旅) — Japan Travel Planner | Plan Your Trip Offline"
2. THE Landing_Page SHALL include a meta description summarizing the app's capabilities
3. THE Landing_Page SHALL include Open Graph meta tags for social sharing (og:title, og:description, og:image, og:url)
4. THE Landing_Page SHALL include JSON-LD structured data for SoftwareApplication schema
5. THE Landing_Page SHALL set `lang="en"` on the root HTML element

### Requirement 18: Accessibility

**User Story:** As a visitor using assistive technology, I want the page to be accessible, so that I can navigate and understand the content.

#### Acceptance Criteria

1. THE Landing_Page SHALL use semantic HTML5 elements (header, nav, main, section, footer)
2. THE Landing_Page SHALL maintain a proper heading hierarchy (h1 → h2 → h3)
3. THE Landing_Page SHALL provide alt text for all images
4. THE Landing_Page SHALL provide visible focus indicators on all interactive elements
5. THE Landing_Page SHALL ensure all interactive elements are keyboard-navigable

### Requirement 19: Visual Design

**User Story:** As a visitor, I want the page to feel polished and on-brand, so that I trust the quality of the app.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a clean, Apple-inspired aesthetic
2. THE Landing_Page SHALL incorporate subtle Seigaiha_Pattern wave decorations as background elements
3. THE Landing_Page SHALL display the kanji 旅 (tabi) prominently in the app branding
4. THE Landing_Page SHALL use system fonts or Inter/SF Pro Display for Latin text and Noto Sans Thai for Thai text
