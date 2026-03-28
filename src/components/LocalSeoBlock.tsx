import { MapPin } from "lucide-react";

export default function LocalSeoBlock({ vehicleName }: { vehicleName: string }) {
  return (
    <section className="py-10 bg-muted border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" /> Serving Burbank & Surrounding Areas
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Our mobile locksmith team provides {vehicleName} smart key programming and replacement throughout <strong className="text-foreground">Burbank</strong> and the surrounding communities, including <strong className="text-foreground">Glendale</strong>, <strong className="text-foreground">North Hollywood</strong>, and the greater <strong className="text-foreground">Los Angeles</strong> area. We bring our equipment directly to your location — whether that's your home, office, or roadside — so there's no need for towing or waiting at a dealership. Most calls in the Burbank area are answered within 15–30 minutes.
        </p>
      </div>
    </section>
  );
}
