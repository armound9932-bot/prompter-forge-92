import { Cpu, Phone, ShieldCheck, Clock, Wrench, AlertTriangle, Car, Key, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HondaCivicPage() {
  useEffect(() => {
    document.title = "Honda Civic Smart Key Programming Burbank | Keyless Start System – Burbank Auto Locksmith";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Honda Civic smart key programming in Burbank. Keyless Start System repair, push-button start fob replacement, all keys lost service. Mobile locksmith, same-day. Licensed & insured.");

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you program a Honda Civic key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform all-keys-lost programming for Honda Civic using dealer-level security access and PIN extraction. No original key or dealer visit required." } },
        { "@type": "Question", name: "Why does my Honda Civic say 'Keyless Start System Problem'?", acceptedAnswer: { "@type": "Answer", text: "This message typically indicates the BCM cannot authenticate the smart key. Common causes include a depleted fob battery, damaged key internals, or a BCM communication fault." } },
        { "@type": "Question", name: "Do I need a Honda dealer to program a new key?", acceptedAnswer: { "@type": "Answer", text: "No. Our mobile locksmith carries Honda-compatible diagnostic tools capable of full key registration, including security access and immobilizer programming." } },
        { "@type": "Question", name: "How long does Honda Civic smart key programming take?", acceptedAnswer: { "@type": "Answer", text: "Add-key jobs take 15–25 minutes. All-keys-lost situations require 30–50 minutes due to the additional security access and BCM registration steps." } },
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero / Conversion */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
            <span>/</span>
            <Link to="/smart-key-programming/honda" className="hover:text-primary transition-colors">Honda</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Civic</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
                Honda Civic Key Replacement & Smart Key Programming in Burbank
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Lost your Honda Civic smart key? Need a spare programmed? We handle <strong>add-key</strong> and <strong>all-keys-lost</strong> situations for every Civic generation — from early push-button models to the latest keyless start systems. Same-day mobile service across Burbank.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                  <Phone className="w-4 h-4" /> Call Now – Burbank
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h2 className="font-bold text-foreground text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" /> What We Cover
              </h2>
              {["Push-button start fob programming", "Add key with existing working key", "All keys lost – full BCM registration", "Keyless Start System Problem diagnosis", "Emergency same-day mobile service"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Honda Civic Smart Key System Works */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">How the Honda Civic Smart Key System Works</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              Honda's keyless access architecture differs fundamentally from Toyota's Smart Key System. The Civic uses a <strong>Body Control Module (BCM)</strong> as the central authority for key authentication — not a standalone immobilizer ECU. When you approach the vehicle, the BCM sends a low-frequency (LF) challenge signal through antennas embedded in the door handles and cabin. Your smart key responds with an encrypted UHF signal containing a rolling code that the BCM validates against its stored key profile.
            </p>
            <p>
              Honda calls this <strong>Smart Entry with Push Button Start</strong>. Unlike systems that use a fixed encryption handshake, Honda's implementation relies on rolling code synchronization — each successful authentication increments the code sequence. If a key falls out of sync (common after prolonged storage or repeated out-of-range button presses), the BCM may reject it even though the key hardware is functional.
            </p>
            <p>
              The push-button start sequence on a Civic requires the BCM to confirm the key is physically inside the cabin before enabling the ignition relay. Honda positions interior LF antennas differently than other manufacturers — typically one in the steering column area and one near the center console — which means key placement matters during startup if the fob battery is weak.
            </p>
          </div>
        </div>
      </section>

      {/* Honda-Specific Differences */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Makes Honda Key Programming Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Key className="w-4 h-4 text-accent" /> BCM-Centric Architecture
              </h3>
              <p className="text-sm text-muted-foreground">
                Honda centralizes key management in the Body Control Module rather than a separate immobilizer unit. This means key registration, rolling code management, and access control all route through a single module — making the programming process different from Toyota or Nissan systems where the immobilizer operates independently.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" /> Security Access & PIN Requirements
              </h3>
              <p className="text-sm text-muted-foreground">
                Newer Civic models require a security access procedure before the BCM accepts new key registrations. This involves a manufacturer-specific PIN code tied to the vehicle's VIN. Without this access layer, the BCM will not enter programming mode — a step that doesn't exist in most Toyota smart key procedures.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Wrench className="w-4 h-4 text-accent" /> Dealer-Level Tool Requirements
              </h3>
              <p className="text-sm text-muted-foreground">
                Honda's proprietary HDS (Honda Diagnostic System) protocol governs key registration. Our equipment replicates HDS-level access, allowing full key programming without a dealer visit. This includes seed-key authentication and BCM handshake sequences specific to Honda's architecture.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" /> Rolling Code Synchronization
              </h3>
              <p className="text-sm text-muted-foreground">
                Honda's rolling code system can fall out of sync if the key is pressed repeatedly while out of range. When this happens, the BCM's expected code sequence no longer matches the key's output. Re-synchronization requires a specific procedure through the diagnostic interface — not just proximity detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Honda Civic Smart Key Problems</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"Keyless Start System Problem\" Message", desc: "The most common Honda-specific alert. This appears on the dashboard when the BCM cannot complete authentication — usually caused by a depleted fob battery, but can also indicate BCM communication faults or internal key damage." },
              { title: "Push Button No Response", desc: "You press the start button and nothing happens — no crank, no accessory mode. On the Civic, this often means the interior LF antenna isn't detecting the key. Try holding the fob directly against the start button to use the backup coil reader." },
              { title: "Key Not Detected Inside Car", desc: "The Civic's interior antennas have specific coverage zones. If the key sits in a bag with metallic shielding, or near a phone with an active NFC reader, the LF signal can be absorbed before reaching the fob." },
              { title: "Intermittent Start — Works Sometimes", desc: "A key that starts the car inconsistently usually points to a dying fob battery or corroded battery contacts inside the key housing. Honda fob batteries (CR2032) should be replaced annually for reliable operation." },
              { title: "Doors Unlock but Engine Won't Start", desc: "The remote lock/unlock function uses UHF radio (longer range), while push-to-start requires LF proximity detection (short range). A key with a weak battery can still unlock doors via UHF but fail the close-range LF authentication needed for engine start." },
              { title: "RF Interference Near Electronics", desc: "Honda's LF frequency can be disrupted by aftermarket dash cameras, phone mounts with wireless chargers, or LED accessories connected to the vehicle's 12V system. We see this frequently on modified Civics in the Burbank area." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Add Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-accent/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-accent" /> Add a Spare Key
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Working key present — BCM already in authenticated state</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> New key registered alongside existing key profile</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Simpler security handshake — no PIN extraction needed</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Typical time: 15–25 minutes</li>
              </ul>
            </div>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> All Keys Lost
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> BCM must be placed into virgin registration mode</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Security access with VIN-specific PIN code required</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Previous key profiles erased, new key registered from scratch</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> More complex than Toyota — Honda BCM requires additional seed-key steps</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Typical time: 30–50 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year / Generation */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Honda Civic Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2012–2015 Civic (9th Generation)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The 9th-gen Civic introduced Honda's Smart Entry system on higher trims (EX, EX-L, Si). These models use a 46-bit transponder with a relatively straightforward programming protocol. The BCM accepts new keys through a timed registration sequence after security access. Lower trims (LX, DX) still used traditional transponder keys with a physical ignition — if you have one of these, the process is closer to standard chip key cloning. Programming time on these models is among the fastest in the Honda lineup.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2016–2021 Civic (10th Generation)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Honda significantly upgraded the Civic's security architecture with the 10th generation. Smart Entry became standard on more trims, and the BCM moved to a more complex seed-key authentication protocol. All-keys-lost situations on these models require PIN extraction from Honda's database — a step that adds time but ensures only authorized programming. The 10th-gen also introduced better LF antenna placement, improving in-cabin detection reliability but making the programming handshake more involved. The Civic Si and Type R variants have identical key hardware to the standard trims.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2022+ Civic (11th Generation)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The current-generation Civic runs Honda's latest security platform with enhanced encryption and tighter BCM authentication windows. Smart Entry with Push Button Start is now standard across all trims. The programming process requires advanced security access with multi-step verification — the BCM enforces a cooldown period between failed attempts, so precision matters on the first pass. Despite the added complexity, our Honda-specific tooling handles 11th-gen Civics routinely. Key hardware is physically similar to 10th-gen fobs but uses updated firmware that is not backward-compatible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCC ID Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Honda Civic Smart Key FCC IDs</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Every Honda smart key fob is registered with the FCC under a specific ID that identifies the radio transmitter inside. When ordering a replacement key or verifying compatibility, the FCC ID ensures you're getting the correct hardware for your Civic's year and trim. Using the wrong FCC ID means the key's radio frequency or protocol won't match the BCM — it simply won't register.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: "KR5V2X", years: "2016–2021 Civic", note: "10th-gen standard smart key" },
              { id: "KR5TP-4", years: "2022+ Civic", note: "11th-gen updated encryption" },
              { id: "ACJ932HK1310A", years: "2012–2015 Civic", note: "9th-gen Smart Entry fob" },
            ].map((fcc) => (
              <div key={fcc.id} className="bg-card border border-border rounded-xl p-4 text-center">
                <span className="block font-mono font-bold text-foreground text-sm">{fcc.id}</span>
                <span className="block text-xs text-muted-foreground mt-1">{fcc.years}</span>
                <span className="block text-xs text-accent mt-0.5">{fcc.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Programming Complexity: What to Expect</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Honda Civic key programming complexity scales directly with model year. On 2012–2015 models, add-key jobs are straightforward — the BCM accepts registration with minimal security overhead, and the process resembles what most locksmiths encounter on mainstream vehicles. These are quick, predictable jobs.
            </p>
            <p>
              The 2016–2021 range introduced Honda's updated seed-key protocol, which requires purpose-built diagnostic equipment. Generic OBD tools cannot complete the security handshake — they'll connect to the BCM but won't pass the authentication challenge. This is where many general locksmiths hit a wall and refer customers to the dealer.
            </p>
            <p>
              For 2022+ models, Honda tightened the programming window further. The BCM enforces attempt limits and cooldown timers, meaning the equipment must complete the sequence correctly on the first pass. Our Honda-compatible diagnostic tools are specifically configured for these tighter protocols — we program 11th-gen Civics regularly without dealer involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Service Time */}
      <section className="py-10 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-4">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-foreground font-semibold">Most Honda Civic smart key jobs completed in 15–50 minutes on-site</span>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Honda Civic Smart Key Service Areas</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our mobile locksmith covers Honda Civic smart key programming throughout <strong>Burbank</strong>, including the Media District, Magnolia Park, and Rancho neighborhoods. We provide the same Honda-specific service in <strong>Glendale</strong>, <strong>North Hollywood</strong>, and across <strong>Los Angeles</strong>. Whether your Civic is parked at home, at work, or stranded in a lot, we come to you with all the Honda diagnostic equipment needed to cut and program your key on the spot. No towing, no dealer appointment, no waiting.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Honda Civic Smart Key FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Can you program a Honda Civic key without the original?", a: "Yes. We perform all-keys-lost programming using Honda-compatible security access tools. The BCM is placed into registration mode using a VIN-specific PIN, and a new key is programmed from scratch — no original key or dealer visit needed." },
              { q: "Why does my Civic say 'Keyless Start System Problem'?", a: "This message means the BCM cannot authenticate the smart key. The most common cause is a depleted CR2032 battery inside the fob. If a battery swap doesn't resolve it, the key may have lost rolling code sync or sustained internal damage — both require diagnostic reprogramming." },
              { q: "Do I need a Honda dealer to program a new Civic key?", a: "No. Our mobile locksmith carries equipment that replicates Honda HDS-level access, including seed-key authentication and BCM registration. We handle every Civic generation on-site without dealer involvement." },
              { q: "How long does Honda Civic key programming take?", a: "Add-key jobs with a working key present take 15–25 minutes. All-keys-lost situations require 30–50 minutes due to security access procedures and BCM re-registration. We complete everything at your location." },
            ].map((item) => (
              <div key={item.q} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.q}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Need Honda Civic Key Programming in Burbank?</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Call now for same-day mobile locksmith service. We bring Honda-specific diagnostic equipment directly to your location — no towing, no dealer markup.
          </p>
          <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Call Now – (818) 555-1234
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-10 bg-muted/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-foreground mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/smart-key-programming/honda" className="text-sm text-accent hover:underline">← Honda Smart Key Programming</Link>
            <Link to="/smart-key-programming" className="text-sm text-accent hover:underline">All Smart Key Services</Link>
            <Link to="/smart-key-programming/toyota/camry" className="text-sm text-accent hover:underline">Toyota Camry Smart Key</Link>
            <Link to="/smart-key-programming/toyota/corolla" className="text-sm text-accent hover:underline">Toyota Corolla Smart Key</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
