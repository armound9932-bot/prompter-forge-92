import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cpu, Phone, CheckCircle, AlertTriangle, Shield, MapPin, ArrowRight } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


export default function NissanAltimaPage() {
  useEffect(() => {
    setSeoMeta({ title: "Nissan Altima Key Programming Burbank | Intelligent Key & BCM Reset – Burbank Auto Locksmith", description: "Nissan Altima smart key programming in Burbank. Intelligent Key system, BCM reset, PIN code access, all keys lost recovery. Same-day mobile locksmith. Licensed & insured.", slug: "/smart-key-programming/nissan/altima" });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Nissan Altima key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform full all-keys-lost recovery on every Altima generation. The procedure requires a BCM key profile reset and Nissan-specific PIN code extraction — all completed on-site without a dealer visit." }},
        { "@type": "Question", name: "Why does my Nissan Altima say no key detected?", acceptedAnswer: { "@type": "Answer", text: "The most common cause is a CR2032 fob battery below operating threshold. The fob retains enough power for passive door unlock but fails the stronger encrypted handshake required for push-to-start. BCM antenna faults and aftermarket electronics interference are secondary causes." }},
        { "@type": "Question", name: "What is a Nissan BCM reset?", acceptedAnswer: { "@type": "Answer", text: "A BCM (Body Control Module) reset clears all stored key profiles from the Altima's security system. This is required when all keys are lost or when the BCM can't authenticate any existing fob. After the reset, new keys are registered fresh using Nissan's PIN-based security access protocol." }},
        { "@type": "Question", name: "Do I need a Nissan dealer for Altima key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified locksmith with Nissan CONSULT-compatible diagnostic tools and PIN code access can perform identical programming on-site — same security protocols, faster service, and lower cost than a dealership appointment." }},
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link><span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link><span>/</span>
            <Link to="/smart-key-programming/nissan" className="hover:text-primary transition-colors">Nissan</Link><span>/</span>
            <span className="text-foreground font-medium">Altima</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Nissan Altima Key Replacement & Smart Key Programming in Burbank</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            The Altima runs on Nissan's Intelligent Key platform — a BCM-centric architecture that's fundamentally different from Toyota or Honda systems. Whether you need a spare fob registered or you've lost every key, our mobile locksmith handles Nissan Altima key programming on-site across Burbank with CONSULT-level diagnostic tools and PIN code security access. No dealer appointment, no towing, no waiting days for a service slot.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> Call Now — Altima Key Service
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-8">
            {["Intelligent Key & BCM Programming", "Add Key or All Keys Lost", "Same-Day Mobile in Burbank"].map(t => (
              <div key={t} className="flex items-start gap-2 bg-card border border-border rounded-xl p-3">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NISSAN INTELLIGENT KEY SYSTEM */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Intelligent Key — How It Differs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Nissan's Intelligent Key system centers entirely on the Body Control Module (BCM). Unlike Toyota's split ECU/smart-key-ECU architecture or Honda's distributed module approach, Nissan routes all key authentication — passive entry, push-to-start, immobilizer — through a single BCM. This design simplifies the communication chain but makes the BCM a single point of failure.
              </p>
              <p>
                The fob communicates over two frequencies: LF (low frequency) antennas in the door handles and cabin broadcast a wake-up challenge, and the fob responds over UHF (315 MHz) with a rolling-code encrypted payload. The BCM decrypts the response using Nissan's proprietary algorithm and either authorizes or rejects the key — all in under 200 milliseconds.
              </p>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                What sets Nissan apart from other manufacturers is how heavily the BCM controls key management. Adding or removing keys, resetting the immobilizer, even diagnosing antenna issues — everything passes through BCM firmware. This is why Nissan key programming consistently requires PIN code security access, even for simple add-key operations on newer models.
              </p>
              <p>
                The Altima's sedan cabin works well with this architecture. Three LF antenna zones (driver door, passenger door, and interior cabin) provide fast, reliable detection without the multi-zone complexity of SUVs. The BCM cycles through all three zones in a tight polling loop, giving the Altima one of the most responsive push-to-start experiences in its class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Nissan Altima" />


      {/* IMMOBILIZER */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Immobilizer — BCM-Centric Security</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Single-Module Authentication", desc: "The BCM performs both the keyless entry handshake and the immobilizer verification in a single transaction. When you press START, the BCM doesn't pass the request to a separate immobilizer module — it handles the entire encrypted challenge-response internally, then signals the ECM to allow engine cranking." },
              { title: "PIN-Gated Security Access", desc: "Nissan protects its BCM key management with a vehicle-specific PIN code. Unlike Ford's two-key onboard method or Toyota's registration procedure, Nissan requires this PIN for virtually any key programming operation. Without it, the BCM won't enter learning mode — period." },
              { title: "Rolling Code Protocol", desc: "Each fob-to-BCM exchange uses a synchronized rolling code counter. The BCM and fob advance their counters in lockstep. If a fob's counter drifts (dead battery, out-of-range button presses), the BCM can resynchronize within a window — but extended drift requires a full re-registration." },
              { title: "BCM as Gatekeeper", desc: "The BCM stores up to 4 key profiles for the Altima. When all stored keys are lost, the BCM must be reset to clear its memory before new keys can be registered. This reset requires authenticated tool access — generic OBD scanners can't reach the BCM's secure partition." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Shield className="w-4 h-4 text-accent shrink-0" />{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NISSAN-SPECIFIC DIFFERENCES */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Makes Nissan Different from Toyota & Honda</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "BCM Reset Is Standard", desc: "On Toyota and Honda, all-keys-lost recovery involves ECU seed-key extraction or security access codes. Nissan's process starts with a full BCM key profile wipe — clearing the slate before any new fob can register. This extra step adds time but results in a clean key configuration." },
              { title: "PIN Code Is Non-Negotiable", desc: "Toyota allows key registration through a timed sequence. Honda uses HDS-based security access. Nissan demands a vehicle-specific PIN code for every programming session — add-key or all-keys-lost. No PIN, no programming. We extract PINs through Nissan's authorized diagnostic channel." },
              { title: "Fewer Aftermarket Workarounds", desc: "Toyota and Honda have broader aftermarket tool support. Nissan's BCM firmware is more restrictive — many budget scan tools claim Nissan support but fail on actual BCM key registration. Professional-grade Nissan CONSULT-compatible platforms are essential for reliable results." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Common Nissan Altima Key Problems</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: AlertTriangle, title: "\"No Key Detected\"", desc: "The Altima's dash displays the warning despite the fob being inside the cabin. Most often a CR2032 battery below 2.8V — the fob can still send a weak passive unlock signal but can't complete the encrypted start handshake the BCM requires." },
              { icon: AlertTriangle, title: "Push Button No Response", desc: "You press START, nothing happens — no accessory mode, no cranking attempt. The BCM isn't receiving any fob signal at all. Common when the interior cabin antenna develops a wiring fault at the connector behind the center console." },
              { icon: AlertTriangle, title: "Key Detected but No Start", desc: "The Altima acknowledges the key (no warning light) but the engine won't crank. This points to an immobilizer-level failure — the BCM validated passive entry but the encrypted start authorization failed. Usually a fob synchronization drift." },
              { icon: AlertTriangle, title: "Intermittent Detection", desc: "The fob works on some attempts, fails on others. Temperature-induced micro-cracks in the fob's circuit board create intermittent contact with the battery terminals — a pattern we see heavily in Altimas exposed to California heat cycles." },
              { icon: AlertTriangle, title: "Doors Unlock, Won't Start", desc: "Passive entry succeeds but push-to-start fails. The BCM processes these as separate security tiers — door unlock is a lower-security function that tolerates weaker signals. Start authorization demands a stronger, closer-range encrypted exchange." },
              { icon: AlertTriangle, title: "BCM Communication Fault", desc: "The BCM stops responding to diagnostic tool queries — key programming becomes impossible until the communication issue is resolved. Often caused by a corroded OBD-II connector or a CAN bus wiring fault at the BCM harness." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="w-5 h-5 text-destructive mb-2" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD KEY VS ALL KEYS LOST */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Add Key vs. All Keys Lost — Nissan Altima</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" />Add a Key</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• At least one working Intelligent Key fob required</li>
                <li>• PIN code security access initiates BCM learning mode</li>
                <li>• New fob registers alongside existing keys — no disruption</li>
                <li>• 15–25 minutes including antenna zone verification</li>
                <li>• BCM stores up to 4 key profiles simultaneously</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-destructive" />All Keys Lost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full BCM key profile reset — all previous key data wiped</li>
                <li>• Vehicle-specific PIN code extraction required</li>
                <li>• New keys registered from scratch through BCM learning mode</li>
                <li>• Immobilizer relearn procedure — BCM and ECM resynchronize</li>
                <li>• 45–70 minutes depending on generation and security tier</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BY YEAR/GENERATION */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Altima Intelligent Key by Generation</h2>
          <div className="space-y-6">
            {[
              {
                years: "2007–2012 Altima (4th Gen / L32)",
                fcc: "KR55WK48903 / KR55WK49622",
                details: [
                  "First Altima generation with Intelligent Key and push-to-start as standard on upper trims",
                  "BCM firmware version 1.x — straightforward PIN-based registration protocol",
                  "46-chip transponder with fixed encryption — simpler to clone as a backup method",
                  "Common issue: steering lock actuator failure prevents engine start even with valid key",
                  "Aftermarket fobs widely available and compatible — most cost-effective generation to service",
                ],
              },
              {
                years: "2013–2018 Altima (5th Gen / L33)",
                fcc: "KR5S180144014 / S180144324",
                details: [
                  "Intelligent Key became standard across all trims — no more traditional key option",
                  "Updated BCM with faster polling and improved rolling code synchronization",
                  "Hitag-3 / PCF7953 transponder replaced the 46-chip — higher encryption standard",
                  "Added trunk release button on fob required separate antenna registration",
                  "PIN code security tightened — extraction requires Nissan CONSULT-III compatible tools",
                ],
              },
              {
                years: "2019–2024 Altima (6th Gen / L34)",
                fcc: "KR5TXN7 / S180144801",
                details: [
                  "Complete platform redesign with new BCM architecture and enhanced security",
                  "AES-128 encryption replaced Hitag-3 for all fob-to-BCM communication",
                  "Nissan Safety Shield 360 integration added key proximity alerts to the instrument cluster",
                  "Online security access required for all-keys-lost scenarios on 2021+ models",
                  "BCM firmware updates may be needed before key registration on recently serviced vehicles",
                ],
              },
            ].map(gen => (
              <div key={gen.years} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-1">{gen.years}</h3>
                <p className="text-xs text-muted-foreground mb-3">FCC ID: {gen.fcc}</p>
                <ul className="space-y-1.5">
                  {gen.details.map((d, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 mt-1 text-accent shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMING COMPLEXITY */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity — Nissan's BCM Gatekeeping</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-3">
                Nissan's PIN-gated BCM makes every key programming job a two-phase process: first authenticate with the vehicle-specific PIN, then execute the key registration. This is non-negotiable across all Altima generations — even a simple add-key requires PIN access. Budget locksmiths without Nissan CONSULT-compatible tools often discover this the hard way and end up referring the job out.
              </p>
              <p>
                The 4th-gen Altima (2007–2012) is the most forgiving — its BCM accepts programming commands readily once the PIN is entered, and the 46-chip transponder offers a backup cloning path. The 5th-gen tightens security with Hitag-3 encryption, eliminating the cloning option and requiring proper registration for every new key.
              </p>
            </div>
            <div>
              <p className="mb-3">
                The current 6th-gen (2019+) Altima presents the steepest challenge. AES-128 encryption, online security access requirements on recent models, and occasional BCM firmware update prerequisites mean the job demands current-generation diagnostic capability. We maintain updated Nissan-specific platforms precisely for this reason.
              </p>
              <p>
                Compared to a dealer visit — which typically involves scheduling days ahead, towing (if all keys are lost), and paying shop labor rates — our mobile service arrives same-day with the tools and PIN access already prepared. The Altima's sedan platform makes on-site work straightforward: clear OBD-II access, no climbing under lifted trucks, predictable job times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL LOCKSMITH NOTES */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Real Locksmith Notes — Nissan Altima</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "BCM Failures Are Real", note: "We see more BCM-related key issues on Altimas than on comparable Toyota or Honda sedans. The single-module design means one BCM fault can knock out passive entry, push-to-start, and the immobilizer simultaneously. On 2013–2018 models, BCM connector corrosion at pin 47 is a known failure point — cleaning the connector sometimes resolves 'key not detected' without any programming." },
              { title: "The Steering Lock Problem", note: "2007–2012 Altimas have a notorious electric steering lock actuator that fails mechanically. The symptom mimics a key issue — you press START and nothing happens — but the problem is purely mechanical. We diagnose this before starting any key work to avoid charging for programming that won't fix the real issue." },
              { title: "Heat-Induced Fob Failures", note: "Southern California heat is hard on Nissan fobs. The CR2032 battery drains faster in vehicles parked in direct sun, and the fob's internal circuit board develops micro-fractures from repeated thermal cycling. We carry replacement batteries and test fob signal strength on every Altima call before recommending new key programming." },
              { title: "PIN Code Preparation", note: "We extract the vehicle-specific PIN before arriving on-site whenever possible. This eliminates the most time-consuming part of Nissan key programming from the customer's wait time. By the time we reach your Burbank location, we're ready to enter the BCM's secure partition immediately." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Altima Key Service Areas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { city: "Burbank", text: "Our primary service area. Full coverage from the Media District to Magnolia Park and Rancho. Most Altima key calls are same-day with rapid response times." },
              { city: "Glendale", text: "Quick dispatch across Glendale — downtown, Montrose, Adams Hill, and the Galleria area. Nissan Altima key programming at your home, office, or curbside." },
              { city: "North Hollywood", text: "Covering NoHo Arts District, Valley Village, and surrounding neighborhoods. Mobile Altima key service — we bring Nissan CONSULT-level tools to your location." },
              { city: "Los Angeles", text: "Extended coverage throughout greater LA including Pasadena, Eagle Rock, Silver Lake, and Hollywood. Same professional tools, same PIN-ready service." },
            ].map(area => (
              <div key={area.city} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{area.city}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Altima Key Programming — FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can you program a Nissan Altima key without the original?", a: "Yes. We perform complete all-keys-lost recovery for every Altima generation. The process requires a BCM key profile reset and PIN code security access — all done at your location with Nissan CONSULT-compatible tools." },
              { q: "Why does my Nissan Altima say no key detected?", a: "A fob battery below 2.8V is the most common cause. The fob can still trigger passive door unlock but fails the encrypted start handshake. BCM antenna connector corrosion (especially on 2013–2018 models) and aftermarket electronics interference are secondary culprits." },
              { q: "What is a BCM reset on a Nissan?", a: "A BCM reset clears all stored key profiles from the Altima's Body Control Module. This is required when all keys are lost — the BCM needs a clean slate before new fobs can register. After the reset, new keys are programmed using Nissan's PIN-based security access protocol." },
              { q: "Do I need a Nissan dealer for Altima key programming?", a: "No. We use Nissan CONSULT-compatible diagnostics with PIN code access that perform identical programming. Our mobile service arrives same-day in Burbank — faster turnaround and lower cost than a dealer service appointment." },
            ].map(faq => (
              <details key={faq.q} className="bg-card border border-border rounded-xl p-5 group">
                <summary className="font-semibold text-foreground text-sm cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Nissan Altima Key Programmed?</h2>
          <p className="text-muted-foreground mb-6">Same-day mobile service in Burbank and surrounding areas. Intelligent Key, BCM reset, add-key, or all-keys-lost — handled on-site with Nissan-specific diagnostic tools.</p>
          <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg">
            <Phone className="w-5 h-5" /> Call Now for Altima Key Service
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">Related Nissan & Smart Key Pages</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { to: "/smart-key-programming/nissan", label: "Nissan Smart Key Hub" },
              { to: "/smart-key-programming/nissan/sentra", label: "Nissan Sentra Key Programming" },
              { to: "/smart-key-programming/nissan/rogue", label: "Nissan Rogue Smart Key" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <Cpu className="w-4 h-4 text-accent shrink-0" />
                <span className="font-semibold text-foreground text-sm">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}