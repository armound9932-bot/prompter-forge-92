import { Cpu, Phone, Truck, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const PAGE_TITLE = "Chevrolet Suburban Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith";
const PAGE_DESC = "Chevrolet Suburban smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2007–2024 Suburban. Mobile service for full-size SUVs.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you program a Suburban key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. All-keys-lost situations on a Suburban require a complete theft deterrent relearn using professional GM scan tools with security access credentials. The procedure involves resetting the theft deterrent module, establishing fresh security handshakes between the BCM, ECM, and theft deterrent system, and learning new key profiles from scratch. We perform this on-site — no towing your full-size SUV to a dealership." } },
    { "@type": "Question", name: "Why does my Suburban say key not detected in the rear?", acceptedAnswer: { "@type": "Answer", text: "The Suburban's extended body is over 18 feet long — significantly longer than a Tahoe. GM positions LF antennas to cover the cabin and cargo zones, but the sheer distance from the farthest cargo area to the nearest antenna creates a natural detection boundary. Heavy cargo, metal roof racks, or aftermarket rear entertainment systems can further attenuate the signal. If your fob consistently fails detection in the rear cargo area, the rear zone antenna or its wiring may need inspection." } },
    { "@type": "Question", name: "What is the GM theft deterrent system on a Suburban?", acceptedAnswer: { "@type": "Answer", text: "GM's theft deterrent system is a multi-module security architecture where the Body Control Module, Engine Control Module, and a dedicated theft deterrent module all participate in key authentication before the engine will crank. On the Suburban, this system manages more antenna zones and module communication pathways than smaller GM vehicles, making professional tools essential for any key programming or system reset." } },
    { "@type": "Question", name: "Do I need a Chevrolet dealer for Suburban key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A licensed automotive locksmith with GM-compatible diagnostic tools and current security access subscriptions performs the same key learning and theft deterrent procedures as a Chevrolet dealership. Our mobile service is especially valuable for Suburban owners — towing a vehicle this large is expensive and logistically difficult. We come to your Burbank location fully equipped." } },
  ],
};

