import { Cpu, Phone, Car, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


const PAGE_TITLE = "Chevrolet Malibu Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith";
const PAGE_DESC = "Chevrolet Malibu smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2008–2024 Malibu. Mobile sedan service.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I program a Malibu key myself?", acceptedAnswer: { "@type": "Answer", text: "On 2008–2012 Malibu models with transponder keys, GM's onboard key learn procedure works if you already have two programmed keys. For 2013+ Malibu models with PEPS proximity fobs, professional scan tools with GM security access are required — there is no self-programming option on these newer sedans." } },
    { "@type": "Question", name: "Why does my Malibu say key not detected?", acceptedAnswer: { "@type": "Answer", text: "The most common cause is a dead CR2032 battery inside the fob. Other causes include a faulty door handle antenna, BCM communication fault, or electromagnetic interference from aftermarket phone chargers or dash cameras plugged into the OBD-II port. On Malibu sedans, purse or bag placement on the passenger floor can also block the cabin LF antenna signal." } },
    { "@type": "Question", name: "What is the GM theft deterrent system on a Malibu?", acceptedAnswer: { "@type": "Answer", text: "GM's theft deterrent system requires the key's transponder chip or PEPS fob to be authenticated by the Body Control Module before the engine will crank. If a key isn't properly learned to the vehicle, or if the theft deterrent module loses stored key data, the Malibu enters theft deterrent mode — the security light flashes and the engine will not start." } },
    { "@type": "Question", name: "Do I need a Chevrolet dealer for Malibu key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with GM-compatible diagnostic tools can perform the same key learning and theft deterrent reset procedures as a Chevrolet dealership. We come to your Burbank location — no towing or dealership appointments needed." } },
  ],
};

