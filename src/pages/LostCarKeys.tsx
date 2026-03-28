import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, ChevronRight, CheckCircle, Key, Car, AlertTriangle, MapPin, Award } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;
const SLUG = "/lost-car-keys";
const META_TITLE = "Lost Car Keys Burbank | Emergency All-Keys-Lost Locksmith – Burbank Auto Locksmith";
const META_DESC = "Lost all your car keys in Burbank? Emergency mobile locksmith for all makes — Toyota, Honda, Ford, Nissan, Chevrolet, Hyundai, Kia. Same-day key replacement on-site. Licensed & insured. Call now.";

const BRANDS = [
  { slug: "/smart-key-programming/toyota", label: "Toyota", models: "Camry, Corolla, RAV4, Highlander, Prius, Tacoma, Sienna" },
  { slug: "/smart-key-programming/honda", label: "Honda", models: "Civic, Accord, CR-V, Pilot, Odyssey" },
  { slug: "/smart-key-programming/ford", label: "Ford", models: "F-150, Explorer, Fusion, Edge" },
  { slug: "/smart-key-programming/chevrolet", label: "Chevrolet", models: "Silverado, Malibu, Equinox, Suburban, Tahoe" },
  { slug: "/smart-key-programming/nissan", label: "Nissan", models: "Altima, Rogue, Sentra, Pathfinder" },
  { slug: "/smart-key-programming/hyundai", label: "Hyundai", models: "Elantra, Sonata, Tucson, Santa Fe, Palisade" },
  { slug: "/smart-key-programming/kia", label: "Kia", models: "Optima, Sportage, Sorento, Forte, Soul" },
];

const STEPS = [
  { title: "Call Us", desc: "Tell us your vehicle make, model, year, and location. We'll give you an upfront quote." },
  { title: "We Arrive", desc: "Our mobile locksmith arrives at your Burbank-area location within 15–30 minutes with all necessary equipment." },
  { title: "Verify Ownership", desc: "We verify your vehicle ownership with VIN and registration for your security." },
  { title: "Cut & Program", desc: "We cut a new key, program it to your vehicle's immobilizer, and test all functions on-site." },
];

const FAQS = [
  { q: "Can you make a car key without the original?", a: "Yes. We specialize in all-keys-lost situations. Using your vehicle's VIN and immobilizer data, we can cut and program a brand new key from scratch — no original key or dealer visit required." },
  { q: "How long does it take to replace a lost car key?", a: "Most lost car key replacements are completed in 30–60 minutes on-site. Complex vehicles with advanced encryption may take slightly longer." },
  { q: "Do I need to tow my car to a dealer?", a: "No. Our mobile locksmith comes directly to your location in Burbank and programs the key on-site. No towing needed." },
  { q: "How much does an all-keys-lost replacement cost?", a: "Pricing depends on your vehicle's make, model, and key type. Our rates are significantly lower than dealership pricing. Call for an exact quote." },
  { q: "What brands do you support?", a: "We service all major brands including Toyota, Honda, Ford, Chevrolet, Nissan, Hyundai, Kia, and many more. We carry OEM and high-quality aftermarket keys." },
];

