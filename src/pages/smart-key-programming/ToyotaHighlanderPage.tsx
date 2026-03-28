import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Clock, Car, ChevronRight, Truck, Users, MapPin, Wrench, AlertTriangle, Battery, Zap } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const faqItems = [
  {
    q: "Can you program a Toyota Highlander smart key without the original?",
    a: "Absolutely. We handle all-keys-lost situations daily. On 2014–2019 Highlanders, we extract security data via OBD and register a fresh key in about 30 minutes. On 2020+ TNGA models, we perform secure EEPROM-level access through the Body Control Module to restore full key functionality — no tow to the dealer required.",
  },
  {
    q: "Why does my Highlander say 'key not detected' when I'm in the back seats?",
    a: "The Highlander's large cabin relies on multiple LF antenna zones. If the third-row or cargo antenna has weakened — often from wiring fatigue or moisture near the liftgate — detection drops off in the rear. A low key fob battery (below 2.8V) also reduces response range. We diagnose and resolve these issues on-site.",
  },
];

export default function ToyotaHighlanderPage() {
  useEffect(() => {
    setSeoMeta({ title: "Toyota Highlander Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Toyota Highlander smart key programming in Burbank, CA. Family SUV key replacement, push-to-start, all keys lost. Same-day mobile service. Call (818) 606-1684.", slug: "/smart-key-programming/toyota/highlander" });
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(schema);
    return () => {
      document.head.removeChild(schema);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* BREADCRUMB */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming/toyota" className="hover:text-primary transition-colors">Toyota</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Highlander</span>
        </div>
      </nav>

      {/* ===== 1. HERO / CONVERSION ===== */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Family SUV Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Toyota Highlander Smart Key Programming in Burbank, CA
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Locked out of your Highlander? Lost every key? Don't let a missing smart key derail your family's day. Our emergency mobile locksmith arrives at your Burbank location — home, school, parking lot — and programs a new push-to-start key on the spot. No towing, no dealer wait times, no stress.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: ShieldCheck, text: "Add Key & All Keys Lost" },
              { icon: Clock, text: "Same-Day Emergency Service" },
              { icon: Car, text: "Push-to-Start Systems" },
              { icon: MapPin, text: "Mobile — We Come to You" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </span>
            ))}
          </div>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Burbank Highlander Locksmith
          </a>
        </div>
      </section>

      {/* ===== 2. HOW HIGHLANDER SMART KEY SYSTEM WORKS ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">How the Highlander Smart Key System Works</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The Highlander's three-row cabin demands a more complex antenna network than any Toyota sedan — and that complexity directly affects key programming and diagnostics.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                LF Antenna Coverage — 5+ Zones
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Unlike two-row vehicles, the Highlander deploys low-frequency antennas across five or more zones:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">▸</span>Front door handles (driver &amp; passenger exterior detection)</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">▸</span>Second-row door zones (child-seat and passenger access)</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">▸</span>Third-row cabin area (rear passenger detection)</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">▸</span>Cargo / liftgate antenna (power liftgate trigger)</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">▸</span>Center console interior zone (start authorization)</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                UHF Encrypted Response
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                When a low-frequency antenna wakes the smart key, the fob transmits an encrypted response at 315 MHz (UHF band). The Body Control Module validates this response before unlocking doors or authorizing engine start.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because the Highlander's cabin is substantially larger than a sedan's, the LF wake-up signal has to cover more volume. This means antenna placement is critical — and antenna degradation has a bigger impact on detection reliability in a three-row SUV.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Toyota Highlander" />


      {/* ===== 3. PUSH-TO-START & SYSTEM BEHAVIOR ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Push-to-Start &amp; Engine Authorization</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "BCM Challenge",
                desc: "When you press the start button, the Body Control Module broadcasts an encrypted challenge through the interior LF antenna. The Highlander's multiple cabin zones mean the BCM cycles through antennas sequentially — if your key is in the third row, there may be a slight delay before detection.",
              },
              {
                step: "2",
                title: "Transponder Response",
                desc: "The smart key's embedded transponder chip receives the challenge and transmits a cryptographic response at 315 MHz. On pre-2020 models this uses rolling code; on 2020+ TNGA Highlanders, it's 128-bit AES encryption — the same architecture used in military-grade communications.",
              },
              {
                step: "3",
                title: "ECM Start Authorization",
                desc: "The Engine Control Module validates the transponder response against its registered key table. Only after confirmation does the ECM release the fuel injectors and ignition circuit. In a large SUV, interference from aftermarket electronics or multiple wireless devices can occasionally disrupt this handshake.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. IMMOBILIZER ARCHITECTURE ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Highlander Immobilizer Architecture</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            Toyota redesigned the Highlander's security architecture when it moved to the TNGA platform. Understanding the difference between generations is critical for proper key programming.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                <h3 className="font-bold text-lg">2014–2019 Highlander (XU50)</h3>
              </div>
              <div className="p-6 space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Transponder:</strong> Texas Instruments H-chip (DST-AES hybrid)</p>
                <p><strong className="text-foreground">Security:</strong> Rolling code with 80-bit encryption</p>
                <p><strong className="text-foreground">Programming:</strong> OBD-based registration — connect to the DLC port, authenticate with the BCM, and write new key data to the immobilizer table</p>
                <p><strong className="text-foreground">Antenna count:</strong> 4 zones (front doors, interior, cargo)</p>
                <p><strong className="text-foreground">Time estimate:</strong> 20–30 minutes for most scenarios</p>
                <p className="text-xs bg-muted rounded-lg p-3 mt-2">
                  <strong className="text-foreground">Common FCC IDs:</strong> HYQ14FBA (board 0020, 0811) — 4-button fob with lock, unlock, panic, and liftgate
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border">
                <h3 className="font-bold text-lg">2020–2024 Highlander (XU70 — TNGA)</h3>
              </div>
              <div className="p-6 space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Transponder:</strong> 128-bit AES encrypted chip</p>
                <p><strong className="text-foreground">Security:</strong> Full AES encryption with secure gateway module</p>
                <p><strong className="text-foreground">Programming:</strong> Requires advanced security access — EEPROM data extraction from the BCM, seed-key authentication, and secure key registration</p>
                <p><strong className="text-foreground">Antenna count:</strong> 5–6 zones (added third-row and enhanced cargo coverage)</p>
                <p><strong className="text-foreground">Time estimate:</strong> 35–50 minutes for all-keys-lost</p>
                <p className="text-xs bg-muted rounded-lg p-3 mt-2">
                  <strong className="text-foreground">Common FCC IDs:</strong> HYQ14FBE, HYQ14FBC — updated fob with refined button layout and improved battery efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. COMMON HIGHLANDER PROBLEMS ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Common Highlander Smart Key Issues</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            We service Highlanders across Burbank daily. These are the real-world problems families bring to us — not textbook theory.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Users,
                title: "Key Not Detected in Third Row",
                desc: "The most common Highlander complaint. With kids in car seats and a key fob buried in a diaper bag, the third-row antenna may not pick up the signal — especially if the antenna harness has loosened over time.",
              },
              {
                icon: AlertTriangle,
                title: "Rear Hatch Antenna Failure",
                desc: "The power liftgate antenna sits in a high-moisture zone. Road spray, car wash water intrusion, and temperature cycling degrade the antenna connector. Result: the liftgate button stops responding to proximity.",
              },
              {
                icon: Wrench,
                title: "Cargo Area Wiring Fatigue",
                desc: "Highlanders used for family hauling — strollers, sports gear, groceries — put stress on trunk wiring. Repeated liftgate cycling can fatigue the antenna harness where it passes through the hinge, causing intermittent detection loss.",
              },
              {
                icon: Battery,
                title: "Weak Battery, Doors Still Unlock",
                desc: "A CR2032 below 2.8V can still generate enough power for short-range door unlock but fail the longer-range start authorization challenge. Families often don't notice until the engine won't start — usually at school pickup.",
              },
              {
                icon: Zap,
                title: "Interference from In-Cabin Devices",
                desc: "Tablets, phone chargers, portable Wi-Fi hotspots, and kids' electronic toys emit RF noise. In the Highlander's enclosed cabin, this noise can interfere with the 315 MHz handshake between the key and BCM.",
              },
              {
                icon: Car,
                title: "Door Handle Sensor Degradation",
                desc: "The capacitive touch sensors in the exterior door handles wear over time. On high-mileage Highlanders, the driver-side handle may stop triggering the proximity unlock, even with a fully charged key fob nearby.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. ADD KEY VS ALL KEYS LOST ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-bold text-lg">Add a Key</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">You have at least one working Highlander smart key and need a spare.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Present working key for BCM authentication</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>New key registered to the immobilizer table</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>No immobilizer reset necessary</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>All existing keys remain functional</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Completed in 15–20 minutes</li>
              </ul>
            </div>

            <div className="bg-card border-2 border-destructive/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <h3 className="font-bold text-lg">All Keys Lost</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Every key is missing — the Highlander's immobilizer must be securely restored.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Full immobilizer security restoration</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Seed-key authentication with the BCM</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>EEPROM access on 2020+ TNGA models</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>New key table written from scratch</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>30–50 minutes depending on model year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. BY YEAR BREAKDOWN ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Highlander Smart Key by Model Year</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-bold text-xl mb-4">2014–2019 Toyota Highlander (XU50)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The third-generation Highlander uses Toyota's H-chip transponder with 80-bit rolling code encryption. Key programming is performed through the OBD-II port: our diagnostic tool authenticates with the BCM, reads the current key registration table, and adds the new key's transponder ID. The process is straightforward and well-documented across the locksmith industry.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These models have four antenna zones — adequate for the three-row cabin but occasionally prone to weak detection in the far third row, especially in the longer XU50 wheelbase. The power liftgate antenna on Limited and Platinum trims adds a fifth zone but is more exposed to moisture.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-7">
              <h3 className="font-bold text-xl mb-4">2020–2024 Toyota Highlander (XU70 — TNGA Platform)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The fourth-generation Highlander moved to Toyota's TNGA-K platform and adopted 128-bit AES encryption across the entire key security chain. The secure gateway module now filters OBD communications, which means standard OBD-based programming tools can no longer write directly to the immobilizer.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For all-keys-lost scenarios on these models, we use advanced EEPROM access through the BCM — extracting the security seed, generating the authentication response, and registering a fresh key table. The 2020+ also expanded the antenna network to five or six zones, improving third-row detection but adding complexity to diagnostics when antenna issues arise. Hybrid Highlander variants share the same key security system as the standard powertrain models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. LOCAL SEO ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Serving Highlander Owners Across the Greater Burbank Area</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our mobile locksmith team covers Burbank, Glendale, North Hollywood, and greater Los Angeles — wherever your Highlander is parked, we can reach you. Whether you're at the Burbank Town Center, picking up kids from a Glendale school, or stranded in a North Hollywood parking garage, our technician arrives equipped with OEM-grade diagnostic tools and blank smart key fobs ready to program. Most Highlander jobs in the greater LA area are completed curbside in under an hour, with no towing and no dealer appointment needed.
          </p>
        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions — Highlander Smart Keys</h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-card overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground text-sm">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. INTERNAL LINKS ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">More Toyota Smart Key Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/smart-key-programming/toyota", label: "Toyota Smart Key Hub" },
              { to: "/smart-key-programming/toyota/rav4", label: "Toyota RAV4 Smart Key" },
              { to: "/smart-key-programming/toyota/camry", label: "Toyota Camry Smart Key" },
              { to: "/smart-key-programming/toyota/corolla", label: "Toyota Corolla Smart Key" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-primary" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Highlander Smart Key in Burbank?</h2>
          <p className="text-muted-foreground mb-8">
            Call now for same-day Toyota Highlander smart key programming. Licensed, insured, and equipped for every Highlander model year.
          </p>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Highlander Key Service
          </a>
        </div>
      </section>

      <LocalSeoBlock vehicleName="Toyota Highlander" />

    </main>
  );
}
