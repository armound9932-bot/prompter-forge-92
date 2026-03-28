import { Link } from "react-router-dom";
import { Car, Key } from "lucide-react";

type VehicleCategory = "sedan" | "suv" | "truck" | "minivan" | "hybrid";

interface ModelLink {
  slug: string;
  label: string;
  brand: string;
}

const MODEL_MAP: Record<VehicleCategory, ModelLink[]> = {
  sedan: [
    { slug: "/smart-key-programming/toyota/camry", label: "Camry", brand: "Toyota" },
    { slug: "/smart-key-programming/toyota/corolla", label: "Corolla", brand: "Toyota" },
    { slug: "/smart-key-programming/honda/accord", label: "Accord", brand: "Honda" },
    { slug: "/smart-key-programming/honda/civic", label: "Civic", brand: "Honda" },
    { slug: "/smart-key-programming/nissan/altima", label: "Altima", brand: "Nissan" },
    { slug: "/smart-key-programming/nissan/sentra", label: "Sentra", brand: "Nissan" },
    { slug: "/smart-key-programming/chevrolet/malibu", label: "Malibu", brand: "Chevrolet" },
    { slug: "/smart-key-programming/hyundai/sonata", label: "Sonata", brand: "Hyundai" },
    { slug: "/smart-key-programming/hyundai/elantra", label: "Elantra", brand: "Hyundai" },
    { slug: "/smart-key-programming/kia/optima", label: "Optima", brand: "Kia" },
    { slug: "/smart-key-programming/kia/forte", label: "Forte", brand: "Kia" },
    { slug: "/smart-key-programming/ford/fusion", label: "Fusion", brand: "Ford" },
  ],
  suv: [
    { slug: "/smart-key-programming/toyota/rav4", label: "RAV4", brand: "Toyota" },
    { slug: "/smart-key-programming/toyota/highlander", label: "Highlander", brand: "Toyota" },
    { slug: "/smart-key-programming/honda/cr-v", label: "CR-V", brand: "Honda" },
    { slug: "/smart-key-programming/honda/pilot", label: "Pilot", brand: "Honda" },
    { slug: "/smart-key-programming/nissan/rogue", label: "Rogue", brand: "Nissan" },
    { slug: "/smart-key-programming/nissan/pathfinder", label: "Pathfinder", brand: "Nissan" },
    { slug: "/smart-key-programming/chevrolet/equinox", label: "Equinox", brand: "Chevrolet" },
    { slug: "/smart-key-programming/chevrolet/suburban", label: "Suburban", brand: "Chevrolet" },
    { slug: "/smart-key-programming/chevrolet/tahoe", label: "Tahoe", brand: "Chevrolet" },
    { slug: "/smart-key-programming/ford/explorer", label: "Explorer", brand: "Ford" },
    { slug: "/smart-key-programming/ford/edge", label: "Edge", brand: "Ford" },
    { slug: "/smart-key-programming/hyundai/tucson", label: "Tucson", brand: "Hyundai" },
    { slug: "/smart-key-programming/hyundai/santafe", label: "Santa Fe", brand: "Hyundai" },
    { slug: "/smart-key-programming/hyundai/palisade", label: "Palisade", brand: "Hyundai" },
    { slug: "/smart-key-programming/kia/sportage", label: "Sportage", brand: "Kia" },
    { slug: "/smart-key-programming/kia/sorento", label: "Sorento", brand: "Kia" },
    { slug: "/smart-key-programming/kia/soul", label: "Soul", brand: "Kia" },
  ],
  truck: [
    { slug: "/smart-key-programming/toyota/tacoma", label: "Tacoma", brand: "Toyota" },
    { slug: "/smart-key-programming/chevrolet/silverado", label: "Silverado", brand: "Chevrolet" },
    { slug: "/smart-key-programming/ford/f-150", label: "F-150", brand: "Ford" },
  ],
  minivan: [
    { slug: "/smart-key-programming/toyota/sienna", label: "Sienna", brand: "Toyota" },
    { slug: "/smart-key-programming/honda/odyssey", label: "Odyssey", brand: "Honda" },
  ],
  hybrid: [
    { slug: "/smart-key-programming/toyota/prius", label: "Prius", brand: "Toyota" },
    { slug: "/smart-key-programming/toyota/camry", label: "Camry Hybrid", brand: "Toyota" },
    { slug: "/smart-key-programming/honda/accord", label: "Accord Hybrid", brand: "Honda" },
    { slug: "/smart-key-programming/hyundai/sonata", label: "Sonata Hybrid", brand: "Hyundai" },
  ],
};

const BRAND_PAGES: Record<string, { slug: string; label: string }> = {
  toyota: { slug: "/smart-key-programming/toyota", label: "Toyota Smart Key Programming" },
  honda: { slug: "/smart-key-programming/honda", label: "Honda Smart Key Programming" },
  ford: { slug: "/smart-key-programming/ford", label: "Ford Smart Key Programming" },
  chevrolet: { slug: "/smart-key-programming/chevrolet", label: "Chevrolet Smart Key Programming" },
  nissan: { slug: "/smart-key-programming/nissan", label: "Nissan Smart Key Programming" },
  hyundai: { slug: "/smart-key-programming/hyundai", label: "Hyundai Smart Key Programming" },
  kia: { slug: "/smart-key-programming/kia", label: "Kia Smart Key Programming" },
};

interface Props {
  category: VehicleCategory;
  currentSlug: string;
  brandSlug: string;
}

export default function RelatedModelsSection({ category, currentSlug, brandSlug }: Props) {
  const related = MODEL_MAP[category]?.filter(m => m.slug !== currentSlug) || [];
  const brandPage = BRAND_PAGES[brandSlug];

  return (
    <section className="py-10 bg-muted border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Related Smart Key Programming Pages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {related.map(m => (
            <Link key={m.slug} to={m.slug} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all text-sm">
              <Car className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="font-medium text-foreground">{m.brand} {m.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {brandPage && (
            <Link to={brandPage.slug} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              ← Back to {brandPage.label}
            </Link>
          )}
          <Link to="/lost-car-keys" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            <Key className="w-3.5 h-3.5" /> Lost All Your Keys?
          </Link>
        </div>
      </div>
    </section>
  );
}
