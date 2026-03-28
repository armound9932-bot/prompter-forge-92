import { Cpu, Phone, Car, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PAGE_TITLE = "Chevrolet Equinox Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith";
const PAGE_DESC = "Chevrolet Equinox smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2010–2024 Equinox. Mobile SUV service.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can you program an Equinox key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. All-keys-lost situations require a full theft deterrent relearn procedure using professional GM-compatible scan tools with security access credentials. We perform this on-site — the Equinox does not need to be towed to a dealership. The process involves resetting the theft deterrent module, cutting a new key blade (if applicable), and learning fresh key profiles to the BCM." } },
    { "@type": "Question", name: "Why does my Equinox say key not detected?", acceptedAnswer: { "@type": "Answer", text: "The most common causes are a weak CR2032 fob battery, a damaged LF antenna near the door handle or rear hatch, or RF interference from aftermarket accessories. On compact SUVs like the Equinox, the cargo area antenna can lose sensitivity if heavy metal cargo or aftermarket cargo organizers block the signal path. We diagnose the exact antenna zone causing the issue before replacing anything." } },
    { "@type": "Question", name: "What is the GM theft deterrent system on an Equinox?", acceptedAnswer: { "@type": "Answer", text: "GM's theft deterrent system is a multi-module anti-theft architecture where the Body Control Module, Engine Control Module, and theft deterrent module all participate in key authentication. If any module fails to verify the key's encrypted signal, the engine will not crank. This system prevents hot-wiring and unauthorized key duplication — but it also means professional tools are required for legitimate key programming." } },
    { "@type": "Question", name: "Do I need a Chevrolet dealer for Equinox key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A licensed automotive locksmith with GM-specific diagnostic tools and security access subscriptions can perform the same key learning, theft deterrent relearn, and fob programming procedures as a Chevrolet dealership. Our mobile service in Burbank means we come to your Equinox — no appointment wait, no towing, no dealership markup." } },
  ],
};

