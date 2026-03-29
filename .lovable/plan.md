

## Add Brand Logo Strip Below Hero Headline

### What
Insert a row of 7 brand logos (Toyota, Honda, Ford, Chevrolet, Nissan, Kia, Hyundai) with "We service all major brands" text inside the `HeroSection`, positioned after the subtext paragraph and before the CTA buttons.

### Edit: `src/pages/Index.tsx`

**Add imports** for the 7 brand logos (already exist in `src/assets/brands/`).

**Insert after line 56** (after the `<p>` subtext, before the CTA buttons div):

```tsx
<div className="mb-6">
  <p className="text-xs uppercase tracking-widest opacity-60 mb-3">We service all major brands</p>
  <div className="flex flex-wrap items-center gap-4 md:gap-6">
    {[
      { src: toyotaLogo, alt: "Toyota" },
      { src: hondaLogo, alt: "Honda" },
      { src: fordLogo, alt: "Ford" },
      { src: chevroletLogo, alt: "Chevrolet" },
      { src: nissanLogo, alt: "Nissan" },
      { src: kiaLogo, alt: "Kia" },
      { src: hyundaiLogo, alt: "Hyundai" },
    ].map(b => (
      <img key={b.alt} src={b.src} alt={b.alt} className="h-5 md:h-6 w-auto object-contain brightness-0 invert opacity-70" loading="lazy" />
    ))}
  </div>
</div>
```

Key details:
- `brightness-0 invert` makes colored logos appear white to match hero text
- `opacity-70` keeps them subtle/trust-building without competing with CTAs
- `h-5 md:h-6` = 20px mobile, 24px desktop
- `flex-wrap` ensures mobile-friendly layout
- Reuses existing logo assets from `src/assets/brands/`

