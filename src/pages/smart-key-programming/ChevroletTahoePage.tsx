import { Cpu, Phone, Truck, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


const PAGE_TITLE = "Chevrolet Tahoe Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith";
const PAGE_DESC = "Chevrolet Tahoe smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2007–2024 Tahoe. Mobile large SUV service.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you program a Tahoe key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. All-keys-lost situations on a Tahoe require a complete theft deterrent system relearn using professional GM diagnostic tools with active security access credentials. The procedure involves clearing existing key profiles from the BCM, resetting the theft deterrent module, re-establishing the security handshake between BCM, ECM, and theft deterrent system, and programming fresh fob profiles. Our mobile locksmith performs this at your Burbank location — no need to tow a full-size SUV to a dealership." } },
    { "@type": "Question", name: "Why does my Tahoe say key not detected in the back seat?", acceptedAnswer: { "@type": "Answer", text: "The Tahoe's three-row cabin stretches the LF antenna coverage across a larger interior than compact or mid-size SUVs. GM positions antennas in the front console, center cabin, and rear cargo area, but the third-row zone sits at the boundary between the center and rear antennas. Heavy child car seats, metal-framed booster seats, or aftermarket seat covers with heating elements can further attenuate the signal in this zone. If detection consistently fails in the third row, the center cabin antenna or its wiring harness connection may need inspection." } },
    { "@type": "Question", name: "What is the GM theft deterrent system on a Tahoe?", acceptedAnswer: { "@type": "Answer", text: "GM's theft deterrent system is a multi-module security architecture where the Body Control Module (BCM), Engine Control Module (ECM), and a dedicated theft deterrent module each independently verify the key's identity before allowing the engine to crank. On the Tahoe, this three-module handshake manages more antenna zones and longer CAN bus communication paths than compact GM vehicles like the Equinox, making professional diagnostic tools essential for any key programming or security system service." } },
    { "@type": "Question", name: "Do I need a Chevrolet dealer for Tahoe key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A licensed automotive locksmith with GM-compatible scan tools and current security access subscriptions performs identical key learning and theft deterrent procedures as a Chevrolet dealership — often faster because there's no service queue. For Tahoe owners, mobile locksmith service is especially practical. Towing a large SUV through Burbank traffic is expensive and unnecessary when we bring the same GM diagnostic capability directly to your driveway, parking lot, or workplace." } },
  ],
};

