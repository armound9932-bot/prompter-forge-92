import { Phone, MessageCircle, Clock, Shield, Star, MapPin, Wrench, Key, Car, Zap, ChevronRight, Award, CheckCircle } from "lucide-react";

import serviceCarLockout from "@/assets/service-car-lockout.jpg";
import serviceAllKeysLost from "@/assets/service-all-keys-lost.jpg";
import serviceKeyProgramming from "@/assets/service-key-programming.jpg";
import serviceIgnitionRepair from "@/assets/service-ignition-repair.jpg";
import serviceEcuProgramming from "@/assets/service-ecu-programming.jpg";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">🔑 Burbank Auto Locksmith</h2>
          <p className="text-xs opacity-80">KPN Electronic Inc. • CA Lic# LCO8538</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={`sms:${PHONE}`} className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm font-medium transition">
            <MessageCircle className="w-4 h-4" /> Text Us
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow transition hover:brightness-110">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" /> 24/7 Emergency Mobile Service
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Locked Out? Keys Lost?<br />
            <span className="text-accent">We're There in 30 Minutes.</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            Burbank's #1 rated mobile auto locksmith. OEM key programming, ignition repair, 
            and emergency lockouts — at your location. <strong>Licensed & Insured.</strong>
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-xl animate-pulse-glow hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
            </a>
            <a href="#quote-section" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-primary-foreground/15 text-primary-foreground font-semibold text-lg border border-primary-foreground/30 hover:bg-primary-foreground/25 transition">
              Get a Free Quote
            </a>
            <a href={`sms:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-primary-foreground/10 text-primary-foreground font-semibold text-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition">
              <MessageCircle className="w-5 h-5" /> Text Us
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium opacity-90">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> 30-Min Response</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> Licensed & Insured</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> NASTF Approved</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-accent" /> 1-Year Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function UrgencyBanner() {
  return (
    <div className="bg-accent text-accent-foreground py-3 text-center font-bold text-sm md:text-base">
      🚨 Emergency Locksmith Available Now — Fast Mobile Service in Burbank, Glendale &amp; North Hollywood
    </div>
  );
}

const services = [
  {
    icon: Car,
    title: "Emergency Car Lockout",
    description: "Locked out of your car? We'll get you back in fast — no damage to your vehicle. Available 24/7.",
    seoAnchor: "Emergency Car Lockout Service in Burbank",
    image: serviceCarLockout,
  },
  {
    icon: Key,
    title: "All Keys Lost Replacement",
    description: "Lost every key? We program brand-new keys on-site using OEM-level equipment, even with zero keys.",
    seoAnchor: "All Keys Lost Car Key Replacement in Burbank",
    image: serviceAllKeysLost,
  },
  {
    icon: Zap,
    title: "Key Programming (OEM & Aftermarket)",
    description: "Transponder keys, smart keys, push-to-start fobs — programmed on-site with dealer-level tools.",
    seoAnchor: "OEM Car Key Programming Burbank",
    image: serviceKeyProgramming,
  },
  {
    icon: Wrench,
    title: "Ignition Repair & Replacement",
    description: "Key won't turn? Ignition stuck? We repair and replace ignitions for all makes and models.",
    seoAnchor: "Ignition Repair & Replacement in Burbank",
    image: serviceIgnitionRepair,
  },
  {
    icon: Shield,
    title: "ECU / BCM / Immobilizer Work",
    description: "Advanced EEPROM programming, ECU/BCM module synchronization, and anti-theft system restoration.",
    seoAnchor: "ECU BCM Immobilizer Programming in Burbank",
    image: serviceEcuProgramming,
  },
];

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">Our Auto Locksmith Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional mobile car locksmith serving Burbank, Glendale, Pasadena, and North Hollywood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center backdrop-blur-sm">
                    <s.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{s.description}</p>
                <p className="text-accent text-xs font-medium mb-3">{s.seoAnchor}</p>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1 text-accent font-semibold hover:underline text-sm">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg animate-pulse-glow hover:brightness-110 transition">
            <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const badges = [
    { icon: Shield, label: "Licensed & Insured", sub: "CA License LCO8538" },
    { icon: Award, label: "NASTF Approved", sub: "Authorized Locksmith" },
    { icon: Star, label: "5.0 ★ Google Rating", sub: "127+ Verified Reviews" },
    { icon: CheckCircle, label: "1-Year Warranty", sub: "On Key Replacements" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-foreground mb-10">Why Choose Burbank Auto Locksmith?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="text-center p-6 rounded-2xl bg-muted">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{b.label}</h3>
              <p className="text-sm text-muted-foreground">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    { name: "Mike T.", text: "Lost all my keys at the mall. They came in 25 minutes and made new ones on the spot. Incredible service!", rating: 5 },
    { name: "Sarah L.", text: "My ignition was stuck and I couldn't start my car. They fixed it same day. Very professional and fair pricing.", rating: 5 },
    { name: "David R.", text: "Best auto locksmith in Burbank! Programmed a new smart key for my Toyota in under an hour. Highly recommend.", rating: 5 },
    { name: "Jessica M.", text: "Locked out at 11pm — they answered immediately and were at my location in 20 minutes. Lifesaver!", rating: 5 },
    { name: "Carlos G.", text: "Needed ECU reprogramming after battery replacement. They knew exactly what to do. Professional OEM-level work.", rating: 5 },
    { name: "Amanda W.", text: "Came to my office in Glendale, made a spare key for my Honda in 30 min. Great price, great service!", rating: 5 },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 text-accent text-xl mb-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-muted-foreground">5.0 stars from 127+ Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <div className="flex items-center gap-1 text-accent mb-3">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground mb-3 italic">"{r.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition">
            <Star className="w-5 h-5" /> Leave Us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}

function MidPageCTA() {
  return (
    <section className="py-12 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-3">Need a Locksmith Right Now?</h2>
        <p className="text-lg opacity-90 mb-6">We arrive in 15-30 minutes. Licensed & Insured. Serving Burbank, Glendale, North Hollywood & more.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl hover:brightness-110 transition">
            <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/15 text-accent-foreground font-semibold text-lg border border-accent-foreground/30 hover:bg-accent-foreground/25 transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href={`sms:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/10 text-accent-foreground font-semibold text-lg border border-accent-foreground/20 hover:bg-accent-foreground/20 transition">
            <MessageCircle className="w-5 h-5" /> Text Us
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string || "").slice(0, 500);
    const phone = (data.get("phone") as string || "").slice(0, 500);
    const vehicle = (data.get("vehicle") as string || "").slice(0, 500);
    const service = (data.get("service") as string || "").slice(0, 500);
    const msg = `Quote Request:\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nService: ${service}`;
    window.open(`https://wa.me/1${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-card" id="quote-section">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-foreground mb-2">Get a Free Quote</h2>
          <p className="text-muted-foreground">Tell us about your vehicle and we'll respond in minutes via WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-muted rounded-2xl p-6 md:p-8 border border-border">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Your Name</label>
            <input name="name" required maxLength={500} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Phone Number</label>
            <input name="phone" type="tel" required maxLength={500} placeholder="(818) 555-0000" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Vehicle (Year, Make, Model)</label>
            <input name="vehicle" required maxLength={500} placeholder="2022 Toyota Camry" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Service Needed</label>
            <select name="service" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Select a service...</option>
              <option>Emergency Car Lockout</option>
              <option>All Keys Lost Replacement</option>
              <option>Key Programming (OEM)</option>
              <option>Ignition Repair / Replacement</option>
              <option>ECU / BCM / Immobilizer</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="w-full px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg hover:brightness-110 transition">
            Send Quote Request via WhatsApp
          </button>
          <p className="text-xs text-muted-foreground text-center">We respond within minutes. No spam, ever.</p>
        </form>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = ["Burbank", "Glendale", "North Hollywood", "Pacoima", "Granada Hills", "Pasadena", "Sun Valley", "Toluca Lake"];
  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-foreground mb-4">Service Areas</h2>
        <p className="text-muted-foreground mb-6">Mobile auto locksmith serving the greater Burbank and San Fernando Valley area.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {areas.map((area) => (
            <span key={area} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-black text-foreground mb-4">About Our Business</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Burbank Auto Locksmith is the trade name of <strong>KPN Electronic Inc.</strong>, a California-licensed locksmith company 
          (CA Locksmith License: <strong>LCO8538</strong>). We operate as a <strong>mobile-only</strong> service — we come to your 
          location anywhere in Burbank, Glendale, North Hollywood, and surrounding areas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-3">
          We provide professional OEM key programming for advanced vehicle security and immobilizer systems, 
          ensuring proper synchronization with your car's anti-theft system. Our technicians are NASTF-authorized 
          and use dealer-level equipment for all programming services.
        </p>
        <p className="text-sm text-muted-foreground italic">
          All services require valid proof of vehicle ownership and government-issued ID.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">🔑 Burbank Auto Locksmith</h3>
            <p className="text-sm opacity-80">KPN Electronic Inc.</p>
            <p className="text-sm opacity-80">CA License: LCO8538</p>
            <p className="text-sm opacity-80">Mobile Service — 7 Days a Week</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <a href={`tel:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100 mb-1">📞 {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 hover:opacity-100 mb-1">💬 WhatsApp</a>
            <a href={`sms:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100">📱 Text Us</a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Service Areas</h3>
            <p className="text-sm opacity-80">Burbank • Glendale • North Hollywood</p>
            <p className="text-sm opacity-80">Pacoima • Granada Hills • Pasadena</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Burbank Auto Locksmith – KPN Electronic Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-2xl border-t border-primary-foreground/20" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex gap-2 p-3">
        <a href={`tel:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={`sms:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-foreground/15 text-primary-foreground font-bold text-sm border border-primary-foreground/30">
          <MessageCircle className="w-4 h-4" /> Text Us
        </a>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <UrgencyBanner />
      <TrustSection />
      <ServicesSection />
      <MidPageCTA />
      <ReviewsSection />
      <QuoteForm />
      <ServiceAreas />
      <AboutSection />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
