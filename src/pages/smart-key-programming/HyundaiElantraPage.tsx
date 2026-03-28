import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, Clock, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";
import PricingAndTimeSection from "@/components/PricingAndTimeSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";


const defined_faqs = [
  { q: "Can you program a Hyundai Elantra smart key without the original?", a: "Yes. All-keys-lost programming for the Elantra requires extracting the vehicle's PIN code from the SMK (Smart Key Module) and performing an immobilizer reset. We carry the diagnostic tools to complete this on-site in Burbank — no tow to a dealer required." },
  { q: "Why does my Elantra say 'Key Not Detected'?", a: "Common causes include a depleted CR2032 coin cell in the fob, a failing SMK module antenna, or RF interference from aftermarket accessories. We diagnose the root cause — not just swap batteries — so the fix actually holds." },
  { q: "Do I need a Hyundai dealer to program my Elantra key?", a: "No. A qualified automotive locksmith with Hyundai-specific diagnostic software can program smart keys, extract PIN codes, and reset the immobilizer. We use dealer-equivalent tools at a fraction of the cost, with mobile service across Burbank." },
  { q: "What is a PIN code and why does my locksmith need it?", a: "The PIN code is a vehicle-specific security credential stored in the SMK module. It's required to register new transponder or smart key IDs to the immobilizer. Without the correct PIN, the ECU will reject any new key — this is Hyundai's anti-theft safeguard." },
];

