

## Remove Fake Reviews & Replace with Google-Only Content

### What's being removed
- **6 hardcoded fake review objects** (lines 273-280 in `Index.tsx`) — Mike T., Sarah L., David R., Jessica M., Carlos G., Amanda W.
- **"127 verified Google reviews" claim** (line 315)
- **"127+ Verified Reviews" badge** in TrustSection (line 239)

### What's being built (replacing `GoogleReviewsShowcase` function, lines 272-419)

**1. Google Reviews Section (no fake content)**
- Header: "Our Google Reviews" with Google icon badge
- Since we cannot fetch live Google reviews client-side without an API key, show the honest empty state:
  - Google icon + "Be the First to Leave a Google Review" heading
  - Encouraging subtext
- Two prominent CTA buttons:
  - **"Leave a Review"** → `https://maps.app.goo.gl/vtRt23VC2Bfv3Jd49` (new link)
  - **"Read All Reviews"** → same link (opens Google profile)

**2. Google Map Embed Section**
- Embed iframe using the coordinates from the provided Google Maps link
- "Open in Google Maps" button → `https://maps.app.goo.gl/vtRt23VC2Bfv3Jd49`
- Location text underneath

**3. TrustSection cleanup**
- Change "5.0 ★ Google Rating / 127+ Verified Reviews" badge to "5.0 ★ Google Rating / Verified Business"

**4. Update all Google links**
- Replace old `https://g.page/r/CXKwG3VBxikrEBM/review` and `https://maps.app.goo.gl/ZxvrjzHunakGa8WV8` with new link `https://maps.app.goo.gl/vtRt23VC2Bfv3Jd49`

### Files changed
- `src/pages/Index.tsx` — single file, rewrite `GoogleReviewsShowcase` and update TrustSection badge