export default function ChevroletSuburbanPage() {
  useEffect(() => {
    setSeoMeta({ title: "Chevrolet Suburban Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith", description: "Chevrolet Suburban smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2007–2024 Suburban. Mobile service for full-size SUVs.", slug: "/smart-key-programming/chevrolet/suburban" });
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Breadcrumbs */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
          <span>/</span>
          <Link to="/smart-key-programming/chevrolet" className="hover:text-primary transition-colors">Chevrolet</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Suburban</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl"><Truck className="w-7 h-7 text-primary" /></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chevrolet Suburban</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Chevrolet Suburban Smart Key Programming in Burbank</h1>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            The Suburban is GM's longest SUV — over 18 feet of vehicle that demands more antenna zones, extended module communication pathways, and specialized diagnostic attention that smaller SUVs simply don't require. Whether your Suburban uses a traditional transponder key or the latest PEPS push-to-start system, our mobile locksmith arrives at your Burbank location with GM-specific tools built for full-size platform complexity. No dealership tow, no waiting — we handle it where your Suburban sits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-colors shadow-lg">
              <Phone className="w-4 h-4" /> Call Now – (818) 485-8877
            </a>
          </div>
        </div>
      </header>

      {/* Key System Types */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Suburban Key System Types</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            The Suburban has spanned two distinct key architectures. The difference isn't just about convenience — it fundamentally changes the tools, procedures, and expertise required to program a replacement key.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Traditional Transponder Key
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2007–2014 Suburban models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Physical key blade inserted into ignition column</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> PK3/PK3+ transponder chip communicates with theft deterrent module</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Separate remote fob for lock/unlock and optional remote start</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Onboard key learn procedure available with 2 existing programmed keys</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent" /> PEPS Proximity Key
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2015–2024 Suburban models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Passive Entry Passive Start — key stays in pocket or bag</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Push-button engine start with multi-zone proximity detection</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Extended LF antenna array — more zones than Tahoe or Equinox</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Professional scan tool with GM security access mandatory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How GM PEPS Works */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How GM's PEPS System Works in the Suburban</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Suburban's PEPS implementation is the most complex in GM's SUV lineup. Its extended wheelbase requires additional antenna zones and longer communication pathways compared to the Tahoe — which shares the platform but is roughly 20 inches shorter. Here's how the system operates:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Extended LF Antenna Array", desc: "The Suburban deploys LF antennas at each door handle, the liftgate, and across the cabin interior. Unlike the Tahoe, the Suburban adds dedicated antenna coverage for the extended cargo zone behind the third row — a zone that doesn't exist on shorter-wheelbase GM SUVs. This extra zone is where most detection issues originate." },
              { title: "UHF Rolling-Code Response", desc: "When a door handle antenna sends a challenge signal, the fob responds on UHF frequency with an encrypted rolling code. The BCM and fob maintain a synchronized counter — each communication cycle advances the counter, preventing replay attacks. On the Suburban, the longer signal travel distance to the rear cargo zone can reduce response reliability." },
              { title: "Multi-Module Authentication", desc: "The BCM validates the fob response and coordinates a handshake with the Engine Control Module and theft deterrent system. All three modules must confirm the key's identity before the engine cranks. The Suburban's larger wiring harness means longer CAN bus communication paths between modules — timing sensitivity increases compared to compact GM vehicles." },
              { title: "Interior Zone Mapping", desc: "The Suburban's cabin is divided into detection zones: front row, second row, third row, and rear cargo. The system must detect the fob in at least one interior zone to authorize push-button start. On an 18+ foot vehicle, the zone boundaries create natural gaps — especially at the transition between the third row and the extended cargo area." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Chevrolet Suburban" />


      {/* Extra-Large SUV Behavior */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Extra-Large SUV Key Detection Behavior</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Suburban's sheer size creates key detection characteristics that no other GM SUV shares. These aren't defects — they're physics. Understanding them prevents misdiagnosis and unnecessary part replacements:
          </p>
          <div className="space-y-4">
            {[
              { title: "Rear Cargo Dead Zone", desc: "The Suburban's cargo area behind the third row is enormous — deep enough to carry full sheets of plywood. This distance from the nearest cabin antenna creates a natural dead zone where fob detection drops below reliable threshold. GM added a dedicated cargo antenna to compensate, but it's the weakest link in the chain and the first to cause intermittent issues." },
              { title: "Third-Row Detection Delay", desc: "When a fob is located near the third-row seats, the system sometimes takes 1–2 seconds longer to authenticate compared to the front seats. This delay is caused by the signal traveling through more vehicle structure and across a longer antenna communication path. Owners often interpret this as a malfunction, but it's normal behavior on an extended-wheelbase platform." },
              { title: "Metal Load Interference", desc: "Suburban owners frequently carry significant cargo — metal toolboxes, sports equipment, camping gear. Metal objects near the rear cargo antenna absorb the LF signal, effectively shrinking the detection zone. We've diagnosed 'rear antenna failure' calls that turned out to be a steel cooler placed directly over the antenna location." },
              { title: "Roof Rack Signal Shadowing", desc: "Full-length roof racks and cargo carriers common on Suburbans can create RF shadows that affect the door handle antennas below. The metal rack acts as a partial shield, reducing the effective detection range at the door handles. This is more pronounced on the Suburban than the Tahoe due to the longer rack span." },
              { title: "Liftgate Hinge Wiring", desc: "The Suburban's large power liftgate is heavier than any other GM SUV gate. The antenna wiring that runs through the hinge experiences more mechanical stress with each open/close cycle. After 40,000+ cycles, the wire insulation develops micro-fractures — causing intermittent liftgate detection that worsens over time." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Common Suburban Key Problems We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: AlertTriangle, problem: "\"No Key Detected\" Warning", detail: "On the Suburban, this alert triggers most often when the fob is in the rear cargo area or third row. Before assuming a fob or antenna failure, we test detection in each zone individually to isolate which antenna segment has degraded." },
              { icon: AlertTriangle, problem: "Push Button No Start", detail: "Fob unlocks the doors but the engine won't crank when the start button is pressed. On Suburbans, this frequently traces to a theft deterrent module handshake timeout — the longer CAN bus pathways on this platform make the authentication sequence more sensitive to voltage drops." },
              { icon: AlertTriangle, problem: "Intermittent Detection Loss", detail: "Key works perfectly from the driver's seat but drops detection unpredictably in the second row, third row, or cargo area. This is the signature Suburban issue — the extended body stretches antenna coverage to its limits, and any degradation in a single zone antenna becomes noticeable." },
              { icon: AlertTriangle, problem: "Rear Cargo Area Won't Detect Key", detail: "The fob is not sensed when placed in the far rear cargo zone. On the Suburban, this area is farther from the nearest antenna than on any other GM SUV. Heavy cargo, metal objects, or a failing rear zone antenna wire at the hinge point are typical causes." },
              { icon: AlertTriangle, problem: "Key Unlocks But Won't Start Engine", detail: "Doors respond to the fob for lock/unlock, instrument cluster powers up, but pressing start produces no crank. This indicates partial key recognition — the BCM sees the fob for entry but the theft deterrent module fails its independent verification step." },
              { icon: AlertTriangle, problem: "Module Communication Fault After Battery Work", detail: "After a battery replacement or jump-start, the Suburban's multi-module security chain can lose synchronization. The BCM, ECM, and theft deterrent module need to re-establish their communication handshake — sometimes requiring a forced relearn cycle with professional scan tools." },
            ].map(item => (
              <div key={item.problem} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <item.icon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">{item.problem}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-primary">Add a Spare Key</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> At least one working key present</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2007–2014: onboard key learn with 10-minute security cycle</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2015+: scan tool adds new fob profile to BCM</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Existing keys remain functional</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Faster service, lower cost</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> No working keys available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Full theft deterrent module reset required</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Security access credentials for BCM and theft deterrent</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> New key blade cut by VIN (transponder models)</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> VIN verification and ownership confirmation mandatory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Suburban Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2007–2014 Suburban (GMT900)</h3>
              <p className="text-sm text-muted-foreground mb-3">Full-size SUV platform shared with the Tahoe and Yukon XL, but the Suburban's extended cargo section adds unique service considerations.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3/PK3+ transponder chip in physical key blade</li>
                <li>• Traditional ignition cylinder — key must be inserted to start</li>
                <li>• Onboard key learn supported with 2 existing programmed keys</li>
                <li>• Remote head key available on LTZ and higher trims (lock/unlock/start buttons integrated into key)</li>
                <li>• Theft deterrent relearn: 10-minute security timer per key for all-keys-lost</li>
                <li>• Ignition cylinder wear common on high-mileage fleet Suburbans</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2015–2020 Suburban (K2UC)</h3>
              <p className="text-sm text-muted-foreground mb-3">Redesigned platform introduced PEPS smart key on upper trims and expanded the vehicle's electronic security architecture significantly.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS proximity key standard on LTZ and Premier trims</li>
                <li>• LS and LT trims may retain traditional transponder key</li>
                <li>• Push-button start with multi-zone interior antenna coverage</li>
                <li>• BCM manages up to 8 fob profiles</li>
                <li>• Professional scan tool with GM security access required for PEPS programming</li>
                <li>• FCC ID: HYQ1AA (5-button) — includes remote start and power liftgate</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2021–2024 Suburban (T1XX)</h3>
              <p className="text-sm text-muted-foreground mb-3">Current generation built on GM's T1 platform with the most advanced PEPS implementation, independent rear suspension, and expanded antenna coverage for the longer body.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS standard across all trims — push-button start with proximity fob</li>
                <li>• AES-128 encryption on all fob communication</li>
                <li>• Extended antenna array with dedicated third-row and cargo zone coverage</li>
                <li>• GM security access subscription required for all programming operations</li>
                <li>• Theft deterrent module stores up to 8 key profiles</li>
                <li>• FCC ID: HYQ1EA (5-button) or HYQ1ES (6-button with power liftgate control)</li>
                <li>• BCM firmware version must match programming procedure — no cross-compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Suburban's extended platform means more modules, more antenna zones, and more communication pathways to verify during key programming. This translates to higher complexity compared to every other GM SUV except the Escalade ESV.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">GMT900</div>
              <div className="text-sm font-semibold mb-1">2007–2014</div>
              <p className="text-xs text-muted-foreground">Moderate. Onboard learn with existing keys. Scan tool for all-keys-lost. Transponder + remote programmed separately.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-accent mb-2">K2UC</div>
              <div className="text-sm font-semibold mb-1">2015–2020</div>
              <p className="text-xs text-muted-foreground">High. Mixed key types by trim. PEPS requires security access. More antenna zones than Tahoe to verify.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-destructive mb-2">T1XX</div>
              <div className="text-sm font-semibold mb-1">2021–2024</div>
              <p className="text-xs text-muted-foreground">Very High. AES encryption. Extended antenna array. Strict firmware matching. Most complex GM SUV key system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locksmith Notes */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">From the Field: Suburban Locksmith Notes</h2>
          <div className="space-y-4">
            {[
              "The Suburban's rear cargo antenna is the single most common failure point we encounter on this model. It sits farther from the BCM than on a Tahoe, the wiring run is longer, and the power liftgate hinge flexes a heavier gate. We've replaced more rear zone antenna wiring on Suburbans than any other GM vehicle — it's practically an expected maintenance item past 60K miles.",
              "Detection delays in the third row are normal on the Suburban and not a sign of failure. The LF signal has to travel through more seat structure, more headliner insulation, and across a wider cabin than on a Tahoe. We see customers come in convinced their fob is dying because of a one-second delay in the third row — it's just physics on an 18-foot vehicle.",
              "Battery voltage is critical on the Suburban during key programming. The vehicle has more electronic modules than a Tahoe (heated/cooled seats, rear climate, rear entertainment, power liftgate, etc.), and the cumulative parasitic draw is higher. A battery that tests at 12.3V at rest may drop below the programming threshold once we connect our scan tool and load the CAN bus. We bring a standalone power supply for every Suburban job.",
              "Aftermarket rear entertainment systems are extremely common on Suburbans used as family vehicles. Some of these systems tap into the vehicle's wiring harness near the rear antenna locations, and poorly installed systems can create interference that reduces key detection range in the second and third rows. We always check for aftermarket electronics before diagnosing antenna hardware.",
            ].map((note, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/chevrolet/suburban" brandSlug="chevrolet" />


      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Mobile Suburban Key Service Across Burbank & Nearby Cities</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p>The Suburban is a staple family and fleet vehicle throughout Burbank. Whether yours is parked at home in the Hillside neighborhood, at a production lot in the Media District, or at the Burbank Town Center, our mobile unit arrives with full GM diagnostic capability for every Suburban generation. Towing a vehicle this large through Burbank traffic is expensive and impractical — we eliminate that entirely with on-site service.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p>Fast response to Glendale Suburban owners throughout the city. From the residential streets near Brand Boulevard to commercial lots along the 134 corridor, we bring GM-specific scan tools and compatible fob blanks directly to your full-size SUV. No appointment backlog, no dealership shuttle — just on-site key programming.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p>Serving North Hollywood and the surrounding Valley communities with mobile Suburban key service. Our fully equipped locksmith unit is built to handle full-size SUV key systems — from spare fob programming to complete all-keys-lost recovery on any generation Suburban, right where it's parked.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p>Extended mobile coverage across greater Los Angeles for Suburban owners. The Suburban is one of the most popular full-size SUVs in the region, and our service is designed specifically for vehicles too large and valuable to tow unnecessarily. Same professional GM key programming, delivered anywhere your Suburban is located.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Suburban Key Programming FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-xl overflow-hidden group">
                <summary className="p-5 cursor-pointer font-semibold text-sm text-foreground flex items-center justify-between hover:bg-muted/50 transition-colors">
                  {faq.name}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need a Suburban Key Programmed? We Come to You.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Your Suburban is too large and too valuable to tow to a dealership for a key. Our mobile locksmith handles every generation — from GMT900 transponder keys to T1XX PEPS fobs — on-site in Burbank with GM-specific tools and same-day service.
          </p>
          <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors shadow-lg text-lg">
            <Phone className="w-5 h-5" /> (818) 485-8877
          </a>
        </div>
      </section>
    </main>
  );
}
