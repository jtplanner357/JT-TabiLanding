# JT (旅) — Japan Travel Planner | Landing Page Brief

> This document is a complete brief for an AI tool to build a bilingual landing page for the JT Planner iOS app. The page will be hosted on GitHub Pages.

---

## 1. Project Overview

**App Name:** JT (旅) — Japan Travel Planner  
**Tagline (EN):** Plan Your Japan Trip, Effortlessly  
**Tagline (TH):** วางแผนเที่ยวญี่ปุ่น ง่ายๆ  
**Platform:** iOS (iPhone, iPad, Apple Watch)  
**Price:** Free — no subscriptions, no in-app purchases, no ads  
**Languages:** Thai & English (bilingual app)  
**App Store Link:** `https://apps.apple.com/app/jt-planner/id0000000000` *(placeholder — replace when available)*  
**Landing Page URL:** `https://jtplanner357.github.io/JT-TabiLanding/`  
**Privacy Policy URL:** `https://jtplanner357.github.io/JT-TabiLanding/docs/privacy`  
**Support URL:** `https://jtplanner357.github.io/JTLanding/docs/support`

---

## 2. Brand Identity

### 2.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Light) | `#2196F3` | Buttons, links, accents on light backgrounds |
| Primary (Dark) | `#42ADFF` | Buttons, links, accents on dark backgrounds |
| Soft Indigo | `#4B5CC4` | Decorative elements, wave patterns (light mode) |
| Wave Blue | `#7BA3D1` | Decorative elements, wave patterns (dark mode) |
| Sand | `#E8DCC4` | Warm accent, backgrounds, highlights |
| Background Light | `#FFFFFF` | Page background (light mode) |
| Background Dark | `#1C1C1E` | Page background (dark mode) — NOT pure black |
| Surface Light | `#F5F5F7` | Card backgrounds (light mode) |
| Surface Dark | `#2C2C2E` | Card backgrounds (dark mode) |
| Text Primary Light | `#1D1D1F` | Main text (light mode) |
| Text Primary Dark | `#F5F5F7` | Main text (dark mode) |
| Text Secondary | `#86868B` | Subtitles, captions |

### 2.2 Typography

- Use system fonts or a clean sans-serif like Inter or SF Pro Display
- For Thai text, ensure the font supports Thai script well (Noto Sans Thai is a good web fallback)
- The kanji 旅 (tabi = journey) in the app name should be displayed prominently

### 2.3 Design Direction

- Clean, modern, Apple-inspired aesthetic
- Subtle Japanese design touches (Seigaiha wave patterns as decorative backgrounds, torii gate or sakura accents)
- Light/dark mode support (respect `prefers-color-scheme`)
- Mobile-first responsive design
- Smooth scroll animations
- The overall feel should be: calm, organized, trustworthy — like the app itself

---

## 3. Page Structure & Content

The page should be a single-page site with smooth scroll navigation. All text sections should show both English and Thai (stacked or toggled).

### 3.1 Navigation Bar (Sticky)

- Logo/App name: **JT (旅)**
- Nav links: Features, How It Works, Screenshots, FAQ, Support
- Language toggle button: EN / TH (switches visible language)
- CTA button: "Download on the App Store" (links to App Store placeholder)

---

### 3.2 Hero Section

**Headline (EN):** Plan Your Japan Trip, Effortlessly  
**Headline (TH):** วางแผนเที่ยวญี่ปุ่น ง่ายๆ

**Subheadline (EN):** Create detailed itineraries, discover amazing places across all 47 prefectures, check JR Pass savings, and access everything offline. Your complete Japan travel companion.  
**Subheadline (TH):** สร้างแผนการเดินทางอย่างละเอียด ค้นหาสถานที่ท่องเที่ยวทั่วทั้ง 47 จังหวัด เช็คความคุ้มค่า JR Pass และเข้าถึงทุกอย่างแบบออฟไลน์ เพื่อนร่วมทางญี่ปุ่นที่ครบครัน

