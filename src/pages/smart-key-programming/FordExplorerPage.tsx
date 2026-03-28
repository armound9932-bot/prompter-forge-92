import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cpu, Phone, CheckCircle, AlertTriangle, Shield, MapPin, ArrowRight } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


export default function FordExplorerPage() {
  useEffect(() => {
    setSeoMeta({ title: "Ford Explorer Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Ford Explorer smart key programming in Burbank, CA. Intelligent Access, push-to-start, all keys lost. Same-day mobile locksmith — no dealer needed. Call (818) 606-1684.", slug: "/smart-key-programming/ford/explorer" });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Ford Explorer key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform full Explorer key programming even when all keys are lost. This requires a PCM parameter reset and BCM reauthorization using Ford-specific diagnostic equipment — no tow to the dealer needed." }},
        { "@type": "Question", name: "Why does my Explorer say key not detected in the back seat?", acceptedAnswer: { "@type": "Answer", text: "The Explorer's 3-row cabin uses multiple LF antenna zones. Rear-zone antennas can develop wiring fatigue or connector corrosion, particularly around the D-pillar and cargo area. A weak fob battery amplifies the issue." }},
        { "@type": "Question", name: "Do I need a Ford dealer for Explorer key programming?", acceptedAnswer: { "@type": "Answer", text: "No. A qualified automotive locksmith with Ford IDS/FDRS-compatible tools can program Explorer smart keys on-site, typically faster and at lower cost than a dealership visit." }},
        { "@type": "Question", name: "How long does Ford Explorer key programming take?", acceptedAnswer: { "@type": "Answer", text: "Adding a key with an existing working key takes 20–30 minutes. All-keys-lost scenarios require 45–75 minutes depending on the Explorer's model year and security tier." }},
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link><span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link><span>/</span>
            <Link to="/smart-key-programming/ford" className="hover:text-primary transition-colors">Ford</Link><span>/</span>
            <span className="text-foreground font-medium">Explorer</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Ford Explorer Smart Key Programming in Burbank, CA</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Locked out of your Explorer? Need a replacement Intelligent Access fob or lost every key? We program Ford Explorer smart keys on-site across Burbank — same-day mobile service with Ford IDS/FDRS-level diagnostic tools. From first-gen push-to-start Explorers to the latest high-security models, we handle add-key jobs and complete all-keys-lost recoveries without a dealership appointment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> Call Now — Fast Explorer Service
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-8">
            {["Add Key or All Keys Lost", "Intelligent Access & PATS Systems", "Same-Day Mobile in Burbank"].map(t => (
              <div key={t} className="flex items-start gap-2 bg-card border border-border rounded-xl p-3">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE SYSTEM WORKS */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">How the Ford Explorer Intelligent Access System Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Ford's Intelligent Access system in the Explorer relies on a network of low-frequency (LF) antennas distributed throughout the cabin and exterior. When you approach with the fob in your pocket, exterior door handle antennas emit a polling signal. Your fob responds over UHF with an encrypted rolling code that the Body Control Module (BCM) validates against its stored key profiles.
              </p>
              <p>
                Once authenticated, the BCM unlocks the doors and enables the push-to-start ignition circuit. The Powertrain Control Module (PCM) performs a secondary transponder challenge before allowing engine cranking — a dual-layer verification unique to Ford's anti-theft architecture.
              </p>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The Explorer's large SUV footprint demands more antenna zones than a sedan. Ford deploys separate LF transmitters for the front door handles, B-pillar, center console, second-row doors, third-row area, and rear liftgate. Each zone independently detects fob presence, which is why antenna-specific failures can create confusing "works here but not there" symptoms.
              </p>
              <p>
                This multi-zone architecture also means the BCM processes more concurrent signals, making firmware-level programming more involved than compact Ford models. Explorer key programming requires tools that can interface with both the BCM's RF management and the PCM's immobilizer subsystem simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Ford Explorer" />


      {/* LARGE SUV BEHAVIOR */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Large SUV Cabin & Detection Zone Challenges</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "3-Row Detection Gaps", desc: "The Explorer's cabin stretches nearly 200 inches. LF signal strength drops measurably between the second and third rows, creating detection dead zones that don't exist in smaller Fords like the Escape." },
              { title: "Cargo Area Blind Spots", desc: "The rear liftgate antenna sits high in the D-pillar trim. If the fob falls below the cargo floor or sits near metal cargo organizers, the signal gets absorbed before reaching the antenna — a common complaint on grocery runs." },
              { title: "Interior Signal Delay", desc: "With six or more antenna zones polling sequentially, the BCM's scan cycle takes measurably longer in the Explorer. Occupants sometimes notice a slight delay between pressing the start button and engine cranking, especially when the fob is in a rear-row pocket." },
              { title: "RF Interference Magnified", desc: "Family SUVs carry more electronics — tablets charging on USB ports, wireless headphones, portable gaming devices. Each emits RF noise in the 315–434 MHz range that competes with the fob's UHF response signal." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Shield className="w-4 h-4 text-accent shrink-0" />{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Common Ford Explorer Smart Key Problems</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: AlertTriangle, title: "Key Not Detected (Rear Seats)", desc: "Third-row passengers holding the only fob trigger repeated 'No Key Detected' warnings. This is often a weak rear antenna connection at the D-pillar harness." },
              { icon: AlertTriangle, title: "Push Button No-Start", desc: "You press START, dash lights cycle, but the engine doesn't crank. Usually indicates the PCM isn't receiving the immobilizer handshake — a programming or fob pairing issue." },
              { icon: AlertTriangle, title: "Intermittent Detection", desc: "The fob works sometimes but not others. Temperature-sensitive antenna connections or a fob battery hovering at the 2.8V threshold cause this on and off behavior." },
              { icon: AlertTriangle, title: "Rear Hatch Won't Recognize Key", desc: "The hands-free liftgate kicks under the bumper but nothing happens. The proximity sensor or its wiring in the rear bumper fascia degrades from road debris and moisture exposure." },
              { icon: AlertTriangle, title: "Doors Unlock but Won't Start", desc: "The fob's passive entry signal is strong enough for door unlock (low-security function) but the start authorization requires a stronger, closer-range encrypted exchange that fails with a marginal battery." },
              { icon: AlertTriangle, title: "Door Handle Sensor Failure", desc: "Capacitive touch sensors embedded in the exterior door handles corrode in wet climates. The door doesn't recognize your touch even with a fully charged fob in your pocket." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="w-5 h-5 text-destructive mb-2" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD KEY VS ALL KEYS LOST */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Add Key vs. All Keys Lost — Ford Explorer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" />Add a Key</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Requires at least one working Intelligent Access fob</li>
                <li>• Standard BCM pairing procedure — 20–30 minutes</li>
                <li>• Ford's onboard programming works with two existing keys; with one key, diagnostic tool required</li>
                <li>• New fob syncs to all door zones and push-to-start simultaneously</li>
                <li>• Most cost-effective option — ideal for adding a spare</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-destructive" />All Keys Lost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full PCM parameter reset and BCM key profile wipe required</li>
                <li>• Security access code extraction via Ford IDS/FDRS protocol</li>
                <li>• Anti-theft relearn procedure — PCM and BCM must resynchronize</li>
                <li>• 45–75 minutes depending on model year and security tier</li>
                <li>• More involved than add-key but fully handled on-site — no tow needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BY YEAR/GENERATION */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Ford Explorer Smart Key by Generation</h2>
          <div className="space-y-6">
            {[
              {
                years: "2011–2015 Explorer (5th Gen Early)",
                fcc: "M3N5WY8609 / M3N5WY8610",
                details: [
                  "First Explorer generation with available Intelligent Access and push-to-start",
                  "Base trims used traditional PATS transponder keys — proximity fobs were an option package",
                  "BCM programming relatively straightforward with Ford IDS",
                  "Common issue: door ajar sensors interfering with keyless entry logic",
                  "Aftermarket fobs widely available and compatible",
                ],
              },
              {
                years: "2016–2019 Explorer (5th Gen Refresh)",
                fcc: "M3N-A2C31243300 / M3N-A2C93142600",
                details: [
                  "Intelligent Access became standard on most trims",
                  "Enhanced encryption between fob and BCM — rolling codes refresh more frequently",
                  "Additional antenna added at B-pillar for improved second-row detection",
                  "SYNC 3 integration added key status display to the infotainment screen",
                  "Programming requires updated firmware on the diagnostic tool",
                ],
              },
              {
                years: "2020–2024 Explorer (6th Gen)",
                fcc: "M3N-A2C931426 / M3N-A2C93142600",
                details: [
                  "Completely redesigned RWD-based platform with new electrical architecture",
                  "Secure Gateway Module (SGM) restricts OBD-II diagnostic access — requires authenticated tool connection",
                  "Higher-tier AES encryption on all fob communications",
                  "Hands-free liftgate with dedicated rear proximity sensor",
                  "All-keys-lost recovery more complex — requires online security access via Ford FDRS",
                ],
              },
            ].map(gen => (
              <div key={gen.years} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-1">{gen.years}</h3>
                <p className="text-xs text-muted-foreground mb-3">FCC ID: {gen.fcc}</p>
                <ul className="space-y-1.5">
                  {gen.details.map((d, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 mt-1 text-accent shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMING COMPLEXITY */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Programming Complexity — Explorer vs. Dealer</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-3">
                Ford Explorer key programming is more involved than smaller models like the Escape due to the multi-zone antenna network and dual-module (BCM + PCM) authorization. On 2020+ models, the Secure Gateway Module adds an authentication layer that blocks unauthorized diagnostic tool access — meaning generic OBD tools won't work.
              </p>
              <p>
                Dealerships use Ford FDRS (Ford Diagnostic and Repair System) for all key programming. As a mobile locksmith, we use equivalent Ford IDS/FDRS-compatible platforms that authenticate through the same security protocols, giving identical results at your location instead of a service bay.
              </p>
            </div>
            <div>
              <p className="mb-3">
                The practical difference: a dealer visit typically means scheduling days out, towing the vehicle (if all keys are lost), and paying shop rates plus parts markup. Our mobile service arrives same-day, programs at your driveway or parking lot, and uses OEM-spec or high-quality aftermarket fobs — your choice.
              </p>
              <p>
                For older Explorers (2011–2015), programming is straightforward. Mid-range models (2016–2019) require firmware-current tools. The latest 6th-gen Explorers (2020+) demand online security access and Secure Gateway authentication — a capability not all locksmiths carry, but one we've invested in specifically for Ford's newer SUV lineup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL LOCKSMITH NOTES */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Real Locksmith Notes — Ford Explorer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Rear Antenna Harness Corrosion", note: "On 2016–2019 Explorers, the rear D-pillar antenna harness runs through a channel that collects condensation. We've seen corroded connectors cause intermittent third-row detection failures — cleaning and re-seating the connector often resolves the issue before any programming is needed." },
              { title: "Liftgate Sensor Degradation", note: "The hands-free liftgate sensor lives in the rear bumper fascia where it takes road spray, salt, and parking lot curb impacts. When clients say 'my kick sensor stopped working,' it's usually the proximity antenna rather than the fob itself." },
              { title: "Family Vehicle RF Noise", note: "Explorers are family haulers. We routinely troubleshoot detection issues that disappear once clients remove charging cables and wireless devices from the center console. A phone wirelessly charging in the console's Qi pad can create enough 315 MHz interference to delay fob polling." },
              { title: "Battery Voltage Threshold", note: "Explorer fobs use CR2032 cells. Ford's spec calls for replacement below 2.9V, but we see detection issues starting at 3.0V in the rear zones because the signal has farther to travel. We carry and test batteries on every call." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Ford Explorer Smart Key Service Areas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { city: "Burbank", text: "Our home base. We cover all of Burbank — from the Media District to Magnolia Park. Most Explorer calls are same-day with under 30-minute arrival." },
              { city: "Glendale", text: "Quick response across Glendale including downtown, Montrose, and the Galleria area. Ford Explorer key programming at your home, office, or parking structure." },
              { city: "North Hollywood", text: "Serving NoHo Arts District through Valley Village. Mobile Explorer key service at your doorstep — no shop visit required." },
              { city: "Los Angeles", text: "Coverage extends throughout greater LA including Pasadena, Eagle Rock, Silver Lake, and Hollywood. Explorer key programming wherever your truck is parked." },
            ].map(area => (
              <div key={area.city} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{area.city}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Ford Explorer Key Programming — FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can you program a Ford Explorer key without the original?", a: "Absolutely. We perform complete all-keys-lost recovery for every Explorer generation. The process involves a PCM parameter reset and BCM reauthorization using Ford-specific diagnostic protocols — all done at your location." },
              { q: "Why does my Explorer say key not detected in the back seat?", a: "The Explorer uses separate LF antenna zones for each row. Rear-zone antennas — particularly the D-pillar and cargo area units — are prone to wiring fatigue and connector corrosion. A fob battery below 3.0V makes the problem worse since the signal has farther to travel in the large cabin." },
              { q: "Do I need a Ford dealer for Explorer key programming?", a: "No. We carry Ford IDS/FDRS-compatible tools that perform identical programming procedures. For 2020+ Explorers with the Secure Gateway Module, we use authenticated access protocols — the same security tier as the dealer, delivered to your driveway." },
              { q: "How long does Ford Explorer key programming take?", a: "Adding a key with an existing fob takes 20–30 minutes. All-keys-lost recovery runs 45–75 minutes depending on your Explorer's generation and whether Secure Gateway authentication is required." },
            ].map(faq => (
              <details key={faq.q} className="bg-card border border-border rounded-xl p-5 group">
                <summary className="font-semibold text-foreground text-sm cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Ford Explorer Key Programmed?</h2>
          <p className="text-muted-foreground mb-6">Same-day mobile service in Burbank and surrounding areas. Intelligent Access, PATS, add-key, or all-keys-lost — we handle it on-site.</p>
          <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg">
            <Phone className="w-5 h-5" /> Call Now for Explorer Service
          </a>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">Related Ford & Smart Key Pages</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { to: "/smart-key-programming/ford", label: "Ford Smart Key Hub" },
              { to: "/smart-key-programming/ford/f-150", label: "Ford F-150 Key Programming" },
              { to: "/smart-key-programming/toyota/rav4", label: "Toyota RAV4 Smart Key" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <Cpu className="w-4 h-4 text-accent shrink-0" />
                <span className="font-semibold text-foreground text-sm">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}