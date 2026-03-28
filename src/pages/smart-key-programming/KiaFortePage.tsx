import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Key, ShieldCheck, AlertTriangle, Cpu, Car, CheckCircle, ArrowRight, Wrench, Clock, MapPin, Battery, Settings } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


export default function KiaFortePage() {
  useEffect(() => {
    setSeoMeta({ title: "Kia Forte Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Kia Forte smart key programming in Burbank, CA. Compact sedan key replacement, transponder & smart key, all keys lost. Same-day mobile locksmith. Call (818) 606-1684.", slug: "/smart-key-programming/kia/forte" });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-muted-foreground flex flex-wrap items-center gap-1">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/smart-key-programming" className="hover:text-primary transition-colors">Smart Key Programming</Link>
            <span>/</span>
            <Link to="/smart-key-programming/kia" className="hover:text-primary transition-colors">Kia</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Forte</span>
          </div>
        </nav>

        {/* Hero / Intro */}
        <section className="bg-gradient-to-b from-accent/10 to-background py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Key className="w-7 h-7 text-primary" />
              </div>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Kia Forte Specialist</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Kia Forte Smart Key Programming in Burbank, CA
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed mb-6">
              The Kia Forte has been one of the most popular compact sedans on the road since 2010 — and its key system has changed dramatically over the years. Early models used a traditional metal key with a transponder chip and a turn-style ignition cylinder, while newer Fortes run a full smart key system with proximity unlock and push-button start. As a Burbank mobile locksmith, we handle both configurations daily — from worn ignition cylinders on 2011 Fortes to all-keys-lost PIN extractions on 2023 models.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" />
                Call Now – (818) 555-1234
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-3 rounded-xl">
                <Clock className="w-4 h-4" />
                Same-Day Mobile Service
              </span>
            </div>
          </div>
        </section>

        {/* Forte Key System Types */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Forte Key System Types: Traditional vs. Smart Key</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Unlike vehicles that have always used proximity keys, the Forte's key system evolved significantly across generations. Understanding which system your Forte uses is the first step to getting the right service.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500/10 p-2 rounded-lg">
                    <Wrench className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-lg">Traditional Key System</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Used in 2010–2018 Forte base and mid trims</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" /><span>Physical metal blade inserted into ignition cylinder</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" /><span>Texas Instruments or Philips transponder chip embedded in key head</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" /><span>Immobilizer reads chip at ignition ring — no chip match, no start</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" /><span>Separate remote fob for lock/unlock (not integrated)</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" /><span>Ignition cylinder wear is common after 60K+ miles</span></li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Smart Key System (Push-to-Start)</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Standard on 2019+ Forte and select 2014–2018 upper trims</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Proximity-based — key stays in your pocket or bag</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Smart Key Module (SKM) manages LF/UHF communication</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Push-button engine start with cryptographic ECU handshake</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Emergency blade hidden inside fob for manual door entry</span></li>
                  <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>2021+ models use AES-128 encrypted rolling codes</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      <MidPageCTA vehicleName="Kia Forte" />


        {/* Kia Smart Key Architecture */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Kia Smart Key Module Architecture</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              The Forte's smart key system revolves around the Smart Key Module (SKM), which orchestrates the entire keyless entry and engine start process. In the compact Forte cabin, this system is actually more responsive than in larger Kia SUVs — fewer dead zones, faster detection — but it comes with its own set of quirks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Settings, title: "SKM Controller", desc: "Central module behind the dash processes all key signals — wakes from sleep every 400ms to poll for fob presence" },
                { icon: Cpu, title: "LF Antennas (125 kHz)", desc: "3–4 low-frequency antennas in door handles and cabin detect key proximity within 1.5 meters" },
                { icon: ShieldCheck, title: "UHF Response (315 MHz)", desc: "Fob transmits encrypted rolling code back to SKM — must match ECU challenge or engine won't authorize" },
                { icon: Key, title: "Dual Registration", desc: "Key must register to both keyless entry module AND immobilizer — missing either registration means partial function only" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Car className="w-4 h-4 text-accent" />
                Compact Sedan Advantage
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Forte's smaller cabin means fewer antenna gaps compared to Kia SUVs. The driver's door handle antenna can reliably detect a fob in the rear passenger seat — something the Sorento struggles with at its third row. However, the compact design also means the SKM sits closer to the HVAC blower motor, and we've seen electromagnetic interference cause intermittent detection failures on 2019–2021 models when the blower runs on high speed.
              </p>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Common Kia Forte Key Problems We Fix</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Every week, Forte owners call us from Burbank driveways and parking lots with variations of these issues. Here's what's actually happening — and what it takes to resolve each one.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: '"Key Not Detected" on Dashboard', desc: "Most common on 2019–2022 models. Usually a CR2032 battery below 2.7V — the fob still has enough power to unlock doors via UHF but not enough for the LF handshake needed to authorize engine start.", color: "text-red-500" },
                { title: "Push Button — No Engine Crank", desc: "The button illuminates but nothing happens. On the Forte, this is often a brake switch sensor issue rather than a key problem. We test brake signal, SKM communication, and fob registration before replacing anything.", color: "text-orange-500" },
                { title: "Key Works Sometimes, Not Others", desc: "Intermittent detection that comes and goes. On 2019–2021 Fortes, HVAC blower interference is a known cause. Also check for aftermarket phone mounts with magnets near the dash — they disrupt LF antenna signals.", color: "text-yellow-500" },
                { title: "Doors Unlock But Car Won't Start", desc: "Classic dual-registration failure. The fob is registered to the keyless entry module but not to the immobilizer. Happens after battery replacement or incomplete programming. Requires re-registration to both systems.", color: "text-blue-500" },
                { title: "Ignition Cylinder Won't Turn (Older Models)", desc: "2010–2017 Fortes with traditional keys — the cylinder wafers wear out, especially the first two positions. The key goes in but won't rotate. We repair or replace the cylinder on-site and cut a fresh key to match.", color: "text-purple-500" },
                { title: "Module Communication Fault", desc: "SKM loses communication with the ECU after a battery disconnect or jump start. The module needs a power cycle and re-initialization sequence — not just reconnecting the battery.", color: "text-red-500" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <h3 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add Key vs All Keys Lost */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Add a Key vs. All Keys Lost</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              The complexity and cost of Forte key programming depends entirely on whether you have a working key. Here's the real difference from a locksmith perspective.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border-2 border-green-500/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-lg text-green-600">Add a Key (Have Working Key)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>Working key puts the system into learning mode</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>New fob registers to SKM via authenticated session</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>Both keyless and immobilizer registration in single procedure</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>Typically completed in 15–25 minutes on-site</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>Lower cost — no PIN extraction needed</span></li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl border-2 border-red-500/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-lg text-red-600">All Keys Lost (No Working Key)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>PIN code extraction from vehicle's ECU required first</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>Immobilizer must be fully reset before new key registration</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>All previous keys permanently deauthorized during reset</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>2022+ models may require online server verification for PIN</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>30–60 minute procedure depending on model year</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Forte by Year */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Kia Forte by Generation</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              The Forte has gone through three distinct generations, each with different key technology and programming requirements.
            </p>
            <div className="space-y-6">
              {/* TD Generation */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-muted text-foreground text-xs font-bold px-3 py-1 rounded-full">TD / 1st Gen</span>
                  <h3 className="font-bold text-lg">2010–2013 Kia Forte</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  The first-generation Forte used exclusively traditional transponder keys with a mechanical ignition cylinder. The immobilizer system reads a Texas Instruments DST40 chip embedded in the key head — no proximity, no push-to-start. Programming is straightforward with the correct PIN code, but the ignition cylinder itself is the weak point on these models. After 50K–70K miles, the wafer springs lose tension and the key binds or refuses to turn. We see this constantly in Burbank where stop-and-go driving accelerates cylinder wear.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Transponder Only</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">DST40 Chip</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Mechanical Ignition</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">FCC: OSLOKA-310T</span>
                </div>
              </div>
              {/* YD Generation */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">YD / 2nd Gen</span>
                  <h3 className="font-bold text-lg">2014–2018 Kia Forte</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  The second generation is where it gets interesting for locksmiths. Base and LX trims kept the traditional transponder key and mechanical ignition, while EX and SX trims introduced the smart key system with push-to-start. This means the same model year can have completely different key systems depending on trim level. We always ask for the VIN before quoting — an "EX with push-to-start" is a fundamentally different job than an "LX with turn-key ignition." The YD smart key uses the same SKM platform as the 2014–2018 Optima, but with slightly different antenna placement due to the shorter cabin.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Mixed System (Trim-Dependent)</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">ID46 / Smart Key</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">FCC: CQOTD00SA / TQ8-FOB-4F10</span>
                </div>
              </div>
              {/* BD Generation */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">BD / 3rd Gen</span>
                  <h3 className="font-bold text-lg">2019–2024 Kia Forte</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  The current-generation Forte standardized the smart key system across all trims — every BD Forte has push-to-start and proximity entry. The security architecture jumped to AES-128 encryption on 2021+ models, making PIN extraction more complex and requiring updated locksmith tooling. The BD platform shares the N3 architecture with the Hyundai Elantra CN7 but uses Kia-specific software paths — a Hyundai Elantra PIN won't work on a Forte even though the hardware is nearly identical. We keep both manufacturer software sets loaded for exactly this reason.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Full Smart Key (All Trims)</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">AES-128 (2021+)</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">N3 Platform</span>
                  <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">FCC: CQOFD00430 / TQ8-FOB-4F24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programming Complexity */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Why Forte Key Programming Requires a Professional</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Online videos show "DIY key programming" for the Forte, but those methods only work for the remote lock/unlock function — not the immobilizer. Without immobilizer registration, the fob locks and unlocks the doors but the engine won't start. Here's what professional programming actually involves.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, title: "PIN Code Security", desc: "Every Forte immobilizer is locked behind a manufacturer PIN. Extracting it requires OBD-II access, diagnostic software, and — on 2022+ models — a live connection to Kia's server for online PIN generation." },
                { icon: Settings, title: "Module-Level Access", desc: "Programming writes directly to the SKM and ECU memory. One incorrect write attempt can lock the module, requiring physical removal and bench programming to recover — a job most shops can't handle." },
                { icon: Cpu, title: "Dual-Registration Protocol", desc: "The Forte requires keys to register to both the keyless entry system and the immobilizer independently. Skipping either step means partial functionality — we verify both registrations before completing the job." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Locksmith Notes */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Field Notes from Forte Jobs</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Observations from hundreds of Kia Forte key jobs across Burbank and the San Fernando Valley.
            </p>
            <div className="space-y-4">
              {[
                { icon: Wrench, title: "Ignition Cylinder Wear (2010–2017)", note: "The first-gen Forte ignition cylinder uses brass wafers that wear unevenly. Symptom: key inserts fine but won't turn past ACC position. We carry replacement cylinders and can re-key to your existing key on-site — no tow needed." },
                { icon: Battery, title: "CR2032 Drain in Burbank Heat", note: "Forte smart key fobs use CR2032 batteries that are heat-sensitive. In Burbank summers, we see batteries drain 40% faster than rated — a battery that should last 2 years dies in 14 months. We recommend proactive replacement every spring." },
                { icon: AlertTriangle, title: "HVAC Blower Interference (2019–2021)", note: "The SKM sits behind the lower dash panel, close to the HVAC blower motor. On high fan speed, the motor's electromagnetic field can interfere with LF antenna signals. If 'Key Not Detected' only appears when the AC is blasting, this is likely the cause. A simple foam shielding pad behind the SKM resolves it." },
                { icon: Settings, title: "Kia vs. Hyundai Software Paths", note: "The BD Forte and CN7 Elantra share the N3 platform, but Kia uses different software addressing for the immobilizer. We've seen other shops fail Forte jobs because they ran Hyundai software on a Kia ECU. Always confirm the manufacturer software path — not just the platform code." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5 flex gap-4">
                  <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <LocalSeoBlock vehicleName="Kia Forte" />

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/kia/forte" brandSlug="kia" />


        {/* Local SEO */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Kia Forte Key Service Areas</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { area: "Burbank", desc: "Our home base. We respond to Forte key calls across Burbank in 20–30 minutes — from the Media District to Magnolia Park. The Forte is one of the most common compact sedans we service in this area." },
                { area: "Glendale", desc: "Glendale's dense apartment parking structures are where we handle a lot of Forte lockouts. The older models with worn ignition cylinders are especially common in this area." },
                { area: "North Hollywood", desc: "NoHo's street parking means Forte owners are more likely to need emergency key replacement after theft or loss. We carry blank fobs and transponder keys for immediate on-site service." },
                { area: "Los Angeles", desc: "We cover the greater Los Angeles area for Forte key programming. Commuter Fortes coming off the 134 and 5 freeways are some of our most frequent calls — high-mileage cars with worn keys and tired ignition cylinders." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-sm">{item.area}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Kia Forte Key Programming FAQ</h2>
            <div className="space-y-4 max-w-3xl">
              {[
                { q: "Can you program a Forte smart key without the original?", a: "Yes. All-keys-lost programming is one of our most common Forte jobs. We extract the PIN code from the vehicle's ECU, reset the immobilizer, and program a new key from scratch. On 2022+ models, this requires a live server connection for PIN verification — we carry cellular hotspot equipment for this purpose." },
                { q: "Why does my Forte say 'Key Not Detected'?", a: "The most common cause is a low CR2032 battery in the fob — the fob can still send UHF signals to unlock doors but lacks power for the LF handshake needed for engine authorization. Other causes include HVAC blower interference (2019–2021 models), aftermarket magnetic phone mounts near the dash, or a depleted 12V vehicle battery below 11.5V." },
                { q: "What is the PIN code and why do you need it?", a: "The PIN code is a manufacturer security code tied to your Forte's VIN. It's required to access the immobilizer programming mode. Without it, new keys can lock/unlock doors but won't start the engine. We extract the PIN through the OBD-II port using authorized diagnostic equipment." },
                { q: "Do I need to go to the Kia dealer for key programming?", a: "No. As a licensed automotive locksmith, we carry the same diagnostic tools and manufacturer software used by Kia dealerships. We program Forte keys on-site at your Burbank location — no towing, no waiting for dealer appointments, and typically at 30–50% less than dealer pricing." },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-bold text-sm mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Need a Kia Forte Key Programmed in Burbank?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you've lost all keys, need a spare programmed, or have an ignition cylinder that won't turn — we handle every Forte key system from 2010 to 2024. Mobile service, same day, no tow required.
            </p>
            <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" />
              Call Now – (818) 555-1234
            </a>
            <p className="text-xs text-muted-foreground mt-4">Licensed & insured • Serving Burbank, Glendale, North Hollywood & LA</p>
          </div>
        </section>

    </main>
  );
}