export default function ChevroletEquinoxPage() {
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
          <span className="text-foreground font-medium">Equinox</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl"><Car className="w-7 h-7 text-primary" /></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chevrolet Equinox</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Chevrolet Equinox Smart Key Programming in Burbank</h1>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            The Equinox is one of the most popular compact SUVs on Burbank roads, and its key system has evolved significantly across generations. From early transponder-equipped models to current PEPS-enabled push-to-start Equinoxes, we program every version on-site with GM-specific diagnostic tools. No dealership appointment, no towing — our mobile unit comes to your location with everything needed to get your Equinox running.
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
          <h2 className="text-2xl font-bold mb-6">Equinox Key System Types</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Chevrolet transitioned the Equinox from a traditional transponder-based system to a full proximity key architecture over its production run. Knowing which system your Equinox uses is critical — the programming tools, procedures, and costs are fundamentally different.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Transponder Key System
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2010–2016 Equinox models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Physical key blade with embedded transponder chip</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Key inserted into ignition cylinder for engine start</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Separate remote fob for lock/unlock functions</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Onboard key learn possible with 2 existing keys</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent" /> PEPS Smart Key
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2017–2024 Equinox models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Passive Entry Passive Start — key stays in your pocket</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Push-button engine start with proximity detection</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Encrypted LF/UHF communication with BCM</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Professional scan tool mandatory for all programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How GM PEPS Works */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How GM's PEPS System Works in the Equinox</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The 2017+ Equinox uses GM's Passive Entry Passive Start architecture — a layered security system that involves multiple modules communicating in real time. Here's what happens every time you touch the door handle and press the start button:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "LF Challenge Signal", desc: "When you grab the door handle, a low-frequency antenna embedded in the handle sends a wake-up challenge to any PEPS fob within roughly 3 feet. The Equinox's compact SUV body means antenna placement is optimized for the shorter wheelbase compared to full-size trucks." },
              { title: "Encrypted Fob Response", desc: "The fob responds on UHF frequency with a rolling-code encrypted token. Each response is unique — the BCM and fob stay synchronized through a counter that advances with every communication cycle, preventing signal capture and replay." },
              { title: "BCM Validation & Module Handshake", desc: "The Body Control Module decrypts the fob response and initiates a multi-module handshake with the Engine Control Module and theft deterrent system. All three modules must agree the key is valid before the engine will crank." },
              { title: "Interior Zone Detection", desc: "Once inside, cabin-mounted LF antennas verify the fob is physically present in the vehicle before allowing push-button start. The Equinox uses antenna zones optimized for its compact cabin — front seats, rear seat area, and cargo zone behind the rear seats." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUV-Specific Behavior */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Compact SUV Key Behavior</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Equinox's compact SUV body creates specific key detection characteristics that differ from sedans and full-size SUVs. Understanding these patterns helps diagnose issues accurately:
          </p>
          <div className="space-y-4">
            {[
              { title: "Cabin Antenna Coverage", desc: "The Equinox cabin is larger than a Malibu sedan but significantly smaller than a Tahoe. GM positioned the interior LF antennas to cover the front and rear seating areas, but the transition zone between the rear seat and cargo area can create a brief detection gap — especially when the fob is in a bag on the cargo floor." },
              { title: "Rear Hatch Detection", desc: "The Equinox rear hatch has its own LF antenna for hands-free liftgate operation (on equipped models). This antenna is wired through the hatch hinge, and repeated opening and closing can fatigue the wiring over time — a common failure point on Equinoxes with 60K+ miles." },
              { title: "Key Placement Sensitivity", desc: "In a compact SUV, the fob's position relative to the center console matters more than in larger vehicles. Placing the fob in the center console storage bin can actually shield it from the cabin antennas on some model years, causing intermittent 'key not detected' warnings." },
              { title: "Metal Cargo Interference", desc: "Equinox owners who carry metal tools, equipment, or gym gear in the cargo area may experience rear zone detection issues. Metal objects near the cargo antenna can absorb the LF signal, preventing the system from sensing the fob in that zone." },
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
          <h2 className="text-2xl font-bold mb-6">Common Equinox Key Problems We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: AlertTriangle, problem: "\"No Key Detected\" Warning", detail: "Weak CR2032 fob battery is the #1 cause, but on Equinoxes we also see damaged door handle antennas from parking lot impacts and cargo area antenna wiring failures from repeated hatch use." },
              { icon: AlertTriangle, problem: "Push Button No Start", detail: "The fob is detected for door unlock but the BCM-to-theft deterrent handshake fails during start authorization. Often triggered by low 12V battery voltage — the Equinox's compact engine bay puts the battery closer to heat sources, accelerating degradation." },
              { icon: AlertTriangle, problem: "Intermittent Detection Loss", detail: "Key works reliably from the driver's door but drops detection in the rear seat or cargo area. Usually indicates a failing zone antenna or wiring issue at the hatch hinge — not a fob problem." },
              { icon: AlertTriangle, problem: "Rear Hatch Won't Respond to Key", detail: "Hands-free liftgate doesn't trigger when fob is in pocket. The hatch antenna wire runs through the hinge and is prone to fatigue cracking on Equinoxes used for daily cargo loading." },
              { icon: AlertTriangle, problem: "Key Works But Engine Won't Start", detail: "Fob unlocks doors and instrument cluster powers on, but pressing the start button produces no crank. This points to a theft deterrent module authorization failure — the key is partially recognized but not fully authenticated for engine start." },
              { icon: AlertTriangle, problem: "Module Communication Fault", detail: "The BCM, ECM, and theft deterrent module must all communicate during key authentication. A fault on the CAN bus between any two modules prevents start — even with a perfectly programmed key. More common after battery replacement or jump-starting." },
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
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2010–2016: onboard learn with 10-minute security cycle</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 2017+: scan tool adds new fob profile to BCM memory</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Existing keys remain functional</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Faster service, lower cost</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> No working keys available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Full theft deterrent relearn required</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Security access credentials needed for BCM reset</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> New key blade cut by VIN (transponder models)</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> VIN verification and ownership confirmation required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Equinox Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2010–2016 Equinox (2nd Generation)</h3>
              <p className="text-sm text-muted-foreground mb-3">Second-generation compact SUV with transponder-based key security and optional remote start.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3+ transponder chip embedded in key blade</li>
                <li>• Separate key fob for remote lock/unlock and optional remote start</li>
                <li>• Onboard key learn supported with 2 existing programmed keys</li>
                <li>• Ignition cylinder can wear with high-mileage daily use</li>
                <li>• Theft deterrent relearn: 10-minute security timer per key when no existing keys available</li>
                <li>• FCC ID: OHT01060512 (remote) — key blade programmed separately</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2017–2020 Equinox (3rd Generation Early)</h3>
              <p className="text-sm text-muted-foreground mb-3">Complete platform redesign introduced PEPS smart key as standard on most trims, marking the Equinox's transition to push-button start.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Full PEPS system on LT and above — proximity entry + push-button start</li>
                <li>• L trim may retain traditional transponder key on some configurations</li>
                <li>• BCM manages up to 8 key fob profiles</li>
                <li>• LF antennas at all four door handles, hatch, and cabin interior</li>
                <li>• Professional scan tool with GM security access required for programming</li>
                <li>• FCC ID: HYQ4AA (4-button) or HYQ4EA (5-button with remote start)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2021–2024 Equinox (3rd Generation Updated)</h3>
              <p className="text-sm text-muted-foreground mb-3">Refreshed model with enhanced security encryption, updated BCM firmware, and improved antenna sensitivity.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Enhanced rolling-code encryption across all PEPS-equipped trims</li>
                <li>• Updated BCM firmware with stricter security access protocols</li>
                <li>• Improved LF antenna coverage reduces interior dead spots</li>
                <li>• Hands-free power liftgate antenna integration (on Premier/RS trims)</li>
                <li>• GM security access subscription required for programming tools</li>
                <li>• Same key fob form factor as 2017–2020 — but firmware not cross-compatible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">Gen 2</div>
              <div className="text-sm font-semibold mb-1">2010–2016</div>
              <p className="text-xs text-muted-foreground">Moderate. Onboard learn with existing keys. Scan tool for all-keys-lost. Transponder + remote programmed separately.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-accent mb-2">Gen 3</div>
              <div className="text-sm font-semibold mb-1">2017–2020</div>
              <p className="text-xs text-muted-foreground">High. PEPS fob requires scan tool with GM security access. Multi-module authentication chain. No self-programming.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-destructive mb-2">Gen 3+</div>
              <div className="text-sm font-semibold mb-1">2021–2024</div>
              <p className="text-xs text-muted-foreground">High. Enhanced encryption. Stricter security protocols. Updated firmware requires current tool subscriptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locksmith Notes */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">From the Field: Equinox Locksmith Notes</h2>
          <div className="space-y-4">
            {[
              "The Equinox rear hatch antenna is one of the most common failure points we see on this model. The wiring runs through the hatch hinge and flexes every time the hatch opens — after 50,000+ cycles, micro-cracks develop in the wire insulation. The symptom is usually hands-free liftgate failure first, followed by rear zone detection loss.",
              "On 2017–2020 Equinoxes, we've encountered situations where a fob appears to program successfully but won't start the engine. This is almost always a BCM firmware mismatch — GM released several firmware updates for these models, and the programming procedure varies slightly between firmware versions. We verify BCM calibration before starting every job.",
              "Compact SUV owners tend to leave their fob in the center console cubby more often than sedan drivers. On the Equinox, this particular storage location is positioned between two antenna zones, creating a detection gap on some model years. If a customer reports intermittent 'key not detected' warnings, we check fob placement habits before diagnosing hardware.",
              "The Equinox's 12V battery sits in a tighter engine bay than the Silverado, and heat soak is more aggressive. Low battery voltage is the #1 cause of failed key programming attempts — we always load-test the battery before connecting our scan tools. A battery that reads 12.2V at rest may drop below the programming threshold under the module communication load.",
            ].map((note, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Mobile Equinox Key Service Across Burbank & Nearby Cities</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p>The Equinox is one of the most common compact SUVs we service throughout Burbank. Whether you're parked near the Burbank Town Center, in the Magnolia Park neighborhood, or at a studio lot in the Media District, our mobile locksmith arrives with GM-specific scan tools, security access credentials, and compatible key fob blanks. Same-day service, no dealership wait.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p>Fast response to Glendale Equinox owners — from the Galleria area to residential neighborhoods along Glenoaks Boulevard. We handle everything from spare fob programming to full all-keys-lost recovery on any Equinox generation, right at your location.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p>Serving North Hollywood and the Valley Village area with on-site Equinox key programming. Our mobile service eliminates the need to tow your compact SUV to a dealership — we bring the diagnostic equipment directly to wherever your Equinox is parked.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p>Extended mobile coverage across greater Los Angeles for Equinox owners. From the San Fernando Valley to surrounding communities, we deliver the same professional GM key programming service with full theft deterrent module capability and no dealership markup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Equinox Key Programming FAQ</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need an Equinox Key Programmed? We Come to You.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Whether you need a spare smart key for your daily driver or you've lost all keys to your Equinox, our mobile locksmith handles it on-site in Burbank. GM-specific tools, theft deterrent capability, same-day service — no dealership appointment needed.
          </p>
          <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors shadow-lg text-lg">
            <Phone className="w-5 h-5" /> (818) 485-8877
          </a>
        </div>
      </section>
    </main>
  );
}
