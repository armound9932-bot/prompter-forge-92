

## High-Conversion Landing Page Upgrade Plan

### What's Needed

Most model pages already have FAQs, CTAs, local SEO blocks, and internal links. What's missing are dedicated **pricing**, **service time**, and **emergency** sections as standalone, scannable blocks. Rather than editing 35 files with duplicated JSX, we'll create two new reusable components and insert them into every page.

---

### Step 1: Create `PricingAndTimeSection` Component

**New file: `src/components/PricingAndTimeSection.tsx`**

Accepts `vehicleName` prop. Renders two side-by-side cards:

- **Pricing card**: "Duplicate key: $120–$180" / "All keys lost: $250–$450" / disclaimer about year & system
- **Time card**: "Service time: 20–60 minutes" / "We come to your location" / "No towing needed"

Includes trust line: "Licensed & Insured – CA Locksmith License LCO8538" and service area mention (Burbank, Glendale, Pasadena, North Hollywood).

---

### Step 2: Create `EmergencyCallSection` Component

**New file: `src/components/EmergencyCallSection.tsx`**

Accepts `vehicleName` prop. Bold emergency block with:

- "Locked out right now?" / "Lost all keys?"
- "Call now for immediate service — we arrive in 15–30 minutes"
- Large Call Now button + WhatsApp button
- Urgency styling (red/orange accent border)

---

### Step 3: Insert Components into All 35 Model Pages

**Edit all files in `src/pages/smart-key-programming/`**

Each page gets two new imports and two new component renders:
- `<PricingAndTimeSection vehicleName="..." />` inserted after the main content sections (before FAQ)
- `<EmergencyCallSection vehicleName="..." />` inserted after the FAQ section (before the final CTA)

This adds the pricing, time, trust, and emergency sections without removing any existing content. The existing MidPageCTA, LocalSeoBlock, RelatedModelsSection, and bottom CTA remain untouched.

---

### Technical Details

- Both components are stateless, receiving only `vehicleName` as a prop
- Phone/WhatsApp constants reused from existing pattern
- Styling follows existing Tailwind patterns (card borders, accent colors, rounded-2xl)
- No layout changes — new sections slot between existing ones
- 35 model page files edited with 2 import lines + 2 JSX lines each