export default function HyundaiElantraPage() {
  useEffect(() => {
    setSeoMeta({ title: "Hyundai Elantra Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Hyundai Elantra smart key programming in Burbank, CA. SMK module, PIN code extraction, immobilizer reset, all keys lost. Same-day mobile locksmith. Call (818) 606-1684.", slug: "/smart-key-programming/hyundai/elantra" });
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: defined_faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-xs text-primary-foreground/70 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">Home</Link> &gt;{" "}
            <Link to="/smart-key-programming" className="hover:underline">Smart Key Programming</Link> &gt;{" "}
            <Link to="/smart-key-programming/hyundai" className="hover:underline">Hyundai</Link> &gt;{" "}
            <span className="text-primary-foreground">Elantra</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Hyundai Elantra Smart Key Programming in Burbank, CA
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Elantra's Smart Key Module (SMK) system is Hyundai's own take on keyless entry and push-to-start — and it has quirks that set it apart from every other brand. We handle SMK diagnostics, PIN code extraction, and immobilizer resets on-site across Burbank with dealer-equivalent tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18184014356" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
              <Phone className="w-5 h-5" /> Call Now: (818) 401-4356
            </a>
            <a href="https://wa.me/18184014356" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-card-foreground font-bold px-6 py-3 rounded-xl border border-border shadow hover:shadow-md transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Hyundai SMK System */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-accent" /> How Hyundai's Smart Key Module (SMK) Works
          </h2>
          <p className="text-muted-foreground mb-4">
            Hyundai doesn't use Ford's PATS, Nissan's BCM-centric Intelligent Key, or Toyota's proximity authentication the way those brands implement it. Instead, Hyundai routes the entire keyless system through a dedicated <strong>Smart Key Module (SMK)</strong> — a standalone controller that manages all communication between the key fob and the vehicle's electrical architecture.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">LF Antenna Array → Fob Detection</h3>
              <p className="text-muted-foreground text-sm">
                Low-Frequency (125 kHz) antennas embedded in the door handles, dashboard, and center console continuously broadcast wake-up signals. When your Elantra fob enters range, the SMK detects its presence and initiates the handshake.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Response → Encrypted Unlock</h3>
              <p className="text-muted-foreground text-sm">
                The fob responds at 315 MHz (US) with a rolling-code encrypted signal. The SMK validates this code against its stored key IDs. If the code matches, the SMK authorizes door unlock and arms the push-to-start circuit.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">SMK → ECU Authorization</h3>
              <p className="text-muted-foreground text-sm">
                Once you press the start button with your foot on the brake, the SMK sends a cryptographic challenge to the ECU. The fob's embedded transponder chip must respond correctly — otherwise the immobilizer blocks fuel injection and ignition.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN-Gated Security Access</h3>
              <p className="text-muted-foreground text-sm">
                Unlike some brands that allow onboard key learning, Hyundai requires a vehicle-specific PIN code to register new keys to the SMK. This PIN is tied to the VIN and must be extracted with diagnostic software — it's Hyundai's primary anti-theft layer for key programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Hyundai Elantra" />


      {/* Immobilizer */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" /> Hyundai Immobilizer Architecture
          </h2>
          <p className="text-muted-foreground mb-4">
            Every Elantra equipped with a smart key uses Hyundai's immobilizer system to prevent unauthorized starting. The transponder chip inside the fob stores a unique cryptographic ID. During each start attempt, the SMK challenges this ID — if the response doesn't match the registered key list, the ECU locks out the engine.
          </p>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-2">Why This Matters for Key Programming</h3>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> New keys must be cryptographically paired to the SMK — not just "learned" like older systems</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> PIN code extraction is mandatory for most programming scenarios</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> All-keys-lost situations require an immobilizer reset cycle through the SMK</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Some 2020+ models use higher AES-128 encryption, requiring updated diagnostic software</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hyundai-Specific Differences */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> What Makes Hyundai Different
          </h2>
          <p className="text-muted-foreground mb-6">
            Hyundai's key programming workflow doesn't follow the patterns set by Japanese or American manufacturers. Here's what sets it apart:
          </p>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Dedicated SMK Module</h3>
              <p className="text-muted-foreground text-sm">
                Toyota and Honda distribute key logic across the BCM and ECU. Hyundai centralizes it in a standalone Smart Key Module — meaning SMK failures produce symptoms that look like key problems but aren't.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">PIN Code Dependency</h3>
              <p className="text-muted-foreground text-sm">
                Ford uses a two-key onboard method. Nissan requires BCM security access. Hyundai demands a PIN code for virtually every programming scenario — even adding a spare key when you already have a working one on some models.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Dealer-Level Access Sometimes Required</h3>
              <p className="text-muted-foreground text-sm">
                Certain 2022+ Elantra models with Hyundai's updated security gateway may require dealer-level diagnostic credentials for key registration. We carry the tools and software subscriptions to handle these without a dealership visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Hyundai Elantra Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "The SMK can't complete the LF/UHF handshake. Usually a dead CR2032 battery, but can also indicate a failing SMK antenna or water intrusion in the door handle sensor." },
              { title: "Push Button — No Crank", desc: "Fob detected but engine won't turn over. Often caused by a brake switch failure or a transponder authentication timeout between the SMK and ECU." },
              { title: "Intermittent Detection", desc: "Key works sometimes but not always. Common with weak fob batteries or SMK antenna connections that have developed resistance over time — especially on 2017–2019 models." },
              { title: "Doors Unlock But No Start", desc: "The UHF unlock signal works but the LF proximity challenge fails at the start button. This usually points to a dashboard antenna issue or SMK firmware fault." },
              { title: "Key Programmed But Won't Start", desc: "The key is registered to the SMK but the immobilizer handshake fails. Typically caused by incomplete PIN authorization or a corrupted key slot in the SMK memory." },
              { title: "SMK Communication Loss", desc: "The diagnostic tool can't communicate with the SMK module. Can indicate a blown fuse, wiring fault, or a failed SMK unit — common after aftermarket alarm installations." },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Add a Spare Key
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Working key present — SMK already has a valid key ID</li>
                <li>• PIN code extracted via diagnostic port</li>
                <li>• New key registered alongside existing keys</li>
                <li>• Faster procedure — typically 20–30 minutes</li>
                <li>• All existing keys remain functional</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 border-accent/30">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• No working key — SMK must be reset</li>
                <li>• PIN code extraction mandatory</li>
                <li>• Immobilizer reset and key slot clearing</li>
                <li>• New key(s) registered from scratch</li>
                <li>• Extended procedure — 45–90 minutes depending on year</li>
                <li>• Previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Elantra Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2011–2016 Elantra (5th Gen / MD)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The fifth-generation Elantra introduced Hyundai's first widely-available smart key option. The SMK system on these models uses earlier-generation encryption and a simpler antenna layout — two LF antennas in the front doors and one in the dashboard.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5HMFNA04 (4-button) — common replacement fob</li>
                <li>• PIN code required for all programming</li>
                <li>• Base models may still use traditional transponder keys (ID46 chip)</li>
                <li>• SMK module located behind the dashboard — accessible for diagnostics</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2017–2020 Elantra (6th Gen / AD)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The sixth-generation brought improved encryption and additional antenna coverage. The SMK module received firmware updates that made rolling-code prediction significantly harder. Smart key became standard on more trim levels.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: CQOFD00120 or TQ8-FOB-4F11 depending on trim</li>
                <li>• Enhanced rolling-code encryption</li>
                <li>• Third LF antenna added in rear parcel shelf</li>
                <li>• SMK firmware version must match key generation for successful pairing</li>
                <li>• Intermittent detection issues more common — antenna harness routing change</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2021–2024 Elantra (7th Gen / CN7)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The current-generation Elantra uses Hyundai's most advanced smart key architecture. AES-128 encryption, an updated security gateway, and a redesigned SMK module make these vehicles significantly more complex to program — but not impossible with the right tools.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F37 — slim-profile fob design</li>
                <li>• AES-128 transponder encryption — requires updated diagnostic software</li>
                <li>• Security gateway may require online authentication for key registration</li>
                <li>• Digital key (phone-based) available on some trims — separate from fob programming</li>
                <li>• All-keys-lost procedure more time-intensive due to additional security layers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Programming Complexity: Locksmith vs. Dealer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What the Dealer Does</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai dealers use GDS (Global Diagnostic System) to access the SMK, extract the PIN, and register keys. The process is the same as what we do — but at dealership pricing, with appointment wait times, and often requiring a tow.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry Hyundai-compatible diagnostic platforms that perform the same SMK access, PIN extraction, and key registration procedures. The difference: we come to you in Burbank, we do it the same day, and our pricing undercuts dealer rates consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Elantra Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">SMK Module Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                The Elantra's SMK module is more sensitive to voltage drops than most. A weak 12V battery — even one that can still crank the engine — can cause intermittent "Key Not Detected" warnings. We always check battery voltage before assuming a key or module fault.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Aftermarket Alarm Interference</h3>
              <p className="text-muted-foreground text-sm">
                We see a disproportionate number of Elantras with aftermarket alarm systems that interfere with the SMK. Poor wiring taps into the door lock harness can corrupt the LF antenna signal, causing phantom "Key Not Detected" errors that come and go.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">CR2032 Battery Lifespan</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai fob batteries tend to drain faster than Toyota or Honda equivalents — likely due to higher standby current in the SMK wake-up circuit. We recommend replacing the CR2032 every 12–18 months for Elantra owners, not the 2–3 years most brands suggest.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Key Learned But No Start</h3>
              <p className="text-muted-foreground text-sm">
                A recurring issue on 2017–2019 models: the key registers successfully to the SMK, but the immobilizer handshake with the ECU fails. This is typically a firmware mismatch — the SMK and ECU need to be on compatible software versions for the transponder challenge to complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocalSeoBlock vehicleName="Hyundai Elantra" />

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/hyundai/elantra" brandSlug="hyundai" />


      {/* Local SEO */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-accent" /> Serving Burbank and Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm">
                Our primary Hyundai Elantra smart key service area. Whether you're near the Burbank Town Center, Media District, or Magnolia Park, we arrive with all diagnostic equipment ready. Most Elantra jobs in Burbank are completed within 30–60 minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Just east of Burbank — we service Elantra owners in downtown Glendale, the Galleria area, and surrounding neighborhoods. Same-day availability for add-a-key and all-keys-lost scenarios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service radius. We handle Elantra smart key programming in the Arts District, Valley Village, and Studio City corridor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended service to greater Los Angeles for Hyundai Elantra key programming. Contact us for availability and scheduling across the LA metro area.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PricingAndTimeSection vehicleName="Hyundai Elantra" />


      {/* FAQ */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hyundai Elantra Smart Key FAQ</h2>
          <div className="space-y-4">
            {defined_faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EmergencyCallSection vehicleName="Hyundai Elantra" />


      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-accent/90 to-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-3">
            Need Hyundai Elantra Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service. SMK diagnostics, PIN extraction, and key programming — all done at your location. No dealer appointment, no tow truck.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18184014356" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition text-lg">
              <Phone className="w-5 h-5" /> (818) 401-4356
            </a>
            <a href="https://wa.me/18184014356" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-card-foreground font-bold px-8 py-3 rounded-xl border border-border shadow hover:shadow-md transition text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}