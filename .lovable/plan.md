

## Full SEO Audit Results & Fix Plan

### Issues Found

**CRITICAL - Missing Canonical Tags (32 pages)**
Only 3 model pages (Camry, Corolla, RAV4) and pages using `ServicePageLayout` set canonical URLs. The remaining 32 model pages (Honda Civic, Accord, CR-V, Pilot, Odyssey; Ford F-150, Explorer, Fusion, Edge; all Chevrolet, Nissan, Hyundai, and Kia pages) do NOT set canonical tags. This causes duplicate content risk.

**CRITICAL - No Open Graph / Twitter Tags on Inner Pages**
Only `index.html` has OG and Twitter meta tags. All 40+ service and model pages lack dynamic OG tags. When shared on social media, they'll show the homepage's title/description/image instead of page-specific content.

**MODERATE - Inconsistent Meta Description Handling**
Some pages use `setAttribute("content", ...)` which fails if the meta tag doesn't exist yet (first navigation). Others use the `setMeta()` helper that creates the tag if missing. Pages with the simpler pattern will silently fail to set descriptions on direct navigation.

**MODERATE - No Service/LocalBusiness Schema on Model Pages**
Model pages only inject `FAQPage` schema. They lack `Service` or `LocalBusiness` structured data, missing an opportunity for rich results.

**MINOR - Homepage Title Not Reset on Back-Navigation**
When a user navigates from a model page back to the homepage, `document.title` stays as the last page's title because `Index.tsx` doesn't reset it.

**MINOR - Ford Escape Link Points to Generic Page**
`SmartKeyBrandPage.tsx` links to `/smart-key-programming/ford/escape` which renders via the generic `SmartKeyModelPage` component with minimal content. Not harmful but inconsistent with the dedicated-page strategy.

**OK - Sitemap**: Complete with all 49 URLs, correct priorities, lastmod dates present.
**OK - robots.txt**: Properly configured with sitemap reference.
**OK - Heading hierarchy**: All pages follow H1 > H2 > H3 pattern correctly.
**OK - index.html**: LocalBusiness schema, OG tags, Twitter cards all properly configured.

---

### Fix Plan

#### Step 1: Create a shared SEO utility function
**New file: `src/utils/seo.ts`**
- `setSeoMeta({ title, description, slug, ogImage? })` function that handles:
  - `document.title`
  - Meta description (create if missing)
  - Canonical URL
  - OG title, description, URL, image, type
  - Twitter card tags
- Single import replaces 5-10 lines of boilerplate in every page

#### Step 2: Update all 32 model pages missing canonical tags
**Edit 32 files** in `src/pages/smart-key-programming/`:
- Replace manual `useEffect` SEO code with `setSeoMeta()` call
- This automatically adds canonical + OG + Twitter tags to every page
- Pages affected: all Honda, Ford, Chevrolet, Nissan, Hyundai, Kia model pages + Highlander, Tacoma, Prius, Sienna

#### Step 3: Fix homepage title reset
**Edit: `src/pages/Index.tsx`**
- Add `useEffect` to reset `document.title` and canonical to homepage values on mount

#### Step 4: Update LostCarKeys.tsx
**Edit: `src/pages/LostCarKeys.tsx`**
- Replace manual SEO code with `setSeoMeta()` call for consistency and OG tag support

---

### Technical Details

The `setSeoMeta` utility will use the same pattern already proven in `ServicePageLayout.tsx` (create-if-missing), extended with OG/Twitter tags. All 35+ page files will be edited to import and call this single function, replacing their individual meta-handling code. No visual changes -- purely SEO infrastructure.

