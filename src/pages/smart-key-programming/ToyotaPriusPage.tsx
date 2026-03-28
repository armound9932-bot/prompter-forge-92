import { useEffect } from "react";
import { Link } from "react-router-dom";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";
import PricingAndTimeSection from "@/components/PricingAndTimeSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";

import {
  Phone,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Clock,
  MapPin,
  Power,
  Cpu,
  AlertCircle,
  Battery,
  Radio,
  Gauge,
} from "lucide-react";

const faqItems = [
  {
    q: "Why does my Prius display 'No Key Detected'?",
    a: "Three common causes: a depleted CR2032 battery in the fob (below 2.8V the proximity signal drops off), an antenna fault inside the vehicle (the steering column and center console antennas are most failure-prone), or RF interference from a phone charger or aftermarket device sitting near the POWER button. Try holding the fob directly against the POWER button — if the car enters READY mode, replace the fob battery first.",
  },
  {
    q: "Why won't my Prius go into READY mode?",
    a: "READY mode requires the hybrid control ECU, the immobilizer, and the smart key system to all agree. If the smart key isn't authenticated — whether due to a dead fob battery, a deregistered key, or an immobilizer fault — the car will power the accessories but refuse to engage the hybrid drivetrain. We diagnose which module is blocking authorization and resolve it on-site.",
  },
  {
    q: "Can you program a Prius smart key without the original?",
    a: "Yes. We handle all-keys-lost Prius jobs regularly. On 2004–2015 models, we access the immobilizer via OBD, perform a security restoration, and register a fresh key. On 2016+ models with AES encryption, we use EEPROM-level access through the smart key ECU. No original key, no dealer visit required.",
  },
  {
    q: "Do I need a Toyota dealership for Prius key programming?",
    a: "No. We carry the same OEM-grade diagnostic tools used by Toyota service departments and can program every Prius generation curbside. Our mobile service in Burbank is typically faster and more affordable than a dealer appointment — and you skip the tow.",
  },
];