**CTA Button:** Download on the App Store / ดาวน์โหลดบน App Store

**Visual:** iPhone mockup showing the app (placeholder image area — see Section 5 for image specs)

---

### 3.3 Key Features Section

Display as a grid of feature cards (3 columns on desktop, 1 on mobile). Each card has an emoji/icon, title, and short description.

| # | Icon | Title (EN) | Title (TH) | Description (EN) | Description (TH) |
|---|------|-----------|-----------|------------------|------------------|
| 1 | 🗺️ | Explore 1000+ Places | สำรวจ 1000+ สถานที่ | Browse curated destinations across all 47 prefectures. Temples, restaurants, hidden gems — with photos, hours, fees, and transport tips. | เรียกดูสถานที่คัดสรรทั่วทั้ง 47 จังหวัด วัด ร้านอาหาร ที่เที่ยวลับ — พร้อมรูปภาพ เวลาเปิด-ปิด ค่าเข้าชม และวิธีเดินทาง |
| 2 | 📋 | Day-by-Day Itineraries | แผนเที่ยวรายวัน | Build detailed travel plans with drag-and-drop. Set visit times, add notes, create custom places for your favorite spots. | สร้างแผนเดินทางละเอียดด้วยการลากวาง กำหนดเวลา เพิ่มโน้ต สร้างสถานที่กำหนดเองได้ |
| 3 | ✈️ | No Sign-Up Required | ไม่ต้องสมัครสมาชิก | Start planning immediately. Your data is stored securely on your device. Create an account later to sync across devices. | เริ่มวางแผนได้ทันที ข้อมูลเก็บอย่างปลอดภัยบนเครื่อง สมัครสมาชิกทีหลังเพื่อซิงค์ข้ามอุปกรณ์ |
| 4 | 📶 | Works Offline | ใช้งานออฟไลน์ | Download prefecture data and access your plans anywhere — on the subway, in rural areas, or in airplane mode. | ดาวน์โหลดข้อมูลจังหวัดแล้วเข้าถึงแผนได้ทุกที่ — บนรถไฟ ในชนบท หรือโหมดเครื่องบิน |
| 5 | 🚄 | JR Pass Calculator | คำนวณ JR Pass | Enter your routes and instantly see if a JR Pass saves you money. Compare multiple pass options with coverage and pricing. | ใส่เส้นทางแล้วรู้ทันทีว่า JR Pass คุ้มไหม เปรียบเทียบหลายตัวเลือกพร้อมราคาและพื้นที่ครอบคลุม |
| 6 | 💰 | Budget Tracker | ติดตามงบประมาณ | Set trip budgets, track expenses by category, and monitor spending in THB, JPY, or USD. | ตั้งงบทริป ติดตามค่าใช้จ่ายตามหมวดหมู่ ดูยอดใช้จ่ายเป็นบาท เยน หรือดอลลาร์ |
| 7 | 📤 | Share & Export | แชร์และส่งออก | Share complete itineraries with travel companions via email. Export to beautifully formatted PDFs with maps and QR codes. | แชร์แผนเดินทางกับเพื่อนร่วมทางผ่านอีเมล ส่งออกเป็น PDF สวยงามพร้อมแผนที่และ QR code |
| 8 | ⌚ | Apple Watch | Apple Watch | View your daily schedule on your wrist. Navigate to places with integrated maps. | ดูตารางเวลารายวันบนข้อมือ นำทางไปสถานที่ด้วยแผนที่ |
| 9 | 🎒 | Smart Packing Lists | รายการสัมภาระอัจฉริยะ | Get seasonal packing suggestions based on your travel dates. Never forget essentials for your Japan trip. | รับคำแนะนำสัมภาระตามฤดูกาลจากวันเดินทาง ไม่มีวันลืมของจำเป็น |
| 10 | 🌤️ | Weather Forecasts | พยากรณ์อากาศ | See weather forecasts for each day of your trip with confidence indicators. Plan around the weather. | ดูพยากรณ์อากาศแต่ละวันของทริปพร้อมระดับความแม่นยำ วางแผนตามสภาพอากาศ |
| 11 | 🆘 | Emergency Info | ข้อมูลฉุกเฉิน | Access emergency phone numbers and essential Japanese phrases offline. Stay safe while traveling. | เข้าถึงเบอร์ฉุกเฉินและประโยคภาษาญี่ปุ่นที่จำเป็นแบบออฟไลน์ เดินทางอย่างปลอดภัย |

