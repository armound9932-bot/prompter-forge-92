import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Truck, Shield, Wrench, AlertTriangle, Key, MapPin, ChevronRight } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";
import PricingAndTimeSection from "@/components/PricingAndTimeSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";


export default function FordF150Page() {
  useEffect(() => {
    setSeoMeta({ title: "Ford F-150 Key Programming in Burbank, CA | Burbank Auto Locksmith", description: "Ford F-150 key programming in Burbank, CA. PATS transponder, Intelligent Access smart fob, all keys lost. Same-day mobile truck locksmith. Call (818) 606-1684.", slug: "/smart-key-programming/ford/f150" });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can I program a Ford F-150 key myself?", acceptedAnswer: { "@type": "Answer", text: "Ford's onboard programming requires two already-programmed keys. If you only have one key — or zero — you need a locksmith with professional PATS programming equipment." } },
        { "@type": "Question", name: "Why does Ford require two keys for programming?", acceptedAnswer: { "@type": "Answer", text: "Ford's PATS security protocol uses a two-key verification to authorize new transponder enrollment. This prevents unauthorized key additions. Without two working keys, a bypass through the PCM is required using professional tools." } },
        { "@type": "Question", name: "What if I lost all my Ford F-150 keys?", acceptedAnswer: { "@type": "Answer", text: "We perform full PATS resets and new key enrollment on-site. For newer Intelligent Access models, we reprogram the BCM and pair new proximity fobs — no tow to the dealer needed." } },
        { "@type": "Question", name: "Do I need a Ford dealer for F-150 key programming?", acceptedAnswer: { "@type": "Answer", text: "No. We carry the same PATS and Intelligent Access programming capabilities as Ford dealerships, and we come to your truck's location in Burbank." } },
      ],
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex items-center gap-1 text-sm text-primary-foreground/70 mb-6 flex-wrap">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/smart-key-programming" className="hover:text-primary-foreground">Smart Key Programming</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/smart-key-programming/ford" className="hover:text-primary-foreground">Ford</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground font-medium">F-150</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-10 h-10" />
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Ford F-150 Key Programming & Replacement in Burbank, CA</h1>
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed mt-4">
            Locked out of your F-150? Lost all your keys? Whether your truck uses a traditional PATS transponder key or the newer Intelligent Access push-to-start system, we handle it on-site. Same-day mobile service across Burbank — no dealer trip, no tow truck.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="https://wa.me/18185551234" className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 px-6 py-3 rounded-xl font-bold text-lg hover:bg-primary-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 text-sm font-semibold">
            {["PATS Transponder Keys", "Intelligent Access Fobs", "All Keys Lost Service", "Same-Day Mobile"].map(item => (
              <div key={item} className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-center">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FORD KEY SYSTEM TYPES */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Two Different Key Systems — One Truck</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            The F-150 has used two fundamentally different anti-theft architectures depending on the model year. Understanding which system your truck has determines everything about how we program your key.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Key className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">PATS — Passive Anti-Theft System</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Used in F-150 models from the late 1990s through 2020 (and some 2021+ base trims).</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Physical key with embedded transponder chip</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Key turns in the ignition cylinder</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>PCM interrogates the chip — no match, no start</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Ford requires 2 working keys for onboard add-a-key</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Remote head key combines transponder + remote buttons</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Intelligent Access — Push-to-Start</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Standard on higher trims since 2015, all trims on 2021+ models.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Proximity fob — no physical key insertion</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>LF antennas detect fob near door handles &amp; cabin</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Encrypted UHF handshake between fob and BCM</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Push-button start with rolling code verification</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span>Emergency key blade hidden inside fob</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Ford F-150" />


      {/* HOW PATS WORKS */}
      <section className="py-14 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">How Ford PATS Works on the F-150</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            PATS is Ford's longest-running anti-theft platform. It's straightforward but has one rule that catches most F-150 owners off guard.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-3">The Authentication Sequence</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>You insert the key and turn the ignition to RUN.</li>
                <li className="flex gap-3"><span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>The transceiver ring around the ignition cylinder sends an RF pulse to the key's transponder chip.</li>
                <li className="flex gap-3"><span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>The chip responds with its unique encrypted ID.</li>
                <li className="flex gap-3"><span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>The PCM (Powertrain Control Module) checks the ID against stored key profiles.</li>
                <li className="flex gap-3"><span className="bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>Match = fuel injection enabled. No match = engine cranks but won't fire.</li>
              </ol>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> The Two-Key Rule
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Ford designed PATS so that owners can add new keys themselves — but only if they already have <strong>two programmed keys</strong> in hand. This is a security feature, not a bug.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                If you're down to one key, or you've lost all keys, the onboard procedure won't work. That's where we come in — we bypass the two-key requirement using professional PATS programming tools connected directly to your F-150's OBD-II port.
              </p>
              <p className="text-sm font-semibold text-foreground">
                Bottom line: Don't wait until you lose your last key.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTELLIGENT ACCESS DETAIL */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Intelligent Access on the F-150</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Ford's Intelligent Access system turned the F-150 into a keyless truck. The fob stays in your pocket — you grab the door handle, the truck unlocks, and you press the button to start. Here's what's happening under the hood.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Door Handle Detection", desc: "Capacitive sensors in the door handles detect your hand. LF antennas broadcast a wake-up signal to any nearby fob." },
              { title: "Fob Authentication", desc: "Your fob receives the LF signal and responds via UHF (315 MHz) with an encrypted rolling code. The BCM validates it in milliseconds." },
              { title: "Cabin Detection", desc: "Interior LF antennas confirm the fob is inside the cabin before enabling push-button start. Prevents relay theft scenarios." },
              { title: "Truck Bed Zone", desc: "F-150 has detection zones extending to the tailgate area — useful when loading cargo. If the fob leaves the zone, the truck won't lock you out mid-task." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-14 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Common Ford F-150 Key Problems We Fix</h2>
          <p className="text-muted-foreground mb-6">These are the issues F-150 owners actually call us about — not textbook stuff, real truck problems.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Lost All Keys", desc: "Most common call. F-150 owners often have one key for years, then lose it. Full PATS reset or BCM reprogram required depending on year." },
              { title: "Down to One Key — Can't Self-Program", desc: "Ford's two-key onboard method won't work with just one. We add keys using direct PCM/BCM access through the diagnostic port." },
              { title: "\"Key Not Detected\" on Push-to-Start", desc: "Usually a dead fob battery, but can also be a failed door handle antenna or BCM communication fault. We diagnose before replacing." },
              { title: "Push Button — No Crank", desc: "Fob is detected but the engine won't turn over. Often a brake switch issue or starter relay, but can be PATS-related on hybrid PATS/IA trucks." },
              { title: "Ignition Cylinder Wear (2004–2014)", desc: "Older F-150s develop worn wafers in the ignition cylinder. The key turns but feels loose, or won't return to the OFF position. We repair or replace the cylinder on-site." },
              { title: "Aftermarket Remote Start Conflict", desc: "Third-party remote starters can interfere with PATS authentication. We see this constantly on work trucks — the aftermarket module confuses the PCM's key count." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground text-sm mb-2 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-accent shrink-0" /> {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD KEY VS ALL KEYS LOST */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 text-accent">Add a Key</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Have 2 keys?</strong> Ford's onboard procedure works — cycle ignition with both keys, then program the third. Takes about 10 minutes.</li>
                <li>• <strong>Have 1 key?</strong> Onboard won't work. We connect to the OBD-II port and add the new key through PATS parameter reset. Still on-site, still same day.</li>
                <li>• <strong>Intelligent Access?</strong> New fob paired through BCM programming. Existing fobs stay active.</li>
              </ul>
            </div>
            <div className="bg-card border-2 border-accent rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3 text-accent">All Keys Lost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>PATS trucks:</strong> Full parameter reset through the PCM. All previously programmed keys are erased. New keys enrolled from scratch.</li>
                <li>• <strong>Intelligent Access:</strong> BCM reprogramming required. Security access codes pulled from Ford's system. New fobs paired and verified.</li>
                <li>• <strong>Key cutting:</strong> We cut the physical blade on-site using the door lock or VIN decode — no factory key needed.</li>
                <li>• <strong>Time:</strong> 30–60 minutes depending on year and system complexity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BY YEAR / GENERATION */}
      <section className="py-14 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">F-150 Key Programming by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2004–2014 F-150 (11th &amp; 12th Gen)</h3>
              <p className="text-sm text-muted-foreground mb-3">PATS transponder system across all trims. Standard remote head keys with integrated lock/unlock buttons.</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• PATS with 80-bit encryption</li>
                <li>• Physical ignition cylinder</li>
                <li>• Onboard add-a-key with 2 keys</li>
                <li>• Common ignition wear issues</li>
                <li>• FCC IDs: CWTWB1U793, OUC6000022</li>
                <li>• Most straightforward to program</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2015–2020 F-150 (13th Gen)</h3>
              <p className="text-sm text-muted-foreground mb-3">Transitional generation. Base and XL trims kept PATS keys; Lariat, King Ranch, and Platinum introduced Intelligent Access.</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• Mixed PATS + Intelligent Access</li>
                <li>• Trim level determines key type</li>
                <li>• FCC IDs: M3N-A2C931426 (smart), 164-R8134 (PATS)</li>
                <li>• Aluminum body — no key system impact</li>
                <li>• More complex than 12th gen</li>
                <li>• Tailgate zone detection added</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2021–2024 F-150 (14th Gen) &amp; Lightning</h3>
              <p className="text-sm text-muted-foreground mb-3">Full Intelligent Access across all trims. Includes the F-150 Lightning EV. Ford's highest security tier for consumer trucks.</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li>• Intelligent Access standard</li>
                <li>• AES-128 encrypted communication</li>
                <li>• FCC IDs: M3N-A2C931426, M3N-A3C054339</li>
                <li>• Phone-as-a-key (FordPass) backup</li>
                <li>• Gateway module security layer</li>
                <li>• Requires advanced J2534 programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMING COMPLEXITY */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Ford Is More Restrictive — Here's Why That Matters</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Ford's key programming is more locked down than most Japanese manufacturers. Toyota and Honda allow certain onboard procedures with a single key — Ford doesn't. Here's what that means for you.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground text-sm mb-2">Two-Key Requirement</h3>
              <p className="text-xs text-muted-foreground">Ford's onboard key learning demands two valid keys to authorize a third. This is a deliberate security measure — and the #1 reason F-150 owners call a locksmith.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground text-sm mb-2">PCM-Level Access</h3>
              <p className="text-xs text-muted-foreground">When the two-key method isn't available, we access PATS parameters directly through the PCM. This requires professional-grade scan tools and Ford security access credentials.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground text-sm mb-2">Dealer vs. Locksmith</h3>
              <p className="text-xs text-muted-foreground">We carry the same PATS and Intelligent Access programming tools Ford dealers use. The difference: we come to your truck, and we don't charge dealer markup or a diagnostic fee for key jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FCC IDs */}
      <section className="py-14 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ford F-150 Key Fob FCC IDs</h2>
          <p className="text-muted-foreground text-sm mb-6">
            The FCC ID on the back of your fob tells us exactly which replacement you need. Here are the most common ones we program for F-150 trucks:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { fcc: "CWTWB1U793", years: "2009–2014", type: "Remote Head Key (PATS)" },
              { fcc: "OUC6000022", years: "2004–2010", type: "Remote Head Key (PATS)" },
              { fcc: "164-R8134", years: "2015–2017", type: "Remote Head Key (PATS)" },
              { fcc: "M3N-A2C931426", years: "2015–2022", type: "Intelligent Access Fob" },
              { fcc: "M3N-A2C93142600", years: "2017–2020", type: "Intelligent Access Fob" },
              { fcc: "M3N-A3C054339", years: "2021–2024", type: "Intelligent Access Fob" },
            ].map(item => (
              <div key={item.fcc} className="bg-card border border-border rounded-lg p-4">
                <p className="font-mono font-bold text-foreground text-sm">{item.fcc}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.years} · {item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL LOCKSMITH NOTES */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">From the Field — Real F-150 Key Jobs</h2>
          <div className="space-y-4 max-w-3xl">
            {[
              "Work trucks take a beating. We see F-150 ignition cylinders with so much wear that the key barely turns — the wafers inside are ground flat. On anything pre-2015, we can rekey or replace the cylinder on-site.",
              "The most common F-150 call: 'I only have one key and I can't add another.' Ford's two-key rule catches everyone off guard. We program the second key through the OBD port in about 20 minutes.",
              "Aftermarket remote starters cause more F-150 key problems than any other single issue. The bypass module tricks the PATS system into thinking a key is present — but when it fails, the truck won't start with any key. We remove the bypass and restore factory PATS operation.",
              "Tailgate proximity detection on 2018+ F-150s can be inconsistent. The antenna in the tailgate handle is exposed to water, mud, and road debris. If your tailgate won't unlock when you approach, the antenna may need replacement — not the fob.",
            ].map((note, i) => (
              <div key={i} className="bg-muted border border-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ford F-150 Key Service Across the Area</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { city: "Burbank", text: "Our home base. We reach most Burbank locations — parking lots, job sites, driveways — in under 30 minutes. F-150 is the most common truck we service here." },
              { city: "Glendale", text: "Quick response to Glendale for F-150 key emergencies. We know the commercial areas and residential streets equally well." },
              { city: "North Hollywood", text: "Plenty of work trucks in NoHo. We handle F-150 PATS resets and Intelligent Access programming throughout the neighborhood." },
              { city: "Los Angeles", text: "We cover the greater LA area for F-150 key service. Mobile unit fully equipped for any Ford truck key job, any location." },
            ].map(item => (
              <div key={item.city} className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground text-sm">{item.city}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PricingAndTimeSection vehicleName="Ford F-150" />


      {/* FAQ */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Ford F-150 Key Programming FAQ</h2>
          <div className="space-y-4 max-w-3xl">
            {[
              { q: "Can I program an F-150 key myself?", a: "Only if you have two working keys already. Ford's onboard procedure requires two valid keys to authorize a third. With one or zero keys, you need a professional locksmith with PATS programming tools." },
              { q: "Why does Ford require two keys for programming?", a: "It's a security feature. Ford's PATS system uses dual-key verification to prevent unauthorized key enrollment. Without two keys, the PCM needs to be accessed directly with professional equipment — that's what we do." },
              { q: "What if I lost all my F-150 keys?", a: "We perform a full PATS parameter reset (older trucks) or BCM reprogram (newer Intelligent Access models). New keys are cut and programmed on-site. No towing to a dealer required." },
              { q: "Do I need a Ford dealership for key programming?", a: "No. We carry the same diagnostic and programming tools used by Ford dealers. We come to your truck anywhere in Burbank and handle everything mobile — usually faster and at a lower cost." },
            ].map(item => (
              <details key={item.q} className="bg-card border border-border rounded-xl">
                <summary className="px-5 py-4 font-semibold text-foreground text-sm cursor-pointer hover:bg-muted/50 transition-colors">{item.q}</summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <EmergencyCallSection vehicleName="Ford F-150" />


      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent/90 to-accent text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need an F-150 Key? We Come to Your Truck.</h2>
          <p className="text-accent-foreground/80 mb-6">
            PATS transponder, Intelligent Access fob, or all keys lost — we handle it on-site in Burbank. No dealer appointment, no tow truck, no waiting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18185551234" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href="https://wa.me/18185551234" className="inline-flex items-center gap-2 border-2 border-accent-foreground/40 px-8 py-3 rounded-xl font-bold text-lg hover:bg-accent-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-foreground mb-4">Related Ford &amp; Smart Key Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { to: "/smart-key-programming/ford", label: "Ford Smart Key Hub" },
              { to: "/smart-key-programming/ford/escape", label: "Ford Escape Keys" },
              { to: "/smart-key-programming/ford/explorer", label: "Ford Explorer Keys" },
              { to: "/smart-key-programming", label: "All Smart Key Brands" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
                <Truck className="w-4 h-4 text-accent shrink-0" />
                <span className="font-semibold text-foreground text-sm">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocalSeoBlock vehicleName="Ford F-150" />

    </main>
  );
}
