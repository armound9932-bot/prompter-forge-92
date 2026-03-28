import { Cpu, Phone, ShieldCheck, AlertTriangle, Wrench, Clock, MapPin, CheckCircle2, Car, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


export default function NissanSentraPage() {
  useEffect(() => {
    document.title = "Nissan Sentra Smart Key Programming Burbank | Intelligent Key & Transponder – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professional Nissan Sentra key programming in Burbank. Transponder keys, Intelligent Key fobs, BCM reset, and PIN code extraction for all Sentra generations. Mobile locksmith service.");
    }

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Nissan Sentra key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. For transponder-equipped Sentras, we clone or register new keys using PIN code extraction. For Intelligent Key models, a BCM reset allows fresh key registration without any original key present." } },
        { "@type": "Question", name: "Why does my Nissan Sentra say 'No Key Detected'?", acceptedAnswer: { "@type": "Answer", text: "This typically indicates a depleted fob battery, BCM communication fault, or damaged LF antenna coil in the door handle. On older Sentras with transponder keys, this message won't appear — instead, the engine simply won't crank." } },
        { "@type": "Question", name: "Do I need a dealer for Nissan Sentra key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with Nissan-compatible diagnostic tools can program both transponder keys and Intelligent Key fobs on-site, including BCM resets and PIN extraction." } },
        { "@type": "Question", name: "How long does Nissan Sentra key programming take?", acceptedAnswer: { "@type": "Answer", text: "Transponder key programming on older Sentras takes 15–25 minutes. Intelligent Key programming on newer models takes 25–45 minutes. All-keys-lost scenarios with BCM reset may take up to 60 minutes." } },
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border py-2">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
          <span>/</span>
          <Link to="/smart-key-programming/nissan" className="hover:text-primary transition-colors">Nissan</Link>
          <span>/</span>
          <span className="text-foreground font-semibold">Sentra</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Car className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nissan Sentra — Compact Sedan Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Nissan Sentra Key Programming in Burbank</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            The Nissan Sentra spans nearly two decades of key technology — from traditional transponder keys that physically turn in the ignition to modern Intelligent Key fobs with push-button start. This dual-system history makes the Sentra unique among Nissan models and requires a locksmith who understands both architectures. Our Burbank mobile team programs every Sentra generation on-site, from basic chip key cutting to advanced BCM security access procedures.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18184858898" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg">
              <Phone className="w-5 h-5" /> (818) 485-8898
            </a>
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-5 py-3 rounded-xl font-semibold text-sm">
              <Clock className="w-4 h-4" /> Same-Day Mobile Service
            </span>
          </div>
        </div>
      </section>

      {/* Key System Types */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Sentra Key System Types: Two Distinct Eras</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Traditional Transponder Key</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Pre-2020 Sentra models use a physical key blade with an embedded transponder chip. You insert the key into the ignition cylinder and turn to start. The immobilizer reads the chip's encrypted signal through an antenna ring around the ignition barrel.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Physical key blade must be cut to match wafer tumblers</li>
                <li>• Transponder chip (ID46 / PCF7936) communicates with immobilizer</li>
                <li>• Ignition cylinder wear is a common mechanical issue</li>
                <li>• Simpler programming — no BCM reset typically required</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Intelligent Key (Push-to-Start)</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The 2020+ Sentra (B18 platform) adopts Nissan's full Intelligent Key system. The fob stays in your pocket while LF antennas detect proximity for keyless entry, and the BCM authorizes push-button engine start through encrypted UHF handshake.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Proximity-based keyless entry via LF antenna polling</li>
                <li>• Push-button start with BCM/ECM authentication</li>
                <li>• Rolling code encryption prevents signal capture</li>
                <li>• BCM reset and PIN extraction required for all-keys-lost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Nissan Sentra" />


      {/* How System Works */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" /> How the Nissan Sentra Key System Works
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Transponder Models (Pre-2020)</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The ignition antenna ring sends a low-power signal that energizes the transponder chip in the key blade. The chip responds with its encrypted ID, which the immobilizer ECU validates before allowing fuel injection and ignition. No BCM involvement — the immobilizer ECU handles everything directly.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Intelligent Key Models (2020+)</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The BCM continuously polls through LF antennas in each door handle. When the fob enters detection range, it responds via UHF with an encrypted rolling code. The BCM validates the code, authorizes door unlock, and then authenticates the immobilizer handshake when the start button is pressed.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">BCM: The Central Controller</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                On Intelligent Key Sentras, the BCM is the single point of control for key recognition, door lock commands, and start authorization. Unlike systems that distribute these functions across multiple modules, Nissan routes everything through the BCM — making it both efficient and a potential single point of failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" /> Common Nissan Sentra Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"No Key Detected\" (2020+ Models)", desc: "The most frequent Intelligent Key complaint on the B18 Sentra. Usually a depleted CR2032 battery, but persistent warnings after battery replacement point to BCM communication faults or antenna wiring issues." },
              { title: "Push Button Won't Start Engine", desc: "The Sentra recognizes the fob for door entry but refuses to authorize engine start. This indicates the BCM accepts the RF signal but the immobilizer authentication fails — a BCM-level fault requiring diagnostic access." },
              { title: "Key Works Intermittently", desc: "Sometimes the fob is detected, sometimes it isn't. On the compact Sentra cabin, this is often caused by fob battery voltage hovering at the detection threshold rather than antenna issues common in larger vehicles." },
              { title: "Ignition Key Won't Turn (Older Models)", desc: "Pre-2020 Sentras with traditional keys develop ignition cylinder wear. The wafer tumblers bind against a worn key blade, making the cylinder difficult or impossible to turn. This is a mechanical issue, not electronic." },
              { title: "Weak Battery But Doors Still Unlock", desc: "A fob battery below optimal voltage can still generate enough signal for the simpler door unlock command but lack the power for the more complex immobilizer authentication handshake needed for engine start." },
              { title: "BCM Communication Faults", desc: "The BCM loses communication with the key system — doors won't respond to the fob, dash displays key warnings, and the start button is unresponsive. Requires diagnostic scan and potentially BCM reprogramming." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-bold text-sm mb-2 text-foreground flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary shrink-0" /> {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Add a Key (Working Key Available)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Existing key authenticates the programming session</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Transponder models: new key registered through immobilizer ECU</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Intelligent Key models: new fob added via BCM without clearing others</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Typically 15–30 minutes depending on model year</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-destructive" /> All Keys Lost (Advanced Programming)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Transponder models: immobilizer ECU reset with PIN code</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Intelligent Key models: full BCM memory clear required</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> PIN extraction from BCM is mandatory for security access</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Process takes 30–60 minutes depending on system type</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sentra by Year */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Sentra Key System by Generation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">B16 Generation</div>
              <h3 className="font-bold text-lg mb-3">2007–2012 Sentra</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The B16 Sentra uses a traditional transponder key with an ID46 chip. Programming is straightforward — the immobilizer ECU manages key registration without BCM involvement. These models are the simplest Sentras to program.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Physical key with ID46 transponder chip</li>
                <li>• FCC ID: CWTWB1U751 (remote head key)</li>
                <li>• Standard ignition cylinder — no push-to-start</li>
                <li>• PIN code programming through immobilizer ECU</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">B17 Generation</div>
              <h3 className="font-bold text-lg mb-3">2013–2019 Sentra</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The B17 maintained traditional transponder keys on base trims but introduced available Intelligent Key on higher trims (2016+). This split means two entirely different programming procedures depending on the specific Sentra configuration.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Base: transponder key (CWTWB1U816)</li>
                <li>• SV/SR (2016+): available Intelligent Key (KR5TXN7)</li>
                <li>• Mixed system — verify trim level before programming</li>
                <li>• BCM involvement only on Intelligent Key-equipped models</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">B18 Generation</div>
              <h3 className="font-bold text-lg mb-3">2020–2024 Sentra</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The current B18 Sentra standardizes Intelligent Key across all trims. Full push-button start with AES encryption and enhanced BCM security protocols. These models require professional diagnostic tools for any key programming operation.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Standard Intelligent Key on all trims (KR5TXN7)</li>
                <li>• AES-encrypted BCM communication</li>
                <li>• Security gateway module on 2022+ models</li>
                <li>• Professional-grade tools required — no DIY programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity by System Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Transponder Keys (2007–2019)</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Straightforward programming through the immobilizer ECU. PIN code access is needed for all-keys-lost scenarios, but the process is faster and less complex than Intelligent Key programming. Most transponder key jobs are completed in under 20 minutes.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Intelligent Key (2016–2024)</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Requires security access through the BCM. PIN code extraction is mandatory for all-keys-lost situations, and the BCM must be cleared before registering new fobs. The 2022+ security gateway adds another authentication layer that consumer tools cannot penetrate.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Trim-Level Verification</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The 2013–2019 Sentra is uniquely challenging because the key system varies by trim. A 2017 Sentra S uses a transponder key while a 2017 Sentra SR may use Intelligent Key. We verify the exact trim and key type before dispatching to ensure we bring the correct equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">From Our Technicians: Sentra-Specific Notes</h2>
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-1">BCM Issues Mirror Larger Nissans</h3>
                <p className="text-xs leading-relaxed">Despite the Sentra's compact size, its BCM experiences the same communication faults we see in Rogue and Altima models. The BCM-centric architecture means a single module fault affects key detection, door locks, and engine start simultaneously.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Ignition Cylinder Wear on Older Models</h3>
                <p className="text-xs leading-relaxed">B16 and B17 Sentras with traditional keys develop ignition cylinder binding after 80,000–100,000 miles. The wafer tumblers wear unevenly, causing the key to stick or refuse to turn. We carry replacement cylinders for common Sentra model years.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Battery Problems Are Deceptive</h3>
                <p className="text-xs leading-relaxed">The compact Sentra cabin means the fob is always close to the interior antenna — so even a weak battery can intermittently trigger detection. This creates a frustrating "works sometimes" pattern that owners mistake for a vehicle fault when it's simply a fob battery at threshold voltage.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Trim Confusion on B17 Models</h3>
                <p className="text-xs leading-relaxed">We regularly get calls for "Sentra smart key programming" that turn out to be transponder-key base models. Confirming the exact trim level before dispatching saves time and ensures we arrive with the right key blank and programming equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/nissan/sentra" brandSlug="nissan" />


      {/* Local SEO */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Nissan Sentra Key Programming — Burbank &amp; Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Nissan Sentra is one of the most common compact sedans on Burbank streets. Our mobile locksmith carries both transponder key blanks and Intelligent Key fobs for every Sentra generation, along with the diagnostic equipment needed for BCM access and PIN extraction. We serve all Burbank neighborhoods from the Media District to the Rancho area.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Glendale Sentra owners receive the same rapid mobile response. Whether you need a transponder key cut and programmed or an Intelligent Key fob registered through the BCM, we bring complete Nissan diagnostic capability to your Glendale location.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From the NoHo Arts District to Valley Village, we handle Nissan Sentra key programming throughout North Hollywood. Our mobile unit is equipped for both traditional transponder key cutting and modern Intelligent Key BCM programming.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our Sentra key programming service extends across greater Los Angeles. The Sentra's popularity as an affordable commuter car means we keep high-demand key blanks and fobs in stock for same-day service throughout the LA area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions — Nissan Sentra Key Programming</h2>
          <div className="grid gap-4">
            {[
              { q: "Can you program a Nissan Sentra key without the original?", a: "Yes. For transponder-equipped Sentras, we use PIN code extraction to register new keys through the immobilizer ECU. For Intelligent Key models, a BCM reset allows fresh fob registration without any original present." },
              { q: "Why does my Nissan Sentra say 'No Key Detected'?", a: "This warning appears on 2020+ Intelligent Key models and some 2016+ SV/SR trims. Common causes include a depleted CR2032 fob battery, BCM communication faults, or damaged LF antenna wiring in the door handles." },
              { q: "Do I need a dealer for Nissan Sentra key programming?", a: "No. Our mobile locksmith handles both transponder key programming and Intelligent Key registration on-site using professional Nissan-compatible diagnostic tools — typically faster and more affordable than dealership service." },
              { q: "How long does Nissan Sentra key programming take?", a: "Transponder key programming takes 15–25 minutes. Intelligent Key registration takes 25–45 minutes. All-keys-lost scenarios requiring BCM reset or immobilizer reprogramming may take up to 60 minutes." },
            ].map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-bold text-sm mb-2 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need Nissan Sentra Key Programming in Burbank?</h2>
          <p className="text-primary-foreground/80 mb-6 text-base">
            Whether your Sentra uses a traditional transponder key or modern Intelligent Key system, our mobile locksmith arrives with the right equipment for your exact model year. Same-day service across Burbank, Glendale, North Hollywood, and greater Los Angeles.
          </p>
          <a href="tel:+18184858898" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-colors shadow-lg">
            <Phone className="w-5 h-5" /> Call (818) 485-8898 Now
          </a>
        </div>
      </section>
    </main>
  );
}
