import { Cpu, Phone, ShieldCheck, AlertTriangle, Wrench, Clock, MapPin, CheckCircle2, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NissanRoguePage() {
  useEffect(() => {
    document.title = "Nissan Rogue Smart Key Programming Burbank | Intelligent Key – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professional Nissan Rogue Intelligent Key programming in Burbank. BCM reset, PIN code extraction, proximity key replacement for all Rogue generations. Mobile locksmith service.");
    }

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Nissan Rogue key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our technicians perform BCM resets with PIN code extraction to register new Intelligent Keys when all originals are lost. This is standard for Nissan vehicles and does not require a dealer visit." } },
        { "@type": "Question", name: "Why does my Nissan Rogue say 'No Key Detected'?", acceptedAnswer: { "@type": "Answer", text: "Common causes include a depleted fob battery, BCM communication faults, damaged LF antenna coils near door handles, or RF interference from aftermarket accessories in the cargo area." } },
        { "@type": "Question", name: "What is a BCM reset on Nissan Rogue?", acceptedAnswer: { "@type": "Answer", text: "A BCM (Body Control Module) reset clears all registered key data from the vehicle's memory, allowing fresh key registration. This is required when all keys are lost or when the BCM experiences communication errors." } },
        { "@type": "Question", name: "Do I need a dealer for Nissan Rogue key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with Nissan-compatible diagnostic tools can program Intelligent Keys, extract PIN codes, and perform BCM resets on-site — often faster and more affordable than dealership service." } },
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
          <span className="text-foreground font-semibold">Rogue</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/10 to-background py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Car className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nissan Rogue — Compact SUV Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Nissan Rogue Smart Key Programming in Burbank</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            The Nissan Rogue is one of the best-selling compact SUVs in the Burbank area, and its Intelligent Key system is built around Nissan's BCM-centric architecture. Whether you've lost all your keys, need a spare programmed, or your Rogue displays "No Key Detected," our mobile locksmith team handles every generation on-site with professional diagnostic equipment designed for Nissan's security protocols.
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
            <Cpu className="w-6 h-6 text-primary" /> How the Nissan Rogue Intelligent Key System Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3">BCM-Centric Communication</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike Toyota or Honda systems that distribute key management across multiple modules, Nissan centralizes nearly all Intelligent Key functions through the Body Control Module (BCM). When you approach your Rogue, LF (low-frequency) antennas embedded in each door handle and the rear hatch emit polling signals. Your Intelligent Key responds via encrypted UHF transmission, and the BCM validates the rolling code before authorizing entry or engine start.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3">Compact SUV Antenna Layout</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Rogue's compact SUV architecture places LF antennas at each front door handle, the rear hatch, and inside the cabin. The interior antenna coverage is optimized for a mid-size cabin — more expansive than a sedan like the Altima, but more predictable than a larger three-row SUV. The cargo area antenna near the rear hatch enables hands-free liftgate operation on equipped models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUV-Specific Behavior */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Compact SUV Detection Behavior</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Rear Hatch Zone", desc: "The Rogue's rear hatch antenna extends detection into the cargo area, but metal cargo organizers or heavy loads can create signal shadows that reduce detection range." },
              { title: "Cabin Coverage", desc: "The Rogue's mid-size cabin provides more consistent interior detection than larger SUVs. Key placement on the center console or front cupholder maintains reliable communication." },
              { title: "Hands-Free Liftgate", desc: "Rogue models with motion-activated liftgate rely on a dedicated rear antenna. If this antenna fails, hands-free access stops working even though the key unlocks doors normally." },
              { title: "Cargo Interference", desc: "Aftermarket cargo lights, dash cams with constant power draw, and wireless phone chargers in the cargo area can create RF noise that interferes with key detection at the rear." },
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
            <AlertTriangle className="w-6 h-6 text-destructive" /> Common Nissan Rogue Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"No Key Detected\" Warning", desc: "The most common Rogue complaint. Usually caused by a weak CR2032 battery, but can also indicate BCM communication faults or damaged LF antenna wiring behind door handle assemblies." },
              { title: "Push Button No Start", desc: "The Rogue recognizes the key for door entry but won't authorize engine start. This typically points to an immobilizer communication failure between the BCM and ECM, often requiring security access reprogramming." },
              { title: "Intermittent Key Detection", desc: "The key works sometimes but not consistently. On Rogue models, this is frequently traced to corroded antenna connections — especially the rear hatch antenna exposed to weather through the tailgate seal." },
              { title: "Rear Hatch Not Detecting Key", desc: "The hands-free liftgate stops responding to key proximity. The rear antenna wiring runs through the hatch hinge area and is susceptible to fatigue breaks from repeated opening and closing." },
              { title: "Key Works But Won't Start", desc: "Doors lock and unlock normally, but the engine won't crank. This BCM-specific fault means the transponder authentication is failing even though RF communication is intact — a signature Nissan issue." },
              { title: "Weak Battery Masking BCM Faults", desc: "A low fob battery reduces UHF signal strength, which can appear identical to a BCM fault. We always test with a fresh battery before diagnosing deeper electrical issues." },
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
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Existing registered key authenticates the programming session</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> New Intelligent Key is registered through BCM without clearing existing keys</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> Faster process — typically 20–30 minutes on-site</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span> All existing keys remain functional after registration</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-destructive" /> All Keys Lost (BCM Reset Required)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> PIN code extraction from the BCM is mandatory</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> BCM memory must be cleared of all previous key registrations</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Security access protocol required before new key registration</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold mt-0.5">•</span> Process takes 45–75 minutes depending on Rogue generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rogue by Year */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Nissan Rogue Smart Key by Generation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">1st Generation (S35)</div>
              <h3 className="font-bold text-lg mb-3">2008–2013 Rogue</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The original Rogue introduced Nissan's Intelligent Key to the compact SUV segment. These early models use the CWTWB1U808 fob with simpler encryption and a less complex BCM architecture.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Standard Intelligent Key on most trims</li>
                <li>• 3-button fob (Lock / Unlock / Panic)</li>
                <li>• PIN code programming with basic security access</li>
                <li>• Known steering lock actuator issues on early models</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">2nd Generation (T32)</div>
              <h3 className="font-bold text-lg mb-3">2014–2020 Rogue</h3>
              <p className="text-muted-foreground text-sm mb-3">
                A complete platform redesign brought improved Intelligent Key hardware with the KR5S180144106 fob. Enhanced encryption and expanded antenna coverage improve detection reliability across the larger T32 cabin.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• 4-button fob adds remote start on select trims</li>
                <li>• Improved LF antenna sensitivity</li>
                <li>• Motion-activated liftgate integration (2017+)</li>
                <li>• More complex BCM security — PIN extraction required for all-keys-lost</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">3rd Generation (T33)</div>
              <h3 className="font-bold text-lg mb-3">2021–2024 Rogue</h3>
              <p className="text-muted-foreground text-sm mb-3">
                The current Rogue uses the KR5TXN7 fob with AES-128 encryption and expanded antenna zones. Nissan's latest security protocols require advanced diagnostic access for key programming.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• AES-128 encrypted Intelligent Key communication</li>
                <li>• Enhanced proximity detection with zone-based sensing</li>
                <li>• Security gateway module on 2022+ models</li>
                <li>• Requires professional-grade tools for all programming operations</li>
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
                Nissan Rogue key programming requires security access authentication before any key data can be written to the BCM. This is fundamentally different from Toyota's approach and requires Nissan-specific diagnostic protocols.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">BCM Reset Frequency</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                BCM resets are more common on Rogue than on competing compact SUVs. Key registration failures, phantom "No Key Detected" warnings, and intermittent detection issues often require a full BCM clear and re-registration of all keys.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-bold text-sm mb-2">Professional Tools Required</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Consumer OBD-II scanners cannot access Nissan's key programming functions. Our technicians use professional-grade equipment with Nissan security access capabilities to handle BCM communication, PIN extraction, and key registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">From Our Technicians: Rogue-Specific Notes</h2>
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-1">BCM Failures Are Disproportionately Common</h3>
                <p className="text-xs leading-relaxed">We see more BCM-related key issues on Rogue than on comparable Honda CR-V or Toyota RAV4 models. Nissan's heavy BCM reliance means a single module fault can cascade into key detection, door lock, and starting problems simultaneously.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Rear Antenna Wiring Fatigue</h3>
                <p className="text-xs leading-relaxed">The T32 Rogue (2014–2020) routes rear antenna wiring through the hatch hinge — a high-flex area. After years of daily use, wire fatigue causes intermittent rear detection failure that's often misdiagnosed as a fob issue.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Intermittent Detection is BCM-First</h3>
                <p className="text-xs leading-relaxed">When a Rogue owner reports "sometimes it works, sometimes it doesn't," we check the fob battery first, then move directly to BCM diagnostics. On Nissan, intermittent detection is a BCM communication symptom more often than an antenna or fob fault.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Key Detected But No Start</h3>
                <p className="text-xs leading-relaxed">A signature Nissan issue: the Rogue unlocks and locks with the fob but refuses to start. This means RF communication works but transponder authentication is failing — the BCM accepts the remote signal but rejects the immobilizer handshake.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Nissan Rogue Key Programming — Burbank &amp; Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our primary service area for Nissan Rogue key programming. We respond to calls across Burbank — from the Media District to Magnolia Park and the Rancho neighborhood. With the Rogue being one of the most popular compact SUVs on Burbank streets, our mobile unit carries pre-cut key blanks and programming equipment for all three Rogue generations.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Adjacent to Burbank, Glendale Rogue owners receive the same rapid response for Intelligent Key programming. Whether you're at the Americana or parked near downtown Glendale, we bring full BCM diagnostic capability to your location.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We serve all of North Hollywood for Nissan Rogue key service. From the NoHo Arts District to Valley Village, our mobile locksmith handles Intelligent Key programming, BCM resets, and emergency lockout assistance with Nissan-specific tools.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our mobile service extends throughout greater Los Angeles for Nissan Rogue owners. We carry professional diagnostic equipment capable of handling BCM security access, PIN extraction, and key registration for every Rogue model year from 2008 to 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions — Nissan Rogue Key Programming</h2>
          <div className="grid gap-4">
            {[
              { q: "Can you program a Nissan Rogue key without the original?", a: "Yes. Our technicians perform BCM resets with PIN code extraction to register new Intelligent Keys when all originals are lost. This is standard for Nissan vehicles and does not require a dealer visit." },
              { q: "Why does my Nissan Rogue say 'No Key Detected'?", a: "Common causes include a depleted CR2032 fob battery, BCM communication faults, damaged LF antenna coils near door handles, or RF interference from aftermarket accessories mounted in the cargo area." },
              { q: "What is a BCM reset on a Nissan Rogue?", a: "A BCM reset clears all registered key data from the vehicle's Body Control Module, allowing fresh key registration. This is required when all keys are lost or when the BCM develops communication errors that prevent normal key recognition." },
              { q: "Do I need a dealer for Nissan Rogue key programming?", a: "No. A qualified automotive locksmith with Nissan-compatible diagnostic tools can program Intelligent Keys, extract PIN codes, and perform BCM resets at your location — typically faster and more affordable than dealership service." },
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need Nissan Rogue Key Programming in Burbank?</h2>
          <p className="text-primary-foreground/80 mb-6 text-base">
            Our mobile locksmith arrives at your location with Nissan-specific diagnostic tools, pre-cut key blanks, and the expertise to handle BCM resets, PIN extraction, and Intelligent Key registration for every Rogue generation. Same-day service across Burbank, Glendale, North Hollywood, and greater Los Angeles.
          </p>
          <a href="tel:+18184858898" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-background/90 transition-colors shadow-lg">
            <Phone className="w-5 h-5" /> Call (818) 485-8898 Now
          </a>
        </div>
      </section>
    </main>
  );
}
