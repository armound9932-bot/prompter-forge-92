import { Cpu, Phone, Truck, ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const PAGE_TITLE = "Chevrolet Silverado Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith";
const PAGE_DESC = "Chevrolet Silverado smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2007–2024 Silverado. Mobile truck service.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I program a Silverado key myself?", acceptedAnswer: { "@type": "Answer", text: "Older Silverado models (2007–2013) support onboard key learning if you already have two working keys. Newer PEPS-equipped Silverados (2019+) require professional-grade scan tools to communicate with the theft deterrent module and BCM. Without proper security access credentials, self-programming is not possible on modern GM trucks." } },
    { "@type": "Question", name: "Why does my Silverado say key not detected?", acceptedAnswer: { "@type": "Answer", text: "Common causes include a depleted fob battery (CR2032), damaged LF receiver antennas around the cab, theft deterrent module communication faults, or aftermarket accessories interfering with the RF signal. On crew cab and double cab models, key placement in the rear seat area can also cause intermittent detection failures due to antenna coverage limits." } },
    { "@type": "Question", name: "What is the GM theft deterrent system?", acceptedAnswer: { "@type": "Answer", text: "GM's theft deterrent system is an anti-theft architecture that requires the key's transponder or PEPS fob to be authenticated by the Body Control Module before the engine will crank. If a key is not properly learned to the vehicle, or if the module loses its stored key data, the truck enters theft deterrent mode and will not start." } },
    { "@type": "Question", name: "Do I need a dealer for Silverado key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with GM-compatible diagnostic tools can perform the same key learning and theft deterrent reset procedures as a Chevrolet dealership — at your location in Burbank. Mobile service means no towing required." } },
  ],
};

