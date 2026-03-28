

## SEO & Conversion Improvement Plan

This is a large, multi-step effort touching 30+ files. Here is the structured approach.

---

### 1. Create Reusable Cross-Linking & CTA Components

**New file: `src/components/RelatedModelsSection.tsx`**
- Accepts vehicle category (sedan/SUV/truck/minivan/hybrid) and current model slug
- Renders a "Related Models" grid linking to similar vehicle types:
  - Sedans: Camry, Accord, Altima, Malibu, Sonata, Optima, Corolla, Civic, Sentra, Elantra, Forte
  - SUVs: RAV4, CR-V, Rogue, Equinox, Tucson, Sportage, Highlander, Pilot, Pathfinder, Suburban, Tahoe, Santa Fe, Palisade, Sorento
  - Trucks: Tacoma, Silverado, F-150
  - Minivans: Sienna, Odyssey
- Includes "Back to [Brand] Smart Key Programming" link
- Includes link to `/lost-car-keys`

**New file: `src/components/MidPageCTA.tsx`**
- Reusable conversion block with "Car Key Replacement in Burbank — Call Now"
- Mobile locksmith + same-day service messaging
- Call + WhatsApp buttons
- Designed to be inserted at top and middle of model pages

**New file: `src/components/LocalSeoBlock.tsx`**
- Reusable local SEO paragraph mentioning Burbank, Glendale, North Hollywood, Los Angeles
- Accepts vehicle name for natural integration
- Mentions mobile locksmith service

---

### 2. Create `/lost-car-keys` Page

**New file: `src/pages/LostCarKeys.tsx`**
- SEO-optimized page for "Lost All Car Keys" service
- Sections: Hero, Trust Bar, All-brands-supported grid, Emergency process, FAQ, Local SEO, CTA
- Links to all 7 brand pages and core services
- FAQ: Can you make a key without the original? How long? Do I need a dealer? Cost?
- Route added in `App.tsx`

---

### 3. Update SmartKeyBrandPage Model Grids

**Edit: `src/pages/smart-key-programming/SmartKeyBrandPage.tsx`**
- Add missing model links:
  - Chevrolet: add Suburban, Tahoe
  - Hyundai: add Santa Fe, Palisade
  - Kia: add Sportage, Soul
  - Toyota: add Tacoma
  - Ford: remove Escape (no dedicated page), or keep if generic page exists

---

### 4. Add Cross-Links, CTAs, and Lost Keys Link to All 30+ Model Pages

**Edit all model pages** (ToyotaCamryPage, HondaCivicPage, etc.):
- Insert `<MidPageCTA />` after the hero/trust bar section
- Insert `<RelatedModelsSection />` before the FAQ section
- Add a "Lost All Your Keys?" link/banner pointing to `/lost-car-keys`
- Ensure each page links back to its brand page in breadcrumbs (most already do)

This is the most labor-intensive step — each of the ~30 model page files will be edited to import and render these 3 new components.

---

### 5. Update ServicePageLayout for Core Service Pages

**Edit: `src/components/ServicePageLayout.tsx`**
- Add a "Lost Your Keys?" banner in the footer area linking to `/lost-car-keys`
- Add `/lost-car-keys` to the footer services list
- Add `/smart-key-programming` to the footer services list (if not present)

---

### 6. Update App.tsx Routing

**Edit: `src/App.tsx`**
- Add route for `/lost-car-keys` → `LostCarKeys`
- Import LostCarKeys component

---

### 7. Update sitemap.xml

**Edit: `public/sitemap.xml`**
- Add `/lost-car-keys` entry

---

### Technical Details

- All new components use existing design patterns (Tailwind classes, Lucide icons, same PHONE/WHATSAPP constants)
- Cross-links use React Router `<Link>` for SPA navigation
- RelatedModelsSection uses a static mapping of category → model slugs, filtering out the current page
- MidPageCTA is a simple stateless component with call/text/WhatsApp buttons
- Model pages will import 3 new components and render them inline — no structural refactor needed
- The /lost-car-keys page follows the same standalone pattern as model pages (own header/footer/SEO)

