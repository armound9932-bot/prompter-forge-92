import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, Shield, Clock, MapPin, Wrench, AlertTriangle, ChevronRight } from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you program a Honda Odyssey key without the original?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When all keys are lost, we perform Honda security access using factory PIN retrieval and immobilizer reset protocols. The process takes longer than an add-key job, but we handle it entirely on-site in Burbank — no dealer visit or towing needed."
      }
    },
    {
      "@type": "Question",
      name: "Why does my Odyssey say key not detected when the key is in the back seat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Odyssey's large cabin creates signal dead zones, especially in the second and third rows. LF antenna coverage weakens toward the rear. Moving the fob closer to the dashboard or center console resolves the issue. If it persists, a rear antenna or sliding door wiring problem may need diagnosis."
      }
    },
    {
      "@type": "Question",
      name: "Do the sliding doors affect the smart key system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The sliding doors contain antenna wiring for exterior touch-to-lock and keyless entry detection. Repeated opening and closing causes wire fatigue in the door harness flex points. When this wiring degrades, the key may not be detected at the sliding door handles even though it works at the front doors."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a Honda dealer for Odyssey smart key programming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A qualified automotive locksmith with Honda-compatible diagnostic tools can program smart keys on-site. We use the same protocols as dealerships — often faster and at a lower cost. Our mobile service covers all of Burbank and surrounding areas."
      }
    }
  ]
};