export default function ChevroletSilveradoPage() {
  useEffect(() => {
    setSeoMeta({ title: "Chevrolet Silverado Smart Key Programming Burbank | GM PEPS & Theft Deterrent – Burbank Auto Locksmith", description: "Chevrolet Silverado smart key programming in Burbank. GM PEPS system, theft deterrent reset, push-to-start fob replacement for 2007–2024 Silverado. Mobile truck service.", slug: "/smart-key-programming/chevrolet/silverado" });
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
          <span className="text-foreground font-medium">Silverado</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 rounded-xl"><Truck className="w-7 h-7 text-primary" /></div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Chevrolet Silverado</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Chevrolet Silverado Smart Key Programming in Burbank</h1>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            Whether you drive a classic Silverado with a transponder key or a new-generation model with GM's PEPS push-to-start system, we handle every key scenario on-site. Our mobile locksmith truck rolls to your Burbank location equipped with GM-specific diagnostic tools, security access credentials, and OEM-grade key blanks — no dealership tow required.
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
          <h2 className="text-2xl font-bold mb-6">Silverado Key System Types</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Chevrolet has used two fundamentally different key architectures across Silverado generations. Understanding which system your truck uses determines the programming approach, tools required, and overall service complexity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Traditional Transponder Key
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2007–2018 Silverado models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Physical key blade inserted into ignition cylinder</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Embedded transponder chip communicates with theft deterrent module</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Optional remote head key with lock/unlock/start buttons</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> GM onboard key learning procedure available (with 2 existing keys)</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent" /> PEPS Proximity Key
              </h3>
              <p className="text-sm text-muted-foreground mb-3">2019–2024 Silverado models</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Passive Entry Passive Start — no key insertion required</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> LF/UHF encrypted communication with BCM</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Push-button engine start authorization</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Professional scan tool required — no self-programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How PEPS Works */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How the GM PEPS System Works</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The Passive Entry Passive Start system on modern Silverados is a multi-module security architecture that differs significantly from Ford PATS or Nissan Intelligent Key systems. Here's how GM engineered it for their full-size truck platform:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "LF Antenna Array", desc: "Low-frequency antennas are positioned at each door handle, the tailgate, and inside the cab. When you touch the handle, the antenna sends a challenge signal to the fob within range." },
              { title: "UHF Encrypted Response", desc: "The fob responds on UHF frequency with a rolling-code encrypted token. This response is unique to each start cycle, preventing replay attacks common on older GM systems." },
              { title: "BCM Authentication", desc: "The Body Control Module validates the fob's encrypted response against its stored key profiles. GM's BCM also coordinates with the Engine Control Module and theft deterrent module before authorizing crank." },
              { title: "Theft Deterrent Authorization", desc: "Unlike simpler systems, GM's theft deterrent module acts as an independent gatekeeper. Even with a valid fob signal, the engine won't start if the theft deterrent module hasn't completed its own verification handshake." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Chevrolet Silverado" />


      {/* GM-Specific Differences */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What Makes GM Different</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            GM's approach to vehicle security differs from other manufacturers in several critical ways that affect how we service Silverado keys:
          </p>
          <div className="space-y-4">
            {[
              { title: "Key Learning Procedure", desc: "GM uses a specific 'key learn' process where new keys must be taught to the vehicle's theft deterrent module. This isn't simple pairing — the module must accept the key's unique ID into its memory, and previously stored keys can be erased during the process if not handled correctly." },
              { title: "Multi-Module Communication", desc: "On a Silverado, the BCM, theft deterrent module, ECM, and instrument cluster all participate in the key authentication chain. A communication fault between any two modules can prevent starting — even with a perfectly programmed key." },
              { title: "Theft Deterrent Relearn", desc: "When all keys are lost or after certain module replacements, GM requires a theft deterrent relearn procedure that involves security access timing and module-specific reset sequences. This is fundamentally different from Ford's two-key rule or Nissan's PIN-based BCM reset." },
              { title: "Onboard vs. Scan Tool Programming", desc: "Older Silverados (2007–2018) allow onboard key learning with two existing keys — a feature most other brands dropped years ago. Newer PEPS-equipped models require professional scan tool access with manufacturer security credentials." },
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
          <h2 className="text-2xl font-bold mb-6">Common Silverado Key Problems We Fix</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: AlertTriangle, problem: "\"Key Not Detected\" Warning", detail: "Depleted CR2032 fob battery, damaged cab antenna, or aftermarket accessories (LED light bars, CB radios) creating RF interference around the truck." },
              { icon: AlertTriangle, problem: "Push Button No Start", detail: "Fob detected for entry but BCM-to-theft deterrent handshake fails during crank authorization. Often caused by low vehicle battery voltage on trucks with heavy electrical loads." },
              { icon: AlertTriangle, problem: "Intermittent Detection", detail: "Key works sometimes but not consistently. Common on crew cab models where the large cab creates antenna coverage gaps, especially near the B-pillar and rear seats." },
              { icon: AlertTriangle, problem: "Ignition Cylinder Wear (Older Trucks)", detail: "2007–2018 Silverados with traditional keys develop worn ignition cylinders from heavy daily use. The key turns but doesn't engage the transponder reader properly." },
              { icon: AlertTriangle, problem: "Remote Start Failure", detail: "Factory or aftermarket remote start systems that stop working after key programming changes or battery disconnection. The remote start module loses sync with the theft deterrent system." },
              { icon: AlertTriangle, problem: "Theft Deterrent Light Flashing", detail: "The security indicator light stays on or flashes continuously, preventing engine crank. Usually indicates the theft deterrent module has lost its stored key data or detected a module communication fault." },
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
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> At least one working key available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Older models: onboard key learn procedure (10-minute relearn cycle)</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Newer models: scan tool adds fob to BCM memory</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Faster service, lower cost</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> No working keys available</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Theft deterrent module reset required</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> Security access credentials needed for module communication</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> All new keys must be learned from scratch</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> VIN verification and ownership confirmation required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Silverado Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2007–2013 Silverado (GMT900)</h3>
              <p className="text-sm text-muted-foreground mb-3">Second-generation full-size platform with traditional transponder key security.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3 or PK3+ transponder chip in key blade</li>
                <li>• Onboard key learn supported with 2 existing keys</li>
                <li>• Ignition cylinder wear common at 100K+ miles</li>
                <li>• Remote head key (lock/unlock/start) available on LTZ and higher trims</li>
                <li>• Theft deterrent relearn: 10-minute security cycle per key</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2014–2018 Silverado (K2XX)</h3>
              <p className="text-sm text-muted-foreground mb-3">Third-generation platform introducing improved theft deterrent and optional proximity entry on higher trims.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PK3+ transponder standard across all trims</li>
                <li>• High Country trim introduced early PEPS availability</li>
                <li>• Onboard key learn still supported for transponder models</li>
                <li>• BCM firmware updates may affect key compatibility</li>
                <li>• Aftermarket remote start interference more common on this generation</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">2019–2024 Silverado (T1XX)</h3>
              <p className="text-sm text-muted-foreground mb-3">Current generation with full PEPS integration, advanced encryption, and multi-module security architecture.</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• PEPS standard on LT and above trims — push-button start with proximity fob</li>
                <li>• Work Truck (WT) trim may still use traditional transponder key</li>
                <li>• AES-128 encryption on fob communication</li>
                <li>• Professional scan tool with security access mandatory for programming</li>
                <li>• Theft deterrent module stores up to 8 key profiles</li>
                <li>• FCC ID: HYQ1EA (5-button) or HYQ1ES (6-button with tailgate)</li>
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
              <div className="text-3xl font-extrabold text-primary mb-2">GMT900</div>
              <div className="text-sm font-semibold mb-1">2007–2013</div>
              <p className="text-xs text-muted-foreground">Moderate. Onboard learn available with existing keys. Scan tool needed for all-keys-lost.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-accent mb-2">K2XX</div>
              <div className="text-sm font-semibold mb-1">2014–2018</div>
              <p className="text-xs text-muted-foreground">Moderate-High. Mixed key types across trims. BCM firmware versions affect procedure.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-destructive mb-2">T1XX</div>
              <div className="text-sm font-semibold mb-1">2019–2024</div>
              <p className="text-xs text-muted-foreground">High. Full security access required. Multi-module authentication chain. No self-programming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locksmith Notes */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">From the Field: Silverado Locksmith Notes</h2>
          <div className="space-y-4">
            {[
              "GM theft deterrent modules on Silverados are more sensitive to voltage drops than most other trucks. If the battery is marginal, the module may reject a perfectly valid key learn attempt. We always verify battery voltage before starting any programming procedure.",
              "Crew cab Silverados have larger cabs than most SUVs, and the LF antenna coverage can be inconsistent near the rear seats. Owners often report 'key not detected' when the fob is in a jacket pocket in the back seat — this is an antenna range issue, not a fob failure.",
              "Aftermarket remote start systems are extremely common on Silverados. These systems wire into the theft deterrent circuit, and if installed incorrectly (or if the module fails), they can prevent factory key programming from completing. We diagnose remote start interference before attempting key learn procedures.",
              "On 2014–2018 models, GM issued several BCM firmware updates that changed key learn timing. Using outdated procedures on an updated BCM will fail silently — the key appears to program but won't start the truck. We verify BCM firmware version before every job.",
            ].map((note, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex gap-3">
                <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="truck" currentSlug="/smart-key-programming/chevrolet/silverado" brandSlug="chevrolet" />


      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Mobile Silverado Key Service Across Burbank & Beyond</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p>Our primary Silverado service area. Whether your truck is parked at a job site on Empire Avenue, in the Burbank Media District, or at home in the Rancho neighborhood, our mobile locksmith unit arrives with full GM diagnostic capability. Silverado owners across Burbank trust us for fast, dealership-quality key service without the dealership wait.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p>Quick response to Glendale locations — from the Americana area to the industrial zones along San Fernando Road where many Silverado work trucks operate. We handle everything from spare key programming to all-keys-lost scenarios on any generation Silverado.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p>Serving North Hollywood and the NoHo Arts District. Our mobile truck service is built for Silverado owners who can't leave their vehicle unattended — we come to your location with all tools and key blanks needed to complete the job on-site.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p>Extended service coverage across greater Los Angeles. For Silverado owners throughout the valley and surrounding areas, we provide the same professional GM key programming service with full theft deterrent module capability and mobile convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Silverado Key Programming FAQ</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need a Silverado Key Programmed? We Come to You.</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Whether it's a spare transponder key for your work truck or an all-keys-lost PEPS fob replacement on a brand new Silverado, our mobile locksmith handles it on-site in Burbank. GM-specific tools, same-day service, no dealership markup.
          </p>
          <a href="tel:+18184858877" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors shadow-lg text-lg">
            <Phone className="w-5 h-5" /> (818) 485-8877
          </a>
        </div>
      </section>
    </main>
  );
}