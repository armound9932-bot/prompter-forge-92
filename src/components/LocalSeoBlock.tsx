import { MapPin, Shield, Clock, Phone } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";

export default function LocalSeoBlock({ vehicleName }: { vehicleName: string }) {
  return (
    <section className="py-10 bg-muted border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" /> Serving Burbank, CA & Surrounding Areas
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
          Our mobile locksmith team provides {vehicleName} smart key programming and replacement throughout <strong className="text-foreground">Burbank</strong> and the surrounding communities, including <strong className="text-foreground">Glendale</strong>, <strong className="text-foreground">North Hollywood</strong>, and the greater <strong className="text-foreground">Los Angeles</strong> area. We bring our equipment directly to your location — whether that's your home, office, or roadside — so there's no need for towing or waiting at a dealership.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-foreground font-medium"><Clock className="w-4 h-4 text-accent" /> 15–30 min response in Burbank</span>
          <span className="inline-flex items-center gap-1.5 text-foreground font-medium"><Shield className="w-4 h-4 text-accent" /> Licensed & Insured — CA Lic# LCO8538</span>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 text-accent font-bold hover:underline"><Phone className="w-4 h-4" /> {PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  );
}