export default function HondaOdysseyPage() {
  return (
    <>
      <Helmet>
        <title>Honda Odyssey Key Replacement & Smart Key Programming Burbank | Burbank Auto Locksmith</title>
        <meta name="description" content="Honda Odyssey smart key programming in Burbank. Sliding door antenna diagnostics, keyless start repair, all keys lost service. Mobile locksmith with Honda-specific tools. Licensed & insured." />
        <link rel="canonical" href="https://prompter-forge-92.lovable.app/smart-key-programming/honda/odyssey" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/smart-key-programming/honda" className="hover:text-primary transition-colors">Honda</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Odyssey</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-14">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Honda Odyssey Key Replacement & Smart Key Programming in Burbank
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Locked out of your Odyssey? Need a new smart key for your family minivan? We specialize in Honda Odyssey keyless entry systems — from sliding door antenna diagnostics to complete key replacement when all fobs are lost. Same-day mobile service across Burbank with Honda-specific diagnostic equipment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+18184904745" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                    <Phone className="w-4 h-4" /> Call Now – (818) 490-4745
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, text: "Same-Day Minivan Service" },
                  { icon: Shield, text: "Honda Factory Protocols" },
                  { icon: Wrench, text: "Sliding Door Diagnostics" },
                  { icon: MapPin, text: "Mobile Across Burbank" },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center gap-2">
                    <item.icon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How the Odyssey Smart Key Works */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">How the Honda Odyssey Smart Key System Works</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Odyssey uses Honda's Smart Entry system — a network of low-frequency (LF) antennas positioned throughout the cabin, doors, and tailgate that communicate with your proximity fob. When you approach the vehicle or touch a door handle, these antennas send a challenge signal. Your fob responds via UHF with an encrypted rolling code that the Body Control Module (BCM) validates against the immobilizer before authorizing entry or engine start.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What makes the Odyssey different from sedans and standard SUVs is its <strong>sliding door antenna integration</strong>. Both power sliding doors contain dedicated antenna wiring routed through flexible harnesses that move every time the doors open and close. This mechanical stress creates a failure point unique to minivans — one we see regularly in our Burbank service calls.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The system also manages rear hatch proximity detection and interior presence monitoring across three seating rows. The BCM coordinates all of this while communicating with the immobilizer transponder embedded in the fob to authorize push-button engine start.
            </p>
          </div>
        </section>

        {/* Minivan-Specific Behavior */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Minivan-Specific Smart Key Behavior</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Odyssey's cabin volume is substantially larger than any sedan or compact SUV. This directly impacts how the smart key system performs — and creates issues that Honda Civic or Accord owners never encounter.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Sliding Door Antenna Zones",
                  desc: "Each power sliding door has its own antenna loop wired through a flex harness. These harnesses endure thousands of open/close cycles, making them the most failure-prone antenna point on any Honda vehicle."
                },
                {
                  title: "Three-Row Detection Challenges",
                  desc: "LF antenna signal strength drops significantly in the third row. Passengers sitting in the rear with the only fob can trigger 'Key Not Detected' warnings at the dashboard — even though the key is inside the vehicle."
                },
                {
                  title: "Rear Hatch Proximity Sensing",
                  desc: "The power tailgate uses a separate antenna for hands-free operation. Wiring runs through the hatch hinge area and is susceptible to water intrusion and connector corrosion over time."
                },
                {
                  title: "Family-Use Interference Patterns",
                  desc: "Minivans carry more electronic devices simultaneously — tablets, portable chargers, gaming consoles, phone hotspots. This RF-dense environment can intermittently mask the fob's UHF response signal."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Common Honda Odyssey Smart Key Problems</h2>
            <p className="text-muted-foreground mb-6">
              After years of servicing Honda Odysseys across Burbank, these are the issues we diagnose most frequently:
            </p>
            <div className="space-y-3">
              {[
                { problem: "\"Keyless Start System Problem\" on dashboard", detail: "Usually indicates BCM communication failure with the fob transponder. Can be triggered by a dying fob battery, antenna wiring damage, or BCM software fault." },
                { problem: "Key not detected in second or third row", detail: "The Odyssey's rear LF antennas have limited range. If the fob is in a pocket in the third row, the signal may not reach the BCM reliably. This is a design characteristic, not always a malfunction." },
                { problem: "Sliding door handle doesn't trigger unlock", detail: "The capacitive touch sensor and antenna in the sliding door handle rely on intact wiring through the flex harness. After 40,000+ door cycles, wire fatigue causes intermittent or complete failure." },
                { problem: "Push button start intermittent or unresponsive", detail: "Often caused by low fob battery combined with weak interior antenna signal. The fob's passive RFID transponder needs sufficient LF energy to respond — degraded antennas reduce this energy." },
                { problem: "Fob unlocks doors but won't start engine", detail: "The RF remote lock/unlock function operates on a separate frequency and power level from the immobilizer transponder. A fob can have enough battery for remote functions but insufficient charge for the close-range immobilizer handshake." },
                { problem: "RF interference from passengers' devices", detail: "Multiple USB chargers, wireless headphones, tablets streaming video, and phone hotspots create a noisy RF environment that can delay or block the fob's 315 MHz response signal." }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.problem}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add Key vs All Keys Lost */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Add Key vs. All Keys Lost — Honda Odyssey</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-primary">Add a Key</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  When you have at least one working Odyssey smart key, adding a new fob is straightforward. We connect to the BCM through the OBD-II port, register the new key's transponder ID alongside the existing one, and verify all functions.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Typical time: 15–25 minutes</li>
                  <li>• No security PIN required</li>
                  <li>• Existing keys continue working</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-destructive">All Keys Lost</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  With no working keys, the Odyssey's immobilizer must be reset through Honda's security access procedure. This requires PIN retrieval from Honda's database using the VIN, followed by a full BCM key registration cycle. Newer models with Secure Gateway add another authentication layer.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Typical time: 45–75 minutes</li>
                  <li>• Honda security PIN required</li>
                  <li>• All previous keys erased from system</li>
                  <li>• 2023+ models require SGW authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* By Generation */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Honda Odyssey Smart Key by Generation</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">2011–2017 Odyssey (4th Generation)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  The 4th-gen Odyssey introduced Honda's Smart Entry system to the minivan lineup. These models use the <strong>ACJ932HK1210A</strong> and <strong>KR5V1X</strong> fob types with 46-chip transponder technology. Programming is relatively accessible — Honda's security protocols on these years are less restrictive than newer models.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sliding door antenna wiring issues become common after 80,000+ miles on these models. The flex harness in the B-pillar area is the typical failure point. We see this frequently on Odysseys in the Burbank and Glendale area.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">2018–2022 Odyssey (5th Generation)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  Honda redesigned the Odyssey with updated Smart Entry hardware and <strong>KR5V2X</strong> fobs using improved encryption. The CabinWatch and CabinTalk systems added additional electronic modules that share the vehicle's communication bus — occasionally causing BCM conflicts during key programming if not properly managed.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These models improved antenna coverage for the second row but third-row detection remains inconsistent. The power tailgate antenna was relocated, reducing water intrusion failures compared to the 4th generation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">2023+ Odyssey (Updated 5th Generation)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  The latest Odyssey models incorporate Honda's <strong>Secure Gateway Module (SGW)</strong>, requiring authenticated tool access before any key programming can begin. Fobs use <strong>KR5TP-4</strong> with AES-128 encryption — the same security standard as current Accord and CR-V models.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All-keys-lost scenarios on these models are significantly more complex. The SGW must be authenticated before the BCM will accept new key registrations. Not all locksmiths have the required tool subscriptions — we do, and we bring them on every mobile call in Burbank.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FCC ID */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Honda Odyssey Smart Key FCC IDs</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Each Odyssey fob carries an FCC ID printed on the back of the key housing. This identifier tells us exactly which programming protocol, frequency, and encryption standard your key uses.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left p-3 font-semibold border-b border-border">FCC ID</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Years</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Encryption</th>
                    <th className="text-left p-3 font-semibold border-b border-border">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { fcc: "ACJ932HK1210A", years: "2011–2013", enc: "46-Chip", freq: "313.8 MHz" },
                    { fcc: "KR5V1X", years: "2014–2017", enc: "47-Chip (Hitag 3)", freq: "313.8 MHz" },
                    { fcc: "KR5V2X", years: "2018–2022", enc: "47-Chip (Hitag 3)", freq: "433.92 MHz" },
                    { fcc: "KR5TP-4", years: "2023+", enc: "AES-128", freq: "433.92 MHz" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-3 font-mono text-primary font-bold">{row.fcc}</td>
                      <td className="p-3 text-muted-foreground">{row.years}</td>
                      <td className="p-3 text-muted-foreground">{row.enc}</td>
                      <td className="p-3 text-muted-foreground">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Programming Complexity */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Programming Complexity: Dealer vs. Locksmith</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Older Odysseys (2011–2017) use straightforward OBD-II programming that most equipped locksmiths can handle. The 2018–2022 models require updated software and Honda-specific diagnostic access. The 2023+ models with Secure Gateway are the most restrictive — requiring authenticated tool connections that not every locksmith maintains.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dealerships charge premium rates and typically require you to tow the vehicle in or wait days for an appointment. We perform the same programming on-site using current Honda-compatible tools — usually completing the job within an hour. For Burbank Odyssey owners, that means no towing costs and no rental car while you wait.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mobile unit carries programming hardware for every Odyssey generation, including SGW authentication tokens for 2023+ models. We confirm your exact model year and trim before arriving so we bring the correct blank fob and any model-specific adapters.
            </p>
          </div>
        </section>

        {/* Real Locksmith Notes */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Field Notes: What We See on Honda Odysseys</h2>
            <p className="text-muted-foreground mb-6 text-sm">Observations from our mobile service calls across Burbank and the San Fernando Valley:</p>
            <div className="space-y-4">
              {[
                {
                  note: "Sliding Door Wire Fatigue Is the #1 Minivan-Specific Failure",
                  detail: "We've diagnosed dozens of Odysseys where the smart key works perfectly at the front doors and tailgate but fails at the sliding doors. The flex harness that carries antenna wiring through the sliding door track wears out — sometimes as early as 60,000 miles on heavily-used family vehicles. The fix isn't a new key — it's a harness repair."
                },
                {
                  note: "Third-Row Key Detection Is a Known Weak Spot",
                  detail: "Honda engineered the Odyssey's antenna layout primarily around the first and second rows. Third-row passengers holding the only fob frequently trigger the 'Key Not Detected' warning. This isn't a malfunction — it's an antenna coverage limitation. We advise Odyssey owners to keep the fob in the center console or second row."
                },
                {
                  note: "CabinWatch Camera System Can Delay BCM Programming",
                  detail: "On 2018+ Odysseys, the CabinWatch interior camera shares communication channels with the BCM. During key programming, this system occasionally needs to be put into a standby state to prevent communication conflicts. It's a quirk specific to the Odyssey that doesn't affect CR-V or Pilot programming."
                },
                {
                  note: "Kids and Key Fobs Don't Mix",
                  detail: "We get calls from parents whose Odyssey key fob stopped working after a child played with it, dropped it in a drink, or left it in the third-row cup holder for a week. Water damage to the fob's internal PCB is surprisingly common in minivans. We carry replacement fob housings and can often salvage the transponder chip."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-bold text-sm mb-2 text-primary">{item.note}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Honda Odyssey Smart Key Service Areas</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { city: "Burbank", desc: "Our home base. We reach any Burbank location within 30 minutes for Odyssey smart key emergencies — whether you're at the mall, school pickup, or your driveway." },
                { city: "Glendale", desc: "Adjacent to Burbank, Glendale Odyssey owners get the same rapid response. We service the Galleria area, Brand Blvd corridor, and all residential neighborhoods." },
                { city: "North Hollywood", desc: "Quick access from our Burbank base via Lankershim. We handle Odyssey lockouts and key programming throughout NoHo and the Arts District." },
                { city: "Los Angeles", desc: "Covering the greater LA area including Studio City, Toluca Lake, and surrounding communities. Honda Odyssey mobile key service wherever you're parked." }
              ].map((area, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {area.city}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Honda Odyssey Smart Key FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Can you program an Odyssey key without the original?", a: "Yes. We perform Honda security access using your VIN to retrieve the factory PIN, reset the immobilizer, and register a completely new smart key. The process takes 45–75 minutes depending on your Odyssey's year and security level." },
                { q: "Why does my Odyssey say key not detected when it's in the back seat?", a: "The Odyssey's LF antenna coverage is strongest in the first two rows. Third-row passengers holding the fob are often outside reliable detection range. This is a cabin-size limitation. Keep the fob in the center console or front pocket for consistent detection." },
                { q: "Do the sliding doors affect the smart key system?", a: "Yes. Each sliding door contains antenna wiring that runs through a flex harness. Repeated door cycles cause wire fatigue, leading to intermittent or failed key detection at the sliding door handles. We can diagnose whether the issue is the fob, the harness, or the door module." },
                { q: "Do I need a Honda dealer for Odyssey key programming?", a: "No. We use Honda-compatible diagnostic tools including SGW authentication for 2023+ models. Our mobile service performs the same programming at your location — typically faster and at a lower cost than dealership appointments." }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-bold text-sm mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need Honda Odyssey Smart Key Service in Burbank?</h2>
            <p className="text-muted-foreground mb-6">
              Whether you've lost all keys, need a spare programmed, or have a sliding door antenna problem — our mobile locksmith handles it on-site. Call now for same-day Honda Odyssey service.
            </p>
            <a href="tel:+18184904745" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> (818) 490-4745
            </a>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-10 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold mb-4">Related Honda & Toyota Smart Key Pages</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { to: "/smart-key-programming/honda", label: "Honda Smart Key Hub" },
                { to: "/smart-key-programming/honda/pilot", label: "Honda Pilot" },
                { to: "/smart-key-programming/honda/cr-v", label: "Honda CR-V" },
                { to: "/smart-key-programming/honda/civic", label: "Honda Civic" },
                { to: "/smart-key-programming/honda/accord", label: "Honda Accord" },
                { to: "/smart-key-programming/toyota", label: "Toyota Smart Key Hub" },
              ].map(link => (
                <Link key={link.to} to={link.to} className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
