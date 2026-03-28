import { Phone, MessageCircle, AlertTriangle, Clock, Truck } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;

export default function EmergencyCallSection({ vehicleName }: { vehicleName: string }) {
  return (
    <section className="py-12 md:py-16 bg-card border-t-4 border-destructive/60">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-5 py-2 text-sm font-bold mb-6">
          <AlertTriangle className="w-4 h-4" /> EMERGENCY SERVICE AVAILABLE
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
          Locked Out of Your {vehicleName}? Lost All Keys?
        </h2>
        <p className="text-lg text-muted-foreground mb-3 max-w-xl mx-auto">
          Call now for immediate mobile locksmith service. We arrive at your Burbank location with all equipment needed — no towing, no dealer wait.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-8">
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <Clock className="w-4 h-4 text-accent" /> 15–30 min response
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
            <Truck className="w-4 h-4 text-accent" /> Mobile service — we come to you
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-destructive text-destructive-foreground font-bold text-lg shadow-xl hover:brightness-110 transition"
          >
            <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-muted text-foreground font-semibold border border-border hover:bg-muted/80 transition"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
