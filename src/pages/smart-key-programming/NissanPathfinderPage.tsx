import { Cpu, Phone, ShieldCheck, AlertTriangle, Wrench, Clock, MapPin, CheckCircle2, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


export default function NissanPathfinderPage() {
  useEffect(() => {
    document.title = "Nissan Pathfinder Smart Key Programming Burbank | Intelligent Key – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professional Nissan Pathfinder Intelligent Key programming in Burbank. BCM reset, PIN extraction, 3-row SUV antenna diagnostics for all Pathfinder generations. Mobile locksmith service.");
    }

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Nissan Pathfinder key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform BCM resets with PIN code extraction to register new Intelligent Keys when all originals are lost. No dealer visit required — our mobile technician handles everything on-site." } },
        { "@type": "Question", name: "Why is the key not detected in the Pathfinder's back seat?", acceptedAnswer: { "@type": "Answer", text: "The Pathfinder's three-row cabin stretches LF antenna coverage thin, especially in the third row. Weak fob batteries compound the issue. Third-row passengers holding the only key can trigger 'No Key Detected' warnings at the dash." } },
        { "@type": "Question", name: "What is a BCM reset on a Nissan Pathfinder?", acceptedAnswer: { "@type": "Answer", text: "A BCM reset clears all registered Intelligent Key data from the Body Control Module, allowing fresh key registration. Required when all keys are lost or when persistent BCM communication errors prevent normal key recognition." } },
        { "@type": "Question", name: "Do I need a dealer for Nissan Pathfinder key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with Nissan-compatible diagnostic tools can program Intelligent Keys, extract PIN codes, and perform BCM resets at your location — typically faster and more affordable than dealership service." } },
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
          <span className="text-foreground font-semibold">Pathfinder</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Car className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nissan Pathfinder — Large SUV Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Nissan Pathfinder Smart Key Programming in Burbank</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            The Nissan Pathfinder is a full-size three-row SUV that presents unique challenges for Intelligent Key programming. Its expansive cabin stretches antenna coverage across zones that smaller Nissans don't contend with, and its BCM must manage key detection from the driver's seat to the third row and cargo area. Our Burbank mobile locksmith team specializes in Pathfinder-specific diagnostics — from rear antenna faults to BCM security access procedures that keep your family SUV running.
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

      {/* How Intelligent Key Works */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-primary" /> How the Pathfinder Intelligent Key System Works
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3">Multi-Zone LF Antenna Array</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Pathfinder distributes LF antennas across three distinct zones: front (door handles and dashboard), mid-cabin (second-row area), and rear (cargo and third-row zone). Each antenna broadcasts a polling signal that the Intelligent Key fob must respond to for zone-specific functions like keyless entry, interior detection, and rear hatch activation.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3">UHF Encrypted Response</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When the fob receives an LF poll, it responds via UHF with an encrypted rolling code. The Pathfinder's BCM validates this code against its registered key database. The encryption strength varies by generation — older R52 models use simpler protocols while the current R53 employs AES-level security.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3">BCM: Single Point of Authority</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nissan routes all Intelligent Key functions through the BCM — key registration, door lock authorization, immobilizer handshake, and start permission. On a vehicle as large as the Pathfinder, the BCM must coordinate signals from six or more antenna coils simultaneously, making it both the brain and the vulnerability of the entire system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large SUV Behavior */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Three-Row SUV Detection Challenges</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-3xl">
            The Pathfinder's cabin volume is significantly larger than a Rogue or Altima, creating detection dynamics that don't exist in compact vehicles. Understanding these patterns is critical for accurate diagnosis.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Third-Row Dead Zones", desc: "The LF antenna in the rear zone must cover the third-row seats and cargo area. Signal strength drops significantly at the cabin extremes, causing 'No Key Detected' when the fob is with a third-row passenger — especially with a weakening battery." },
              { title: "Cargo Area Interference", desc: "The Pathfinder's deep cargo well sits behind the third row, far from the nearest antenna. Metal cargo organizers, roof rack wiring, and aftermarket accessories in the cargo area create RF shadows that block or weaken fob communication." },
              { title: "Key Placement Sensitivity", desc: "Where you place the fob inside the Pathfinder matters more than in smaller vehicles. A fob on the dashboard is in the strongest detection zone; a fob in a third-row cupholder may intermittently lose contact with the BCM." },
              { title: "Rear Hatch Detection", desc: "The hands-free liftgate relies on a dedicated rear antenna. The Pathfinder's tall, wide tailgate routes this antenna wiring through the hatch hinge — a flex point prone to wire fatigue after years of daily opening and closing cycles." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-bold text-sm mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" /> Common Nissan Pathfinder Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"No Key Detected\" Warning", desc: "The Pathfinder's most frequent complaint. The large cabin means the fob can be out of reliable LF range while still inside the vehicle. A fresh CR2032 battery resolves most cases, but persistent warnings indicate antenna wiring faults or BCM communication errors." },
              { title: "Push Button No Start", desc: "The BCM recognizes the fob for door entry but won't authorize the immobilizer handshake for engine start. This split behavior — doors work, engine doesn't — points to a BCM authentication fault rather than a fob or antenna problem." },
              { title: "Intermittent Detection", desc: "The key is recognized sometimes but not consistently. On the Pathfinder, this pattern is often position-dependent: the fob works near the front but drops out in the second or third row. Diagnosing requires zone-by-zone antenna testing." },
              { title: "Rear Hatch Not Responding", desc: "The motion-activated or button-press liftgate stops detecting the key. The rear hatch antenna wiring passes through the upper hinge area and is subject to repeated flex stress. Wire fatigue in this area is a known Pathfinder issue." },
              { title: "Key Works But Engine Won't Crank", desc: "Doors lock and unlock normally via proximity, but the start button produces no response. This signature Nissan fault means RF communication is functional but transponder authentication is failing at the BCM/ECM level." },
              { title: "BCM Communication Faults", desc: "The BCM stops responding to all key inputs — no door unlock, no start, key warning lights illuminated. On a large SUV like the Pathfinder, BCM faults can stem from voltage drops across the extended wiring harness or water intrusion near rear modules." },
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
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Existing Intelligent Key authenticates the programming session</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> New fob registered through BCM without clearing existing keys</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Typically 20–35 minutes on-site</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> All previously registered keys remain functional</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-destructive" /> All Keys Lost (BCM Reset Required)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> PIN code extraction from BCM is mandatory</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> BCM memory cleared of all previous key registrations</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Security access protocol required before new key data is written</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Process takes 50–80 minutes depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pathfinder by Year */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Pathfinder Smart Key by Generation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">4th Generation (R52)</div>
              <h3 className="font-bold text-lg mb-3">2013–2016 Pathfinder</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The R52 brought the Pathfinder from body-on-frame to unibody construction and introduced Intelligent Key as standard equipment. These early models use the KR5S180144014 fob with moderate encryption and a four-zone antenna layout.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Standard Intelligent Key on all trims</li>
                <li>• 4-button fob (Lock / Unlock / Panic / Hatch)</li>
                <li>• PIN code programming with standard security access</li>
                <li>• CVT transmission module can interfere with BCM communication</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">4th Gen Refresh (R52)</div>
              <h3 className="font-bold text-lg mb-3">2017–2021 Pathfinder</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The mid-cycle refresh brought updated Intelligent Key hardware with improved antenna sensitivity and the KR5TXN7 fob on later models. Enhanced BCM security protocols increase programming complexity for all-keys-lost scenarios.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Upgraded LF antenna sensitivity in rear zones</li>
                <li>• Remote engine start standard on SV and above</li>
                <li>• Enhanced BCM security — longer PIN extraction time</li>
                <li>• Motion-activated liftgate adds rear antenna dependency</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">5th Generation (R53)</div>
              <h3 className="font-bold text-lg mb-3">2022–2024 Pathfinder</h3>
              <p className="text-muted-foreground text-sm mb-3">
                A complete redesign with AES-128 encryption and Nissan's latest security gateway architecture. The R53 uses the KR5TXN7 fob with expanded zone detection and requires advanced diagnostic tools for any key programming operation.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• AES-128 encrypted Intelligent Key communication</li>
                <li>• Security gateway module blocks unauthorized tool access</li>
                <li>• Six-zone antenna coverage across full cabin</li>
                <li>• Professional-grade tools mandatory — no consumer programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Security Access Requirement</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Every Pathfinder Intelligent Key programming session requires security access authentication through the BCM. This multi-step handshake verifies the diagnostic tool's authorization before any key data can be read or written — a level of security absent from Toyota and most Honda systems.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">BCM Reset Frequency</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Pathfinder BCM resets are required more frequently than on smaller Nissan models. The extended wiring harness and multiple antenna zones create more potential failure points, and intermittent BCM communication errors sometimes require a full clear and re-registration to resolve.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Large SUV Diagnostic Time</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Diagnosing key issues on the Pathfinder takes longer than on compact models because each antenna zone must be tested individually. A "No Key Detected" fault could originate from any of six antenna coils, the BCM, or the fob itself — systematic zone testing isolates the root cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">From Our Technicians: Pathfinder-Specific Notes</h2>
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-1">BCM Failures Cascade Harder</h3>
                <p className="text-xs leading-relaxed">On a Pathfinder, a BCM fault doesn't just affect key detection — it can simultaneously knock out power windows, door locks, interior lighting, and the start system. The larger wiring harness means more connectors and more potential fault points than compact Nissans.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Third-Row Key Detection Is Real</h3>
                <p className="text-xs leading-relaxed">We regularly get calls from Pathfinder owners whose vehicle shows "No Key Detected" with the key in the third row. This isn't a malfunction — it's the physical reality of LF signal attenuation across a large cabin. We advise keeping the fob forward of the second row.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Rear Hatch Wiring Fatigue</h3>
                <p className="text-xs leading-relaxed">The Pathfinder's heavy power liftgate puts significant stress on the wiring harness routed through the hatch hinge. After 4–5 years of daily use, wire fatigue causes intermittent rear antenna failure. We see this more on Pathfinders than on lighter-hatch Rogues.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Voltage Drop Issues</h3>
                <p className="text-xs leading-relaxed">The Pathfinder's longer wiring runs from battery to rear modules can develop voltage drops over time — especially at corroded ground points. Low voltage at the rear BCM antenna circuit mimics fob detection failure and requires electrical diagnosis beyond standard key programming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/nissan/pathfinder" brandSlug="nissan" />


      {/* Local SEO */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Nissan Pathfinder Key Programming — Burbank &amp; Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our primary service area for Pathfinder Intelligent Key programming. The Pathfinder is a popular family SUV across Burbank neighborhoods — from the hillside residential areas to downtown commercial zones. Our mobile unit carries pre-cut key blanks, Pathfinder-specific fobs, and the diagnostic equipment needed for BCM access on every R52 and R53 generation.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Glendale Pathfinder owners receive the same rapid mobile response. Whether you're at the Galleria or parked in a residential neighborhood, we bring full Nissan BCM diagnostic capability to your location for on-site key programming and antenna zone testing.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We serve all of North Hollywood for Nissan Pathfinder key service. From the NoHo Arts District through Valley Village, our mobile locksmith handles Intelligent Key programming, BCM resets, and zone-by-zone antenna diagnostics with professional Nissan tools.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our Pathfinder key programming service extends throughout greater Los Angeles. We carry professional diagnostic equipment for BCM security access, PIN extraction, and multi-zone antenna testing across every Pathfinder model year from 2013 to 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions — Nissan Pathfinder Key Programming</h2>
          <div className="grid gap-4">
            {[
              { q: "Can you program a Nissan Pathfinder key without the original?", a: "Yes. We perform BCM resets with PIN code extraction to register new Intelligent Keys when all originals are lost. Our mobile technician handles the entire process on-site without a dealer visit." },
              { q: "Why is my key not detected in the Pathfinder's back seat?", a: "The Pathfinder's three-row cabin stretches LF antenna coverage to its limits in the rear zones. A fob with even slightly reduced battery voltage may not respond reliably from the third row. Keeping the fob forward of the second row ensures consistent detection." },
              { q: "What is a BCM reset on a Nissan Pathfinder?", a: "A BCM reset clears all registered Intelligent Key data from the Body Control Module, allowing fresh key registration. This is required when all keys are lost or when the BCM develops persistent communication errors that prevent key recognition." },
              { q: "Do I need a dealer for Nissan Pathfinder key programming?", a: "No. Our mobile locksmith programs Intelligent Keys, extracts PIN codes, and performs BCM resets on-site using professional Nissan-compatible diagnostic tools — typically faster and more affordable than dealership service." },
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need Nissan Pathfinder Key Programming in Burbank?</h2>
          <p className="text-primary-foreground/80 mb-6 text-base">
            Our mobile locksmith arrives with Nissan-specific diagnostic tools, Pathfinder-compatible key fobs, and the expertise to handle BCM resets, PIN extraction, and multi-zone antenna diagnostics for every Pathfinder generation. Same-day service across Burbank, Glendale, North Hollywood, and greater Los Angeles.
          </p>
          <a href="tel:+18184858898" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-colors shadow-lg">
            <Phone className="w-5 h-5" /> Call (818) 485-8898 Now
          </a>
        </div>
      </section>
    </main>
  );
}
