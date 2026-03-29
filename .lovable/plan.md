

## Increase Brand Logos to 64px

### Change
In `src/pages/Index.tsx` (lines 67-77), update the brand logo strip:

- **Logo height**: `h-8` (32px) → `h-16` (64px)
- **Gap**: `gap-8 md:gap-12` → `gap-6 md:gap-10` — slightly tighter gap values work better at larger logo sizes while still feeling spacious
- **Mobile**: Add responsive sizing `h-12 md:h-16` (48px mobile, 64px desktop) to prevent overflow on small screens; `flex-wrap` already handles wrapping

### Exact edit (line 67 + line 77)
```tsx
// Line 67: update gap
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">

// Line 77: update height with responsive sizing
<img key={b.alt} src={b.src} alt={b.alt} className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-70 drop-shadow-md" loading="lazy" />
```

Single file, two class string changes.

