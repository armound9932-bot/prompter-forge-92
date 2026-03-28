import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, ChevronRight, CheckCircle, Cpu, Car, Wrench, AlertTriangle, Key, Award } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";
import PricingAndTimeSection from "@/components/PricingAndTimeSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";


const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;
const SLUG = "/smart-key-programming/toyota/corolla";
const META_TITLE = "Toyota Corolla Key Programming in Burbank, CA | Burbank Auto Locksmith";
const META_DESC = "Toyota Corolla smart key programming in Burbank, CA. Push-to-start fob replacement, immobilizer reset, all keys lost. Same-day mobile locksmith. Call (818) 606-1684.";

export default function ToyotaCorollaPage() {
  useEffect(() => {
    setSeoMeta({ title: META_TITLE, description: META_DESC, slug: SLUG });

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Toyota Corolla smart key programming cost in Burbank?", acceptedAnswer: { "@type": "Answer", text: "Toyota Corolla smart key programming costs significantly less than dealership pricing. The exact price depends on the model year and whether you have a working key. Call us for a Burbank quote." } },
        { "@type": "Question", name: "Can you program a Toyota Corolla smart key if all keys are lost?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle full immobilizer initialization for every Corolla generation with smart key capability, including EEPROM-level access on 2020+ models. No dealer visit required." } },
        { "@type": "Question", name: "How long does Toyota Corolla smart key programming take?", acceptedAnswer: { "@type": "Answer", text: "Most Toyota Corolla smart key jobs are completed in 20–30 minutes at your Burbank location." } },
        { "@type": "Question", name: "Does the Toyota Corolla have push-to-start?", acceptedAnswer: { "@type": "Answer", text: "Push-to-start became available on the Corolla starting with the 2014 model year on higher trims, and became more widely standard from 2020 onward with the TNGA platform." } },
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
          <span className="text-foreground font-medium">Corolla</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Toyota Corolla Smart Key Programming in Burbank, CA</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            The Toyota Corolla transitioned to a smart key system later than many of Toyota's larger sedans — but the technology it uses is no less sophisticated. From the first push-to-start Corollas in 2014 to the TNGA-based 12th generation, each version brings distinct immobilizer protocols that require model-specific programming knowledge. Our Burbank mobile team handles every smart-key-equipped Corolla on-site.
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

      <MidPageCTA vehicleName="Toyota Corolla" />

      {/* Conversion Section */}
      <section className="py-10 md:py-14 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-accent-foreground mb-3">Toyota Corolla Key Replacement in Burbank</h2>
          <p className="text-lg text-accent-foreground/90 mb-2 font-semibold">Need a spare key? Lost all your keys? We handle it all — on the spot.</p>
          <div className="flex flex-wrap justify-center gap-4 text-accent-foreground/85 text-sm font-medium mb-6">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Add Key — Quick & Affordable</span>
            <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> All Keys Lost — Same-Day Recovery</span>
            <span className="flex items-center gap-1.5"><Car className="w-4 h-4" /> Mobile Service — We Come to You</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Emergency Same-Day Service</span>
          </div>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-xl shadow-xl hover:brightness-110 transition">
            <Phone className="w-6 h-6" /> Call Now – {PHONE_DISPLAY}
          </a>
          <p className="text-accent-foreground/70 text-xs mt-3">We arrive in 15–30 minutes anywhere in Burbank. No tow needed.</p>
        </div>
      </section>

      {/* Introduction: How the System Works */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Cpu className="w-7 h-7 text-accent" /> How the Toyota Corolla Smart Key System Works
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Unlike the Camry, which adopted smart key technology earlier, the Corolla didn't receive a factory push-to-start option until the <strong className="text-foreground">E170 generation (2014+)</strong>, and even then only on S and S Plus trims. The system uses the same fundamental architecture as other Toyota smart keys — a <strong className="text-foreground">low-frequency (LF) challenge from the vehicle antennas</strong> and a <strong className="text-foreground">315 MHz UHF encrypted response</strong> from the fob — but the Corolla's antenna placement and BCM calibration differ from larger Toyota sedans.
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Push-to-Start Authentication</h3>
            <p>
              When you press the Corolla's start button, the body control module (BCM) sends an encrypted challenge to the transponder chip embedded inside the fob. The chip computes a response using a shared cryptographic secret. If the response is valid, the BCM authorizes the engine control module (ECM) to enable fuel injection and ignition. This entire handshake completes in roughly 100 milliseconds. The Corolla's compact cabin means antenna coverage is actually more reliable than in larger vehicles — there are fewer dead zones where the fob can't be detected.
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Immobilizer Architecture</h3>
            <p>
              The Corolla's immobilizer operates independently from the keyless entry system. Even if the doors unlock via the proximity sensor, the engine will not start unless the transponder passes the immobilizer check. On 2014–2019 models, the Corolla uses Toyota's <strong className="text-foreground">H-chip transponder</strong> with rolling code encryption. The 2020+ TNGA Corolla upgraded to <strong className="text-foreground">AES 128-bit encryption</strong>, matching the security level of Toyota's flagship models. This is why dealer-level diagnostic access is required for programming — generic OBD tools cannot authenticate against the immobilizer.
            </p>

            <h3 className="text-lg font-bold text-foreground pt-2">Proximity Detection & Common Failures</h3>
            <p>
              The Corolla's proximity system uses antennas in both door handles, the trunk/hatch area, and two positions inside the cabin. A frequent issue unique to the Corolla is antenna sensitivity on the <strong className="text-foreground">passenger-side door handle</strong> — particularly on 2014–2018 models where the wiring harness routing makes it susceptible to water intrusion in rainy conditions. We also see Corolla owners in Burbank who carry their fob in a bag or purse on the passenger floor, which can place the key outside the cabin antenna detection zone and trigger the "Key Not Detected" warning.
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
              <p className="text-muted-foreground text-sm mb-4">When you already have a functioning Corolla smart key, adding a spare is a routine procedure. The existing key serves as the authorization token — its presence tells the immobilizer that the programming request is legitimate.</p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Place the working key inside the vehicle during registration</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Our diagnostic tool reads the BCM's key registration table</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> The new fob is appended to the table — existing keys remain active</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> No immobilizer reset or security pin extraction needed</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Typical time: 15–20 minutes</strong></li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Losing all keys to your Corolla means the immobilizer has no authorized transponder to reference. The procedure requires accessing the vehicle's security system through legitimate diagnostic protocols — not shortcuts.</p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Security pin extraction:</strong> The authorization code is pulled from the Corolla's ECU via diagnostic interface</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Immobilizer initialization:</strong> The BCM's key table is cleared and rebuilt from scratch</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">2020+ TNGA models:</strong> Require EEPROM read from the immobilizer ECU — the AES encryption seed must be extracted and rewritten with new key credentials</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Dealer-level access:</strong> Our tools replicate Toyota's Techstream diagnostic protocols for full security authorization</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Typical time: 25–40 minutes</strong> depending on generation and encryption level</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systems by Year */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 flex items-center gap-3">
            <Car className="w-7 h-7 text-accent" /> Toyota Corolla Smart Key Systems by Year
          </h2>
          <div className="space-y-6">
            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2014–2019 Toyota Corolla (E170 / E180)</h3>
              <p className="text-muted-foreground text-sm mb-3">The E170 was the first Corolla generation to offer a smart key system, but it was limited to higher trims (S, S Plus, and S Premium). The E180 refresh in 2017 expanded availability slightly. Most LE and L trims from this era still use a traditional transponder chip key with a turn-start ignition.</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Transponder:</strong> Toyota H-chip with rolling code encryption — a significant improvement over the older G-chip used in other Toyota models of the same era</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBA (2014–2016), transitioning to HYQ14FBC (2017–2019) — the board revision changed mid-cycle, so year matters when sourcing replacements</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Antenna layout:</strong> Four antennas — two door handles and two cabin positions. The smaller cabin footprint compared to the Camry means coverage is more consistent</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Add key:</strong> Standard on-board registration with a working key present — straightforward procedure</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Pin code extraction via OBD, followed by immobilizer initialization. The H-chip is more time-consuming to register than older chips but doesn't require EEPROM access</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Field note:</strong> Many Corolla owners in Burbank with 2014–2016 models aren't sure if they have smart key or standard key — if the key has buttons but the car has a turn ignition, it's a transponder key with remote, not a smart key</li>
              </ul>
            </div>

            <div className="bg-muted rounded-2xl border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">2020–2024 Toyota Corolla (E210 – TNGA Platform)</h3>
              <p className="text-muted-foreground text-sm mb-3">The 12th-generation Corolla moved to Toyota's TNGA (Toyota New Global Architecture) platform — a complete redesign that brought the Corolla in line with the Camry's security architecture. Smart key with push-to-start is now standard or widely available across most trims, including the Corolla Hatchback.</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Transponder:</strong> AES 128-bit encrypted chip — the same encryption standard used in Toyota's Camry and RAV4. Each key contains a unique cryptographic seed paired to the vehicle's immobilizer ECU</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Proximity system:</strong> Enhanced multi-antenna array with faster detection and wider coverage — walk-up unlock is noticeably more responsive than the E170/E180</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Common fob:</strong> HYQ14FBN (standard Corolla sedan), HYQ14FBE (shared with 2020+ Camry on certain trims) — despite similar appearance, the board revision and frequency calibration differ from pre-2020 fobs</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">All keys lost:</strong> Requires EEPROM-level access to the immobilizer ECU. The AES encryption seed must be read, the key table cleared, and new credentials written. OBD-only access is insufficient on most 2022+ units</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Add key:</strong> Still straightforward with a working key — the BCM handles registration without EEPROM involvement</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Corolla Hatchback:</strong> Uses the same smart key hardware as the sedan. The hatch antenna is positioned differently but does not change programming requirements</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <strong className="text-foreground">Corolla Cross (2022+):</strong> While technically a separate model, many Burbank customers ask — the Corolla Cross shares the TNGA smart key system and the same programming procedure applies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-accent" /> Common Toyota Corolla Smart Key Issues
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "\"Key Not Detected\" Warning", desc: "The most frequent Corolla smart key complaint. On E170 models, the passenger-side door handle antenna is prone to water intrusion — especially during heavy rain. On E210 models, the issue is more often a fob battery below the 2.8V detection threshold. The lock/unlock buttons may still work at lower voltages, which makes owners think the battery is fine when it's actually too weak for the proximity handshake." },
              { title: "Push-to-Start Doesn't Respond", desc: "The button illuminates but the engine won't crank. This indicates the proximity system detects the fob, but the immobilizer authentication is failing. On Corollas, this is often caused by rolling code desynchronization — if the fob battery died while away from the car and you pressed the button repeatedly, the counter can advance beyond the BCM's acceptance window. Hold the fob flat against the start button to use the NFC backup coil." },
              { title: "All Keys Lost — Vehicle Won't Start", desc: "Without a registered key, the immobilizer stays armed and the starter circuit is disabled. We perform a full immobilizer initialization on-site — pin code extraction, key table reset, and new key registration. On 2020+ TNGA Corollas, this includes EEPROM-level access to handle the AES encryption layer." },
              { title: "Intermittent Smart Key Failure", desc: "The key works sometimes but not others. Common on Corollas parked near commercial buildings in Burbank where RF interference from HVAC systems or security cameras can disrupt the 315 MHz communication. We test signal strength at the vehicle to distinguish between an environmental issue and a failing fob antenna." },
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
              <p className="text-muted-foreground text-sm mb-4">The FCC ID on the back of your Corolla fob identifies the exact circuit board revision and radio frequency configuration. This matters because Toyota changed board revisions between model years — a fob that looks identical externally may use a different chip or frequency calibration. Always verify the FCC ID before purchasing a replacement.</p>
              <div className="space-y-2">
                {[
                  { id: "HYQ14FBN", note: "2020–2024 Corolla sedan (TNGA) — most common current fob" },
                  { id: "HYQ14FBE", note: "Select 2020+ trims shared with Camry platform — verify board revision" },
                  { id: "HYQ14FBC", note: "2017–2019 E180 Corolla — H-chip smart key" },
                  { id: "HYQ14FBA", note: "2014–2016 E170 Corolla — original smart key fob for this model" },
                  { id: "HYQ12BDM", note: "2014–2019 Corolla with standard transponder key + remote (non-smart key)" },
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
                  <p className="text-muted-foreground text-sm">Add-key jobs with a working key present. All-keys-lost on 2020+ TNGA Corollas may take 35–40 minutes due to EEPROM access requirements.</p>
                </div>
              </div>

              <div className="bg-muted rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" /> Why Trust Us with Your Corolla
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Extensive experience with both E170/E180 and TNGA Corolla smart key systems</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Our equipment supports Toyota's AES 128-bit immobilizer protocols for 2020+ models</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Licensed (CA #LCO8538) and insured — professional automotive locksmith service</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> We carry OEM-spec and quality aftermarket Corolla fobs in stock — no waiting for delivery</li>
                  <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Every key is tested for proximity detection, push-to-start, and lock/unlock before we leave your Burbank location</li>
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
            <Link to="/smart-key-programming/toyota/camry" className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Cpu className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Toyota Camry Smart Key</span>
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
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for a replacement key instead? See our <Link to="/key-replacement" className="text-accent font-semibold hover:underline">Toyota Corolla lost key replacement in Burbank</Link> page for full key cutting and replacement options.
          </p>
        </div>
      </section>
      <PricingAndTimeSection vehicleName="Toyota Corolla" />


      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How much does Toyota Corolla smart key programming cost in Burbank?", a: "Pricing varies by Corolla model year and whether you have an existing working key. Our rates are significantly lower than Toyota dealership pricing. Call for an exact quote for your Burbank location." },
              { q: "Can you program a Corolla smart key if all keys are lost?", a: "Yes. We perform full immobilizer initialization for both E170/E180 and TNGA Corolla generations, including EEPROM-level programming for 2020+ models. No towing to the dealer needed." },
              { q: "Does my Corolla have a smart key or a regular key?", a: "If your Corolla has a push-to-start button (no key slot in the ignition), it has a smart key system. If it has a turn-start ignition, you have a standard transponder key — even if the key fob has lock/unlock buttons." },
              { q: "How long does Corolla smart key programming take?", a: "Most jobs are completed in 20–30 minutes on-site. All-keys-lost on 2020+ TNGA Corollas may take up to 40 minutes due to AES encryption requirements." },
              { q: "Will my old Corolla key still work after programming a new one?", a: "Yes. When adding a key, all previously registered keys remain active. If a key was lost or stolen, we can deauthorize it during programming for your security." },
              { q: "Do you service the Corolla Hatchback and Corolla Cross?", a: "Yes. The Corolla Hatchback uses the same smart key system as the sedan. The Corolla Cross (2022+) also shares the TNGA platform's smart key architecture — same programming procedure applies." },
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
      <EmergencyCallSection vehicleName="Toyota Corolla" />


      {/* CTA */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Call Now for Toyota Corolla Smart Key Programming in Burbank, CA</h2>
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

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Toyota Corolla Smart Key FAQ</h2>
          <div className="space-y-3">
            {[
              { q: "Can you program a Toyota Corolla key without the original?", a: "Yes. We handle all-keys-lost situations for every smart-key-equipped Corolla. The process requires an immobilizer reset and, on 2020+ models, EEPROM-level security access — but no original key or dealer visit is needed." },
              { q: "How long does Toyota Corolla smart key programming take?", a: "Most jobs are completed in 20–30 minutes on-site. All-keys-lost scenarios on newer models may take slightly longer due to the additional security initialization steps." },
              { q: "Do I need to go to a Toyota dealer for key programming?", a: "No. Our mobile locksmith team carries dealer-level diagnostic tools and can program your Corolla smart key at your location in Burbank — at a fraction of the dealership cost." },
              { q: "What if my Toyota Corolla says 'Key Not Detected'?", a: "This usually means the fob battery is below the 2.8V threshold, or there's an issue with the vehicle's interior antenna. Try holding the fob directly against the start button. If the problem persists, call us for a diagnostic." },
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

      <LocalSeoBlock vehicleName="Toyota Corolla" />

      <RelatedModelsSection category="sedan" currentSlug="/smart-key-programming/toyota/corolla" brandSlug="toyota" />


      {/* Local SEO */}
      <section className="py-10 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-3">Serving Burbank & Nearby Cities</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            We provide Toyota Corolla smart key programming across Burbank and the neighboring areas of Glendale, North Hollywood, and greater Los Angeles. Our fully equipped mobile unit comes directly to you — whether you're stranded in a parking lot, at home, or at your workplace. No dealership appointment needed, no towing required. Just fast, professional service from a licensed local locksmith.
          </p>
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
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-foreground/15 text-primary-foreground font-semibold border border-primary-foreground/30">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