export default function LostCarKeys() {
  useEffect(() => {
    document.title = META_TITLE;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", META_DESC);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `https://burbankautolocksmith.com${SLUG}`;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };
    let script = document.getElementById("faq-schema") as HTMLScriptElement | null;
    if (!script) { script = document.createElement("script"); script.id = "faq-schema"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(faqSchema);
    window.scrollTo(0, 0);
    return () => { script?.remove(); };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="block">
            <h2 className="text-lg font-bold tracking-tight">🔑 Burbank Auto Locksmith</h2>
            <p className="text-xs opacity-80">KPN Electronic Inc. • CA Lic# LCO8538</p>
          </Link>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow transition hover:brightness-110">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Lost Car Keys</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <AlertTriangle className="w-4 h-4" /> Emergency Service Available 24/7
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Lost All Your Car Keys in Burbank?</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            Don't panic — and don't call a tow truck. Our mobile locksmith creates new keys from scratch, even when every key is gone. We arrive at your Burbank location within 15–30 minutes with everything needed to get you back on the road.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-xl animate-pulse-glow hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-primary-foreground/15 text-primary-foreground font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/25 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-foreground/95">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-bold text-background">
          <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5.0 Google Rating</span>
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-400" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-400" /> 15–30 Min Response</span>
          <span className="flex items-center gap-2"><Award className="w-5 h-5 text-emerald-400" /> NASTF Approved</span>
        </div>
      </div>

      {/* What We Do */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">All Keys Lost? Here's What We Do</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            When you've lost every key to your vehicle, the immobilizer system must be reset before a new key can work. This requires specialized tools, manufacturer-specific PIN codes, and professional locksmith training. We handle the entire process on-site.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Immobilizer reset & initialization", "New key cutting by VIN", "Smart key & proximity fob programming", "Transponder chip programming", "Push-to-start system restoration", "ECU/BCM security module access"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-muted rounded-xl p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Lost your keys right now?</h3>
            <p className="text-sm text-muted-foreground">We arrive in 15–30 minutes with everything needed.</p>
          </div>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold shadow-lg animate-pulse-glow hover:brightness-110 transition shrink-0">
            <Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">How Our Emergency Key Replacement Works</h2>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">All Major Brands Supported</h2>
          <p className="text-muted-foreground mb-8">Select your vehicle brand for model-specific information and pricing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRANDS.map(b => (
              <Link key={b.slug} to={b.slug} className="bg-muted rounded-xl p-5 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground group-hover:text-accent transition">{b.label}</h3>
                  <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
                <p className="text-xs text-muted-foreground">{b.models}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-10 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-4">Other Locksmith Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { slug: "/car-lockout", label: "Car Lockout" },
              { slug: "/key-replacement", label: "Key Replacement" },
              { slug: "/key-programming", label: "Key Programming" },
              { slug: "/ignition-repair", label: "Ignition Repair" },
            ].map(s => (
              <Link key={s.slug} to={s.slug} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border hover:shadow-md transition text-sm font-medium text-foreground">
                <Key className="w-4 h-4 text-accent" /> {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-10 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" /> Serving Burbank & Surrounding Areas
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Our emergency lost car key service covers <strong className="text-foreground">Burbank</strong>, <strong className="text-foreground">Glendale</strong>, <strong className="text-foreground">North Hollywood</strong>, and the greater <strong className="text-foreground">Los Angeles</strong> area. We're a fully mobile locksmith — our equipped van comes directly to your home, office, parking lot, or roadside. No tow truck, no dealership wait. Available 7 days a week with same-day service for most vehicles.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-card overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Lost Your Keys? We're Ready to Help.</h2>
          <p className="text-lg opacity-90 mb-6">15–30 minute response in Burbank. Licensed, insured, and NASTF approved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/15 text-accent-foreground font-semibold border border-accent-foreground/30 hover:bg-accent-foreground/25 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-3">🔑 Burbank Auto Locksmith</h3>
              <p className="text-sm opacity-80">KPN Electronic Inc. • CA License: LCO8538</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Services</h3>
              <Link to="/car-lockout" className="block text-sm opacity-80 hover:opacity-100 mb-1">Emergency Car Lockout</Link>
              <Link to="/key-replacement" className="block text-sm opacity-80 hover:opacity-100 mb-1">Car Key Replacement</Link>
              <Link to="/key-programming" className="block text-sm opacity-80 hover:opacity-100 mb-1">Key Programming</Link>
              <Link to="/ignition-repair" className="block text-sm opacity-80 hover:opacity-100 mb-1">Ignition Repair</Link>
              <Link to="/smart-key-programming" className="block text-sm opacity-80 hover:opacity-100 mb-1">Smart Key Programming</Link>
              <Link to="/lost-car-keys" className="block text-sm opacity-80 hover:opacity-100 mb-1">Lost Car Keys</Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <a href={`tel:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100 mb-1">📞 {PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 hover:opacity-100">💬 WhatsApp</a>
            </div>
          </div>
          <p className="text-center text-sm opacity-60 mt-4">© {new Date().getFullYear()} Burbank Auto Locksmith – KPN Electronic Inc.</p>
        </div>
      </footer>

      {/* Mobile sticky */}
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
    </div>
  );
}
