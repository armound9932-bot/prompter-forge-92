import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, ChevronRight, CheckCircle, Cpu, Car, Wrench, AlertTriangle, Key, Award } from "lucide-react";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;
const SLUG = "/smart-key-programming/toyota/camry";
const META_TITLE = "Toyota Camry Smart Key Programming Burbank | Push-to-Start Fob Replacement – Burbank Auto Locksmith";
const META_DESC = "Toyota Camry smart key programming in Burbank. Proximity key, push-to-start fob, immobilizer reset for 2007–2024 Camry. Add key or all keys lost. Mobile service, 20–30 min. Licensed & insured.";

export default function ToyotaCamryPage() {
  useEffect(() => {
    document.title = META_TITLE;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", META_DESC);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `https://burbankautolocksmith.com${SLUG}`;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Toyota Camry smart key programming cost in Burbank?", acceptedAnswer: { "@type": "Answer", text: "Toyota Camry smart key programming typically costs significantly less than dealership rates. Pricing depends on the model year and whether you're adding a key or replacing all lost keys. Call us for an exact Burbank quote." } },
        { "@type": "Question", name: "Can you program a Toyota Camry smart key if all keys are lost?", acceptedAnswer: { "@type": "Answer", text: "Yes. We perform full immobilizer initialization for all Camry generations, including EEPROM-level programming for 2018+ models. No towing to the dealer required." } },
        { "@type": "Question", name: "How long does Toyota Camry smart key programming take?", acceptedAnswer: { "@type": "Answer", text: "Most Toyota Camry smart key jobs are completed in 20–30 minutes on-site at your Burbank location." } },
        { "@type": "Question", name: "What Toyota Camry smart key fob part numbers do you support?", acceptedAnswer: { "@type": "Answer", text: "We program HYQ14FBE, HYQ14FBC, HYQ14FBA, HYQ1EA, and HYQ14AAB fobs, plus compatible aftermarket equivalents for 2007–2024 Camry models." } },
      ],
    };
    let script = document.getElementById("faq-schema") as HTMLScriptElement | null;
    if (!script) { script = document.createElement("script"); script.id = "faq-schema"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(faqSchema);

    window.scrollTo(0, 0);
    return () => { script?.remove(); };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="block">
            <h2 className="text-lg font-bold tracking-tight">🔑 Burbank Auto Locksmith</h2>
            <p className="text-xs opacity-80">KPN Electronic Inc. • CA Lic# LCO8538</p>
          </Link>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow transition hover:brightness-110">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming" className="hover:text-foreground transition">Smart Key Programming</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming/toyota" className="hover:text-foreground transition">Toyota</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Camry</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Toyota Camry Smart Key Programming in Burbank</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            The Toyota Camry uses a proximity-based smart key system that communicates with the vehicle's immobilizer to allow keyless entry and push-button start. Whether you've lost your only key or need a spare programmed, our mobile locksmith team in Burbank handles every Camry generation — from early transponder systems to the latest encrypted smart keys.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-xl animate-pulse-glow hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-primary-foreground/15 text-primary-foreground font-semibold border border-primary-foreground/30 hover:bg-primary-foreground/25 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-base font-bold text-white">
          <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5.0 Rating</span>
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-400" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-400" /> 20–30 Min Service</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-400" /> 1-Year Warranty</span>
        </div>
      </div>

      {/* Introduction: How the System Works */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Cpu className="w-7 h-7 text-accent" /> How the Toyota Camry Smart Key System Works
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every Toyota Camry equipped with the Smart Key System (SKS) relies on a <strong className="text-foreground">two-way radio frequency handshake</strong> between the fob and the vehicle. The car continuously broadcasts a low-frequency (LF) challenge signal through a network of antennas — typically two in the exterior door handles, one in the trunk lid, and three inside the cabin. When your fob enters range, it receives that LF signal, wakes up, and responds on a 315 MHz UHF channel with an encrypted rolling code. That response is what tells the body control module (BCM) "this is an authorized key."
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Push-to-Start Operation</h3>
            <p>
              The push-to-start system doesn't simply check whether a fob is nearby — it performs a <strong className="text-foreground">full immobilizer authentication cycle</strong> every time you press the button. The BCM sends an encrypted challenge to the transponder chip inside the fob. The transponder computes a response using a shared secret stored in both the fob and the immobilizer ECU. If the response matches, the BCM signals the engine control module (ECM) to enable the fuel injectors and ignition circuit. The entire handshake takes about 100 milliseconds. If authentication fails at any point, the dashboard shows "Key Not Detected" and the engine will not crank.
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Immobilizer Behavior</h3>
            <p>
              Toyota's immobilizer is a <strong className="text-foreground">separate security layer</strong> from the keyless entry system. Even if the doors unlock, the engine won't start unless the immobilizer ECU independently verifies the transponder. On 2012–2017 Camrys, this uses a G-chip or H-chip with rolling code encryption. On 2018+ models, Toyota upgraded to AES 128-bit encryption — the same standard used in banking. This is why you can't simply buy a blank fob online and have it work; the transponder must be electronically married to the vehicle's specific immobilizer using factory-level diagnostic protocols.
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Proximity Detection & "Key Not Detected" Issues</h3>
            <p>
              The "Key Not Detected" warning is one of the most common calls we get for the Camry. It happens when the LF antennas inside the vehicle can't establish a link with the fob. The root causes vary: a fob battery below 2.8V (even though the battery technically still works for lock/unlock), a cracked antenna amplifier behind the dashboard, RF interference from an aftermarket phone mount or dashcam wired to the OBD port, or — on XV50 models — a known issue where moisture gets into the driver-side door handle antenna connector. We diagnose the actual cause on-site rather than just replacing parts.
            </p>
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 flex items-center gap-3">
            <Key className="w-7 h-7 text-accent" /> Add Key vs. All Keys Lost
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Add Key (Working Key Available)
              </h3>
              <p className="text-muted-foreground text-sm mb-4">When you already have at least one working smart key, adding a spare is straightforward. Your existing key acts as the "master" during the registration process — it proves to the immobilizer that the programming request is authorized.</p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> The working fob is placed inside the vehicle during the procedure</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Our diagnostic tool reads the existing key's registration data from the BCM</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> The new fob is added to the key table without erasing existing entries</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> No immobilizer reset needed — security is never fully disarmed</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Typical time: 15–20 minutes</strong></li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <p className="text-muted-foreground text-sm mb-4">When no working key exists, the process is fundamentally different. Without a master key to authorize the new one, we need to bypass the immobilizer's security layer through legitimate diagnostic channels — not guesswork.</p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Immobilizer reset:</strong> The existing key table in the BCM must be wiped and re-initialized</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Pin code extraction:</strong> Security access code pulled from the ECU to authorize the reset</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">2018+ XV70 models:</strong> May require EEPROM dump from the immobilizer ECU — the encryption seed must be read and re-written with the new key's credentials</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Advanced programming:</strong> Our tools perform the same procedure as Toyota's TIS Techstream — full dealer-level security access</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Typical time: 25–40 minutes</strong> depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systems by Year */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 flex items-center gap-3">
            <Car className="w-7 h-7 text-accent" /> Toyota Camry Smart Key Systems by Year
          </h2>
          <div className="space-y-6">
            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2007–2011 Toyota Camry (XV40)</h3>
              <p className="text-muted-foreground text-sm mb-3">The XV40 generation was a transition period for Toyota. Base and LE trims still used a traditional transponder chip key with a mechanical ignition cylinder, while XLE and higher trims began offering the first-generation smart key system with push-to-start.</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Transponder:</strong> 4D67 or 4D68 chip — these are older crypto chips with a fixed ID, making them easier to clone when a working key is present</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Smart key trims:</strong> Use HYQ14AAB or HYQ14AEM proximity fobs — limited antenna coverage compared to later generations</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Add key:</strong> Straightforward on-board registration when a working key is present</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Pin code extraction from the BCM via OBD; immobilizer ECU reset required to register virgin keys</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Field note:</strong> We see a lot of XV40 Camrys in Burbank where the owner has a transponder key but wants to upgrade to a smart key — this requires a hardware conversion kit, not just programming</li>
              </ul>
            </div>

            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2012–2017 Toyota Camry (XV50)</h3>
              <p className="text-muted-foreground text-sm mb-3">Toyota made the smart key system standard on most XV50 trims. This generation introduced the G-chip and later H-chip transponders with rolling code encryption — a significant security upgrade over the XV40's fixed-code system.</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Transponder:</strong> Toyota G-chip (2012–2014) transitioning to H-chip (2015–2017) — rolling code means each start cycle generates a new authentication sequence</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Proximity system:</strong> 315 MHz UHF with six antenna zones — door handles, trunk, and three cabin positions</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBA (early models), HYQ14FBC (2015+) — board revisions between years mean not all fobs are interchangeable</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Requires full immobilizer initialization via diagnostic tool — pin code extracted from the ECU, BCM key table cleared, then new keys registered</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Known issue:</strong> The 2012–2013 models have a known problem where the driver door handle antenna corrodes at the connector, causing intermittent "Key Not Detected" on only the driver side</li>
              </ul>
            </div>

            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2018–2024 Toyota Camry (XV70)</h3>
              <p className="text-muted-foreground text-sm mb-3">The XV70 is Toyota's current platform and represents a major jump in smart key security. The immobilizer uses AES 128-bit encryption — the same algorithm protecting online banking. This makes unauthorized key duplication virtually impossible without proper diagnostic access.</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Transponder:</strong> AES 128-bit encrypted chip — each key stores a unique cryptographic seed that pairs exclusively with the vehicle's immobilizer ECU</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Proximity system:</strong> Enhanced multi-antenna array with improved range and faster response — walk-up detection is noticeably quicker than the XV50</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBE (standard), HYQ14FBC with updated board revision for 2018+ — visually similar to XV50 fobs but electronically incompatible</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> This is where it gets involved. The immobilizer ECU's EEPROM must be read to extract the encryption seed, then re-written with the new key's credentials. Some early 2018 models allow pin-based initialization, but 2020+ consistently require EEPROM access</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Add key:</strong> Still straightforward with a working key present — the BCM handles registration without touching the EEPROM</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Camry Hybrid (2018+):</strong> Uses identical smart key hardware — the hybrid powertrain doesn't add any additional key programming steps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-accent" /> Common Toyota Camry Smart Key Issues
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"Key Not Detected\" Warning", desc: "This is the most common Camry smart key complaint. The LF antennas inside the cabin can't establish a link with the fob. Causes include: fob battery below the 2.8V threshold (even though lock/unlock buttons still work at lower voltages), corroded antenna connector on the driver door handle (common on 2012–2013 models), or signal interference from aftermarket devices plugged into the OBD port." },
              { title: "Push-to-Start Won't Crank", desc: "The start button lights up but the engine doesn't turn over. This means the proximity system sees the fob, but the immobilizer authentication is failing. The transponder chip may be damaged, or the rolling code has desynchronized — which can happen if the fob battery dies while the car is running. As a workaround, hold the fob directly against the start button; the short-range NFC backup may still authenticate." },
              { title: "All Keys Lost — No Way to Start", desc: "Without any registered key present, the immobilizer stays armed and the engine is completely disabled. We extract the security pin code from the ECU, perform a full immobilizer initialization, and register new keys from scratch. On 2018+ models this requires EEPROM-level access to the immobilizer — not just an OBD connection." },
              { title: "Key Stopped Working After Battery Change", desc: "This is more nuanced than people think. The fob's rolling code counter increments each time it transmits. If the battery dies and you press the button many times trying to make it work, the counter advances beyond the BCM's acceptance window. The fix isn't just a new battery — the fob needs to be re-synchronized with the vehicle's rolling code counter through a registration procedure." },
            ].map((issue, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0" /> {issue.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCC IDs + Service Time + Trust */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-black text-foreground mb-2">Compatible Smart Key FCC IDs</h2>
              <p className="text-muted-foreground text-sm mb-4">The FCC ID printed on the back of your fob tells us exactly which circuit board and frequency your key uses. This matters because Toyota uses different board revisions across model years — a fob that looks identical on the outside may be electronically incompatible if the FCC ID doesn't match. Always check before ordering a replacement online.</p>
              <div className="space-y-2">
                {[
                  { id: "HYQ14FBE", note: "2018–2024 XV70 Camry — most common current fob" },
                  { id: "HYQ14FBC", note: "2015–2017 XV50 & select 2018+ trims — earlier board revision" },
                  { id: "HYQ14FBA", note: "2012–2014 XV50 — original G-chip smart key" },
                  { id: "HYQ1EA", note: "Select models with factory remote start capability" },
                  { id: "HYQ14AAB", note: "2007–2011 XV40 proximity-equipped trims" },
                ].map(fcc => (
                  <div key={fcc.id} className="flex items-start gap-3 bg-muted rounded-xl p-3 border border-border">
                    <span className="font-mono font-bold text-foreground text-sm shrink-0">{fcc.id}</span>
                    <span className="text-muted-foreground text-xs">{fcc.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black text-foreground mb-4">Service Time</h2>
              <div className="bg-muted rounded-2xl border border-border p-6 flex items-center gap-4 mb-6">
                <Clock className="w-10 h-10 text-accent shrink-0" />
                <div>
                  <p className="text-2xl font-black text-foreground">20–30 Minutes</p>
                  <p className="text-muted-foreground text-sm">Add-key jobs with a working key present. All-keys-lost on XV70 models may take 35–40 minutes due to EEPROM access requirements.</p>
                </div>
              </div>

              <div className="bg-muted rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" /> Why Trust Us with Your Camry
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> We've programmed smart keys for every Camry generation — XV40 through XV70</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Our equipment supports Toyota's latest AES 128-bit immobilizer protocols</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Licensed (CA #LCO8538) and insured — not a roadside hobbyist</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> We carry OEM and quality aftermarket fobs — no waiting for parts to ship</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Every key is fully tested before we leave your Burbank location</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-10 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-4">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link to="/smart-key-programming/toyota" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">All Toyota Smart Keys</span>
            </Link>
            <Link to="/smart-key-programming" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Smart Key Programming</span>
            </Link>
            <Link to="/key-replacement" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Key className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Car Key Replacement</span>
            </Link>
            <Link to="/car-lockout" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Emergency Car Lockout</span>
            </Link>
            <Link to="/key-programming" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Key Programming</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for a replacement key instead? See our <Link to="/key-replacement" className="text-accent font-semibold hover:underline">Toyota Camry lost key replacement in Burbank</Link> page for full key cutting and replacement options.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How much does Toyota Camry smart key programming cost in Burbank?", a: "Pricing depends on the Camry model year and whether you're adding a key or replacing all lost keys. Our rates are significantly lower than Toyota dealership pricing. Call us for an exact Burbank quote tailored to your situation." },
              { q: "Can you program a Toyota Camry smart key if all keys are lost?", a: "Yes. We perform full immobilizer initialization for all Camry generations, including EEPROM-level programming for 2018+ models. We come to your Burbank location — no towing to the dealer required." },
              { q: "How long does Toyota Camry smart key programming take?", a: "Most jobs are completed in 20–30 minutes on-site. All-keys-lost scenarios on 2018+ Camry models may take up to 40 minutes due to the advanced encryption protocol." },
              { q: "What Toyota Camry key fob part numbers do you support?", a: "We program HYQ14FBE (2018–2024), HYQ14FBC (2012–2017 and select 2018+ trims), HYQ14FBA (2012–2014), HYQ1EA (models with remote start), and HYQ14AAB (2007–2011 smart key trims), plus compatible aftermarket equivalents." },
              { q: "Do I need to tow my Camry to a Toyota dealer for smart key programming?", a: "No. Our mobile locksmith arrives at your Burbank location with all the diagnostic equipment needed to program your smart key on the spot — including EEPROM tools for all-keys-lost situations on newer models." },
              { q: "Will programming a new key deactivate my old one?", a: "Not unless you request it. When adding a key, all existing registered keys remain active. If a key was lost or stolen, we can deauthorize it during the programming process for security." },
              { q: "Why does my Camry say 'Key Not Detected' even though I have the fob?", a: "The most common causes are a fob battery below 2.8V, a corroded door handle antenna connector (especially 2012–2013 models), or RF interference from aftermarket devices. We diagnose the root cause on-site — it's not always the battery." },
            ].map((faq, i) => (
              <details key={i} className="rounded-2xl border border-border bg-muted overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Call Now for Toyota Camry Smart Key Programming in Burbank</h2>
          <p className="text-lg opacity-90 mb-6">We arrive in 15–30 minutes with all equipment needed. Licensed & insured.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl hover:brightness-110 transition">
              <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/15 text-accent-foreground font-semibold border border-accent-foreground/30 hover:bg-accent-foreground/25 transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-3">🔑 Burbank Auto Locksmith</h3>
              <p className="text-sm opacity-80">KPN Electronic Inc. • CA License: LCO8538</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Services</h3>
              <Link to="/car-lockout" className="block text-sm opacity-80 hover:opacity-100 mb-1">Emergency Car Lockout</Link>
              <Link to="/key-replacement" className="block text-sm opacity-80 hover:opacity-100 mb-1">Car Key Replacement</Link>
              <Link to="/key-programming" className="block text-sm opacity-80 hover:opacity-100 mb-1">Key Programming</Link>
              <Link to="/ignition-repair" className="block text-sm opacity-80 hover:opacity-100 mb-1">Ignition Repair</Link>
              <Link to="/smart-key-programming" className="block text-sm opacity-80 hover:opacity-100 mb-1">Smart Key Programming</Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Contact</h3>
              <a href={`tel:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100 mb-1">📞 {PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 hover:opacity-100">💬 WhatsApp</a>
            </div>
          </div>
          <p className="text-center text-sm opacity-60 mt-4">© {new Date().getFullYear()} Burbank Auto Locksmith – KPN Electronic Inc.</p>
        </div>
      </footer>

      {/* Mobile sticky */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-2xl border-t border-primary-foreground/20" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex gap-2 p-3">
          <a href={`tel:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={`sms:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-foreground/15 text-primary-foreground font-bold text-sm border border-primary-foreground/30">
            <MessageCircle className="w-4 h-4" /> Text Us
          </a>
        </div>
      </div>
    </div>
  );
}