---

### 3.4 How It Works Section

A 3-step visual flow with numbered steps and illustrations/screenshots.

**Section Title (EN):** Plan Your Trip in 3 Steps  
**Section Title (TH):** วางแผนทริปใน 3 ขั้นตอน

| Step | Icon | Title (EN) | Title (TH) | Description (EN) | Description (TH) |
|------|------|-----------|-----------|------------------|------------------|
| 1 | 🔍 | Browse & Pick | เลือกที่เที่ยว | Search thousand of curated places across Japan (Keep updating). Add your favorites to your itinerary. | ค้นหาสถานที่คัดสรรนับพันทั่วญี่ปุ่น (ปรับปรุงเป็นระยะ) เพิ่มที่ชอบลงแผนเดินทาง |
| 2 | 📅 | Organize Your Days | จัดตารางเดินทาง | Drag and drop to arrange places by day. Set visit times and add personal notes. | ลากวางจัดเรียงสถานที่ตามวัน กำหนดเวลาเยี่ยมชมและเพิ่มโน้ต |
| 3 | 🌏 | Go Explore! | ออกเดินทาง! | Access your plan anywhere — even offline. Share with friends or export as PDF. | เปิดแผนดูได้ทุกที่ แม้ไม่มีเน็ต แชร์กับเพื่อนหรือส่งออกเป็น PDF |

Each step should have a placeholder for an app screenshot beside it.

---

### 3.5 App Screenshots Gallery

A horizontal scrollable gallery or carousel showing 5-6 app screenshots.

**Section Title (EN):** See the App in Action  
**Section Title (TH):** ดูหน้าตาแอป

**Caption (EN):** Designed for simplicity and beauty. Supports both Thai and English.  
**Caption (TH):** ออกแบบมาให้ใช้งานง่าย สวยงาม รองรับทั้งภาษาไทยและอังกฤษ

Screenshot placeholders (see Section 5 for what to capture):
1. Explore tab — browsing places
2. My Plans — itinerary day view
3. JR Pass Calculator — route comparison
4. Budget Tracker — expense overview
5. Export — PDF preview
6. Apple Watch — daily schedule

---

### 3.6 What Makes JT Planner Special Section

**Section Title (EN):** Built Specifically for Japan Travel  
**Section Title (TH):** สร้างมาเพื่อการเดินทางในญี่ปุ่นโดยเฉพาะ

Three highlight cards:

| Icon | Title (EN) | Title (TH) | Description (EN) | Description (TH) |
|------|-----------|-----------|------------------|------------------|
| 🇯🇵 | Japan-Focused Database | ฐานข้อมูลเฉพาะญี่ปุ่น | Unlike generic travel apps, every place in our database is curated specifically for Japan travelers. Detailed info on transport, opening hours, admission fees, and seasonal tips. | ต่างจากแอปท่องเที่ยวทั่วไป ทุกสถานที่ในฐานข้อมูลคัดสรรมาเพื่อนักเดินทางญี่ปุ่นโดยเฉพาะ ข้อมูลละเอียดเรื่องการเดินทาง เวลาเปิด-ปิด ค่าเข้าชม และเคล็ดลับตามฤดูกาล |
| 🔄 | Offline-First Architecture | สถาปัตยกรรมออฟไลน์ | Your plans are stored locally first, synced to cloud when connected. No internet? No problem. Perfect for Japan's subway system and rural areas. | แผนของคุณเก็บในเครื่องก่อน ซิงค์ขึ้นคลาวด์เมื่อมีเน็ต ไม่มีอินเทอร์เน็ต? ไม่มีปัญหา เหมาะกับรถไฟใต้ดินและพื้นที่ชนบทในญี่ปุ่น |
---

