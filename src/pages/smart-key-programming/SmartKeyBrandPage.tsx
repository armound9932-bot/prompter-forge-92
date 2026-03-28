import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

interface BrandData {
  brand: string;
  slug: string;
  models: string;
  specialty: string;
  fobType: string;
  commonIssue: string;
  additionalModels?: string[];
}

const brandData: Record<string, BrandData> = {
  toyota: {
    brand: "Toyota",
    slug: "/smart-key-programming/toyota",
    models: "Camry, Corolla, RAV4, Highlander, Prius, Tacoma, Tundra, Sienna, Venza, 4Runner, Sequoia",
    specialty: "Toyota Smart Key System (SKS) and Smart Entry with Push-to-Start",
    fobType: "Toyota HYQ14FBE, HYQ14FBC, and HYQ1EA proximity fobs",
    commonIssue: "Toyota smart keys losing sync after battery replacement",
    additionalModels: ["Tundra", "Venza", "4Runner", "Sequoia"],
  },
  honda: {
    brand: "Honda",
    slug: "/smart-key-programming/honda",
    models: "Civic, Accord, CR-V, Pilot, HR-V, Odyssey, Ridgeline, and Passport",
    specialty: "Honda Smart Entry system and Walk Away Auto Lock programming",
    fobType: "Honda KR5V2X, KR5TP-4, and CWTWB1G0090 smart fobs",
    commonIssue: "Honda proximity key not detected or push-to-start failure",
  },
  ford: {
    brand: "Ford",
    slug: "/smart-key-programming/ford",
    models: "F-150, Escape, Explorer, Mustang, Bronco, Edge, Ranger, and Expedition",
    specialty: "Ford PATS (Passive Anti-Theft System) and Intelligent Access programming",
    fobType: "Ford M3N-A2C931426, M3N-A2C93142600, and proximity PATS keys",
    commonIssue: "Ford Intelligent Access key not starting vehicle or intermittent detection",
  },
  chevrolet: {
    brand: "Chevrolet",
    slug: "/smart-key-programming/chevrolet",
    models: "Silverado, Equinox, Malibu, Traverse, Tahoe, Suburban, Colorado, and Camaro",
    specialty: "Chevrolet Keyless Open and Push-to-Start with Passlock programming",
    fobType: "Chevrolet HYQ1EA, HYQ1AA, and YG0G21TB2 smart fobs",
    commonIssue: "Chevrolet smart key battery drain or intermittent keyless entry failure",
  },
  nissan: {
    brand: "Nissan",
    slug: "/smart-key-programming/nissan",
    models: "Altima, Rogue, Sentra, Pathfinder, Murano, Frontier, Maxima, and Kicks",
    specialty: "Nissan Intelligent Key system and I-Key proximity programming",
    fobType: "Nissan KR5TXN7, KR5TXN1, and CWTWB1U840 intelligent key fobs",
    commonIssue: "Nissan I-Key not recognized or key system error warning light",
  },
  kia: {
    brand: "Kia",
    slug: "/smart-key-programming/kia",
    models: "Forte, Sportage, Sorento, Telluride, Soul, K5, Seltos, and Carnival",
    specialty: "Kia Smart Key with Immobilizer and UVO connected system programming",
    fobType: "Kia TQ8-FOB-4F24, TQ8-FOB-4F27, and SY5MQ4FGE smart fobs",
    commonIssue: "Kia smart key immobilizer malfunction or key not in vehicle warning",
  },
  hyundai: {
    brand: "Hyundai",
    slug: "/smart-key-programming/hyundai",
    models: "Elantra, Tucson, Santa Fe, Sonata, Kona, Palisade, Venue, and Santa Cruz",
    specialty: "Hyundai Digital Key and Smart Sense proximity key programming",
    fobType: "Hyundai TQ8-FOB-4F27, TQ8-FOB-4F30, and SY5MQ4FGE08 smart fobs",
    commonIssue: "Hyundai smart key not starting or proximity detection range issues",
  },
};

