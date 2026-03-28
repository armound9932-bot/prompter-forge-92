import { Phone, ShieldCheck, Clock, Wrench, AlertTriangle, Car, Key, CheckCircle2, Settings, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


export default function HondaCrvPage() {
  useEffect(() => {
    document.title = "Honda CR-V Smart Key Programming Burbank | SUV Keyless Entry & Push-Start – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Honda CR-V smart key programming in Burbank. SUV keyless entry, push-button start, rear hatch detection repair, all keys lost service. Mobile locksmith, same-day. Licensed & insured.");

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Honda CR-V key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle all-keys-lost situations for every CR-V generation using Honda-compatible diagnostic tools with security access and PIN extraction — no dealer visit or tow required." } },
        { "@type": "Question", name: "Why does my Honda CR-V say 'Keyless Start System Problem'?", acceptedAnswer: { "@type": "Answer", text: "This warning indicates the BCM cannot verify the smart key. On CR-V models, common causes include a weak fob battery, water-damaged door handle antenna, or a faulty interior cabin antenna — particularly the one near the cargo area." } },
        { "@type": "Question", name: "Why is my CR-V key not detected in the back seat?", acceptedAnswer: { "@type": "Answer", text: "The CR-V's rear cabin sits farther from the primary interior LF antennas. A weak fob battery that works fine at the driver's seat may not transmit strongly enough for the rear zone — especially with child seats or cargo blocking the signal path." } },
        { "@type": "Question", name: "Do I need a Honda dealer to program a CR-V key?", acceptedAnswer: { "@type": "Answer", text: "No. Our mobile locksmith carries Honda-compatible diagnostic platforms for full key registration, including BCM security access and immobilizer programming for all CR-V generations." } },
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero / Conversion */}
      <section className="bg-gradient-to-br from-primary/8 via-background to-accent/8 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
            <span>/</span>
            <Link to="/smart-key-programming/honda" className="hover:text-primary transition-colors">Honda</Link>
            <span>/</span>
            <span className="text-foreground font-medium">CR-V</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                Honda CR-V Key Replacement & Smart Key Programming in Burbank
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Need a replacement smart key for your Honda CR-V? Whether you need a <strong>spare key programmed</strong> or you've <strong>lost every key</strong>, our mobile locksmith arrives at your Burbank location with everything needed. No tow truck, no dealer wait — just fast, professional SUV key service.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-base">
                  <Phone className="w-5 h-5" /> Call Now — Burbank
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted rounded-xl px-4 py-3">
                  <Clock className="w-4 h-4" /> 25–50 min service
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Key, text: "Add Key & All Keys Lost" },
                { icon: Car, text: "SUV Antenna Diagnostics" },
                { icon: ShieldCheck, text: "Honda Security Access" },
                { icon: Wrench, text: "Mobile — We Come to You" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-card border border-border rounded-xl p-3">
                  <item.icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How CR-V Smart Key System Works */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">How the Honda CR-V Smart Key System Works</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              The Honda CR-V uses Honda's <strong>Smart Entry with Push Button Start</strong> system — but the SUV platform introduces antenna placement and signal behavior that differs meaningfully from Honda sedans. The system relies on LF (Low Frequency) antennas embedded in each door handle, inside the cabin, and — on most trims — near the rear tailgate. When you approach the vehicle, the door handle antenna broadcasts a challenge signal. Your smart key responds via UHF at 315 MHz with an encrypted code, and the Body Control Module (BCM) validates the response before unlocking.
            </p>
            <p>
              Pressing the START/STOP button initiates a second authentication round. Interior antennas poll the cabin to confirm the key is physically inside the vehicle. The BCM then communicates with the immobilizer transponder embedded in the fob, verifying a rolling cryptographic exchange before enabling the engine. On CR-V models with power tailgate, an additional rear antenna allows the system to detect the key near the cargo area for hands-free liftgate operation.
            </p>
          </div>
        </div>
      </section>

      {/* SUV-Specific Behavior */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why the CR-V Behaves Differently Than Honda Sedans</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              The CR-V's cabin volume is substantially larger than a Civic or Accord. This matters because LF antenna signals attenuate over distance — a signal that reliably reaches the driver's seat may weaken significantly before reaching the third-row cargo area. Honda compensates by positioning antennas strategically, but the coverage isn't uniform throughout the cabin.
            </p>
            <p>
              The <strong>rear hatch area</strong> is a particularly important zone on the CR-V. Models equipped with a power tailgate have a dedicated antenna module mounted in the liftgate itself. This antenna serves two purposes: detecting the key for hands-free opening and confirming key presence when the vehicle is started from the rear cargo area (a scenario that occurs more often with SUVs than sedans — think loading groceries while the vehicle is running).
            </p>
            <p>
              In practice, CR-V owners report more "key not detected" events than Civic owners — not because the system is less reliable, but because <strong>the key is more often farther from the nearest antenna</strong>. A fob left in a purse on the back seat, tucked into a cargo pocket, or sitting on the floor behind the driver's seat may fall outside the reliable detection envelope, especially if the fob battery is below optimal voltage.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Honda CR-V Smart Key Problems</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"Keyless Start System Problem\" Warning", desc: "The BCM cannot authenticate the fob. On CR-V models, this is frequently caused by a weak battery compounded by the SUV's larger antenna coverage area — marginal batteries that work fine in a Civic fail in the CR-V's bigger cabin." },
              { title: "Key Not Detected in Rear Seats", desc: "The CR-V's rear cabin sits at the outer edge of interior antenna range. Child car seats with metal frames, thick seat covers, and cargo bins further attenuate the signal. We see this complaint more on CR-V than any other Honda model." },
              { title: "Rear Hatch / Tailgate Detection Failure", desc: "The liftgate antenna module is exposed to road spray, temperature cycling, and vibration from the hatch mechanism. Wiring fatigue at the hinge harness and corroded antenna connectors are the most common failure points." },
              { title: "Push Button — No Response", desc: "Interior authentication fails when the steering column antenna can't read the fob. On CR-V, this sometimes occurs after a battery jump or disconnect — the BCM loses its antenna calibration data and needs a relearn cycle." },
              { title: "Weak Battery — Doors Unlock but Won't Start", desc: "A fob with 2.8V (nominal is 3.0V) may still have enough power for close-range passive entry at the door handle, but insufficient output for the interior cabin poll. This partial-failure mode confuses owners who assume the battery is fine." },
              { title: "Door Handle Antenna Failure", desc: "CR-V door handles contain capacitive touch sensors and LF antenna coils. Water infiltration — common in areas with frequent car washes or rain — corrodes the antenna connections inside the handle assembly, causing intermittent lock/unlock failure on one door." },
              { title: "RF Interference from Accessories", desc: "Aftermarket dash cameras, USB charging hubs, wireless phone mounts, and OBD-II plugged devices can broadcast on frequencies that interfere with the 315 MHz UHF response from the smart key, causing erratic detection." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Add Key vs. All Keys Lost — Honda CR-V</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground">Add a Key</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• A working key is available for BCM verification</li>
                <li>• New fob is registered alongside existing keys</li>
                <li>• No security access or PIN extraction required</li>
                <li>• Rear hatch and door handle functions verified post-registration</li>
                <li>• Typically completed in <strong>15–25 minutes</strong></li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-foreground">All Keys Lost</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• No working key — full security access procedure required</li>
                <li>• Honda PIN extraction or seed/key authentication performed</li>
                <li>• BCM key registration table is cleared and rebuilt</li>
                <li>• Immobilizer system restoration and full antenna verification</li>
                <li>• Newer CR-V models (2020+) require extended security handshake</li>
                <li>• Completed in <strong>35–55 minutes</strong> depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Generation */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Honda CR-V Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-accent" /> 2012–2016 CR-V (4th Generation)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The 4th-gen CR-V was Honda's first to offer Smart Entry across multiple trim levels. EX and above received push-button start with a basic 3-antenna setup — two door handles and one interior cabin antenna. The system uses Honda's earlier immobilizer protocol without a gateway module. Programming is direct to the BCM using PIN-based security access. All-keys-lost jobs on these models are the most accessible of any CR-V generation — the security layer is straightforward and well-supported by aftermarket tools. The primary fob is the <strong>ACJ932HK1210A</strong>, and key registration writes directly to the BCM without intermediate authentication.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-accent" /> 2017–2022 CR-V (5th Generation)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The 5th-gen CR-V brought a redesigned platform with improved antenna coverage. EX-L and Touring trims added a tailgate antenna for hands-free liftgate operation, bringing the total to 4–5 antenna zones depending on trim. Honda enhanced the BCM's encryption protocol — key registration now requires a <strong>multi-step security handshake</strong> rather than simple PIN access. The 2020 hybrid variant introduced slight timing differences in the authentication cycle. All-keys-lost programming requires updated diagnostic software, and the process takes noticeably longer than on 4th-gen models. Common fobs include the <strong>KR5V2X</strong> and <strong>CWTWB1G0090</strong>.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-accent" /> 2023+ CR-V (6th Generation)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The 6th-gen CR-V runs on Honda's latest architecture with a <strong>secure gateway module</strong> protecting the diagnostic bus. All programming communication to the BCM passes through this gateway — tools without current Honda security certificates are blocked before they can even begin key registration. The smart key system uses updated AES encryption and an expanded antenna array covering the full cabin including under-seat zones. The hybrid powertrain model is now standard on most trims, and its authentication timing mirrors the 11th-gen Accord. All-keys-lost programming on these models is the most involved of any CR-V generation. The primary fob is the <strong>KR5TP-4</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCC ID Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-3">Honda CR-V Smart Key FCC IDs</h2>
          <p className="text-muted-foreground text-sm mb-4">
            The FCC ID stamped on the back of your smart key fob identifies the specific radio configuration — frequency, modulation, and power level. Using the correct FCC-matched replacement ensures the fob communicates properly with your CR-V's antenna system. An incorrect match can cause partial functionality — doors unlock but push-start fails, or detection range drops below usable levels.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: "ACJ932HK1210A", years: "2012–2016", note: "4th-gen EX/EX-L" },
              { id: "CWTWB1G0090", years: "2015–2019", note: "Mid-cycle & early 5th-gen" },
              { id: "KR5V2X", years: "2017–2022", note: "5th-gen Touring/Hybrid" },
              { id: "KR5TP-4", years: "2023+", note: "6th-gen all trims" },
            ].map((fcc) => (
              <div key={fcc.id} className="bg-card border border-border rounded-xl p-3">
                <span className="font-mono text-sm font-bold text-foreground block">{fcc.id}</span>
                <span className="text-xs text-muted-foreground">{fcc.years} — {fcc.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">CR-V Programming Complexity — What to Expect</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              The 4th-gen CR-V (2012–2016) is the most straightforward Honda SUV for smart key programming. The BCM accepts direct PIN-based registration, and aftermarket tools have mature support for the platform. Add-key jobs take about 15 minutes; all-keys-lost runs about 30 minutes.
            </p>
            <p>
              The 5th-gen (2017–2022) raised the bar with an enhanced security handshake. Tools must negotiate with the BCM through a multi-step process before key data is accepted. The hybrid variant adds a timing constraint — the authentication window is shorter, requiring precise tool-to-BCM synchronization. Most professional locksmith platforms handle this, but consumer-grade tools often fail at the security access stage.
            </p>
            <p>
              The 6th-gen (2023+) requires gateway-authenticated diagnostic access. This is the same architecture used in the 11th-gen Accord — the secure gateway filters all CAN bus communication, and tools without current Honda certificates are rejected. Our mobile service uses diagnostic platforms with active Honda security subscriptions, enabling full key registration including gateway passthrough. The practical difference from a dealer: we arrive at your location, and our rates don't include dealership facility overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Field Notes — What We See on CR-V Service Calls</h2>
          <div className="space-y-4">
            {[
              { title: "Key works outside but not inside", note: "This is the most common CR-V complaint we get. The fob unlocks the doors from the handle (close-range LF) but the interior cabin antenna can't pick it up. Almost always a fob battery at 2.7–2.8V — technically not dead, but below the threshold for interior authentication. A fresh CR2032 solves it every time." },
              { title: "Rear antenna failure on 2017–2019 models", note: "The 5th-gen tailgate antenna wiring runs through the liftgate hinge. After 50,000+ open/close cycles, the harness develops micro-fractures. The symptom is intermittent — hands-free tailgate works sometimes, fails other times. We've seen this enough to check the harness continuity before assuming a fob issue." },
              { title: "Water damage in door handle sensors", note: "CR-V door handles sit higher than sedan handles, but they're still exposed. In rainy weather or after heavy car washes, water wicks into the handle cavity and corrodes the capacitive touch sensor and LF coil. One door stops responding to passive entry while the others work fine. Handle replacement is the fix — there's no practical way to repair the internal antenna assembly." },
              { title: "Post-battery-disconnect confusion", note: "CR-V owners who disconnect the 12V battery for maintenance sometimes find the smart key system unresponsive afterward. The BCM needs a relearn cycle to recalibrate its antenna sensitivity thresholds. This isn't a key problem — it's a module initialization issue that resolves with a proper BCM reset procedure." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Info className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/honda/cr-v" brandSlug="honda" />


      {/* Local SEO */}
      <section className="py-10 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-3">Honda CR-V Locksmith Service — Burbank & Surrounding Areas</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our mobile locksmith provides Honda CR-V smart key programming across <strong>Burbank</strong>, <strong>Glendale</strong>, <strong>North Hollywood</strong>, and the greater <strong>Los Angeles</strong> area. The CR-V is one of the most popular SUVs on the road in the San Fernando Valley — we service them daily and carry the correct fob blanks and diagnostic equipment on every call. Whether you're at home, at a trailhead, or parked at a shopping center, we bring the full Honda key programming setup directly to your vehicle.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Honda CR-V Smart Key FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can you program a Honda CR-V key without the original?", a: "Yes. We perform all-keys-lost programming for every CR-V generation. The process involves full security access to the BCM, clearing the existing key table, and registering your new fob from scratch. No original key or dealer visit needed." },
              { q: "Why does my CR-V say 'Keyless Start System Problem'?", a: "The BCM can't verify your smart key. On CR-V models, the most common cause is a weak fob battery — but we also see this triggered by water-damaged door handle antennas, corroded tailgate wiring, or RF interference from aftermarket electronics." },
              { q: "Why is my key not detected in the back seat?", a: "The CR-V's rear cabin sits at the edge of interior antenna coverage. A fob battery with slightly low voltage may authenticate at the driver's seat but fall below threshold in the rear. Child seats with metal frames and cargo bins also block the LF signal path." },
              { q: "Do I need a Honda dealer to program a CR-V key?", a: "No. Our mobile locksmith carries Honda-compatible diagnostic tools with current security certificates — we handle everything from basic add-key to all-keys-lost on 6th-gen models with gateway security, all on-site at your location." },
            ].map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{faq.q}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Need a Honda CR-V Key in Burbank?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Skip the dealer. Our mobile locksmith programs Honda CR-V smart keys on-site — add-key or all-keys-lost, any generation. Call now for same-day service across Burbank and surrounding areas.
          </p>
          <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg">
            <Phone className="w-5 h-5" /> Call Now — Burbank Mobile Locksmith
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-bold text-foreground mb-3">Related Pages</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { to: "/smart-key-programming/honda", label: "Honda Smart Key Programming" },
              { to: "/smart-key-programming/honda/civic", label: "Honda Civic Smart Key" },
              { to: "/smart-key-programming/honda/accord", label: "Honda Accord Smart Key" },
              { to: "/smart-key-programming", label: "All Smart Key Services" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-xs bg-card border border-border rounded-lg px-3 py-1.5 text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
