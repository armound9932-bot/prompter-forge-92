import { Phone, ShieldCheck, Clock, Wrench, AlertTriangle, Car, Key, CheckCircle2, Settings, Info, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


export default function HondaPilotPage() {
  useEffect(() => {
    setSeoMeta({ title: "Honda Pilot Smart Key Programming Burbank | 3-Row SUV Key Replacement – Burbank Auto Locksmith", description: "Honda Pilot smart key programming & key replacement in Burbank. 3-row SUV keyless entry, push-button start, all keys lost service. Same-day mobile locksmith. Licensed & insured.", slug: "/smart-key-programming/honda/pilot" });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Honda Pilot key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle all-keys-lost situations for every Pilot generation. Our mobile unit carries Honda-compatible diagnostic platforms with security access and PIN extraction to register new keys on-site — no dealer trip needed." } },
        { "@type": "Question", name: "Why does my Honda Pilot say key not detected in the back seat?", acceptedAnswer: { "@type": "Answer", text: "The Pilot's 3-row cabin spreads LF antenna coverage across a large interior. Third-row seats sit at the outer edge of detection range. A weak fob battery, child seats blocking the signal, or aftermarket electronics can push reception below the detection threshold in rear zones." } },
        { "@type": "Question", name: "Why won't my Pilot's push-start button respond?", acceptedAnswer: { "@type": "Answer", text: "Non-responsive push-start usually means the BCM isn't verifying the smart key. Common causes include a dead fob battery, antenna module failure near the steering column, or RF interference from USB chargers and aftermarket devices on the dash." } },
        { "@type": "Question", name: "Do I need a Honda dealer to program a Pilot key?", acceptedAnswer: { "@type": "Answer", text: "No. Our technicians carry dealer-level Honda diagnostic tools capable of full BCM registration, immobilizer programming, and security access for all Pilot generations — performed at your location in Burbank." } },
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero / Conversion */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-primary/6 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
            <span>/</span>
            <Link to="/smart-key-programming/honda" className="hover:text-primary transition-colors">Honda</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Pilot</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                Honda Pilot Key Replacement & Smart Key Programming in Burbank
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                The Honda Pilot is a full-size 3-row SUV — and its smart key system is built to match. Whether you need an <strong>additional key programmed</strong> or you've <strong>lost every key</strong> to your Pilot, our mobile locksmith brings Honda-specific diagnostic equipment directly to your Burbank location. No tow truck. No dealership scheduling. Same-day service, on-site.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+18184860044" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition text-base">
                  <Phone className="w-5 h-5" /> Call Now – (818) 486-0044
                </a>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-accent" /> Same-Day Response</span>
                <span className="flex items-center gap-1"><Car className="w-4 h-4 text-accent" /> We Come to You</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-accent" /> Licensed & Insured</span>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm space-y-3">
              <h2 className="font-bold text-foreground text-lg flex items-center gap-2"><Key className="w-5 h-5 text-primary" /> Honda Pilot Smart Key Services</h2>
              {[
                "New key programming (add to existing set)",
                "All keys lost — full BCM registration",
                "Push-to-start diagnostics & restoration",
                "3-row antenna zone troubleshooting",
                "Key fob battery replacement & signal test",
                "Emergency mobile locksmith — Burbank & surrounding areas",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How the Pilot Smart Key System Works */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-primary" /> How the Honda Pilot Smart Key System Works
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Honda Pilot uses Honda's <strong>Smart Entry with Push Button Start</strong> system. The architecture relies on a network of <strong>low-frequency (LF) transmitter antennas</strong> positioned throughout the vehicle — door handles, dashboard area, center console, and rear zones — that continuously broadcast challenge signals when prompted. When your smart key enters a detection zone, it receives the LF challenge and responds via a <strong>UHF encrypted signal</strong> back to the Body Control Module (BCM).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What makes the Pilot unique is its <strong>multi-zone antenna architecture</strong> designed for a 3-row cabin. Unlike sedans or compact SUVs, the Pilot requires antenna coverage spanning first-row, second-row, and third-row seating areas, plus the tailgate zone. The BCM manages all of these zones, verifying the key's encrypted rolling code before authorizing door unlock, engine start, or tailgate release.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The immobilizer subsystem adds another layer — the engine ECU won't fire the ignition circuit unless it receives a cryptographic handshake from a registered key through the BCM. This dual-verification (proximity + immobilizer) is why key programming requires professional diagnostic access, not just a blank fob.
          </p>
        </div>
      </section>

      <MidPageCTA vehicleName="Honda Pilot" />


      {/* 3-Row SUV Behavior */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-primary" /> Large SUV Behavior: Why the Pilot Is Different
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Pilot's 3-row platform creates distinct challenges that don't exist on sedans like the Civic or Accord, or even mid-size SUVs like the CR-V.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Extended Detection Zones", desc: "The cabin stretches over 10 feet from dash to third row. LF antennas must cover this entire space, and signal strength naturally degrades in the rearmost seats — especially when seats are folded or loaded with cargo." },
              { title: "Third-Row Signal Dead Spots", desc: "Third-row passengers often sit at the outermost edge of antenna range. A key fob with a battery at 60% capacity may work perfectly in the front but fail detection in the third row entirely." },
              { title: "Tailgate Antenna Behavior", desc: "The Pilot's power tailgate has its own detection antenna. This antenna is wired through the hatch loom — a failure point due to repeated open/close cycles. When this antenna fails, the tailgate button stops responding to the key." },
              { title: "Key Placement Sensitivity", desc: "In a vehicle this large, where you place the key matters. A key left in a cup holder in the second row may register differently than one in a jacket pocket in the third row. The BCM prioritizes the closest antenna zone." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" /> Common Honda Pilot Smart Key Problems
          </h2>
          <div className="space-y-4">
            {[
              { problem: "\"Keyless Start System Problem\" Warning", detail: "This message on the dash indicates the BCM cannot complete verification with any registered key. On the Pilot, this is frequently caused by a depleted fob battery, but can also stem from BCM communication errors, water intrusion in a door handle antenna, or aftermarket alarm system conflicts." },
              { problem: "Key Not Detected in Second or Third Row", detail: "The most common Pilot-specific complaint. The rear interior antennas cover a large zone with weaker signal density. Combined with child car seats (metal frames block RF), tablets, phone chargers, and other electronic devices, the key's response signal gets absorbed before reaching the BCM." },
              { problem: "Rear Hatch / Tailgate Detection Failure", detail: "The tailgate antenna sits in the liftgate wiring loom. Years of opening and closing fatigue the wiring — particularly at the flex point where the loom enters the hatch body. When this connection degrades, the tailgate button won't sense the key even when it's right behind the vehicle." },
              { problem: "Push Button Start — No Response", detail: "When the start button produces no reaction at all (no dash lights, no crank), the issue usually lies with the steering column LF antenna or the button's own circuitry. On Pilots, we also check for aftermarket remote start systems that may be holding the ignition bus in a conflict state." },
              { problem: "Weak Battery Paradox", detail: "A fob battery at 30-40% can still unlock doors via the door handle antenna (short range, strong signal) but fail to authenticate for engine start (longer range BCM verification). Owners assume the battery is fine because the doors respond — but the start system requires stronger signal integrity." },
              { problem: "RF Interference from Passenger Electronics", detail: "The Pilot is a family vehicle. Multiple phones, tablets, wireless headphones, USB chargers, and portable gaming devices create a noisy RF environment. This cumulative interference can degrade the key's UHF response signal enough to trigger intermittent detection failures — especially in the second and third rows where these devices concentrate." },
              { problem: "Door Handle Antenna Failure", detail: "Each exterior door handle contains a touch-sensor and LF antenna. Moisture intrusion, corrosion, or wiring fatigue — common in older Pilots exposed to weather — can disable individual handle antennas. The symptom: one specific door won't respond to touch-to-unlock while others work normally." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.problem}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Key className="w-6 h-6 text-primary" /> Add Key vs. All Keys Lost — Honda Pilot
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3">Adding a Key (Spare Exists)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                When you have at least one working Pilot smart key, the registration process is more straightforward. The existing key authenticates the programming session through the BCM, allowing the new key to be added to the vehicle's registered key database.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Faster programming — typically 20–30 minutes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Working key validates the session</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Lower complexity, lower cost</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3">All Keys Lost (No Working Key)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Losing every key to a Pilot triggers a full security access procedure. The BCM requires PIN-based authentication or seed-key exchange to authorize new key registration. On newer Pilots, the Secure Gateway Module adds another verification layer. This process is more involved than Civic or CR-V — the Pilot's larger BCM key database and multi-zone antenna system require complete re-initialization.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Wrench className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> Security access / Honda PIN extraction required</li>
                <li className="flex items-start gap-2"><Wrench className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> Immobilizer reset and full BCM re-registration</li>
                <li className="flex items-start gap-2"><Wrench className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> 45–75 minutes depending on generation</li>
                <li className="flex items-start gap-2"><Wrench className="w-4 h-4 text-destructive mt-0.5 shrink-0" /> Newer models: Secure Gateway Module authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot by Generation */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Info className="w-6 h-6 text-primary" /> Honda Pilot Smart Key by Generation
          </h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">2012–2015 Pilot (2nd Generation)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The second-generation Pilot introduced Honda's Smart Entry system to the model line. These use a 4-button smart fob with a 46-chip transponder for immobilizer authentication. The BCM security on these models is relatively straightforward — security access requires standard PIN-based entry, and programming can typically be completed in 25–35 minutes. The antenna layout is simpler, with fewer detection zones than later models.
              </p>
              <p className="text-xs text-muted-foreground"><strong>Common FCC IDs:</strong> ACJ932HK1210A — 315 MHz, 4-button remote with proximity detection</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">2016–2022 Pilot (3rd Generation)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The third-generation Pilot received a major platform overhaul. The smart key system moved to a more advanced rolling code encryption with an expanded antenna network to cover the redesigned 3-row cabin. BCM programming complexity increased — security access requires Honda-specific diagnostic protocols, and the immobilizer uses a higher-grade encryption standard. The fob design changed to a slimmer profile with Walk Away Auto Lock support.
              </p>
              <p className="text-xs text-muted-foreground"><strong>Common FCC IDs:</strong> KR5V2X (2016–2019), KR5T44 (2020–2022) — 313.8 MHz, AES-encrypted rolling code</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">2023+ Pilot (4th Generation)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                The latest Pilot generation introduces Honda's <strong>Secure Gateway Module (SGW)</strong>, adding a firewall layer between diagnostic tools and the BCM. This means key programming requires authenticated gateway access before the BCM will accept new key registrations. The antenna system is the most comprehensive yet, with dedicated zones for each seating row and the cargo area. Programming time increases to 45–75 minutes for all-keys-lost scenarios due to the additional gateway authentication steps.
              </p>
              <p className="text-xs text-muted-foreground"><strong>Common FCC IDs:</strong> KR5TP-4 — 313.8 MHz, AES 128-bit encryption, Secure Gateway compatible</p>
            </div>
          </div>
        </div>
      </section>

      {/* FCC ID Reference */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" /> Honda Pilot Smart Key FCC ID Reference
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            The FCC ID stamped on the back of your Pilot's smart key fob identifies the exact radio configuration, encryption standard, and compatibility. Knowing your FCC ID helps us arrive with the correct blank and programming profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-foreground font-semibold">FCC ID</th>
                  <th className="text-left py-2 px-3 text-foreground font-semibold">Years</th>
                  <th className="text-left py-2 px-3 text-foreground font-semibold">Frequency</th>
                  <th className="text-left py-2 px-3 text-foreground font-semibold">Encryption</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/60"><td className="py-2 px-3 font-mono text-xs">ACJ932HK1210A</td><td className="py-2 px-3">2012–2015</td><td className="py-2 px-3">315 MHz</td><td className="py-2 px-3">46-chip transponder</td></tr>
                <tr className="border-b border-border/60"><td className="py-2 px-3 font-mono text-xs">KR5V2X</td><td className="py-2 px-3">2016–2019</td><td className="py-2 px-3">313.8 MHz</td><td className="py-2 px-3">AES rolling code</td></tr>
                <tr className="border-b border-border/60"><td className="py-2 px-3 font-mono text-xs">KR5T44</td><td className="py-2 px-3">2020–2022</td><td className="py-2 px-3">313.8 MHz</td><td className="py-2 px-3">AES rolling code</td></tr>
                <tr><td className="py-2 px-3 font-mono text-xs">KR5TP-4</td><td className="py-2 px-3">2023+</td><td className="py-2 px-3">313.8 MHz</td><td className="py-2 px-3">AES 128-bit + SGW</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-primary" /> Programming Complexity: Pilot by Year
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Older Pilots (2012–2015) use simpler BCM security that most qualified locksmiths can handle with standard Honda diagnostic tools. The 2016–2022 models introduced rolling code encryption and more complex BCM handshakes, requiring advanced Honda-compatible platforms. The 2023+ models add the Secure Gateway Module — a firewall that blocks unauthorized diagnostic access to the BCM entirely. Only tools with Honda gateway authentication certificates can initiate key programming on these vehicles.
          </p>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-2">Dealer vs. Professional Locksmith</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Honda dealerships charge premium rates and typically require the vehicle to be towed in. Our mobile service arrives at your location with the same diagnostic capability — Honda-compatible BCM programming, security access, PIN extraction, and gateway authentication for the newest Pilots. The difference: we come to you, and the job costs significantly less. For Burbank Pilot owners, that means no tow bill, no dealership waiting room, and no multi-day turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-primary" /> Field Notes: What We See on Honda Pilots
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            After years of working on Pilots across Burbank, these are the patterns our technicians encounter regularly:
          </p>
          <div className="space-y-4">
            {[
              { note: "Front Works, Rear Doesn't", detail: "The most common call we get for Pilots. The key starts the engine from the driver's seat without issue, but the owner reports the key 'doesn't work' when they're loading the third row. It's almost always a weak fob battery combined with the distance from the nearest interior antenna." },
              { note: "Rear Antenna Wiring Fatigue", detail: "On 2016+ Pilots, the rear interior antenna wiring runs through the headliner and down the C-pillar. We've seen multiple cases where vibration and temperature cycling cause micro-fractures in the wiring — enough to degrade signal strength without triggering a diagnostic code." },
              { note: "Family Vehicle RF Chaos", detail: "The Pilot is a family hauler. On a typical service call, we find 4-6 active electronic devices inside the cabin: phones, tablets, wireless earbuds, portable chargers, seat-back entertainment screens. Each one contributes RF noise. We've resolved 'intermittent key detection' issues simply by asking the owner to power down electronics during testing." },
              { note: "Kids and the Key Fob", detail: "We've responded to multiple Pilot lockouts where a child sitting in the third row had the key in their backpack. The key was technically inside the vehicle but at the extreme edge of detection range — the car wouldn't start from the driver's seat because the BCM prioritized the nearest antenna zone, which showed no key present." },
              { note: "Aftermarket Remote Start Conflicts", detail: "Pilots with aftermarket remote start systems sometimes develop intermittent start failures. The remote start module holds the ignition bus in a state that conflicts with the factory smart key authentication sequence. We diagnose this by temporarily disconnecting the aftermarket module to isolate the issue." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.note}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/honda/pilot" brandSlug="honda" />


      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" /> Honda Pilot Smart Key Service — Burbank & Surrounding Areas
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our mobile locksmith unit serves Honda Pilot owners across <strong>Burbank</strong>, <strong>Glendale</strong>, <strong>North Hollywood</strong>, and the greater <strong>Los Angeles</strong> area. We understand that a Pilot is often the primary family vehicle — when it's not starting, your entire household schedule is affected. That's why we prioritize same-day response for Pilot smart key emergencies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether your Pilot is parked at home in Burbank, at a shopping center in Glendale, or stranded in a North Hollywood parking lot, we bring Honda-specific diagnostic equipment and pre-cut key blanks directly to your location. Every job is completed on-site — your Pilot doesn't move until it's fully operational with tested, verified smart keys.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Honda Pilot Smart Key — Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can you program a Honda Pilot key without the original?", a: "Yes. We handle all-keys-lost situations for every Pilot generation. Our technician uses Honda-compatible diagnostic tools with security access and PIN extraction to register new smart keys on-site — no dealer visit or tow required." },
              { q: "Why does my Pilot say the key isn't detected in the back seat?", a: "The Pilot's 3-row cabin stretches the LF antenna detection zones across a large interior. Third-row seats sit at the extreme edge of coverage. A fob battery below 70%, child seats with metal frames, or multiple electronic devices can all push the signal below the BCM's detection threshold in rear zones." },
              { q: "Why won't my Pilot's push-start button respond?", a: "A completely unresponsive push-start button usually means the BCM isn't verifying any key. The most common causes are a dead fob battery, a failed steering column LF antenna, or RF interference from aftermarket electronics mounted near the dash. We diagnose and resolve all of these on-site." },
              { q: "Do I need a Honda dealer to program a Pilot key?", a: "No. Our mobile locksmith carries dealer-level Honda diagnostic platforms capable of full BCM registration, immobilizer programming, and Secure Gateway authentication for the newest Pilots. We perform the same procedure the dealer does — at your location, for less." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-3">Need a Honda Pilot Key? Call Now.</h2>
          <p className="text-muted-foreground mb-6">
            Same-day mobile locksmith service for Honda Pilot smart key programming, key replacement, and push-to-start diagnostics in Burbank and surrounding areas.
          </p>
          <a href="tel:+18184860044" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition text-lg">
            <Phone className="w-5 h-5" /> (818) 486-0044
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-foreground mb-3">Related Honda & Toyota Smart Key Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/smart-key-programming/honda", label: "Honda Smart Key Hub" },
              { to: "/smart-key-programming/honda/civic", label: "Honda Civic" },
              { to: "/smart-key-programming/honda/accord", label: "Honda Accord" },
              { to: "/smart-key-programming/honda/cr-v", label: "Honda CR-V" },
              { to: "/smart-key-programming/toyota", label: "Toyota Smart Key Hub" },
              { to: "/smart-key-programming/toyota/camry", label: "Toyota Camry" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
