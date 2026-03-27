

## Mobile Services Section Optimization

### What changes
Single file: `src/pages/Index.tsx`, the `ServicesSection` component (lines 141-188).

### Plan

1. **Replace large images with icons on mobile** — On mobile (`md:` breakpoint and below), hide the `h-48` image container entirely and show a compact icon-based card instead. On desktop, keep the current image card layout unchanged.

2. **Mobile card layout** — Each service renders as a horizontal card with:
   - Left: colored icon circle (`w-12 h-12`, accent background)
   - Right: bold title (`text-lg font-bold`), description text, SEO anchor, and "Learn More" link
   - Card styling: `bg-card rounded-xl p-4 shadow-sm border`

3. **Spacing** — Use `gap-4` between stacked cards on mobile (single column), switching to the existing grid on `md:+`

4. **Implementation approach** — Use responsive classes:
   - Wrap the current image card in `hidden md:block`
   - Add a new mobile-only card variant wrapped in `md:hidden`
   - This avoids any structural changes to the desktop layout

5. **Call Now button** — Keep the existing prominent CTA button at the bottom, already works well on mobile. No changes needed.

### Technical detail
- No new components or files needed
- Uses Tailwind responsive prefixes (`md:hidden` / `hidden md:block`) to switch between mobile icon cards and desktop image cards
- No images loaded on mobile = faster page load

