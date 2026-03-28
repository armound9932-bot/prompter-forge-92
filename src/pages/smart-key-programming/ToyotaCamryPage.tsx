import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, ChevronRight, CheckCircle, Cpu, Car, Wrench, AlertTriangle, Key } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;
const SLUG = "/smart-key-programming/toyota/camry";
const META_TITLE = "Toyota Camry Smart Key Programming Burbank | Push-to-Start Fob Replacement – Burbank Auto Locksmith";
const META_DESC = "Toyota Camry smart key programming in Burbank. Proximity key, push-to-start fob, immobilizer reset for 2007–2024 Camry. Add key or all keys lost. Mobile service, 20–30 min. Licensed & insured.";

export default function ToyotaCamryPage() {
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
      mainEntity: [
        { "@type": "Question", name: "How much does Toyota Camry smart key programming cost in Burbank?", acceptedAnswer: { "@type": "Answer", text: "Toyota Camry smart key programming typically costs significantly less than dealership rates. Pricing depends on the model year and whether you're adding a key or replacing all lost keys. Call us for an exact Burbank quote." } },
        { "@type": "Question", name: "Can you program a Toyota Camry smart key if all keys are lost?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform full immobilizer initialization for all Camry generations, including EEPROM-level programming for 2018+ models. No towing to the dealer required." } },
        { "@type": "Question", name: "How long does Toyota Camry smart key programming take?", acceptedAnswer: { "@type": "Answer", text: "Most Toyota Camry smart key jobs are completed in 20–30 minutes on-site at your Burbank location." } },
        { "@type": "Question", name: "What Toyota Camry smart key fob part numbers do you support?", acceptedAnswer: { "@type": "Answer", text: "We program HYQ14FBE, HYQ14FBC, and HYQ1EA fobs, plus compatible aftermarket equivalents for 2007–2024 Camry models." } },
      ],
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
        <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming" className="hover:text-foreground transition">Smart Key Programming</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming/toyota" className="hover:text-foreground transition">Toyota</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Camry</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Toyota Camry Smart Key Programming in Burbank</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            The Toyota Camry uses a proximity-based smart key system that communicates with the vehicle's immobilizer to allow keyless entry and push-button start. Whether you've lost your only key or need a spare programmed, our mobile locksmith team in Burbank handles every Camry generation — from early transponder systems to the latest encrypted smart keys.
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

      {/* Trust bar */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-bold text-white">
          <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5.0 Rating</span>
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-400" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-400" /> 20–30 Min Service</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-400" /> 1-Year Warranty</span>
        </div>
      </div>

      {/* Introduction: How the System Works */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Cpu className="w-7 h-7 text-accent" /> How the Toyota Camry Smart Key System Works
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Camry's Smart Key System (SKS) uses a proximity fob containing a transponder chip that communicates wirelessly with the vehicle's immobilizer ECU. When you approach the car with the fob in your pocket or bag, interior and exterior antennas detect its presence — allowing you to unlock the door by touching the handle and start the engine with the push-to-start button.
            </p>
            <p>
              The smart key must be <strong className="text-foreground">programmed and registered</strong> to the specific vehicle. Without proper registration, the immobilizer prevents the engine from cranking — even if the physical key blade fits the ignition cylinder. This security layer means replacement keys can't simply be cut; they must be electronically paired with the Camry's body control module using dealer-level diagnostic equipment.
            </p>
            <p>
              At Burbank Auto Locksmith, we carry the same diagnostic tools used by Toyota dealerships. We program your new or replacement smart key on-site at your Burbank location — no towing, no waiting at a service counter.
            </p>
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 flex items-center gap-3">
            <Key className="w-7 h-7 text-accent" /> Add Key vs. All Keys Lost
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Add Key */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Add Key (Working Key Available)
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Faster process — your existing key helps authenticate the new one</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> The working key is placed in the vehicle during programming</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> New fob is registered to the body control module alongside existing keys</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Typically completed in 15–20 minutes</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Lower cost than all-keys-lost scenarios</li>
              </ul>
            </div>
            {/* All Keys Lost */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Full immobilizer reset required — no existing key to authenticate</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Security access or pin code extraction from the ECU</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Some 2018+ models require EEPROM-level programming</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Advanced diagnostic equipment needed on-site</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Typically completed in 25–40 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systems by Year */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 flex items-center gap-3">
            <Car className="w-7 h-7 text-accent" /> Toyota Camry Smart Key Systems by Year
          </h2>
          <div className="space-y-6">
            {/* 2007-2011 */}
            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">2007–2011 Toyota Camry (XV40)</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Key type:</strong> Basic transponder chip key; select trims introduced early smart key with push-to-start</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Immobilizer:</strong> Toyota 4D67/4D68 transponder chip system</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Add key:</strong> Possible with a working key present — standard registration procedure</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Immobilizer ECU reset may be required; pin code extraction from the body control module</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14AAB, HYQ14AEM (proximity-equipped trims)</li>
              </ul>
            </div>

            {/* 2012-2017 */}
            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">2012–2017 Toyota Camry (XV50)</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Key type:</strong> Smart key with proximity detection and push-to-start standard on most trims</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Immobilizer:</strong> Toyota G-chip and H-chip transponder with rolling code encryption</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Proximity system:</strong> Dual-band 315 MHz signal; capacitive door handle sensors for keyless entry</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Requires immobilizer initialization — diagnostic tool syncs new key with the body control module</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBA, HYQ14FBC</li>
              </ul>
            </div>

            {/* 2018-2024 */}
            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">2018–2024 Toyota Camry (XV70)</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Key type:</strong> Advanced smart key with enhanced encryption protocol</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Immobilizer:</strong> Toyota's updated AES 128-bit encrypted immobilizer — significantly harder to bypass</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Proximity system:</strong> Multi-antenna array covering all doors, trunk, and cabin interior</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> EEPROM-level programming or dealer-level security access may be required</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBE, HYQ14FBC (updated board revision)</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Note:</strong> Our equipment supports full initialization for the XV70 platform, including the 2024 model year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-accent" /> Common Toyota Camry Smart Key Issues
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Key Not Detected", desc: "The dashboard displays 'Key Not Detected' even though the fob is inside the vehicle. Usually caused by a weak fob battery, faulty interior antenna, or signal interference from aftermarket accessories." },
              { title: "Push-to-Start Not Working", desc: "Engine won't crank when you press the start button. The immobilizer may not be recognizing the transponder signal — try holding the fob directly against the start button as a temporary workaround." },
              { title: "Lost All Keys", desc: "When every key is lost, the vehicle cannot verify ownership through normal means. We perform a full immobilizer reset with pin code extraction to register new keys from scratch." },
              { title: "Key Stopped Working After Battery Replacement", desc: "Replacing the fob battery can sometimes cause the rolling code to desynchronize. The key needs to be re-registered to the vehicle's body control module to restore full functionality." },
            ].map((issue, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0" /> {issue.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCC IDs + Service Time */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-black text-foreground mb-4">Compatible Smart Key FCC IDs</h2>
              <p className="text-muted-foreground text-sm mb-4">We program the following Toyota Camry smart key fob models:</p>
              <div className="space-y-2">
                {[
                  { id: "HYQ14FBE", note: "2018–2024 Camry (most common)" },
                  { id: "HYQ14FBC", note: "2012–2017 & select 2018+ Camry trims" },
                  { id: "HYQ1EA", note: "Select Camry models with remote start" },
                ].map(fcc => (
                  <div key={fcc.id} className="flex items-center gap-3 bg-muted rounded-xl p-3 border border-border">
                    <span className="font-mono font-bold text-foreground text-sm">{fcc.id}</span>
                    <span className="text-muted-foreground text-xs">— {fcc.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black text-foreground mb-4">Service Time</h2>
              <div className="bg-muted rounded-2xl border border-border p-6 flex items-center gap-4">
                <Clock className="w-10 h-10 text-accent shrink-0" />
                <div>
                  <p className="text-2xl font-black text-foreground">20–30 Minutes</p>
                  <p className="text-muted-foreground text-sm">Most Toyota Camry smart key programming jobs are completed on-site in under 30 minutes. All-keys-lost scenarios may take up to 40 minutes depending on the model year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-4">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link to="/smart-key-programming/toyota" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">All Toyota Smart Keys</span>
            </Link>
            <Link to="/smart-key-programming" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Smart Key Programming</span>
            </Link>
            <Link to="/key-replacement" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Key className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Car Key Replacement</span>
            </Link>
            <Link to="/car-lockout" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Emergency Car Lockout</span>
            </Link>
            <Link to="/key-programming" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Key Programming</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for a replacement key instead? See our <Link to="/key-replacement" className="text-accent font-semibold hover:underline">Toyota Camry lost key replacement in Burbank</Link> page for full key cutting and replacement options.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How much does Toyota Camry smart key programming cost in Burbank?", a: "Pricing depends on the Camry model year and whether you're adding a key or replacing all lost keys. Our rates are significantly lower than Toyota dealership pricing. Call us for an exact Burbank quote tailored to your situation." },
              { q: "Can you program a Toyota Camry smart key if all keys are lost?", a: "Yes. We perform full immobilizer initialization for all Camry generations, including EEPROM-level programming for 2018+ models. We come to your Burbank location — no towing to the dealer required." },
              { q: "How long does Toyota Camry smart key programming take?", a: "Most jobs are completed in 20–30 minutes on-site. All-keys-lost scenarios on 2018+ Camry models may take up to 40 minutes due to the advanced encryption protocol." },
              { q: "What Toyota Camry key fob part numbers do you support?", a: "We program HYQ14FBE (2018–2024), HYQ14FBC (2012–2017 and select 2018+ trims), and HYQ1EA (models with remote start), plus compatible aftermarket equivalents." },
              { q: "Do I need to tow my Camry to a Toyota dealer for smart key programming?", a: "No. Our mobile locksmith arrives at your Burbank location with all the diagnostic equipment needed to program your smart key on the spot." },
              { q: "Will programming a new key deactivate my old one?", a: "Not unless you request it. When adding a key, all existing registered keys remain active. If a key was lost or stolen, we can deauthorize it during the programming process for security." },
            ].map((faq, i) => (
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
          <h2 className="text-2xl md:text-3xl font-black mb-3">Call Now for Toyota Camry Smart Key Programming in Burbank</h2>
          <p className="text-lg opacity-90 mb-6">We arrive in 15–30 minutes with all equipment needed. Licensed & insured.</p>
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
