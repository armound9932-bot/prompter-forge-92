import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const defined_faqs = [
  { q: "Can you program a Kia Sportage smart key without the original?", a: "Yes. All-keys-lost programming on the Sportage requires extracting the vehicle-specific PIN from the keyless module and performing a full immobilizer reset. We complete everything on-site in Burbank — no dealer tow required." },
  { q: "Why does my Sportage say 'Key Not Detected'?", a: "On the Sportage, this is often caused by a weak CR2032 fob battery, a corroded liftgate antenna connector, or the fob sitting in the cargo area behind metal objects. We diagnose the actual root cause rather than just replacing batteries." },
  { q: "What is a PIN code and why is it needed?", a: "The PIN is a vehicle-specific security credential stored in the Sportage's keyless module. Kia requires it for every key registration — it prevents unauthorized key programming. We extract it on-site using Kia-specific diagnostic software." },
  { q: "Do I need a Kia dealer to program my Sportage key?", a: "No. We carry Kia-compatible diagnostic platforms that perform the same module access, PIN extraction, and key registration as the dealer's KDS system. Mobile service across Burbank — same day, significantly lower cost." },
];

export default function KiaSportagePage() {
  useEffect(() => {
    setSeoMeta({ title: "Kia Sportage Smart Key Programming Burbank | Compact SUV Keyless Service – Burbank Auto Locksmith", description: "Expert Kia Sportage smart key programming in Burbank. SUV antenna diagnostics, PIN code extraction, immobilizer reset. Mobile locksmith — no dealer needed.", slug: "/smart-key-programming/kia/sportage" });
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
            <span className="text-primary-foreground">Sportage</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Kia Sportage Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Sportage is Kia's flagship compact SUV — and the best-selling model in their lineup for good reason. Its smart key system shares the Hyundai Motor Group platform but uses Kia-specific module addresses, diagnostic protocols, and PIN formats that require dedicated tooling. We program Sportage keys across every generation on-site in Burbank with the right software — not Hyundai tools hoping they'll work.
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
            <Cpu className="w-6 h-6 text-accent" /> How the Sportage Smart Key System Works
          </h2>
          <p className="text-muted-foreground mb-4">
            Kia's keyless entry and push-to-start system is built on a module architecture that handles fob detection, rolling-code validation, and immobilizer authorization. While structurally related to Hyundai's SMK, the Sportage's implementation uses different CAN bus addresses and diagnostic handshake sequences — a distinction that matters when programming keys.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">LF Antenna Network — SUV Layout</h3>
              <p className="text-muted-foreground text-sm">
                The Sportage uses 125 kHz Low-Frequency antennas in the front door handles, dashboard, center console, and liftgate. As a compact SUV, it has more antenna positions than the Optima sedan but fewer than a full-size Telluride — four to five zones depending on trim and generation.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Rolling-Code Validation</h3>
              <p className="text-muted-foreground text-sm">
                When the LF signal wakes the fob, it responds at 315 MHz with an encrypted rolling code. The Sportage's module validates this against stored key IDs. Kia's rolling-code algorithm has evolved across generations — the 5th-gen NQ5 uses significantly stronger encryption than the SL or QL platforms.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Dual-Path Authorization</h3>
              <p className="text-muted-foreground text-sm">
                The Sportage uses a two-stage security process: the keyless module validates the fob's rolling code for door access, then the immobilizer separately verifies the transponder chip for engine start. Both must succeed — a key registered to only one path will unlock doors but won't crank the engine.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Kia-Specific PIN Registration</h3>
              <p className="text-muted-foreground text-sm">
                Every Sportage key registration requires a vehicle-specific PIN tied to the VIN. Kia's PIN format and extraction address differ from Hyundai — using the wrong diagnostic path returns garbage data. We use Kia-licensed software that queries the correct module endpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Kia Sportage" />


      {/* SUV Behavior */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-accent" /> Compact SUV Detection Behavior
          </h2>
          <p className="text-muted-foreground mb-4">
            The Sportage occupies the middle ground between sedan simplicity and full-size SUV complexity. Its cabin is large enough to introduce SUV-specific detection challenges, but compact enough that most issues are manageable:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Rear Hatch Detection Zone</h3>
              <p className="text-muted-foreground text-sm">
                The Sportage's liftgate antenna covers the cargo area — but the signal drops off when the fob ends up under heavy luggage or behind metal objects like strollers. The detection zone is more generous than a sedan trunk but less reliable than the front-seat area.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Rear Seat Marginal Coverage</h3>
              <p className="text-muted-foreground text-sm">
                Fobs placed in rear-seat pockets or left in a jacket on the back seat can trigger intermittent detection. The dashboard and center console antennas have limited reach past the B-pillar — this is where the Sportage's compact SUV size starts to show its limits.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Walk-Around Handoff</h3>
              <p className="text-muted-foreground text-sm">
                Moving from the driver's door to the liftgate, the module must hand off between door handle and liftgate antenna zones. On older Sportage models (QL), this transition can be sluggish — creating a brief detection gap at the rear quarter panel.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Roof Rack & Cargo Interference</h3>
              <p className="text-muted-foreground text-sm">
                Sportage owners with aftermarket roof racks or cargo carriers report slightly higher rates of detection inconsistency. Metal bars running across the roof can attenuate the LF signal, particularly when the fob is positioned on the rear seat below the rack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Kia Sportage Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "The Sportage's most common complaint. Causes range from a dead CR2032 to a corroded liftgate antenna connector — the hinge-routed wiring is the weak link on QL and NQ5 models, just as it is on the Tucson platform they share." },
              { title: "Push Button — No Crank", desc: "Fob detected, dash active, but engine won't start. On the Sportage, check the brake pedal switch first — it fails more often than the key system. If the brake switch is good, the immobilizer transponder handshake may be timing out." },
              { title: "Intermittent Detection", desc: "Works at the front door, fails at the liftgate. Or works in the morning, fails in the afternoon heat. Temperature-related CR2032 drain is common in Burbank summers — the fob battery drops below the module's threshold faster when heat-soaked." },
              { title: "Liftgate Won't Respond", desc: "The power liftgate button ignores the fob entirely. The rear antenna wire routes through the liftgate hinge grommet — repeated open/close cycles fatigue the harness. We see this starting around 45,000 miles on 2017+ models." },
              { title: "Doors Unlock But No Start", desc: "UHF remote works for lock/unlock, but the LF proximity system fails at the start button. Points to a dashboard antenna fault — the module can't confirm the fob is inside the cabin for engine authorization." },
              { title: "Module Communication Fault", desc: "Diagnostic tool can't connect to the keyless module. Common after aftermarket dashcam hardwiring or alarm installations that introduce voltage drops on the CAN bus near the A-pillar." },
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
                <li>• New fob registered to keyless entry + immobilizer</li>
                <li>• Typically 20–35 minutes for the Sportage</li>
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
                <li>• 45–90 minutes depending on Sportage generation</li>
                <li>• All previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sportage Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2011–2016 Sportage (SL — 3rd Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The third-generation Sportage introduced Kia's smart key option on higher trims. The module architecture is first-generation — functional encryption with a simpler antenna layout. Programming is the most straightforward of any Sportage generation, and the detection system is robust for its era.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5HMFNA04 — standard 4-button fob shared with early Kia platform</li>
                <li>• PIN code required for all key programming</li>
                <li>• Base models use traditional transponder key with remote head (ID46 chip)</li>
                <li>• Smart key available on EX and SX trims</li>
                <li>• Three LF antenna zones: door handles and dashboard</li>
                <li>• Module location behind lower dash — standard access point</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2017–2022 Sportage (QL — 4th Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The fourth-generation Sportage brought significant security upgrades. Stronger rolling-code encryption, an additional liftgate antenna, and improved module firmware made the system more reliable — but introduced the liftgate hinge wiring vulnerability that we still see regularly in the field.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F13 — updated slim fob design</li>
                <li>• Enhanced encryption — older diagnostic tools may not support it</li>
                <li>• Liftgate antenna added — routed through hinge grommet</li>
                <li>• Power liftgate models more prone to antenna wire fatigue</li>
                <li>• SX Turbo trim uses same fob as standard — no programming difference</li>
                <li>• PIN extraction requires Kia-specific software path</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2023–2024 Sportage (NQ5 — 5th Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The current-generation Sportage shares its N3 platform with the Hyundai Tucson NX4 but uses Kia-specific module firmware and diagnostic access. AES-128 encryption, a potential security gateway requirement, and five antenna zones make it the most complex Sportage to program — we carry the updated tools and subscriptions to handle it.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F24 — compact fob with updated internals</li>
                <li>• AES-128 transponder encryption — requires current diagnostic software</li>
                <li>• Security gateway on some trims may require server authentication</li>
                <li>• Five LF antenna zones: both doors, dash, console, liftgate</li>
                <li>• Hybrid/PHEV models use same fob — different immobilizer pathway</li>
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
                Kia dealers use KDS (Kia Diagnostic System) to access the Sportage's keyless module, extract the PIN, and register keys. For a compact SUV, this means dealer scheduling, $200+ for programming alone, and potentially towing if all keys are lost.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry Kia-licensed diagnostic software — not Hyundai tools repurposed for Kia. We drive to your Sportage's location in Burbank, complete the work same-day, and undercut dealer pricing. No towing your compact SUV to a service bay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Sportage Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Shared Platform, Different Software</h3>
              <p className="text-muted-foreground text-sm">
                The NQ5 Sportage and NX4 Tucson share the N3 platform — same factory, same assembly line. But Kia's module firmware, CAN bus addresses, and PIN extraction endpoints are different. We've seen locksmiths spend hours trying to program a Sportage with Hyundai software before calling us. It doesn't work — you need Kia-specific access.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Liftgate Hinge — the Known Weak Spot</h3>
              <p className="text-muted-foreground text-sm">
                The QL and NQ5 Sportage route the liftgate antenna wire through the same hinge grommet design as the Tucson. We see fatigue breaks starting around 40,000–50,000 miles — especially on power liftgate models. Always check the harness continuity before assuming a fob problem when rear detection fails.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Burbank Heat and Fob Batteries</h3>
              <p className="text-muted-foreground text-sm">
                Sportage fobs left on the dashboard in Burbank's summer heat experience accelerated CR2032 drain. The module's standby polling draws more current from a heat-stressed battery — we recommend replacing the battery every 12–15 months for Sportage owners who park outdoors regularly.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Dual Registration Still Applies</h3>
              <p className="text-muted-foreground text-sm">
                Like the Optima, the Sportage requires dual registration — keyless entry module and immobilizer. An incomplete programming attempt that only registers to one path results in a key that unlocks doors but won't start the engine, or a key that starts the engine only when held against the start button (bypassing proximity).
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/kia/sportage" brandSlug="kia" />


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
                Our primary Kia Sportage service area. Whether you're near the Empire Center, Chandler Bikeway, or the Riverside Drive corridor, we arrive with Kia-specific diagnostic equipment. Most Sportage jobs completed within 25–60 minutes on-site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Minutes east of Burbank — we service Sportage owners throughout Glendale, from the Galleria to Adams Hill and the Verdugo Woodlands. Same-day availability for add-a-key and all-keys-lost emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service area. We handle Sportage smart key programming in the Arts District, Valley Village, and Toluca Lake.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across greater LA for Kia Sportage key programming. Contact us for availability beyond our core Burbank coverage — we regularly service Koreatown, Silver Lake, and the Westside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Kia Sportage Smart Key FAQ</h2>
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
            Need Kia Sportage Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service for your Sportage. Module diagnostics, PIN extraction, and key programming — all at your location. Kia-specific tools, not Hyundai workarounds.
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