export default function ChevroletMalibuPage() {
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
          <span className="text-foreground font-medium">Malibu</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl"><Car className="w-7 h-7 text-primary" /></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chevrolet Malibu</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Chevrolet Malibu Smart Key Programming in Burbank</h1>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            The Malibu is one of the most popular mid-size sedans on the road, and its key system has evolved dramatically over the years — from basic transponder chips to GM's full PEPS proximity architecture. Whether you need a spare fob for your daily commuter or you've lost every key to your Malibu, our mobile locksmith handles it at your Burbank location with GM-specific diagnostic tools and same-day turnaround.
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
          <h2 className="text-2xl font-bold mb-6">Malibu Key System Types</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Chevrolet equipped the Malibu with two distinct key architectures depending on the model year. Knowing which system your sedan uses is essential — the programming tools, procedures, and costs differ significantly between them.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Transponder Key System
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2008–2015 Malibu models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Physical key blade with embedded PK3+ transponder chip</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Key inserted into ignition cylinder for start</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Separate remote fob for door lock/unlock functions</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Onboard key learn available with 2 existing programmed keys</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent" /> PEPS Proximity Fob
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2016–2024 Malibu models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Passive Entry Passive Start — fob stays in pocket or purse</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Push-button engine start with BCM authentication</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> LF/UHF encrypted rolling-code communication</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Professional scan tool with security access required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How PEPS Works */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How the GM PEPS System Works on the Malibu</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            GM's sedan implementation of PEPS shares core architecture with other Chevrolet models but is tuned for the Malibu's compact cabin layout. The system relies on precise coordination between multiple electronic modules:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Door Handle LF Antennas", desc: "Each front door handle contains a low-frequency antenna that wakes the fob when you touch or pull the handle. The Malibu's sedan door geometry positions these antennas closer together than on trucks or SUVs, which can occasionally cause cross-talk between driver and passenger detection zones." },
              { title: "Cabin Detection Antenna", desc: "A centrally mounted LF antenna inside the cabin verifies the fob is physically inside the vehicle before allowing push-button start. On the Malibu, this antenna sits beneath the center console — placing the fob in the trunk or on the rear parcel shelf may fall outside its detection range." },
              { title: "BCM Coordination", desc: "The Body Control Module orchestrates the entire authentication sequence — receiving the fob's encrypted UHF response, validating it against stored key profiles, and issuing a start-authorization command to the Engine Control Module. GM's BCM also manages the theft deterrent indicator on the instrument cluster." },
              { title: "Theft Deterrent Module", desc: "Acting as an independent security layer, the theft deterrent module must complete its own verification before engine crank is permitted. This dual-authentication approach means a fob can unlock doors but still fail to start the engine if the theft deterrent handshake doesn't complete." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GM-Specific Differences */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Makes GM Sedan Key Systems Different</h2>
          <div className="space-y-4">
            {[
              { title: "Theft Deterrent Learning Cycle", desc: "When programming a new key on a Malibu, GM requires a specific timing sequence during the key learn process. Unlike Ford's two-key rule or Nissan's PIN-based approach, GM's theft deterrent module needs a 10-minute security relearn cycle per key on older models. Rushing this process or interrupting the cycle means starting over from scratch." },
              { title: "Module Interdependency", desc: "The Malibu's key system involves the BCM, theft deterrent module, ECM, and instrument cluster all communicating in sequence. A voltage drop during programming — common on sedans with smaller batteries than trucks — can interrupt this chain and leave the system in a partially programmed state that requires a full module reset." },
              { title: "Sedan-Specific Antenna Layout", desc: "The Malibu's compact sedan cabin means antenna placement is tighter than on trucks or SUVs. While this generally improves detection consistency inside the cabin, it also means the system is more sensitive to signal interference from devices left on the center console or plugged into the front USB ports." },
              { title: "Fleet and Rental Considerations", desc: "The Malibu is widely used in fleet and rental applications. These vehicles often have higher key turnover and may have keys that were partially programmed or not properly erased. We frequently encounter fleet Malibus with corrupted key profiles that need a complete theft deterrent wipe before new keys can be learned." },
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
          <h2 className="text-2xl font-bold mb-6">Common Malibu Key Problems We Solve</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { problem: "\"Key Not Detected\" on Dashboard", detail: "Dead CR2032 fob battery is the most common cause. On Malibus, we also see this triggered by aftermarket phone mounts with magnets that interfere with the cabin LF antenna beneath the center console." },
              { problem: "Push Button Clicks but No Crank", detail: "The fob is recognized for entry but the theft deterrent module fails its handshake with the ECM. Often caused by low 12V vehicle battery — Malibu sedans with smaller batteries are more prone to voltage-related authentication failures than trucks." },
              { problem: "Intermittent Door Handle Detection", detail: "The fob unlocks the car sometimes but not consistently. On Malibus, door handle antenna wiring can develop micro-fractures at the connector inside the door panel, especially on driver's side doors from daily use." },
              { problem: "Security Light Flashing Continuously", detail: "The theft deterrent indicator on the instrument cluster stays lit or flashes, preventing engine start. Usually indicates the module has lost its stored key data or detected a key profile mismatch after a battery disconnect or jump-start." },
              { problem: "Trunk Release Not Responding", detail: "The fob's trunk button works inconsistently or not at all. On the Malibu, the trunk antenna is separate from the cabin system and can fail independently — the fob may start the car fine but not trigger the trunk release." },
              { problem: "Key Learned but Won't Start Next Day", detail: "A key that was recently programmed starts the car initially but fails the next morning. This typically indicates the theft deterrent module didn't fully commit the key profile to permanent memory — often caused by disconnecting the scan tool too early during the learn process." },
            ].map(item => (
              <div key={item.problem} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
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
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> At least one working key available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Older models: onboard key learn (10-minute relearn cycle)</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Newer PEPS models: scan tool adds fob to BCM memory</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Existing keys remain functional</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Faster service, lower cost</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> No working keys — vehicle cannot start</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Full theft deterrent module reset required</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Security access credentials needed for GM modules</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> All new keys learned from scratch — old keys permanently erased</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> VIN verification and ownership confirmation mandatory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Malibu Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2008–2012 Malibu (7th Generation)</h3>
              <p className="text-sm text-muted-foreground mb-3">GM Epsilon II platform with traditional transponder key security.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3+ transponder chip embedded in key head</li>
                <li>• Physical ignition cylinder — key must be inserted and turned</li>
                <li>• Onboard key learn supported with 2 existing programmed keys</li>
                <li>• Separate remote fob for lock/unlock/trunk</li>
                <li>• Theft deterrent relearn: 10-minute security timing cycle per key</li>
                <li>• Common issue: ignition cylinder wear causing intermittent transponder reads</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2013–2015 Malibu (8th Generation)</h3>
              <p className="text-sm text-muted-foreground mb-3">Transitional generation — some trims received early proximity key availability alongside traditional transponder keys.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Base trims: PK3+ transponder key with ignition cylinder</li>
                <li>• LTZ and higher: optional PEPS proximity fob with push-button start</li>
                <li>• Mixed fleet — trim verification critical before ordering key blanks</li>
                <li>• BCM firmware variations across model years affect programming procedure</li>
                <li>• Onboard learn still available for transponder-equipped models</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2016–2024 Malibu (9th Generation)</h3>
              <p className="text-sm text-muted-foreground mb-3">Full PEPS integration across all trims with advanced encryption and multi-module security.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS standard on all trims — push-button start with proximity fob</li>
                <li>• AES-encrypted rolling code communication</li>
                <li>• Professional scan tool with GM security access mandatory</li>
                <li>• Theft deterrent module stores up to 8 key profiles</li>
                <li>• FCC ID: HYQ4EA (4-button) or HYQ4AA (5-button with remote start)</li>
                <li>• Emergency key blade hidden inside fob for manual door entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity by Era</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-primary mb-2">7th Gen</div>
              <div className="text-sm font-semibold mb-1">2008–2012</div>
              <p className="text-xs text-muted-foreground">Moderate. Onboard learn with existing keys. Scan tool for all-keys-lost only.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-accent mb-2">8th Gen</div>
              <div className="text-sm font-semibold mb-1">2013–2015</div>
              <p className="text-xs text-muted-foreground">Variable. Trim-dependent key type. Must verify transponder vs. PEPS before service.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-destructive mb-2">9th Gen</div>
              <div className="text-sm font-semibold mb-1">2016–2024</div>
              <p className="text-xs text-muted-foreground">High. Full security access required. No self-programming. Multi-module chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locksmith Notes */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">From the Field: Malibu Locksmith Notes</h2>
          <div className="space-y-4">
            {[
              "The Malibu's sedan battery is smaller than what you'll find in a Silverado or Equinox, and GM's theft deterrent module is sensitive to voltage during key learning. We've had programming attempts fail on Malibus with batteries reading 11.8V — perfectly fine for starting the car but too low for the module to complete the learn cycle. We always test battery voltage first and use a power supply if needed.",
              "Fleet and rental Malibus are some of our most common calls. These vehicles cycle through drivers and keys constantly, and we frequently find corrupted key profiles — keys that show as 'learned' in the BCM but don't actually authenticate. A clean theft deterrent wipe and fresh key learn from scratch usually resolves persistent no-start issues on these cars.",
              "The 2013–2015 generation is the most commonly misquoted Malibu because people assume all years have the same key type. We always verify the VIN and check whether the car has an ignition cylinder or push-button start before quoting — ordering the wrong key blank wastes everyone's time.",
              "On 2016+ Malibus, we see a pattern where the fob unlocks the car fine but the push-button start intermittently fails. This is almost always a weak vehicle battery, not a fob issue. The LF antenna for door detection needs less power than the full BCM-to-ECM authentication chain required for engine crank.",
            ].map((note, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/chevrolet/malibu" brandSlug="chevrolet" />


      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Mobile Malibu Key Service Across Burbank & Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p>Our home base for Malibu key service. Whether your sedan is parked at the Burbank Town Center, in a residential driveway in Magnolia Park, or at a studio lot, our mobile locksmith arrives with GM-specific diagnostic tools and OEM-grade fob blanks. Malibu owners across Burbank count on us for fast, professional key programming without dealership pricing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p>Quick response to all Glendale locations — from the Galleria area to residential neighborhoods in Montrose and La Crescenta. We handle spare key additions and all-keys-lost scenarios for every Malibu generation on-site at your location.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p>Serving North Hollywood and surrounding Valley communities. The Malibu is one of the most common sedans we service in this area — our mobile unit carries key blanks and fobs for all model years so we can complete most jobs in a single visit.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p>Extended coverage across greater Los Angeles for Malibu owners who need professional GM key programming. Same tools, same expertise, same mobile convenience — whether you're in the Valley, Hollywood, or downtown LA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Malibu Key Programming FAQ</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need a Malibu Key Programmed? We Come to You.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            From a simple spare fob to a complete all-keys-lost recovery, our mobile locksmith handles every Malibu key scenario on-site in Burbank. GM-specific tools, professional theft deterrent reset capability, and no dealership markup.
          </p>
          <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors shadow-lg text-lg">
            <Phone className="w-5 h-5" /> (818) 485-8877
          </a>
        </div>
      </section>
    </main>
  );
}