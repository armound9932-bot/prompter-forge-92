

## Add Pricing & Service Quick-Info Strip to Homepage

### What
Add a compact, high-visibility pricing and service summary strip on the homepage — positioned between the Hero section and the TrustBar (or just after the TrustBar). This gives visitors instant answers to their top questions before scrolling.

### Design
A horizontal strip with 4 items in a clean grid/flex layout on dark or muted background:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  💰 Duplicate │  💰 All Keys  │  ⏱ Service   │  🚗 Mobile    │
│  Key          │  Lost        │  Time        │  Service     │
│  $120–$180   │  $250–$450   │  20–60 min   │  We come     │
│              │              │              │  to you      │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

### Edit: `src/pages/Index.tsx`

**Insert a new `PricingStrip` component** between `HeroSection` and `TrustBar` in the page render.

4 cards in a responsive grid (`grid-cols-2 md:grid-cols-4`), each with:
- Lucide icon (DollarSign, Key, Clock, Truck)
- Bold label
- Value text in accent color
- Subtle description

Background: `bg-primary` or `bg-gray-950` to contrast with hero and trust bar. Compact padding (`py-6`). On mobile, 2×2 grid keeps it scannable.

No new files needed — just a small inline component in Index.tsx (~30 lines).

