import { Phone, MessageCircle, Clock, MapPin, Shield, AlertCircle } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;

export default function MidPageCTA({ vehicleName }: { vehicleName?: string }) {
  return (
    <section className="py-8 bg-accent/10 border-y border-accent/20">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {/* Urgency banner */}
        <div className="flex items-center gap-2 bg-destructive/10 text-destructive rounded-xl px-4 py-2.5 text-sm font-semibold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Locked out? Lost all keys? We can help in 30–60 minutes.</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              {vehicleName ? `${vehicleName} Key Replacement in Burbank, CA` : "Car Key Replacement in Burbank, CA"} — Call Now
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Mobile Service — We Come to You</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Same-Day Service Available</span>
              <span className="inline-flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Licensed & Insured — CA Lic# LCO8538</span>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm shadow-lg animate-pulse-glow hover:brightness-110 transition">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
