import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const defined_faqs = [
  { q: "Can you program a Kia Optima smart key without the original?", a: "Yes. All-keys-lost programming on the Optima requires extracting the vehicle-specific PIN code from the immobilizer module and performing a full reset. We handle everything on-site in Burbank — no dealer tow needed." },
  { q: "Why does my Optima say 'Key Not Detected'?", a: "Common causes include a depleted CR2032 fob battery, a failing antenna in the door handle or steering column area, or interference from aftermarket accessories. On the Optima's compact cabin, detection issues usually trace to fob battery condition or module faults rather than antenna coverage gaps." },
  { q: "What is a PIN code and why does my locksmith need it?", a: "The PIN is a vehicle-specific security credential tied to the VIN and stored in the Optima's immobilizer module. Kia requires it for any key registration — it's the system's primary defense against unauthorized programming. We extract it on-site with diagnostic software." },
  { q: "Do I need a Kia dealer to program my Optima key?", a: "No. We carry Kia-compatible diagnostic platforms that perform the same module access, PIN extraction, and key registration as the dealer's KDS system. Mobile service across Burbank — same day, lower cost, no appointment wait." },
];

export default function KiaOptimaPage() {
  useEffect(() => {
    setSeoMeta({ title: "Kia Optima Smart Key Programming Burbank | Keyless Entry & Immobilizer – Burbank Auto Locksmith", description: "Expert Kia Optima smart key programming in Burbank. Immobilizer diagnostics, PIN code extraction, keyless entry repair. Mobile locksmith — no dealer needed.", slug: "/smart-key-programming/kia/optima" });
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
            <Link to="/smart-key-programming/kia" className="hover:underline">Kia</Link> &gt;{" "}
            <span className="text-primary-foreground">Optima</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Kia Optima Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Kia Optima's smart key system shares DNA with Hyundai — they're built on the same platform — but the programming workflow, module addresses, and diagnostic access differ in ways that trip up locksmiths who treat them as identical. We've programmed hundreds of Optima keys across every generation and know exactly where Kia's implementation diverges. On-site service across Burbank with dealer-equivalent tools.
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

      {/* Kia Smart Key System */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-accent" /> How the Kia Optima's Smart Key System Works
          </h2>
          <p className="text-muted-foreground mb-4">
            Kia's keyless system uses a module architecture that's structurally similar to Hyundai's SMK — both brands share the Hyundai Motor Group platform. But Kia uses different module addresses, different diagnostic protocols, and sometimes different PIN code formats. A tool configured for Hyundai won't always communicate correctly with a Kia module — the software must be set to the Kia-specific access path.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">LF Antenna Detection</h3>
              <p className="text-muted-foreground text-sm">
                The Optima uses 125 kHz Low-Frequency antennas in the front door handles, dashboard, and center console. As a mid-size sedan, the antenna layout is compact and efficient — the cabin volume is small enough that three antenna zones provide reliable detection throughout the interior.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Encrypted Response</h3>
              <p className="text-muted-foreground text-sm">
                When the LF signal wakes the fob, it responds at 315 MHz with an encrypted rolling code. The Optima's module validates this code against its stored key list. Kia's rolling-code algorithm evolved significantly between the TF and JF generations — older tools may not support newer encryption.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Immobilizer → ECU Handshake</h3>
              <p className="text-muted-foreground text-sm">
                The Optima's immobilizer verifies the transponder chip in the fob before authorizing engine start. Kia's implementation routes this through the body control electronics — the module must confirm both the rolling code (for door access) and the transponder ID (for ignition) in sequence.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN Code Registration</h3>
              <p className="text-muted-foreground text-sm">
                Like Hyundai, Kia requires a vehicle-specific PIN for key registration. But Kia's PIN format and extraction method differ — the diagnostic software must query the correct Kia module address. Using Hyundai PIN extraction on a Kia will return incorrect data or no data at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Kia Optima" />


      {/* Sedan Behavior */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-accent" /> Mid-Size Sedan Detection Advantages
          </h2>
          <p className="text-muted-foreground mb-4">
            The Optima's sedan form factor works in its favor when it comes to smart key reliability. Compared to SUVs like the Sorento or Telluride, the Optima's compact cabin creates a more predictable detection environment:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Consistent Signal Coverage</h3>
              <p className="text-muted-foreground text-sm">
                Three antenna zones in a sedan-sized cabin means strong overlap between detection areas. The fob is almost always within range of at least two antennas simultaneously — which is why "Key Not Detected" in an Optima usually points to a fob or module issue, not an antenna gap.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Faster Detection Cycles</h3>
              <p className="text-muted-foreground text-sm">
                With fewer antenna zones to poll, the Optima's module completes detection faster than a 7-zone SUV. Walk-up response is snappy — you touch the door handle and hear the unlock within a fraction of a second on a healthy system.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Stable Trunk Detection</h3>
              <p className="text-muted-foreground text-sm">
                The Optima's trunk antenna is close to the cabin, so detection rarely drops off the way it does in a deep SUV cargo bay. Fobs left in a bag in the trunk are usually still detected — though we still recommend keeping it on your person.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Fewer Environmental Interferences</h3>
              <p className="text-muted-foreground text-sm">
                Without the large metal surfaces and multi-row seating of an SUV, the Optima experiences less RF reflection and signal attenuation. Metal objects in the cabin have less impact on detection than in a vehicle with a larger metallic interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Kia Optima Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "In a sedan with good antenna coverage, this almost always means a dead CR2032 fob battery or a module fault — not an antenna gap. We check battery voltage first, then move to module diagnostics if the battery tests good." },
              { title: "Push Button — No Crank", desc: "Dashboard lights up but the engine won't turn over. On the Optima, this is frequently a brake pedal position switch failure or an immobilizer authentication timeout. The key is detected for door unlock but fails the transponder challenge for engine start." },
              { title: "Intermittent Detection", desc: "Key works most of the time but occasionally fails. On the Optima, we trace this to marginal fob batteries more often than module faults. The 2016–2019 models are particularly sensitive to CR2032 voltage drop — the module's detection threshold is set slightly higher than older models." },
              { title: "Key Programmed But Won't Start", desc: "The fob registers to the module but the immobilizer handshake fails. This is a Kia-specific issue — the key must be registered to both the keyless entry module and the immobilizer. If the PIN authorization didn't complete for both, the key opens doors but won't start the engine." },
              { title: "Module Communication Loss", desc: "The diagnostic tool can't reach the Optima's keyless module. Common after aftermarket remote start installations that splice into the ignition harness, or after a dead battery that caused the module to lose its power reference." },
              { title: "Trunk Button Unresponsive", desc: "The smart trunk release on the fob or the trunk button doesn't respond. This is separate from the proximity detection system — it's the UHF command path. Usually a fob button membrane failure rather than a vehicle-side issue." },
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
                <li>• Working key present — module already authenticated</li>
                <li>• PIN code extracted via OBD-II diagnostic port</li>
                <li>• New fob registered to both keyless entry and immobilizer</li>
                <li>• Typically 20–30 minutes for the Optima</li>
                <li>• All existing keys remain functional</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 border-accent/30">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• No working key — full module reset required</li>
                <li>• PIN code extraction mandatory</li>
                <li>• Immobilizer reset and key slot clearing</li>
                <li>• New key(s) registered from scratch</li>
                <li>• 40–80 minutes depending on Optima generation</li>
                <li>• All previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Optima Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2011–2015 Optima (TF — 3rd Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The third-generation Optima introduced Kia's smart key system to the mid-size sedan segment. The module architecture is first-generation — functional but less secure than later models. Programming is straightforward with the right Kia-specific diagnostic access, and the encryption is manageable with current tools.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5HMFNA04 — shared fob platform with early Hyundai models</li>
                <li>• PIN code required for all programming — standard Kia format</li>
                <li>• Base models (LX) may use traditional transponder key with remote head</li>
                <li>• Smart key standard on EX and SX trims</li>
                <li>• Module accessible behind lower dashboard — standard diagnostic location</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2016–2020 Optima (JF — 4th Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The fourth-generation Optima significantly upgraded its keyless system. Stronger rolling-code encryption, an updated module with faster polling, and improved antenna sensitivity made the system more reliable — but also more complex to program. This generation represents the sweet spot between accessibility and security.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F10 — redesigned slim-profile fob</li>
                <li>• Enhanced encryption — older diagnostic tools may not support it</li>
                <li>• Detection threshold raised — marginal batteries fail sooner</li>
                <li>• Hybrid models (PHEV) use same fob but different immobilizer pathway</li>
                <li>• Aftermarket remote start interference more common on this generation</li>
                <li>• PIN extraction requires Kia-specific software path — not interchangeable with Hyundai</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2021–2024 K5 (DL3 — Optima Successor)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Kia renamed the Optima to K5 starting in 2021, but the smart key architecture evolved continuously. AES-128 encryption, a potential security gateway requirement, and an updated module design make the K5 the most complex in the Optima lineage. We program K5 keys with the same on-site mobile service.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F24 — updated compact fob with new internals</li>
                <li>• AES-128 encryption — requires current diagnostic software version</li>
                <li>• Security gateway on some trims may require online server authentication</li>
                <li>• Four LF antenna zones: both door handles, dash, and center console</li>
                <li>• Digital key support on GT-Line and above — separate from fob programming</li>
                <li>• All-keys-lost procedure significantly longer due to enhanced security</li>
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
              <h3 className="font-semibold text-foreground mb-2">What the Dealer Does</h3>
              <p className="text-muted-foreground text-sm">
                Kia dealers use KDS (Kia Diagnostic System) to access the keyless module, extract the PIN, and register keys. For the Optima, this means scheduling around dealer availability, paying $200+ for programming alone, and often waiting days for an appointment slot.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry Kia-compatible diagnostic platforms — not Hyundai tools reconfigured for Kia, but software specifically licensed for Kia module access. We drive to your Optima's location in Burbank, complete the work the same day, and price consistently below dealer rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Optima Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Kia ≠ Hyundai in Practice</h3>
              <p className="text-muted-foreground text-sm">
                The most common mistake we see other locksmiths make: treating a Kia Optima like a Hyundai Sonata. The platforms share hardware roots, but Kia's module addresses, PIN formats, and diagnostic handshakes are different. Using Hyundai-specific paths on a Kia results in failed communications, incorrect PIN data, or partial programming that leaves the key able to unlock doors but unable to start the engine.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">2016–2019 Detection Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                The JF-generation Optima has a higher detection threshold than earlier models. A CR2032 battery that would still work in a 2013 Optima will trigger "Key Not Detected" in a 2018. We always carry fresh batteries and test the fob's output before assuming a module fault on these model years.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Aftermarket Remote Start Conflicts</h3>
              <p className="text-muted-foreground text-sm">
                The Optima is a popular target for aftermarket remote start installations — and we see a disproportionate number of smart key issues on cars that have one. Improperly wired remote start modules can interrupt the immobilizer handshake, causing intermittent "Key Not Detected" or "push button no start" errors that appear random.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Dual Registration Requirement</h3>
              <p className="text-muted-foreground text-sm">
                On the Optima, the fob must be registered to both the keyless entry module and the immobilizer module. If PIN authorization only completes for one, the key will unlock doors but won't start the car — or vice versa. This dual-registration step is where incomplete programming attempts by other shops usually fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/kia/optima" brandSlug="kia" />


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
                Our primary Kia Optima service area. Whether you're near the Empire Center, Magnolia Park, or the Rancho neighborhood, we arrive with Kia-specific diagnostic equipment. Most Optima jobs completed within 25–50 minutes on-site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Minutes east of Burbank — we service Optima owners throughout Glendale, from Brand Boulevard to the Montrose Shopping Park. Same-day availability for add-a-key and all-keys-lost situations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service radius. We handle Optima smart key programming throughout the Arts District, Valley Village, and the Vineland corridor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across greater LA for Kia Optima key programming. Contact us for availability beyond our core Burbank coverage — we regularly service Koreatown, Hollywood, and the Westside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Kia Optima Smart Key FAQ</h2>
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
            Need Kia Optima Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service for your Optima or K5. Module diagnostics, PIN extraction, and key programming — all at your location. Kia-specific tools, not generic guesswork.
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
