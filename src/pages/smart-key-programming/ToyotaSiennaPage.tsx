import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Clock, Car, ChevronRight, MapPin, Wrench, AlertTriangle, Battery, Zap, DoorOpen, Users } from "lucide-react";

const faqItems = [
  {
    q: "Can you program a Toyota Sienna smart key without the original?",
    a: "Yes. We perform all-keys-lost programming for every Sienna generation. On 2011–2020 models we extract immobilizer data via OBD-II and register a new key in approximately 30 minutes. On 2021+ models with upgraded encryption, we use secure ECU-level access to restore full smart key operation — no dealer visit or towing required.",
  },
  {
    q: "Why does my Sienna say 'key not detected' when I'm in the rear seats?",
    a: "The Sienna's extended cabin uses multiple LF antenna zones to cover all three rows and the cargo area. If a rear or sliding-door antenna weakens — often from repeated door cycling or wiring stress — detection drops in those zones. A key fob battery below 2.8V also reduces signal range significantly.",
  },
  {
    q: "Can sliding door issues affect smart key detection?",
    a: "Indirectly, yes. Each sliding door has its own proximity antenna embedded in the handle assembly. If the wiring harness inside the sliding track is damaged from years of opening and closing, the door may not detect the key for touch-to-unlock. This doesn't affect push-to-start operation but does impact keyless entry on that door.",
  },
  {
    q: "Do I need to go to the Toyota dealer for Sienna key programming?",
    a: "No. Our mobile locksmith arrives at your Burbank location with the same diagnostic platform used by Toyota dealers. We program smart keys on-site, test all doors including sliding doors, and verify push-to-start — typically at a lower cost than dealer pricing with no appointment wait.",
  },
];

