import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, MapPin, ChevronRight, Award, CheckCircle, type LucideIcon } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;

interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  icon: LucideIcon;
  benefits: string[];
  details: string[];
  faqs: { q: string; a: string }[];
}

const allServices: { slug: string; title: string; icon: LucideIcon }[] = [
  { slug: "/car-lockout", title: "Emergency Car Lockout", icon: Shield },
  { slug: "/key-replacement", title: "Car Key Replacement", icon: Star },
  { slug: "/key-programming", title: "Key Programming", icon: Award },
  { slug: "/ignition-repair", title: "Ignition Repair", icon: CheckCircle },
];

export default function ServicePageLayout({ page }: { page: ServicePage }) {
  useEffect(() => {
    document.title = page.metaTitle;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", page.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://burbankautolocksmith.com${page.slug}`;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    let script = document.getElementById("faq-schema") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "faq-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    window.scrollTo(0, 0);
    return () => { script?.remove(); };
  }, [page]);

  const otherServices = allServices.filter(s => s.slug !== page.slug);

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

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">{page.h1}</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">{page.heroText}</p>
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

      {/* Trust bar */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-bold text-white">
          <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5.0 Rating</span>
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-400" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-400" /> 30-Min Response</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-400" /> 1-Year Warranty</span>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">How It Works</h2>
          <div className="space-y-4">
            {page.details.map((d, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
                <p className="text-foreground leading-relaxed pt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-14 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-foreground mb-6">Explore Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map(s => (
              <Link key={s.slug} to={s.slug} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
                <s.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="font-semibold text-foreground text-sm">{s.title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {page.faqs.map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-muted overflow-hidden group">
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
          <h2 className="text-2xl md:text-3xl font-black mb-3">Need Help Now?</h2>
          <p className="text-lg opacity-90 mb-6">We arrive in 15-30 minutes. Licensed & Insured.</p>
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
              {allServices.map(s => (
                <Link key={s.slug} to={s.slug} className="block text-sm opacity-80 hover:opacity-100 mb-1">{s.title}</Link>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <a href={`tel:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100 mb-1">📞 {PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 hover:opacity-100">💬 WhatsApp</a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-wrap justify-center gap-4 text-sm opacity-70">
            <Link to="/">Home</Link>
            {allServices.map(s => <Link key={s.slug} to={s.slug}>{s.title}</Link>)}
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