const brandModelPages: Record<string, { slug: string; label: string }[]> = {
  toyota: [
    { slug: "/smart-key-programming/toyota/camry", label: "Camry" },
    { slug: "/smart-key-programming/toyota/corolla", label: "Corolla" },
    { slug: "/smart-key-programming/toyota/rav4", label: "RAV4" },
    { slug: "/smart-key-programming/toyota/highlander", label: "Highlander" },
    { slug: "/smart-key-programming/toyota/tacoma", label: "Tacoma" },
    { slug: "/smart-key-programming/toyota/prius", label: "Prius" },
    { slug: "/smart-key-programming/toyota/sienna", label: "Sienna" },
  ],
  honda: [
    { slug: "/smart-key-programming/honda/civic", label: "Civic" },
    { slug: "/smart-key-programming/honda/accord", label: "Accord" },
    { slug: "/smart-key-programming/honda/cr-v", label: "CR-V" },
    { slug: "/smart-key-programming/honda/pilot", label: "Pilot" },
    { slug: "/smart-key-programming/honda/odyssey", label: "Odyssey" },
  ],
  ford: [
    { slug: "/smart-key-programming/ford/f-150", label: "F-150" },
    { slug: "/smart-key-programming/ford/escape", label: "Escape" },
    { slug: "/smart-key-programming/ford/explorer", label: "Explorer" },
    { slug: "/smart-key-programming/ford/fusion", label: "Fusion" },
    { slug: "/smart-key-programming/ford/edge", label: "Edge" },
  ],
  chevrolet: [
    { slug: "/smart-key-programming/chevrolet/malibu", label: "Malibu" },
    { slug: "/smart-key-programming/chevrolet/equinox", label: "Equinox" },
    { slug: "/smart-key-programming/chevrolet/silverado", label: "Silverado" },
    { slug: "/smart-key-programming/chevrolet/suburban", label: "Suburban" },
    { slug: "/smart-key-programming/chevrolet/tahoe", label: "Tahoe" },
  ],
  nissan: [
    { slug: "/smart-key-programming/nissan/altima", label: "Altima" },
    { slug: "/smart-key-programming/nissan/sentra", label: "Sentra" },
    { slug: "/smart-key-programming/nissan/rogue", label: "Rogue" },
    { slug: "/smart-key-programming/nissan/pathfinder", label: "Pathfinder" },
  ],
  kia: [
    { slug: "/smart-key-programming/kia/optima", label: "Optima (K5)" },
    { slug: "/smart-key-programming/kia/forte", label: "Forte" },
    { slug: "/smart-key-programming/kia/sorento", label: "Sorento" },
    { slug: "/smart-key-programming/kia/sportage", label: "Sportage" },
    { slug: "/smart-key-programming/kia/soul", label: "Soul" },
  ],
  hyundai: [
    { slug: "/smart-key-programming/hyundai/elantra", label: "Elantra" },
    { slug: "/smart-key-programming/hyundai/sonata", label: "Sonata" },
    { slug: "/smart-key-programming/hyundai/tucson", label: "Tucson" },
    { slug: "/smart-key-programming/hyundai/santafe", label: "Santa Fe" },
    { slug: "/smart-key-programming/hyundai/palisade", label: "Palisade" },
  ],
};

export default function SmartKeyBrandPage({ brand }: { brand: string }) {
  const data = brandData[brand];
  if (!data) return null;
  const modelLinks = brandModelPages[brand] || [];
  const extra = data.additionalModels || [];

  return (
    <ServicePageLayout
      page={{
        slug: data.slug,
        title: `${data.brand} Smart Key Programming`,
        metaTitle: `${data.brand} Smart Key Programming Burbank | ${data.brand} Fob Replacement – Burbank Auto Locksmith`,
        metaDescription: `${data.brand} smart key programming in Burbank. ${data.specialty}. Mobile service for ${data.models.split(",").slice(0, 3).join(",")} & more. Licensed & insured.`,
        h1: `${data.brand} Smart Key Programming in Burbank`,
        heroText: `Need a ${data.brand} smart key programmed or replaced? We specialize in ${data.specialty}. Covering ${data.models} — all programmed on-site in Burbank with dealer-level tools.`,
        icon: Cpu,
        benefits: [
          `${data.brand} ${data.fobType} programming`,
          `${data.specialty}`,
          `Coverage for ${data.models.split(",").slice(0, 4).join(",")} & more`,
          `Solves: ${data.commonIssue}`,
          "OEM and aftermarket smart key options available",
          "Fast mobile service across Burbank & nearby cities",
        ],
        details: [
          `Tell us your ${data.brand} model year and the smart key issue you're experiencing.`,
          `Our technician arrives at your Burbank location with ${data.brand}-compatible diagnostic equipment.`,
          `We program your new smart key using ${data.specialty.toLowerCase()} protocols.`,
          `All functions verified — keyless entry, push-to-start, trunk — before we leave.`,
        ],
        faqs: [
          { q: `How much does ${data.brand} smart key programming cost?`, a: `${data.brand} smart key programming pricing depends on the model and key type. Our rates are significantly lower than ${data.brand} dealerships. Call for an exact Burbank quote.` },
          { q: `Can you replace a lost ${data.brand} smart key?`, a: `Yes. We can cut and program a brand new ${data.brand} smart key on-site, even if all keys are lost. No towing to the dealer required.` },
          { q: `What ${data.brand} models do you cover?`, a: `We cover ${data.models}, and most other ${data.brand} models equipped with smart key systems.` },
          { q: `How long does ${data.brand} smart key programming take?`, a: `Most ${data.brand} smart key jobs take 20-45 minutes depending on the model and whether we're programming an existing key or creating a new one.` },
        ],
      }}
      extraContent={
        modelLinks.length > 0 ? (
           <section className="py-10 bg-muted">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4">{data.brand} Model-Specific Smart Key Pages</h2>
              <p className="text-muted-foreground text-sm mb-4">Select your {data.brand} model for detailed smart key programming information, common problems, and pricing specific to your vehicle.</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {modelLinks.map(m => (
                  <Link key={m.slug} to={m.slug} className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <Cpu className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{data.brand} {m.label}</span>
                  </Link>
                ))}
              </div>
              {extra.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-2">We Also Service:</h3>
                  <div className="flex flex-wrap gap-2">
                    {extra.map(model => (
                      <span key={model} className="bg-card border border-border rounded-lg px-3 py-1.5 text-sm text-muted-foreground">{data.brand} {model}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : undefined
      }
    />
  );
}
