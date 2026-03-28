import { DollarSign, Clock, MapPin, Shield, Truck } from "lucide-react";

export default function PricingAndTimeSection({ vehicleName }: { vehicleName: string }) {
  return (
    <section className="py-14 md:py-20 bg-muted border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">
          {vehicleName} Smart Key Programming — Pricing & Service Time
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Pricing Card */}
          <div className="bg-card rounded-2xl border-2 border-accent/30 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-accent" /> Pricing
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground font-medium">Duplicate key (have a working key)</span>
                <span className="text-accent font-bold text-lg">$120–$180</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground font-medium">All keys lost (no working key)</span>
                <span className="text-accent font-bold text-lg">$250–$450</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              * Final price depends on {vehicleName} model year, key type, and security system. Call for an exact quote — no hidden fees.
            </p>
          </div>

          {/* Time Card */}
          <div className="bg-card rounded-2xl border-2 border-accent/30 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-accent" /> Service Time
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 py-2">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">20–60 minutes on-site</p>
                  <p className="text-muted-foreground text-sm">Depends on model year and key situation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 py-2">
                <Truck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">We come to your location</p>
                  <p className="text-muted-foreground text-sm">Home, office, or roadside — no towing needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-accent" />
            <span className="font-medium text-foreground">Licensed & Insured — CA Locksmith License LCO8538</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Serving Burbank, Glendale, Pasadena & North Hollywood</span>
          </span>
        </div>
      </div>
    </section>
  );
}