export default function ToyotaSiennaPage() {
  useEffect(() => {
    document.title =
      "Toyota Sienna Smart Key Programming Burbank | Minivan Key Replacement – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Expert Toyota Sienna smart key programming & key replacement in Burbank. Add key, all keys lost, sliding door keyless entry, push-to-start systems. Same-day mobile locksmith for 2011–2024 Sienna."
      );
    }
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
    <main className="min-h-screen bg-background">
      {/* HERO / CONVERSION */}
      <section className="bg-gradient-to-br from-primary/95 to-primary py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-primary-foreground/70 text-xs mb-6 flex-wrap">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/smart-key-programming" className="hover:text-primary-foreground transition-colors">Smart Key Programming</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/smart-key-programming/toyota" className="hover:text-primary-foreground transition-colors">Toyota</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground font-medium">Sienna</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight mb-4">
            Toyota Sienna Key Replacement &amp; Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            Locked out of your Sienna? Need a spare key for the family minivan? We provide same-day mobile smart key programming for every Toyota Sienna — from adding a spare to complete all-keys-lost recovery. Push-to-start, sliding door keyless entry, rear hatch — all programmed and tested on-site in Burbank.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+18184818185"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Phone className="w-4 h-4" /> Call Now — Sienna Key Service
            </a>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur rounded-xl px-4 py-3">
              <Clock className="w-4 h-4 text-primary-foreground/80" />
              <span className="text-primary-foreground/90 font-medium text-sm">Most jobs done in 25–40 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SIENNA SMART KEY SYSTEM WORKS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <DoorOpen className="w-6 h-6 text-accent" />
            How the Toyota Sienna Smart Key System Works
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              The Toyota Sienna uses a proximity-based Smart Key System designed specifically for a multi-door minivan environment. Unlike sedans or compact SUVs, the Sienna must maintain reliable key detection across an unusually large passenger area — three rows of seating, two power sliding doors, and a rear liftgate — each requiring its own antenna coverage zone.
            </p>
            <p>
              When you approach the vehicle, low-frequency (LF) antennas embedded in the door handles, sliding door tracks, and liftgate assembly broadcast a challenge signal. Your smart key receives this signal and responds via UHF (315 MHz) with an encrypted rolling code. The Body Control Module (BCM) validates this response and authorizes door unlock, sliding door operation, or liftgate release depending on which antenna zone detected the key.
            </p>
            <p>
              For push-to-start, the BCM sends an interior challenge through cabin-mounted LF antennas. The Sienna typically has six to eight interior antenna positions to cover the driver area, front passenger zone, second-row sliding door regions, third-row seating, and cargo area. The key must be detected inside the cabin before the BCM authorizes the ECM to enable engine start (or hybrid READY mode on 2021+ hybrid models).
            </p>
          </div>
        </div>
      </section>

      {/* MINIVAN-SPECIFIC ANTENNA ARCHITECTURE */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-accent" />
            Why Minivan Key Detection Is Different
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              The Sienna presents unique challenges that sedans and even large SUVs don't face. The cabin volume of a minivan is substantially larger, meaning LF signal coverage must extend further. The two power sliding doors add mechanical complexity — each door's antenna wiring runs through a flexible track that flexes thousands of times over the vehicle's life, making it more vulnerable to wear than a fixed door assembly.
            </p>
            <p>
              Family use introduces additional variables. Child car seats with metal frames, tablets and charging cables, diaper bags with metallic clasps, and aftermarket entertainment systems can all create minor RF interference zones. While individually insignificant, in a large cabin with already-stretched antenna coverage, these factors can contribute to intermittent "key not detected" warnings — especially in the second and third rows.
            </p>
            <p>
              The rear liftgate on the Sienna also has its own proximity antenna for hands-free operation on equipped trims. This antenna sits near the license plate area and is exposed to road spray, temperature cycling, and potential moisture intrusion more than any other antenna position on the vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON SIENNA PROBLEMS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" />
            Common Toyota Sienna Smart Key Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Wrench className="w-5 h-5 text-accent" />,
                title: "Key Not Detected in Rear Rows",
                desc: "The Sienna's extended cabin means LF signal strength is spread across more antenna zones. Weakened rear antennas or a key fob battery below 2.8V often cause detection failures in the second or third row — the driver's area works fine, but the rear doesn't.",
              },
              {
                icon: <DoorOpen className="w-5 h-5 text-accent" />,
                title: "Sliding Door Handle Antenna Failure",
                desc: "The antenna wiring in sliding door handles runs through a flexible track that cycles with every door operation. After years of daily family use, the harness can develop micro-fractures — the door won't respond to touch-to-unlock even though the key is right next to it.",
              },
              {
                icon: <AlertTriangle className="w-5 h-5 text-accent" />,
                title: "Rear Liftgate Detection Loss",
                desc: "The liftgate proximity antenna is exposed to road debris, water intrusion, and temperature extremes. Corrosion at the connector or moisture in the wiring can cause the hands-free liftgate function to stop recognizing the key while all other doors work normally.",
              },
              {
                icon: <Battery className="w-5 h-5 text-accent" />,
                title: "Low Battery — Partial Function",
                desc: "A weak CR2032 battery (below 2.8V) creates a deceptive situation: the key may still unlock doors via UHF at close range, but the LF proximity detection fails. The push-to-start button won't respond, and 'key not detected' appears on the dash.",
              },
              {
                icon: <Zap className="w-5 h-5 text-accent" />,
                title: "RF Interference from Cabin Electronics",
                desc: "Rear-seat entertainment screens, USB charging hubs, wireless headphones, and aftermarket devices common in family minivans can generate enough ambient RF noise to interfere with the key's 315 MHz response — especially in the enclosed rear cabin area.",
              },
              {
                icon: <Car className="w-5 h-5 text-accent" />,
                title: "Push Button No Response",
                desc: "If the BCM doesn't detect the key inside the cabin, the POWER button won't respond at all — no accessory mode, no engine start. This is distinct from a dead vehicle battery. Holding the key fob directly against the start button activates the backup RFID reader.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD KEY VS ALL KEYS LOST */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-accent" />
            Add a Key vs. All Keys Lost — Toyota Sienna
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-foreground text-lg">Add a Spare Key</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />Working key must be present for BCM registration</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />New key is paired alongside the existing key — straightforward process</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />No immobilizer reset required</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />All doors including sliding doors tested after programming</li>
                <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" /><strong>15–20 minutes</strong> typical completion</li>
              </ul>
            </div>
            <div className="bg-card border border-accent/30 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-foreground text-lg">All Keys Lost</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />Full immobilizer reset and security initialization required</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />2011–2020: OBD-II seed/key protocol for transponder registration</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />2021+: Enhanced encryption requiring ECU-level secure access</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />All key functions verified — proximity, sliding doors, liftgate, push-to-start</li>
                <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" /><strong>30–50 minutes</strong> depending on model year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BY YEAR / GENERATION */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Toyota Sienna Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-foreground text-lg">2011–2020 Toyota Sienna (XL30)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The third-generation Sienna introduced a mature smart key system with push-button start across most trims. These models use Toyota's H-chip transponder with rolling-code authentication. The immobilizer system is well-understood and programming is relatively straightforward with proper diagnostic tools. Key registration follows standard Toyota OBD-II protocols, and all-keys-lost recovery is achievable through seed/key extraction without component removal.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Common issues on this generation include sliding door handle antenna wear (especially on the driver-side sliding door which sees the most daily use), and gradual signal degradation in the third-row area due to antenna aging. The liftgate antenna is reasonably well-protected on this generation but can still develop moisture issues in high-humidity climates.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-foreground text-lg">2021–2024 Toyota Sienna (XL40)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The fourth-generation Sienna moved to Toyota's TNGA-K platform and is offered exclusively as a hybrid. This generation features a significantly upgraded smart key system with 128-bit AES encryption — the same security architecture found in the latest Highlander and RAV4. Key programming requires enhanced security access protocols, and all-keys-lost recovery on these models involves ECU-level procedures that are more time-intensive than the previous generation.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The hybrid powertrain means the vehicle enters READY mode rather than a traditional engine start, similar to the Prius. The smart key must be fully authenticated before the hybrid system will initialize. This generation also features more antenna positions to improve coverage across the redesigned cabin, but the added complexity of the hybrid electrical system can occasionally cause diagnostic interference during programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCC ID SECTION */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Toyota Sienna Smart Key FCC IDs</h2>
          <p className="text-muted-foreground text-sm mb-4">
            The FCC ID printed on the back of your key fob identifies the exact transmitter model and frequency. Using the correct FCC ID ensures the replacement key matches your Sienna's receiver module and encryption protocol. An incorrect FCC ID means the key physically looks right but won't communicate with the vehicle.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: "HYQ14ADR", years: "2011–2014" },
              { id: "HYQ14FBA", years: "2015–2020" },
              { id: "HYQ14FBN", years: "2021–2024" },
            ].map((fcc) => (
              <div key={fcc.id} className="bg-card border border-border rounded-xl p-4 text-center">
                <span className="block font-mono font-bold text-foreground text-sm">{fcc.id}</span>
                <span className="block text-muted-foreground text-xs mt-1">{fcc.years}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-3">
            FCC IDs may vary by trim level and optional equipment. We verify the correct part number before ordering or programming any replacement key.
          </p>
        </div>
      </section>

      {/* WHY SIENNA IS DIFFERENT */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why the Toyota Sienna Requires Specialized Key Service</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              The Sienna isn't just a large car — it's a purpose-built passenger vehicle with a door and antenna architecture that doesn't exist on any sedan, truck, or conventional SUV in the Toyota lineup. Two power sliding doors, a power liftgate, and a cabin designed for seven or eight passengers create a key detection environment that's fundamentally more complex than a four-door vehicle.
            </p>
            <p>
              Each sliding door has its own exterior handle antenna and interior detection zone. The sliding mechanism itself introduces a moving wiring harness that fixed-door vehicles never deal with. The extended third row pushes antenna coverage to its limits, and the cargo area behind the third row is the furthest point from the driver-area antennas — creating the weakest detection zone in the vehicle.
            </p>
            <p>
              On 2021+ hybrid Sienna models, the smart key system also interacts with the hybrid control module. The key must be authenticated before the high-voltage battery system is allowed to initialize — adding another layer of security verification that gas-only vehicles don't require. This is why Sienna key programming requires a technician who understands both the multi-zone antenna layout and the hybrid powertrain authorization sequence.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-accent" />
            Mobile Toyota Sienna Key Service — Burbank &amp; Surrounding Areas
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We provide on-location Toyota Sienna smart key programming throughout Burbank, Glendale, North Hollywood, and the greater Los Angeles area. Whether your Sienna is parked in your driveway, at a school, a shopping center, or a parking garage, our mobile unit comes directly to you with everything needed to program or replace your smart key. No towing, no dealer appointments, no waiting days for parts — we carry the most common Sienna key fob models in stock for same-day service.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions — Toyota Sienna Key Programming</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-5 space-y-2">
                <h3 className="font-semibold text-foreground text-sm">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-accent/95 to-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-4">
            Need Toyota Sienna Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/85 text-sm md:text-base mb-6 max-w-xl mx-auto">
            From adding a spare key to complete all-keys-lost recovery — we handle every Sienna smart key situation on-site. Same-day mobile service, OEM-grade tools, no dealer markup.
          </p>
          <a
            href="tel:+18184818185"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" /> Call Now — Toyota Sienna Key Programming
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-foreground mb-3">Related Toyota Smart Key Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/smart-key-programming/toyota" className="text-accent hover:underline text-sm font-medium">← Toyota Smart Key Programming</Link>
            <span className="text-border">|</span>
            <Link to="/smart-key-programming/toyota/camry" className="text-accent hover:underline text-sm font-medium">Toyota Camry</Link>
            <span className="text-border">|</span>
            <Link to="/smart-key-programming/toyota/corolla" className="text-accent hover:underline text-sm font-medium">Toyota Corolla</Link>
            <span className="text-border">|</span>
            <Link to="/smart-key-programming/toyota/highlander" className="text-accent hover:underline text-sm font-medium">Toyota Highlander</Link>
          </div>
        </div>
      </section>
    </main>
  );
}