### 3.7 Perfect For Section

**Section Title (EN):** Perfect For Every Traveler  
**Section Title (TH):** เหมาะสำหรับนักเดินทางทุกคน

Display as a row of tags or pills:

| EN | TH |
|----|----|
| First-time visitors to Japan | ผู้เยี่ยมชมญี่ปุ่นครั้งแรก |
| Multi-city tour planners | นักวางแผนทัวร์หลายเมือง |
| Solo travelers | นักเดินทางเดี่ยว |
| Family trip organizers | ผู้จัดทริปครอบครัว |
| Group travel coordinators | ผู้ประสานงานเดินทางกลุ่ม |
| Anyone who loves organized travel | ทุกคนที่รักการเดินทางอย่างมีแบบแผน |

---

### 3.8 FAQ Section

**Section Title (EN):** Frequently Asked Questions  
**Section Title (TH):** คำถามที่พบบ่อย

Accordion-style FAQ items:

| Question (EN) | Question (TH) | Answer (EN) | Answer (TH) |
|---------------|---------------|-------------|-------------|
| Do I need to create an account? | ต้องสมัครสมาชิกไหม? | No! Start planning immediately without signing up. Create an account later if you want to sync across devices or share itineraries. | ไม่ต้อง! เริ่มวางแผนได้ทันทีโดยไม่ต้องสมัคร สมัครสมาชิกทีหลังได้ถ้าต้องการซิงค์ข้ามอุปกรณ์หรือแชร์แผนเดินทาง |
| Does it work offline? | ใช้งานออฟไลน์ได้ไหม? | Yes! Download prefecture data for offline access. Your itineraries are always available, even in airplane mode. | ได้! ดาวน์โหลดข้อมูลจังหวัดเพื่อใช้งานออฟไลน์ แผนการเดินทางพร้อมใช้งานเสมอ แม้ในโหมดเครื่องบิน |
| How accurate are JR Pass recommendations? | คำแนะนำ JR Pass แม่นยำแค่ไหน? | Recommendations are estimated prices. However, prices may change — always verify with official JR Pass sources before purchasing. | เป็นการใช้ราคาโดยประมาณ อย่างไรก็ตาม ราคาอาจเปลี่ยนแปลง — กรุณาตรวจสอบกับแหล่งข้อมูล JR Pass อย่างเป็นทางการก่อนซื้อ |
| What languages are supported? | รองรับภาษาอะไรบ้าง? | Thai and English. Switch between languages anytime in Settings. | ภาษาไทยและอังกฤษ สลับภาษาได้ทุกเมื่อในการตั้งค่า |
| Does it work on iPad and Apple Watch? | ใช้งานบน iPad และ Apple Watch ได้ไหม? | Yes! JT Planner works on iPhone, iPad (with optimized layouts), and Apple Watch (companion app for daily schedules and navigation). | ได้! JT Planner ใช้งานได้บน iPhone, iPad (พร้อมเลย์เอาต์ที่ปรับให้เหมาะสม) และ Apple Watch (แอปเพื่อนสำหรับตารางรายวันและการนำทาง) |

---

### 3.9 Download / CTA Section

**Headline (EN):** Start Planning Your Japan Trip Today  
**Headline (TH):** เริ่มวางแผนเที่ยวญี่ปุ่นวันนี้

**CTA:** App Store download badge (use official Apple badge)

**Optional:** "Coming soon to Discord" with a Discord icon/placeholder link

---

### 3.10 Footer

- **App name:** JT (旅) — Japan Travel Planner
- **Links:** Privacy Policy | Support | FAQ
- **Copyright:** © 2025 JT Planner. All rights reserved.
- **Disclaimer (EN):** JR Pass recommendations are informational only. Please verify with official sources before purchasing.
- **Disclaimer (TH):** คำแนะนำ JR Pass เป็นเพียงข้อมูลเท่านั้น กรุณาตรวจสอบกับแหล่งข้อมูลอย่างเป็นทางการก่อนซื้อ
- **Social:** Discord (placeholder link)

