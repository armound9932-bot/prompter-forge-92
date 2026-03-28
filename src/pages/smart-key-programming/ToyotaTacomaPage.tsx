import { useEffect } from "react";
import { Link } from "react-router-dom";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";

import {
  Phone,
  ChevronRight,
  Wrench,
  KeyRound,
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  AlertTriangle,
  Cog,
  Zap,
  HardDrive,
} from "lucide-react";

const faqItems = [
  {
    q: "Can you make a Toyota Tacoma key without the original?",
    a: "Yes — we handle all-keys-lost Tacomas regularly. For traditional key models, we cut a new blade by code or impression, then program the transponder chip through the OBD port. On push-to-start models, we perform immobilizer restoration via the ECU. No original key or dealer visit required.",
  },
  {
    q: "Why won't my Tacoma key turn in the ignition?",
    a: "This is the single most common Tacoma issue we see. Years of use — especially with heavy keychains or gloved hands — wear down the ignition cylinder wafers. The key blade also wears over time. We can rekey or replace the cylinder on-site and cut a fresh key that matches your door locks.",
  },
  {
    q: "Can you repair a Tacoma ignition cylinder?",
    a: "Absolutely. We rebuild worn ignition cylinders by replacing the internal wafers to match your existing key, or we install a new cylinder and rekey the system. Either way, it's done at your location — job site, trailhead, driveway — in about 30–45 minutes.",
  },
  {
    q: "What's the difference between a smart key and a regular key on a Tacoma?",
    a: "A regular Tacoma key has a metal blade you physically insert and turn in the ignition. It contains a small transponder chip for immobilizer authentication. A smart key is a proximity fob — you carry it in your pocket and press a button to start the engine. Pre-2024 Tacomas use regular keys on base/SR trims and smart keys on higher trims. The 2024+ Tacoma uses smart keys across all trims.",
  },
];