export default function ChevroletTahoePage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", PAGE_DESC);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = PAGE_DESC;
      document.head.appendChild(m);
    }
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
          <span className="text-foreground font-medium">Tahoe</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl"><Truck className="w-7 h-7 text-primary" /></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chevrolet Tahoe</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Chevrolet Tahoe Smart Key Programming in Burbank</h1>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            The Tahoe is GM's workhorse large SUV — a three-row, body-on-frame platform that runs a multi-zone antenna system, three-module theft deterrent architecture, and PEPS proximity logic built for a cabin significantly larger than anything in the compact or mid-size lineup. Whether you need a spare fob added or a complete all-keys-lost recovery, our mobile locksmith arrives at your Burbank location with GM-specific diagnostic tools calibrated for every Tahoe generation. No tow truck, no dealer wait — professional key programming where your Tahoe sits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-colors shadow-lg">
              <Phone className="w-4 h-4" /> Call Now – (818) 485-8877
            </a>
          </div>
        </div>
      </header>

      {/* How GM PEPS Works in the Tahoe */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How GM's PEPS System Works in the Tahoe</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            The Tahoe's Passive Entry Passive Start system is more complex than what you'll find on the Equinox or Malibu — but it's a tighter, more responsive system than the Suburban's extended-body version. Here's how each component interacts:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Multi-Zone LF Antenna Network", desc: "The Tahoe positions Low Frequency antennas at each exterior door handle, the liftgate, and across the interior cabin. Inside, the system divides the cabin into front-row, second-row, third-row, and cargo detection zones. The Tahoe's shorter wheelbase compared to the Suburban means these zones overlap more effectively — but the three-row cabin still stretches coverage further than any compact GM SUV." },
              { title: "UHF Encrypted Response", desc: "When you touch a door handle, the nearest LF antenna sends a challenge signal to the fob. The fob responds via UHF with an AES-encrypted rolling code that the BCM validates. Each successful communication advances a synchronized counter, preventing replay or relay attacks. The Tahoe's antenna-to-fob distances are shorter than the Suburban's, resulting in faster and more reliable handshake completion." },
              { title: "Three-Module Security Chain", desc: "Engine authorization on the Tahoe requires agreement between three independent modules: the Body Control Module (BCM), Engine Control Module (ECM), and the dedicated theft deterrent module. Each module performs its own verification before the engine cranks. This redundancy prevents hot-wiring but also means any module communication fault can prevent a legitimate start — a scenario we diagnose regularly on high-mileage Tahoes." },
              { title: "Interior Zone Detection Logic", desc: "The system must confirm the fob is inside the vehicle — not just near it — before allowing push-button start. On the Tahoe, the third-row boundary creates a detection transition zone where signal strength from the center antenna fades and the rear cargo antenna picks up. Child safety seats with metal frames positioned in this zone are the most common cause of intermittent detection issues we encounter." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large SUV Behavior */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Large SUV Key Detection Behavior</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Tahoe's body-on-frame construction and three-row layout create detection characteristics that differ from both unibody crossovers and the longer Suburban. These aren't defects — they're inherent to the platform:
          </p>
          <div className="space-y-4">
            {[
              { title: "Third-Row Detection Transition", desc: "The third-row seats sit at the boundary between the center cabin antenna and the rear cargo antenna. When a fob rests on the third-row seat — especially near the outboard positions — it can fall into a signal gap where neither antenna achieves full detection strength. This causes the 'No Key Detected' message even though the fob is clearly inside the vehicle. Moving the fob to the center of the third row typically resolves detection immediately." },
              { title: "Child Seat RF Interference", desc: "Tahoe owners frequently install metal-framed child safety seats and booster seats in the second and third rows. These metal structures absorb LF antenna signals and create localized dead zones around the seat. We've diagnosed multiple 'fob failure' calls on Tahoes where the actual issue was a Britax or Graco seat frame positioned directly over a cabin antenna. The fob worked perfectly once moved to the front row." },
              { title: "Cargo Area Detection Range", desc: "The Tahoe's cargo area behind the third row is substantial but shorter than the Suburban's. GM's rear cargo antenna provides reliable detection throughout most of this zone, but heavy metal cargo (tool kits, camping equipment, steel coolers) placed against the rear wall can attenuate the signal enough to cause intermittent detection. This is less severe than the Suburban but more common than the Equinox due to the Tahoe's larger cargo volume." },
              { title: "Body-on-Frame Signal Characteristics", desc: "Unlike unibody crossovers, the Tahoe's body-on-frame construction places more steel between the chassis and the cabin floor. This additional metal layer affects how LF signals propagate from floor-mounted antennas upward into the cabin. The practical impact is a slightly narrower vertical detection cone compared to unibody vehicles — fobs stored in low positions (floor mats, under seats) may take longer to detect." },
              { title: "Power Liftgate Antenna Wiring", desc: "The Tahoe's power liftgate is lighter than the Suburban's but still heavier than any crossover gate. The antenna wiring routed through the liftgate hinge experiences significant mechanical stress over time. After years of daily open/close cycles, wire insulation can crack at the hinge point, causing intermittent rear detection failures that worsen in cold weather when the insulation contracts." },
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
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Common Tahoe Key Problems We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: AlertTriangle, problem: "\"No Key Detected\" Warning", detail: "On the Tahoe, this alert appears most frequently when the fob is in the third row or cargo area. Before replacing hardware, we test detection in each cabin zone individually — front, second row, third row, and cargo — to pinpoint exactly which antenna zone has degraded or which external factor (child seats, metal cargo) is interfering." },
              { icon: AlertTriangle, problem: "Push Button Start — No Crank", detail: "The fob unlocks doors and the dash illuminates, but pressing the start button produces nothing. On Tahoes, this is almost always a theft deterrent handshake failure between the BCM and ECM. The longer CAN bus pathways on this full-size platform make the authentication timing more sensitive to voltage fluctuations than compact GM models." },
              { icon: AlertTriangle, problem: "Intermittent Third-Row Detection", detail: "Key works reliably from the driver seat but drops out when carried to the third row. This is the most common Tahoe-specific complaint we handle. The signal transition zone between the center and rear antennas, combined with metal child seat interference, creates conditions where detection varies by inches of fob placement." },
              { icon: AlertTriangle, problem: "Liftgate Won't Detect Key for Power Open", detail: "The proximity sensor on the rear liftgate fails to detect the fob, requiring manual button press. On Tahoes with 80K+ miles, the antenna wire routed through the power liftgate hinge develops micro-fractures from repeated mechanical flexing. The failure worsens gradually and is often temperature-dependent." },
              { icon: AlertTriangle, problem: "Key Recognized for Entry But Not Start", detail: "Doors lock and unlock with the fob, but the push-button start refuses to crank the engine. This indicates partial key authentication — the BCM accepts the fob for access functions but the theft deterrent module fails its independent security check. A module communication diagnostic typically reveals the source." },
              { icon: AlertTriangle, problem: "Security System Fault After Jump-Start", detail: "After a dead battery event or jump-start, the Tahoe's multi-module security chain can lose synchronization. The BCM, ECM, and theft deterrent module each store independent security state data — a sudden power interruption can desynchronize these states, requiring a professional scan tool to force a relearn cycle and restore normal key authentication." },
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
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-primary">Add a Spare Key</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> At least one working fob or transponder key present</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2007–2014: onboard key learn with 10-minute security relearn timer</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2015+: scan tool registers new fob profile to BCM key slot</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> All previously programmed keys remain functional</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Faster service, lower cost — best option when you still have a working key</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> No working keys or fobs available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Complete theft deterrent module reset and relearn required</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> GM security access credentials for BCM and theft deterrent</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Key blade cut by VIN for transponder models (2007–2014)</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> VIN verification and proof of ownership mandatory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Tahoe Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2007–2014 Tahoe (GMT900)</h3>
              <p className="text-sm text-muted-foreground mb-3">Fourth-generation Tahoe on the GMT900 platform. Rugged, reliable, and still extremely common on Burbank roads as work trucks, family haulers, and fleet vehicles.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3/PK3+ transponder chip embedded in physical key blade</li>
                <li>• Traditional ignition cylinder — key inserted and turned to start</li>
                <li>• Separate remote fob for lock/unlock functions (not integrated into key on base trims)</li>
                <li>• Remote head key on LTZ trim combines transponder + remote buttons</li>
                <li>• Onboard key learn supported with 2 existing programmed keys</li>
                <li>• All-keys-lost: 10-minute security relearn timer per key using scan tool</li>
                <li>• Ignition cylinder wear and wafer failure common on high-mileage examples</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2015–2020 Tahoe (K2XX)</h3>
              <p className="text-sm text-muted-foreground mb-3">Fifth-generation redesign that introduced PEPS smart key on upper trims while retaining traditional transponder key on base models. The split key architecture by trim level is a common source of confusion for owners.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS proximity fob standard on LTZ and Premier — push-button start</li>
                <li>• LS and LT trims retain traditional transponder key with ignition cylinder</li>
                <li>• FCC ID: HYQ1AA (5-button fob with remote start and liftgate)</li>
                <li>• BCM stores up to 8 key profiles per vehicle</li>
                <li>• GM security access subscription required for all PEPS programming</li>
                <li>• Emergency key blade hidden inside fob for manual door entry when battery dies</li>
                <li>• Key system type must be confirmed by trim before ordering replacement fob</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2021–2024 Tahoe (T1XX)</h3>
              <p className="text-sm text-muted-foreground mb-3">Current-generation Tahoe on GM's T1 platform with independent rear suspension, completely redesigned interior, and the most advanced PEPS implementation in Tahoe history.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS standard across all trims — every Tahoe is push-button start</li>
                <li>• AES-128 encryption on all fob-to-vehicle communication</li>
                <li>• Expanded interior antenna array with improved third-row coverage</li>
                <li>• FCC ID: HYQ1EA (5-button) or HYQ1ES (6-button with dedicated liftgate control)</li>
                <li>• GM security access subscription mandatory for all key operations</li>
                <li>• BCM firmware version must match programming procedure — no cross-year compatibility</li>
                <li>• Theft deterrent module stores and manages up to 8 key profiles</li>
                <li>• UWB (Ultra-Wideband) digital key capability on select High Country trims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity by Platform</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Tahoe's programming requirements scale with each generation. The tools, credentials, and time investment differ significantly between the GMT900 transponder system and the current T1XX PEPS architecture.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">GMT900</div>
              <div className="text-sm font-semibold mb-1">2007–2014</div>
              <p className="text-xs text-muted-foreground">Moderate. Onboard learn with existing keys. Scan tool for all-keys-lost with 10-minute security timer. Transponder and remote programmed as separate components.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-accent mb-2">K2XX</div>
              <div className="text-sm font-semibold mb-1">2015–2020</div>
              <p className="text-xs text-muted-foreground">High. Mixed key types by trim create identification challenges. PEPS trims require security access. Must confirm trim level before ordering parts.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-destructive mb-2">T1XX</div>
              <div className="text-sm font-semibold mb-1">2021–2024</div>
              <p className="text-xs text-muted-foreground">Very High. AES encryption standard. Strict firmware matching. Extended antenna verification. GM's most advanced SUV key architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locksmith Notes */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">From the Field: Tahoe Locksmith Notes</h2>
          <div className="space-y-4">
            {[
              "The Tahoe sits between the Equinox and Suburban in terms of key system complexity, but it generates more service calls than either. It's GM's best-selling large SUV, which means higher volume and more variety in the problems we encounter. The most consistent issue is third-row detection — child seats are the culprit at least half the time, and owners are always surprised when we demonstrate that removing the car seat frame from the third row instantly restores detection.",
              "K2XX Tahoes (2015–2020) are the trickiest because of the trim-based key split. An LS Tahoe uses a completely different key type than a Premier from the same model year. We've had customers order the wrong fob online because they didn't realize their trim level determines the key system. Always confirm: does your Tahoe have a push-button start or a traditional ignition? That single question tells us everything about which system we're working with.",
              "Battery voltage management is critical during Tahoe key programming. The vehicle runs a high-draw electrical system — heated seats, rear climate, power liftgate, infotainment — and the cumulative parasitic draw means a battery that reads 12.4V at rest may sag below the programming threshold when we connect our scan tool. We carry a standalone battery maintainer to every Tahoe job and connect it before beginning any key procedure.",
              "On T1XX Tahoes (2021+), firmware versioning has become a real factor. GM has released multiple BCM firmware updates that change the key learning procedure slightly. Running the wrong procedure version for the installed firmware results in a failed learn that can temporarily lock out all key slots. We verify BCM firmware version before starting any programming operation on current-generation Tahoes — it adds five minutes but prevents a potentially hours-long recovery.",
            ].map((note, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/chevrolet/tahoe" brandSlug="chevrolet" />


      {/* Local SEO */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Mobile Tahoe Key Service Across Burbank & Nearby Cities</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p>The Tahoe is one of the most common large SUVs throughout Burbank — used by families, production companies, and fleet operators alike. Whether yours is parked at your home in Magnolia Park, at a studio lot near the Media District, or at the Burbank Airport parking structure, our mobile locksmith arrives with full GM diagnostic capability. No tow needed — we handle every Tahoe generation on-site with professional equipment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p>Rapid response to Glendale Tahoe owners from the Galleria area to the residential streets near Montrose. We bring GM-compatible scan tools and OEM-quality fob blanks directly to your location — no dealership appointment, no waiting in a service queue. Same-day availability for most Tahoe key services including spare fob programming and all-keys-lost recovery.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p>Serving North Hollywood and the broader Valley with dedicated mobile locksmith service for Tahoe owners. From the Arts District to Toluca Lake, our service unit is equipped specifically for full-size GM SUV key systems. We handle everything from adding a spare fob to complete theft deterrent relearn procedures — right in your driveway or parking lot.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p>Extended mobile coverage throughout greater Los Angeles for Chevrolet Tahoe key programming. The Tahoe is one of LA's most popular large SUVs, and our service is built around the reality that towing a vehicle this size through city traffic is impractical and expensive. Professional GM key service delivered to wherever your Tahoe is parked — same diagnostic tools, same results as a dealership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Tahoe Key Programming FAQ</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need a Tahoe Key Programmed? We Come to You.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Your Tahoe deserves professional key service without the dealership hassle. Our mobile locksmith handles every generation — from GMT900 transponder keys to T1XX PEPS fobs — on-site in Burbank with GM-specific tools and same-day availability.
          </p>
          <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors shadow-lg text-lg">
            <Phone className="w-5 h-5" /> (818) 485-8877
          </a>
        </div>
      </section>
    </main>
  );
}