---

## 4. Privacy Policy (Inline Page Section)

The privacy policy should be accessible at `docs/privacy` as a link to privacy page. Here is the content:

### Privacy Policy — JT (旅) Japan Travel Planner

**Last Updated: February 2026**

**Introduction**

JT Planner ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.

**Information We Collect**

*Account Information (Optional):* When you choose to create an account via Apple Sign-In or Google Sign-In, we collect your email address and a generated user ID. In anonymous mode, no personal information is collected.

*User-Generated Content:* Travel itineraries, custom places, budget information, packing lists, reviews, and uploaded images.

*Device Information:* Device type, OS version, app version, language preference, crash reports (anonymous).

*We do NOT collect:* Real-time location, contacts, browsing history, or any data for advertising purposes.

**How We Use Your Information**

- Store and sync your itineraries across devices
- Enable sharing features with other users
- Improve app performance and fix bugs
- Respond to support requests

**Data Sharing**

We do NOT sell, rent, or trade your personal information. We share data only:
- With your consent (when you share an itinerary)
- With Supabase (our database/auth provider) for app functionality
- If required by law

**Data Storage & Security**

- Local data encrypted via iOS built-in encryption (SwiftData)
- Cloud data encrypted in transit (HTTPS/TLS) and at rest
- Row-level security ensures users can only access their own data
- Sensitive export data (passport, accommodations) encrypted with AES-256-GCM and protected by Face ID/Touch ID

**Your Rights**

- Access, modify, or delete your data at any time
- Export your data in PDF, image, or text format
- Delete your account and all associated data from Settings → Profile → Delete Account
- Use the app in anonymous mode without providing any personal information

**Children's Privacy**

JT Planner is rated 4+ and safe for all ages. We do not knowingly collect information from children under 13.

**Changes**

We may update this policy. Changes will be posted with an updated date.

**Contact**

For privacy concerns: privacy@jtplanner.app

---

## 5. Support Section (Inline Page Section)