export default function ToyotaTacomaPage() {
  useEffect(() => {
    setSeoMeta({ title: "Toyota Tacoma Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Toyota Tacoma key replacement & programming in Burbank, CA. Transponder keys, smart keys, ignition repair. Same-day mobile truck locksmith. Call (818) 606-1684.", slug: "/smart-key-programming/toyota/tacoma" });
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
          <span className="text-foreground font-medium">Tacoma</span>
        </div>
      </nav>

      {/* ===== 1. HERO / CONVERSION ===== */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-20">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-6 h-6 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Truck Key Specialist</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Toyota Tacoma Key Replacement & Programming in Burbank, CA
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Key snapped in the ignition? Lost your only Tacoma key at the job site? Whether your truck uses a traditional turn-key ignition or the newer push-to-start system, we cut and program replacement keys on the spot. No tow truck. No dealer appointment. Just a working key in your hand.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: KeyRound, text: "Ignition Keys & Smart Keys" },
              { icon: Clock, text: "Same-Day Mobile Service" },
              { icon: Wrench, text: "Ignition Cylinder Repair" },
              { icon: MapPin, text: "We Come to Your Location" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium">
                <item.icon className="w-4 h-4 text-accent" />
                {item.text}
              </span>
            ))}
          </div>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Tacoma Truck Locksmith
          </a>
        </div>
      </section>

      {/* ===== 2. KEY SYSTEM TYPES ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tacoma Key System Types — Know Your Key</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            Unlike sedans and SUVs that moved entirely to push-to-start years ago, the Tacoma has straddled both worlds. Understanding which key system your truck uses determines the programming approach, the parts needed, and the cost.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <KeyRound className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Transponder Blade Key</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">2005–2015 • Base trims 2016–2023</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A metal blade key with a small transponder chip embedded in the plastic head. You insert it into the ignition cylinder and physically turn it to start the engine. The chip communicates with the immobilizer — without the correct chip signal, the engine cranks but won't fire. This is the most common Tacoma key type on the road today.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <Cog className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Remote Head Key</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">2016–2023 • Mid trims (SR5, TRD)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Combines a transponder blade key with built-in remote buttons (lock, unlock, panic). Still a turn-key ignition — you insert and twist. The remote controls the door locks wirelessly, but starting the engine requires the physical blade in the cylinder. The transponder and remote are in one unit.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <Zap className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Smart Key (Proximity Fob)</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">2016–2023 Limited • 2024+ All trims</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A proximity fob you keep in your pocket. The truck detects it via LF antennas, unlocks when you grab the door handle, and starts with a push button. No blade insertion. This is the same technology used in Camry and RAV4 — but the Tacoma didn't adopt it across all trims until the 2024 redesign.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Toyota Tacoma" />


      {/* ===== 3. HOW IMMOBILIZER WORKS ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How the Tacoma Immobilizer Works</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-accent" />
                Traditional Key Models
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                When you insert the key and turn the ignition, a coil antenna around the cylinder sends an RF pulse to the transponder chip in the key head. The chip responds with its unique encrypted code.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                The ECU compares the response against its registered key table. Match → fuel injection enabled, engine starts. No match → the starter motor cranks, but the ECU blocks fuel delivery. This happens in milliseconds — invisible to the driver unless it fails.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On 2005–2015 models, this uses Toyota's G-chip or 4D-72 transponder. 2016+ traditional key models upgraded to the H-chip with rolling code encryption.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Smart Key Models
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                On push-to-start Tacomas, the Body Control Module broadcasts a low-frequency (LF) challenge through antennas in the door handles and cabin. The smart key fob — which you never remove from your pocket — receives the challenge and transmits an encrypted UHF response at 315 MHz.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                The BCM validates the cryptographic handshake and authorizes the ECM to release fuel injection. On 2024+ models, this uses 128-bit AES encryption — the same grade deployed across the entire current Toyota lineup.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because the Tacoma is a truck with an open bed, the antenna network doesn't extend to the cargo area — only the cab interior and door handles are covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. GENERATION BREAKDOWN ===== */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tacoma Key Programming by Generation</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            The Tacoma's key technology has evolved significantly across three generations. Each requires different tools, different parts, and a different programming approach.
          </p>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2005–2015 Tacoma (2nd Generation)</h3>
                <span className="text-xs bg-accent/10 text-accent font-bold px-3 py-1 rounded-full">Traditional Key Only</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key type:</strong> Metal blade transponder key — G-chip (2005–2010) and 4D-72/H-chip (2011–2015)</p>
                <p><strong className="text-foreground">Ignition:</strong> Physical cylinder, turn-to-start</p>
                <p><strong className="text-foreground">Programming:</strong> OBD-based transponder registration. Connect to the DLC port under the dash, authenticate with the immobilizer ECU, and write the new key's chip ID. Straightforward and well-supported.</p>
                <p><strong className="text-foreground">Common issues:</strong> Ignition cylinder wear is extremely common on these trucks — especially fleet vehicles and daily work trucks. Worn wafers cause the key to stick, bind, or refuse to turn. Key blade wear is equally common after 80K+ miles.</p>
                <p><strong className="text-foreground">Time:</strong> Key cut + programming in 15–25 minutes. Ignition repair adds 20–30 minutes.</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2016–2023 Tacoma (3rd Generation)</h3>
                <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">Mixed Key Systems</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key type:</strong> Depends on trim. SR/SR5 use transponder blade or remote head key (H-chip). TRD Sport/Off-Road may use either. Limited trim uses smart key with push-to-start.</p>
                <p><strong className="text-foreground">Ignition:</strong> Turn-key on lower trims, push-to-start on Limited</p>
                <p><strong className="text-foreground">Programming:</strong> Traditional keys programmed via OBD with H-chip protocol. Smart keys require proximity system registration through the BCM — similar process to RAV4/Highlander but less common on Tacomas since fewer units have the system.</p>
                <p><strong className="text-foreground">Common issues:</strong> Aftermarket remote start systems (popular on trucks) frequently conflict with the factory immobilizer on these models. We see this weekly — the aftermarket module sends an incorrect transponder signal and the ECU locks out. Also, ignition wear remains prevalent on work trucks.</p>
                <p><strong className="text-foreground">Time:</strong> Traditional key: 15–25 min. Smart key: 25–35 min. Aftermarket remote start conflict diagnosis: 20–40 min.</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-lg">2024+ Tacoma (4th Generation)</h3>
                <span className="text-xs bg-destructive/10 text-destructive font-bold px-3 py-1 rounded-full">Full Smart Key — High Security</span>
              </div>
              <div className="p-6 text-sm text-muted-foreground space-y-3">
                <p><strong className="text-foreground">Key type:</strong> Smart key proximity fob across all trims — no more traditional blade key option</p>
                <p><strong className="text-foreground">Ignition:</strong> Push-to-start standard</p>
                <p><strong className="text-foreground">Security:</strong> 128-bit AES encryption, secure gateway module filtering OBD communications. Same TNGA security architecture as the 2024 Camry and RAV4.</p>
                <p><strong className="text-foreground">Programming:</strong> All-keys-lost scenarios require EEPROM-level access through the BCM. The secure gateway prevents direct OBD key registration without advanced authentication. Adding a spare key with a working key present is simpler but still requires dealer-level diagnostic tools.</p>
                <p><strong className="text-foreground">Time:</strong> Add key: 15–20 min. All keys lost: 35–50 min.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. COMMON TACOMA PROBLEMS ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Common Tacoma Key &amp; Ignition Problems</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
            Tacomas are work trucks. They get used hard — dusty job sites, heavy keychains, gloved hands cranking the ignition, keys tossed on dashboards in summer heat. These are the real problems we fix every week in Burbank.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Wrench,
                title: "Worn Ignition Cylinder",
                desc: "The #1 Tacoma locksmith call. After 80K–120K miles of daily use, the brass wafers inside the ignition cylinder wear flat. The key binds, sticks, or refuses to turn past ACC. We rebuild or replace the cylinder on-site — no steering column removal at a shop.",
              },
              {
                icon: AlertTriangle,
                title: "Key Stuck in Ignition",
                desc: "A worn wafer or a slightly bent key blade can trap the key in the cylinder. Forcing it risks snapping the blade inside. We extract stuck keys without damaging the cylinder and assess whether a cylinder rebuild is needed.",
              },
              {
                icon: KeyRound,
                title: "Broken Key in Ignition",
                desc: "Snapped blade tips lodged inside the cylinder happen more on trucks than any other vehicle type — heavy-handed use and worn keys are the usual cause. We extract the broken piece, cut a new key from code, and program the transponder.",
              },
              {
                icon: ShieldCheck,
                title: "Transponder Not Recognized",
                desc: "The immobilizer light blinks but the engine won't start. Common after a battery replacement, aftermarket alarm installation, or when the transponder chip in an old key degrades. We re-register the key or program a new one through OBD.",
              },
              {
                icon: HardDrive,
                title: "Aftermarket Remote Start Conflicts",
                desc: "Extremely common on Tacomas. Aftermarket remote start modules (Compustar, Viper, etc.) can interfere with the factory immobilizer, causing intermittent no-start conditions. We diagnose the conflict and restore proper communication between the module and ECU.",
              },
              {
                icon: Zap,
                title: "Smart Key Not Detected (2016+ Limited / 2024+)",
                desc: "Push-to-start Tacomas with weak fob batteries or antenna issues show 'Key Not Detected.' Because the truck cab is smaller than an SUV, detection is usually reliable — but mud, vibration, and off-road use can loosen antenna connectors over time.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                <item.icon className="w-5 h-5 text-accent mb-3" />
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
            <div className="bg-card border-2 border-accent/30 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-bold text-lg">Add a Key</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">You have a working key and want a spare for the truck.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span>Present working key for system authentication</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span>New key cut and transponder cloned or registered</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span>No immobilizer reset required</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span>All existing keys keep working</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">✓</span>10–20 minutes on traditional key trucks</li>
              </ul>
            </div>

            <div className="bg-card border-2 border-destructive/20 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <h3 className="font-bold text-lg">All Keys Lost</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Every key is gone — the truck's immobilizer needs a full security restoration.</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Key cut by code (no original needed)</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>Immobilizer ECU security restoration</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>EEPROM access on 2024+ models</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>New key table written from scratch</li>
                <li className="flex items-start gap-2"><span className="text-destructive font-bold">→</span>25–45 minutes depending on year &amp; key type</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. SMART KEY VS TRADITIONAL KEY ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why the Tacoma Is Different from Other Toyotas</h2>
          <div className="bg-card border border-border rounded-2xl p-7 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              If you drive a Camry, RAV4, or Highlander from the last decade, your Toyota almost certainly has push-to-start. The Tacoma is a different story. Toyota kept the traditional turn-key ignition on most Tacoma trims through the entire 2016–2023 generation — only the top-tier Limited received smart key as standard.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This matters because the locksmith service you need depends entirely on which system your Tacoma has. A traditional key replacement involves cutting a physical blade and programming a transponder chip. A smart key replacement involves programming a proximity fob and registering it with the BCM. Different tools, different parts, different process.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">How to tell which system you have:</strong> If your Tacoma has a keyhole in the steering column and you turn a key to start it — that's a traditional transponder key. If there's a push button on the dash and no keyhole — that's a smart key system. Simple as that.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The 2024 Tacoma finally brought push-to-start to every trim level. So going forward, all new Tacomas use smart key technology. But for the hundreds of thousands of 2005–2023 Tacomas on Burbank roads, knowing your key type before calling a locksmith saves time and ensures we arrive with the right equipment.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 8. LOCAL SEO ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Mobile Truck Locksmith — Burbank &amp; Surrounding Areas</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We service Toyota Tacomas across Burbank, Glendale, North Hollywood, and greater Los Angeles. Our mobile unit is equipped specifically for truck work — ignition cylinder tools, transponder key cutting machines, and smart key diagnostic equipment all ride in the van. Whether your Tacoma is parked at a construction site in Burbank, a warehouse in Glendale, a studio lot in North Hollywood, or stuck at a trailhead in the Angeles National Forest, we come to you. Roadside service is what we do — trucks don't come to the shop, the shop comes to the truck.
          </p>
        </div>
      </section>

      {/* ===== 9. FAQ ===== */}
      <section className="py-16 bg-muted/50 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Tacoma Key &amp; Ignition FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-card overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground text-sm">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. INTERNAL LINKS ===== */}
      <section className="py-14 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">More Toyota Key Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/smart-key-programming/toyota", label: "Toyota Smart Key Hub" },
              { to: "/smart-key-programming/toyota/rav4", label: "Toyota RAV4 Key Programming" },
              { to: "/smart-key-programming/toyota/highlander", label: "Toyota Highlander Key Programming" },
              { to: "/smart-key-programming/toyota/camry", label: "Toyota Camry Smart Key" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-accent" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Tacoma Key in Burbank?</h2>
          <p className="text-muted-foreground mb-8">
            Traditional key, smart key, or ignition repair — we handle every Tacoma model year. Call now for same-day mobile service.
          </p>
          <a
            href="tel:+18185551234"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call Now — Tacoma Key Service
          </a>
        </div>
      </section>
    </main>
  );
}
