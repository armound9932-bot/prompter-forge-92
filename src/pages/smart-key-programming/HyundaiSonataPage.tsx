import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const defined_faqs = [
  { q: "Can you program a Hyundai Sonata smart key without the original?", a: "Yes. All-keys-lost programming on the Sonata requires PIN code extraction from the SMK module and a full immobilizer reset cycle. We carry the Hyundai-specific diagnostic tools to complete this at your location in Burbank — no dealership visit needed." },
  { q: "Why does my Sonata say 'Key Not Detected'?", a: "The most common cause is a depleted CR2032 battery in the fob. On the Sonata specifically, a weak 12V vehicle battery can also cause the SMK to fail its LF antenna polling cycle — the module simply doesn't have enough stable voltage to complete the handshake." },
  { q: "What is a PIN code and why is it needed?", a: "The PIN is a vehicle-specific security credential tied to your Sonata's VIN. Hyundai requires it to authorize any new key registration through the SMK module. Without the correct PIN, the immobilizer will reject the new key's transponder ID — it's Hyundai's core anti-theft safeguard." },
  { q: "Do I need a Hyundai dealer to program my Sonata key?", a: "No. A qualified automotive locksmith with Hyundai-compatible diagnostic software can perform the same SMK access, PIN extraction, and key registration that the dealer does — at your location, same day, and at lower cost." },
];