Accessible at docs/support`.

### Support — JT (旅) Japan Travel Planner

**Need Help?**

**Email:** support@jtplanner.app  
**Response Time:** Within 24-48 hours

**Before contacting support:**
1. Make sure you have the latest version of JT Planner
2. Try restarting the app
3. Check the FAQ section above

**When reporting a bug, please include:**
- Your device model (e.g., iPhone 17 Pro)
- iOS version
- App version (found in Settings → About)
- Steps to reproduce the issue
- Screenshots if possible

**Feature Requests:** We love hearing your ideas! Email us at jtplanner7@gmail.com

---

## 6. Technical Requirements for the Landing Page

### 6.1 Hosting
- GitHub Pages (static site)
- Single `index.html` file with inline CSS/JS, or a simple folder structure
- No server-side rendering needed

### 6.2 Performance
- Lightweight — aim for < 500KB total page weight (excluding images)
- Lazy load images
- Minimal JavaScript (smooth scroll, language toggle, FAQ accordion)
- No heavy frameworks required (vanilla JS or lightweight alternatives)

### 6.3 SEO
- Proper `<title>`: "JT (旅) — Japan Travel Planner | Plan Your Trip Offline"
- Meta description: "Plan your perfect Japan trip with JT Planner. Browse 1000+ places, create detailed itineraries, get JR Pass recommendations, and access everything offline. Free for iPhone, iPad & Apple Watch."
- Open Graph tags for social sharing
- `lang="en"` with Thai content marked with `lang="th"` attributes
- Structured data (JSON-LD) for SoftwareApplication

### 6.4 Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns for feature grid)

### 6.5 Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Keyboard navigable
- Sufficient color contrast (4.5:1 minimum)
- Focus indicators on interactive elements

### 6.6 Language Toggle Behavior
- Default language: English
- Toggle button switches ALL visible text between EN and TH
- Store preference in localStorage
- Both languages should be in the HTML (hidden/shown via CSS class toggle)
- URL hash doesn't change on language switch

---

## 7. Screenshot & Image Requirements

Here's what I will provide. All images will be placed in an `images/` folder.

### 7.1 App Icon
- `app-icon.png` — The app icon (1024x1024 or 512x512), used in the hero section and favicon

### 7.2 Hero Image
- `hero-mockup.png` — iPhone mockup showing the app's main screen (My Plans or Explore tab). Ideally on a clean background or transparent. Size: ~800px wide

### 7.3 App Screenshots (6 total)
These will be used in the screenshots gallery and the "How It Works" section.

| # | Filename | What to Capture | Notes |
|---|----------|----------------|-------|
| 1 | `screenshot-explore.png` | Explore tab — browsing places with prefecture filter visible | Show the richness of the place database |
| 2 | `screenshot-itinerary.png` | My Plans — a day view of an itinerary with multiple places | Show the day-by-day planning experience |
| 3 | `screenshot-jr-pass.png` | Pass Check — JR Pass calculator showing route comparison results | Show the unique JR Pass recommendation feature |
| 4 | `screenshot-budget.png` | Budget Tracker — expense overview with category breakdown | Show the budget tracking capability |
| 5 | `screenshot-export.png` | Export — PDF preview or export options screen | Show the export/sharing capability |
| 6 | `screenshot-watch.png` | Apple Watch — daily schedule view | Show the Watch companion app |

**Screenshot specs:**
- iPhone 17 Pro frame preferred (or frameless with rounded corners)
- Portrait orientation
- ~390px × 844px content area (or actual device resolution)
- Light mode preferred for consistency (but dark mode screenshots are also welcome as alternates)

### 7.4 Optional Decorative Images
- `wave-pattern.svg` — Seigaiha (Japanese wave) pattern for background decoration
- `sakura.svg` — Cherry blossom accent elements
- `torii.svg` — Torii gate icon for Japanese aesthetic touches

These are optional — the AI tool can generate CSS-based patterns instead.

---

## 8. Deployment Notes

### 8.2 File Structure Suggestion
```
JTLanding/
├── index.html          # Main landing page
├── css/
│   └── style.css       # Styles (or inline in HTML)
├── js/
│   └── main.js         # Language toggle, FAQ accordion, smooth scroll
├-- docs/
|    |__ support.html
|    |__ privacy.html
|
|── images/
│   ├── app-icon.png
│   ├── hero-mockup.png
│   ├── screenshot-explore.png
│   ├── screenshot-itinerary.png
│   ├── screenshot-jr-pass.png
│   ├── screenshot-budget.png
│   ├── screenshot-export.png
│   └── screenshot-watch.png
└── README.md
```

### 8.3 Placeholder Handling
- App Store link: Use `https://apps.apple.com/app/jt-planner/id0000000000` — easy to find-and-replace later
- Discord link: Use `#` with a "Coming Soon" label
- Screenshots: Use colored placeholder boxes with labels if images aren't provided yet

---

## 9. Summary for AI Tool

Build a modern, bilingual (English/Thai) landing page for **JT (旅) — Japan Travel Planner**, an iOS app for planning trips to Japan. The page should:

1. Be a single-page static site hosted on GitHub Pages
2. Support light/dark mode (respect system preference)
3. Have a language toggle (EN/TH) that switches all visible text
4. Use the blue-indigo color palette defined in Section 2
5. Include sections: Hero, Features (12 cards), How It Works (3 steps), Screenshots Gallery, What Makes It Special, Perfect For, FAQ (accordion), Download CTA, Privacy Policy, Support, Footer
6. Be mobile-first and responsive
7. Be lightweight (< 500KB excluding images)
8. Use placeholder image areas that can be swapped with real screenshots later
9. Include proper SEO meta tags and Open Graph data
10. Feel clean, calm, and Apple-inspired with subtle Japanese design touches