export default function ToyotaPriusPage() {
  useEffect(() => {
    setSeoMeta({ title: "Toyota Prius Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Toyota Prius smart key programming in Burbank, CA. Hybrid key specialist — READY mode, proximity key, all keys lost. Same-day mobile service. Call (818) 606-1684.", slug: "/smart-key-programming/toyota/prius" });
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(schema);
    return () => {
      document.head.removeChild(schema);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* BREADCRUMB */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming/toyota" className="hover:text-primary transition-colors">Toyota</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Prius</span>
        </div>
      </nav>

      {/* ===== 1. HERO / CONVERSION ===== */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/10 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Hybrid Key Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Toyota Prius Smart Key Programming in Burbank, CA
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Prius won't go into READY mode? Lost your only smart key? We program and replace Toyota Prius proximity keys on-site — your driveway, office parking lot, or roadside. Same-day mobile service across Burbank. No dealer wait, no tow needed.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: ShieldCheck, text: "Add Key & All Keys Lost" },
              { icon: Leaf, text: "Hybrid System Expertise" },
              { icon: Clock, text: "Same-Day Emergency Service" },
              { icon: MapPin, text: "Mobile — We Come to You" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </span>
            ))}
          </div>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Prius Key Specialist
          </a>
        </div>
      </section>

      {/* ===== 2. PRIUS SMART KEY SYSTEM (HYBRID DIFFERENCE) ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">The Prius Smart Key System — Hybrid Behavior</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The Prius doesn't "start" like a conventional car. There's no engine crank, no ignition tumble. Understanding this difference is essential to understanding why key problems affect the Prius differently than any other Toyota.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem]" />
              <Power className="w-6 h-6 text-primary mb-4 relative z-10" />
              <h3 className="font-bold text-lg mb-2">POWER Button, Not Ignition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Prius has a POWER button — not a START button. Press it once for accessories, twice for "ON" (dashboard lights, no drivetrain), and press with your foot on the brake to enter READY mode. There is no ignition cylinder, no key slot on modern models, and no engine cranking sound. The hybrid system silently engages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem]" />
              <Gauge className="w-6 h-6 text-primary mb-4 relative z-10" />
              <h3 className="font-bold text-lg mb-2">READY Mode Explained</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                READY mode is the Prius equivalent of "engine running." The hybrid control ECU activates the electric motor, engages the high-voltage battery system, and stands by to start the gasoline engine when needed. Without READY mode, the car is a 3,000-pound paperweight. And READY mode requires a fully authenticated smart key — no exceptions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem]" />
              <Radio className="w-6 h-6 text-primary mb-4 relative z-10" />
              <h3 className="font-bold text-lg mb-2">Why Key Detection Matters More</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On a conventional Toyota, a marginal key signal might still let you start the engine. On the Prius, the hybrid control ECU demands a clean, fully validated smart key signal before releasing the high-voltage system. A weak fob battery or intermittent antenna can leave you stranded even though the key "sort of" works — doors unlock, accessories power on, but READY mode refuses to engage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Toyota Prius" />


      {/* ===== 3. HOW PRIUS IMMOBILIZER WORKS ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prius Immobilizer &amp; Hybrid ECU Interaction</h2>

          <div className="bg-card border border-border rounded-2xl p-7 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The Prius immobilizer system is tightly integrated with the hybrid powertrain in a way that no conventional Toyota is. Here's the sequence that happens every time you press the POWER button with your foot on the brake:
            </p>
            <ol className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xs shrink-0 mt-0.5">1</span>
                <span><strong className="text-foreground">LF antenna challenge:</strong> The Smart Key ECU broadcasts a low-frequency wake-up signal through cabin antennas (steering column, center console, rear shelf). The smart key fob receives this and wakes from sleep mode.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xs shrink-0 mt-0.5">2</span>
                <span><strong className="text-foreground">Encrypted UHF response:</strong> The fob transmits its cryptographic response at 315 MHz. On newer models, this is a 128-bit AES encrypted handshake — the same security grade used in the Camry and RAV4.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xs shrink-0 mt-0.5">3</span>
                <span><strong className="text-foreground">Immobilizer validation:</strong> The Smart Key ECU validates the response and sends an authorization signal to both the Engine ECU and the Hybrid Vehicle ECU (HV ECU).</span>
              </li>
              <li className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xs shrink-0 mt-0.5">4</span>
                <span><strong className="text-foreground">Hybrid system engagement:</strong> Only after the HV ECU receives immobilizer clearance does it close the high-voltage contactors, activate the inverter, and enable the MG1/MG2 motor-generators. The dashboard displays "READY" — the Prius is now driveable.</span>
              </li>
            </ol>
            <div className="mt-5 p-4 bg-muted rounded-xl text-xs text-muted-foreground">
              <strong className="text-foreground">Key point:</strong> If any step in this chain fails — dead fob battery, deregistered key, antenna fault, or ECU communication error — the hybrid system stays locked. You'll have accessory power but no READY mode and no ability to drive.
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. GENERATION BREAKDOWN ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Prius Smart Key by Generation</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The Prius was one of the first mass-market cars to adopt smart key technology. Each generation refined the system — and each requires a different programming approach.
          </p>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-secondary/30 px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2004–2009 Prius (XW20 — 2nd Generation)</h3>
                <span className="text-xs bg-secondary text-secondary-foreground font-bold px-3 py-1 rounded-full">Pioneer Era</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key system:</strong> Early Toyota Smart Key System (SKS). Some models included a physical key slot on the dashboard — insert the fob into the slot to authenticate if the proximity system failed.</p>
                <p><strong className="text-foreground">Transponder:</strong> Texas Instruments DST40 encryption (40-bit)</p>
                <p><strong className="text-foreground">Programming:</strong> OBD-based registration. Connect to the DLC, access the Smart Key ECU, and register the new fob. Relatively straightforward by today's standards.</p>
                <p><strong className="text-foreground">Notable:</strong> The key slot is a common source of confusion — owners sometimes don't realize their Prius has one, hidden in the center console or dash. If your fob battery dies, inserting it into this slot allows READY mode.</p>
                <p><strong className="text-foreground">Time:</strong> 20–30 minutes for most scenarios</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2010–2015 Prius (XW30 — 3rd Generation)</h3>
                <span className="text-xs bg-primary/20 text-primary font-bold px-3 py-1 rounded-full">Refined System</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key system:</strong> Improved Smart Key System with additional LF antenna coverage. Eliminated the physical key slot on most trims — full proximity operation.</p>
                <p><strong className="text-foreground">Transponder:</strong> DST-AES hybrid encryption (80-bit rolling code)</p>
                <p><strong className="text-foreground">Programming:</strong> OBD registration with enhanced security handshake. The Smart Key ECU requires a valid security credential before accepting new key data. All-keys-lost scenarios require seed-key extraction.</p>
                <p><strong className="text-foreground">Antenna layout:</strong> 3 interior zones (steering column, center console, rear parcel shelf) + 2 exterior zones (front door handles). Improved detection range over XW20.</p>
                <p><strong className="text-foreground">Time:</strong> Add key 15–20 min, all keys lost 25–35 min</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-accent/10 px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2016–2024 Prius (XW50/XW60 — 4th &amp; 5th Gen)</h3>
                <span className="text-xs bg-accent/20 text-accent font-bold px-3 py-1 rounded-full">High Security</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key system:</strong> Advanced Smart Key System with fully integrated proximity detection. The 2023+ 5th-generation Prius shares the TNGA platform security architecture with the latest Camry and RAV4.</p>
                <p><strong className="text-foreground">Transponder:</strong> 128-bit AES encryption with secure gateway module (2023+)</p>
                <p><strong className="text-foreground">Programming:</strong> 2016–2022 models use enhanced OBD security access. 2023+ models with the secure gateway require EEPROM-level access through the Smart Key ECU for all-keys-lost scenarios — the gateway blocks unauthorized OBD key registration.</p>
                <p><strong className="text-foreground">Notable:</strong> The 5th-gen Prius (2023+) has significantly improved antenna coverage, reducing the "key not detected" complaints that plagued earlier generations. However, the trade-off is tighter security that demands more advanced tooling for locksmith work.</p>
                <p><strong className="text-foreground">Time:</strong> Add key 15–20 min, all keys lost 30–50 min (longer on 2023+ due to secure gateway)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. COMMON PRIUS PROBLEMS ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Common Prius Smart Key Problems</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The Prius generates more "my key works but the car won't start" calls than any other Toyota. The hybrid system's strict authentication requirements mean marginal issues that wouldn't matter on a conventional car can leave a Prius completely undriveable.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: AlertCircle,
                title: '"No Key Detected" on Dashboard',
                desc: "The most frequent Prius complaint. The dashboard displays this warning and the POWER button does nothing beyond ACC mode. Usually caused by a depleted fob battery (CR2032 below 2.8V), but can also indicate a failed interior antenna or Smart Key ECU communication error.",
              },
              {
                icon: Power,
                title: "Car Won't Enter READY Mode",
                desc: "Accessories work — radio, lights, windows — but the READY indicator never appears. The hybrid control ECU is not receiving immobilizer clearance. This can happen after a 12V battery replacement (the Smart Key ECU loses synchronization) or if the fob has been deregistered by a failed programming attempt.",
              },
              {
                icon: Leaf,
                title: "Hybrid System Won't Engage",
                desc: "The key is detected, the dashboard lights up, but the hybrid drivetrain stays locked. This is a deeper immobilizer issue — the HV ECU isn't receiving the final authorization signal. We see this when owners attempt DIY key programming or after aftermarket alarm installations that disrupt the CAN bus communication.",
              },
              {
                icon: Battery,
                title: "Weak Fob Battery — Partial Function",
                desc: "The fob battery has enough charge to unlock doors (short-range) but not enough to complete the full cryptographic handshake for READY mode (longer exchange). Owners often replace the 12V car battery thinking that's the problem — when it's actually a $3 CR2032 in the key fob.",
              },
              {
                icon: Cpu,
                title: "Key Slot Works but Proximity Doesn't",
                desc: "On 2004–2009 Prius models with the dashboard key slot, owners discover that inserting the fob works but proximity detection has stopped. This usually means the cabin LF antennas have failed while the fob's transponder chip is still functional. Common on high-mileage XW20 models.",
              },
              {
                icon: Radio,
                title: "Electronic Interference",
                desc: "Phone mounts, wireless chargers, dash cameras, and aftermarket USB hubs positioned near the POWER button or steering column antenna create RF noise that disrupts the 315 MHz handshake. The Prius is more sensitive to this than larger Toyotas because the antenna zones are closer together in the compact cabin.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. ADD KEY VS ALL KEYS LOST ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-bold text-lg">Add a Key</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">You have a working Prius smart key and need a spare.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Present working key for Smart Key ECU authentication</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>New fob registered to the immobilizer table</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>No security restoration needed</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>Both keys verified for READY mode activation</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span>15–20 minutes</li>
              </ul>
            </div>

            <div className="bg-card border-2 border-destructive/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <h3 className="font-bold text-lg">All Keys Lost</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Every key is missing — the Prius immobilizer requires full restoration.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Immobilizer security restoration via Smart Key ECU</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Seed-key authentication &amp; extraction</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>EEPROM access on 2023+ models</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>New key table registered from scratch</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>30–45 minutes depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. FCC ID SECTION ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Prius Smart Key FCC IDs</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            The FCC ID printed on the back of your smart key fob identifies the exact radio frequency module inside. Using the correct FCC ID ensures the replacement fob is compatible with your Prius generation's antenna system and encryption protocol. A mismatched fob won't register — the Smart Key ECU will reject it.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                fcc: "HYQ14AAB",
                years: "2004–2009 Prius",
                note: "Original SKS fob — DST40 encryption. 3-button layout (lock, unlock, panic). Compatible with the dashboard key slot on equipped models.",
              },
              {
                fcc: "HYQ14ACX",
                years: "2010–2015 Prius",
                note: "Refined fob with improved battery life and 80-bit rolling code. 4-button layout adds trunk release. Slimmer profile than the HYQ14AAB.",
              },
              {
                fcc: "HYQ14FBA / HYQ14FBE",
                years: "2016–2024 Prius",
                note: "Current-generation fob with AES encryption support. Board version determines compatibility — we verify the correct board number before programming.",
              },
            ].map((item) => (
              <div key={item.fcc} className="bg-card border border-border rounded-2xl p-5">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.years}</span>
                <h3 className="font-extrabold text-lg mt-1 mb-2 font-mono">{item.fcc}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. WHY PRIUS IS DIFFERENT ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Prius Key Programming Is Different</h2>
          <div className="bg-card border border-border rounded-2xl p-7 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every Toyota uses an immobilizer. But the Prius adds a layer that no conventional Toyota has: the hybrid vehicle ECU. On a Camry or RAV4, a successful key authentication enables the engine ECU to start a gasoline engine. On the Prius, authentication must satisfy both the engine ECU <em>and</em> the HV ECU that controls the high-voltage battery, inverter, and electric motor-generators.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This means a Prius smart key isn't just starting an engine — it's activating an entire hybrid powertrain. A partially functional key that might still start a conventional car can completely fail on a Prius because the HV ECU has a lower tolerance for marginal signals. The system is designed this way for safety: the high-voltage battery operates at 200V+ and Toyota's engineers require absolute authentication certainty before closing those contactors.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For locksmiths, this means Prius key programming requires verification beyond simply "does the engine start." We test READY mode engagement, verify the hybrid system indicator, confirm the EV mode switch responds, and ensure the key is detected consistently across all antenna zones. It's a more thorough process than programming a key for a conventional car — and it's why you want a locksmith who understands hybrid systems, not just key cutting.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. LOCAL SEO ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Hybrid Key Specialist — Burbank &amp; Surrounding Areas</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We program Toyota Prius smart keys across Burbank, Glendale, North Hollywood, and greater Los Angeles. The Prius is one of the most popular vehicles in the LA area — and one of the most misunderstood when it comes to key programming. Many locksmiths treat it like a conventional Toyota and miss the hybrid-specific verification steps. Our technicians carry Prius-specific diagnostic profiles and test every key for full READY mode functionality before leaving. Whether you're at a Burbank coffee shop, a Glendale office park, or stuck in a North Hollywood apartment complex, we arrive with everything needed to program your Prius smart key curbside.
          </p>
        </div>
      </section>

      {/* ===== 10. FAQ ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Prius Smart Key FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-card overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground text-sm">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. INTERNAL LINKS ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">More Toyota Smart Key Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/smart-key-programming/toyota", label: "Toyota Smart Key Hub" },
              { to: "/smart-key-programming/toyota/camry", label: "Toyota Camry Smart Key" },
              { to: "/smart-key-programming/toyota/corolla", label: "Toyota Corolla Smart Key" },
              { to: "/smart-key-programming/toyota/rav4", label: "Toyota RAV4 Key Programming" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-primary" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Prius Smart Key in Burbank?</h2>
          <p className="text-muted-foreground mb-8">
            Call now for same-day Toyota Prius smart key programming. Hybrid system expertise, OEM-grade tools, mobile service to your location.
          </p>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Prius Key Service
          </a>
        </div>
      </section>

      <LocalSeoBlock vehicleName="Toyota Prius" />

    </main>
  );
}