export default function HyundaiSonataPage() {
  useEffect(() => {
    setSeoMeta({ title: "Hyundai Sonata Smart Key Programming Burbank | SMK System – Burbank Auto Locksmith", description: "Expert Hyundai Sonata smart key programming in Burbank. SMK module diagnostics, PIN code extraction, immobilizer reset for all Sonata generations. Mobile locksmith — no dealer needed.", slug: "/smart-key-programming/hyundai/sonata" });
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
            <span className="text-primary-foreground">Sonata</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Hyundai Sonata Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Sonata is Hyundai's flagship sedan — and its Smart Key Module carries more advanced security than the Elantra. From the YF generation through the current DN8, the Sonata's SMK architecture has evolved through three distinct security tiers. We program all of them on-site across Burbank.
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

      {/* SMK System */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-accent" /> Sonata's Smart Key Module (SMK) Architecture
          </h2>
          <p className="text-muted-foreground mb-4">
            The Sonata runs a more capable version of Hyundai's SMK platform than the Elantra. The mid-size sedan's longer wheelbase means additional antenna coverage, and higher trim levels (Limited, N Line) carry upgraded encryption that matches what you'd find in the Genesis lineup. The SMK module itself is the single controller managing all keyless functions — from fob detection to engine authorization.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">LF Antenna Polling</h3>
              <p className="text-muted-foreground text-sm">
                The Sonata's SMK drives four LF (125 kHz) antennas — two in the front door handles, one in the dashboard, and one in the rear parcel shelf. The sedan's compact cabin geometry means these antennas provide tighter, more reliable coverage than SUV platforms — fewer dead zones and faster detection cycles.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Rolling-Code Response</h3>
              <p className="text-muted-foreground text-sm">
                When a valid fob enters the LF field, it responds at 315 MHz with an encrypted rolling code. The Sonata's SMK validates this against its stored key table — up to 6 registered key IDs on most generations. Each response is unique, preventing replay attacks.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">SMK → ECU Handshake</h3>
              <p className="text-muted-foreground text-sm">
                Pressing the start button triggers a cryptographic challenge from the SMK to the ECU via the vehicle's CAN bus. The fob's embedded transponder must produce the correct response — if this handshake fails, the immobilizer blocks fuel delivery and ignition timing.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN-Gated Registration</h3>
              <p className="text-muted-foreground text-sm">
                Every key registration event on the Sonata requires the vehicle's PIN code. This is non-negotiable — Hyundai doesn't offer an onboard learning procedure like Ford's two-key method. The PIN must be extracted from the SMK using diagnostic software connected through the OBD-II port.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Hyundai Sonata" />


      {/* Sedan Advantage */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-accent" /> Sedan Advantage: Why Sonata Detection is More Reliable
          </h2>
          <p className="text-muted-foreground mb-4">
            Compared to SUVs like the Tucson or Santa Fe, the Sonata's sedan profile actually works in its favor for smart key performance. Here's why:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Compact Cabin Geometry</h3>
              <p className="text-muted-foreground text-sm">The Sonata's lower roofline and narrower cabin mean LF antenna signals overlap more effectively. There's no third-row dead zone or cavernous cargo area to create detection gaps.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Faster Detection Cycles</h3>
              <p className="text-muted-foreground text-sm">With fewer antenna zones to poll, the SMK completes its sweep faster. Walk-up-and-grab detection on the Sonata is noticeably snappier than on Hyundai's larger platforms.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">More Stable Signal Zones</h3>
              <p className="text-muted-foreground text-sm">No liftgate hinge wiring to fatigue, no sliding door antenna harnesses. The Sonata's fixed trunk lid means the rear antenna connection stays reliable over the vehicle's lifetime.</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Trunk Release Consistency</h3>
              <p className="text-muted-foreground text-sm">The trunk-mounted proximity sensor on the Sonata gets a cleaner signal path than SUV liftgate sensors. Hands-free trunk release failures are rare compared to hatch-equipped models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Hyundai Sonata Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "Usually a dead CR2032 fob battery. On the Sonata specifically, voltage dips from a marginal 12V battery can also prevent the SMK from completing its antenna polling — the module needs stable power to drive all four LF antennas." },
              { title: "Push Button — No Crank", desc: "Fob is detected but the engine won't turn. Common causes: failed brake pedal position switch (the SMK requires brake input to authorize start), or a transponder authentication timeout on the CAN bus." },
              { title: "Intermittent Detection", desc: "Key works 80% of the time. On 2015–2019 Sonatas, this often traces to corroded antenna connector pins at the door handle — moisture ingress through the handle seal is a known weak point." },
              { title: "Doors Unlock But No Start", desc: "The UHF rolling code works for entry, but the LF proximity challenge fails at the start button. This typically indicates a failing dashboard antenna or an SMK module that's losing its internal calibration." },
              { title: "SMK Communication Fault", desc: "Diagnostic tool can't reach the SMK module. On the Sonata, check the 10A fuse in the interior panel first — aftermarket dash cam installations frequently tap into the wrong circuit and blow this fuse." },
              { title: "Key Programmed — Won't Start", desc: "New key registers to the SMK but the ECU rejects the transponder handshake. This is usually a firmware version mismatch between the SMK and ECU — particularly common on 2016–2018 models that received mid-cycle updates." },
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
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Add a Spare Key
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Working key present — SMK already authenticated</li>
                <li>• PIN code extracted via OBD-II diagnostic port</li>
                <li>• New key ID added to existing key table</li>
                <li>• Existing keys remain fully functional</li>
                <li>• Typical completion: 15–25 minutes on the Sonata</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 border-accent/30">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• No working key — SMK key table must be cleared</li>
                <li>• PIN code extraction mandatory before reset</li>
                <li>• Full immobilizer reset and reauthorization cycle</li>
                <li>• New key(s) registered from empty table</li>
                <li>• All previous keys permanently deauthorized</li>
                <li>• Extended procedure: 40–75 minutes depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sonata Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2011–2014 Sonata (6th Gen / YF)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The YF Sonata was one of the first Hyundai models to adopt smart key across most trim levels. The SMK system on these models uses first-generation encryption — effective but less complex than later iterations. Programming is straightforward with the correct PIN.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5HMFNA04 — standard 4-button fob</li>
                <li>• SMK located behind lower dashboard panel, driver's side</li>
                <li>• Three LF antennas (doors + dash) — no rear antenna on base trims</li>
                <li>• PIN code required for all key registration</li>
                <li>• Base models (GLS) may use traditional transponder key with ID46 chip</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2015–2019 Sonata (7th Gen / LF)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The LF generation brought significant SMK improvements — enhanced rolling-code encryption, a fourth antenna in the rear parcel shelf, and better moisture sealing on door handle sensors. Smart key became standard across all trims. This is the generation we service most frequently in Burbank.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: CQOFD00120 (base) or TQ8-FOB-4F11 (Sport/Limited)</li>
                <li>• Four LF antennas — improved rear-seat detection</li>
                <li>• Enhanced rolling-code algorithm — harder to intercept</li>
                <li>• Known issue: door handle antenna corrosion on 2016–2018 models</li>
                <li>• SMK firmware updates may be required for all-keys-lost scenarios</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2020–2024 Sonata (8th Gen / DN8)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The current-generation Sonata uses Hyundai's most sophisticated smart key platform. AES-128 encryption on the transponder, a security gateway module that gates diagnostic access, and optional Digital Key (phone-based entry) make this the most complex Sonata to program — but our tools handle it.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F37 — slim-profile design with trunk release</li>
                <li>• AES-128 transponder encryption — requires current diagnostic software</li>
                <li>• Security gateway may require online authentication for key registration</li>
                <li>• Digital Key (NFC phone-based) available — independent of fob programming</li>
                <li>• All-keys-lost procedure requires extended security access cycle</li>
                <li>• N Line and Limited trims may have additional security layers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Programming Complexity: Locksmith vs. Dealer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Dealer Approach</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai dealers use GDS (Global Diagnostic System) connected to their online server for PIN verification and key registration. The technical process is identical to what we perform — but with dealership overhead, appointment scheduling, and often a requirement to tow the vehicle in.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Our Mobile Approach</h3>
              <p className="text-muted-foreground text-sm">
                We use Hyundai-compatible diagnostic platforms with active software subscriptions that provide the same SMK access, PIN extraction, and key registration capabilities. The difference: we drive to you in Burbank, complete the work same-day, and charge significantly less than dealer pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Sonata Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Door Handle Antenna Corrosion</h3>
              <p className="text-muted-foreground text-sm">
                The 2015–2019 LF Sonata has a documented issue with moisture reaching the LF antenna inside the door handle assembly. The corrosion builds gradually — you'll see intermittent "Key Not Detected" on one specific door before it fails completely. We check antenna resistance as part of every Sonata diagnostic.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">SMK Voltage Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                The Sonata's SMK module is particular about voltage. A 12V battery reading 11.8V under load — perfectly fine for cranking — can cause the SMK to drop its antenna polling frequency. The result looks like a key problem, but it's a vehicle power issue. We always verify battery health before starting key diagnostics.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Smoother Than SUV Systems</h3>
              <p className="text-muted-foreground text-sm">
                Compared to Hyundai's Tucson or Santa Fe, the Sonata's key programming process is consistently smoother. The sedan's simpler antenna layout means fewer module communication hiccups, and the SMK's shorter polling loop translates to faster key registration. Most add-a-key jobs finish in under 20 minutes.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Aftermarket Remote Start Conflicts</h3>
              <p className="text-muted-foreground text-sm">
                Aftermarket remote start systems on the Sonata frequently conflict with the SMK. The bypass module used to trick the immobilizer can interfere with new key registration if it's not properly isolated during the programming session. We always identify and account for these before connecting our diagnostic tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/hyundai/sonata" brandSlug="hyundai" />


      {/* Local SEO */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-accent" /> Serving Burbank and Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm">
                Our core service area for Hyundai Sonata smart key programming. Whether you're near the Media District, Magnolia Park, or the Empire Center, we arrive fully equipped. The Sonata is one of the most common Hyundai models we service in Burbank — our techs know these cars inside out.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Adjacent to Burbank — we service Sonata owners throughout downtown Glendale, the Americana area, and the surrounding hillside communities. Same-day scheduling available for both add-a-key and all-keys-lost situations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Just south of Burbank, NoHo falls within our primary response zone. We handle Sonata key programming in the Arts District, Valley Village, and the Lankershim corridor — fast response for emergency lockouts and key replacements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across the greater LA area for Hyundai Sonata key programming. Contact us for scheduling and availability — we cover most of the San Fernando Valley and central Los Angeles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hyundai Sonata Smart Key FAQ</h2>
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

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-accent/90 to-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-3">
            Need Hyundai Sonata Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service. SMK diagnostics, PIN extraction, and key programming — completed at your location. No tow, no dealer appointment, no waiting.
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