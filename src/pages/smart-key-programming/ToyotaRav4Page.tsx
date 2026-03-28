import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, ChevronRight, CheckCircle, Cpu, Car, Wrench, AlertTriangle, Key, Award, MapPin, Zap, Lock } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import LocalSeoBlock from "@/components/LocalSeoBlock";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";
import PricingAndTimeSection from "@/components/PricingAndTimeSection";
import EmergencyCallSection from "@/components/EmergencyCallSection";


const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;
const SLUG = "/smart-key-programming/toyota/rav4";
const META_TITLE = "Toyota RAV4 Key Programming in Burbank, CA | Burbank Auto Locksmith";
const META_DESC = "Toyota RAV4 smart key programming & replacement in Burbank, CA. SUV push-to-start, all keys lost, same-day mobile service. No dealer needed. Call (818) 606-1684.";

export default function ToyotaRav4Page() {
  useEffect(() => {
    setSeoMeta({ title: META_TITLE, description: META_DESC, slug: SLUG });

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can you make a Toyota RAV4 key without the original?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle all-keys-lost situations for every RAV4 generation. On 2013–2018 models we reset the immobilizer through OBD. On 2019+ TNGA models, we perform EEPROM-level security access on the BCM to restore the key table from scratch." } },
        { "@type": "Question", name: "How long does RAV4 smart key programming take?", acceptedAnswer: { "@type": "Answer", text: "Adding a key with a working spare takes 15–20 minutes. All-keys-lost on pre-2019 models runs about 25 minutes. Newer TNGA RAV4s with AES encryption typically take 30–45 minutes due to secure gateway procedures." } },
        { "@type": "Question", name: "Do I need a dealership for RAV4 key programming?", acceptedAnswer: { "@type": "Answer", text: "No. We carry the same diagnostic platforms used by Toyota dealerships and program keys on-site at your location in Burbank. You skip the tow, the wait, and the dealership markup." } },
        { "@type": "Question", name: "Why does my RAV4 say 'key not detected'?", acceptedAnswer: { "@type": "Answer", text: "On RAV4s this is often caused by a weak fob battery (below 2.8V), moisture in the rear hatch antenna, or interference from aftermarket accessories in the cargo area. Try holding the fob directly against the start button—if the engine starts, the fob battery is the issue." } },
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

      {/* Breadcrumbs */}
      <nav className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming" className="hover:text-foreground transition">Smart Key Programming</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/smart-key-programming/toyota" className="hover:text-foreground transition">Toyota</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">RAV4</span>
        </div>
      </nav>

      {/* 1. HERO / CONVERSION */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-4 tracking-wide">TOYOTA RAV4 SPECIALIST</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Toyota RAV4 Smart Key Programming in Burbank, CA</h1>
          <p className="text-lg md:text-xl opacity-90 mb-3 max-w-2xl">
            Locked out of your RAV4? Lost every key? We handle <strong>add-key</strong> and <strong>all-keys-lost</strong> for every RAV4 generation—right in your driveway, parking garage, or trailhead. Same-day mobile service with push-to-start fob programming, no tow required.
          </p>
          <p className="text-base opacity-75 mb-6 max-w-xl">Emergency response across Burbank • Average arrival 15–25 min</p>
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
          <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 5.0 Google Rating</span>
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-400" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-emerald-400" /> 15–25 Min Response</span>
          <span className="flex items-center gap-2"><Car className="w-5 h-5 text-emerald-400" /> Mobile SUV Service</span>
        </div>
      </div>

      <MidPageCTA vehicleName="Toyota RAV4" />

      {/* 2. HOW RAV4 SMART KEY SYSTEM WORKS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Cpu className="w-5 h-5 text-primary" /></div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">How the RAV4 Smart Key System Works</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike sedans where antenna coverage focuses on the cabin and trunk, the RAV4's smart entry system must blanket a larger, taller body with reliable detection zones. Toyota addresses this with a multi-antenna architecture tuned for SUV geometry.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> LF Antenna Locations</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Both front door handles (exterior touch sensors)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Rear hatch / power tailgate antenna</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Cabin interior zone (center console area)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Rear seat / cargo transition zone</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-accent" /> UHF Communication</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you touch a door handle or approach the rear hatch, the BCM pulses a 125 kHz LF challenge. Your fob responds on 315 MHz UHF with a rolling-code encrypted signal. On the RAV4, the rear hatch antenna has a wider detection envelope to accommodate hands-free tailgate operation—meaning its sensitivity and failure modes differ from the front door antennas.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground bg-muted rounded-xl p-4 border border-border">
            <strong className="text-foreground">SUV-specific note:</strong> The RAV4's taller roofline and cargo area create detection shadows that don't exist on a Camry or Corolla. We regularly see vehicles where the front door unlock works perfectly but the rear hatch won't respond—usually caused by antenna routing issues unique to the SUV body.
          </p>
        </div>
      </section>

      {/* 3. PUSH-TO-START + IMMOBILIZER */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Lock className="w-5 h-5 text-primary" /></div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Push-to-Start &amp; Immobilizer System</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When you press the RAV4's start button, the Body Control Module (BCM) sends an encrypted challenge to the smart key via LF. The key's transponder chip processes the challenge and returns a cryptographic response. The BCM validates this response, then signals the Engine Control Module (ECM) to release the immobilizer and allow fuel injection and ignition.
            </p>
            <p>
              On the RAV4, this sequence has SUV-specific considerations. The multi-zone antenna layout means the BCM must determine which zone detected the key before authorizing the start. If you're standing at the rear hatch with groceries and press the lock button, the system needs to confirm the fob is <em>outside</em> the cabin—not inside—before arming. This multi-zone arbitration occasionally introduces detection delays that sedan owners don't experience.
            </p>
            <p>
              We also see more interference issues in RAV4 cargo areas than in sedans. Metal roof racks, aftermarket cargo organizers, and even phone chargers mounted near the rear can attenuate the LF signal and trigger false "Key Not Detected" warnings on the dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* 4. IMMOBILIZER ARCHITECTURE */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Key className="w-5 h-5 text-primary" /></div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Immobilizer Architecture by Generation</h2>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Toyota significantly upgraded the RAV4's immobilizer security when the model moved to the TNGA platform. Understanding which generation you have determines the tools, time, and procedure required.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-4">2013–2018 (XA40)</div>
              <h3 className="text-lg font-bold text-foreground mb-3">H-Chip Transponder System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Texas Instruments DST80 (H-chip) transponder</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Rolling code with 80-bit encryption</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> OBD-II port programming supported</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Key registration via diagnostic tool + security PIN</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> All-keys-lost: immobilizer reset through OBD in ~25 min</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">These models are straightforward for experienced technicians. The OBD port provides direct access to the immobilizer module without physical disassembly.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border-2 border-accent/30">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold mb-4">2019–2024 (XA50 TNGA)</div>
              <h3 className="text-lg font-bold text-foreground mb-3">AES Encrypted System</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 128-bit AES encryption standard</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Secure CAN gateway blocks unauthorized OBD access</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> EEPROM-level access required for all-keys-lost</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> BCM must be accessed directly for seed/key extraction</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Shared architecture with 2018+ Camry &amp; 2020+ Corolla</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">The TNGA gateway blocks the simple OBD approach that worked on older RAV4s. We perform direct EEPROM reads on the BCM to extract the security seed, then write the new key data—a process that requires specialized equipment and training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMON RAV4 PROBLEMS */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-destructive" /></div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Common RAV4 Smart Key Problems</h2>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We service dozens of RAV4s every month across Burbank and surrounding areas. These are the issues we see most often—and they're distinct from what we encounter on Toyota sedans.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: '"Key Not Detected" at Rear Hatch',
                desc: "The rear tailgate antenna sits behind the bumper trim and is exposed to road splash and weather. When that antenna's signal degrades, the hands-free tailgate won't respond even though door handles work fine. This is the #1 RAV4-specific complaint we get."
              },
              {
                title: "Moisture in Tailgate Antenna Wiring",
                desc: "Burbank summers followed by sudden rain push moisture into the rear hatch wiring harness. Corroded connectors weaken the LF signal below detection threshold. We check antenna resistance before programming to ensure the new key will register properly."
              },
              {
                title: "Weak Detection in Cargo Area",
                desc: "The RAV4's cargo zone sits at the edge of interior antenna coverage. Heavy cargo or metal objects (bike racks, tool boxes) can block the signal. If the dashboard shows 'key not detected' only when you load the back, this is usually why."
              },
              {
                title: "Aftermarket Electronics Interference",
                desc: "Dash cams with WiFi, aftermarket alarm systems, or USB hubs near the center console can interfere with the 125 kHz LF frequency. We've traced multiple 'phantom lockout' complaints on RAV4s to cheap phone mounts with built-in wireless chargers."
              },
              {
                title: "Battery Low But Doors Still Unlock",
                desc: "RAV4 owners often ignore the 'key battery low' warning because the doors still unlock. The UHF unlock signal requires less power than the LF transponder response. By the time the engine won't start, the fob battery is well below the 2.8V threshold needed for immobilizer authentication."
              },
              {
                title: "Driver Door Handle Antenna Failure",
                desc: "The touch sensor antenna in the driver's door handle takes the most wear on any vehicle. On RAV4s parked outdoors in Burbank heat, the antenna connection can develop high resistance over time—leading to intermittent lock/unlock failures on one side only."
              },
            ].map((issue, i) => (
              <div key={i} className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />
                  {issue.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ADD KEY VS ALL KEYS LOST */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">Add Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"><Key className="w-5 h-5 text-emerald-600" /></div>
                <h3 className="text-lg font-bold text-foreground">Add a Key</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-semibold">Working key available</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Straightforward BCM key table registration</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Existing key validates technician access</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> No immobilizer reset needed</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> All existing keys continue to work</li>
                <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <strong>15–20 minutes</strong> on-site</li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-6 border-2 border-accent/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-accent" /></div>
                <h3 className="text-lg font-bold text-foreground">All Keys Lost</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-semibold">No working key</p>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Full immobilizer reset procedure</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Security PIN / seed extraction from BCM</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> EEPROM access on 2019+ TNGA models</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Previous keys permanently erased from system</li>
                <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" /> <strong>25–45 minutes</strong> depending on generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RAV4 BY YEAR BREAKDOWN */}
      <section className="py-14 md:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Car className="w-5 h-5 text-primary" /></div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">RAV4 Smart Key by Year</h2>
          </div>

          {/* 2013-2018 */}
          <div className="bg-card rounded-2xl p-6 border border-border mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">2013–2018 RAV4 (XA40 Generation)</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The fourth-generation RAV4 uses Toyota's H-chip transponder—the same platform found in the contemporary Camry, but with antenna placement tuned for the taller SUV body. Smart entry was standard on Limited trims and optional on XLE.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2">Technical Details</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• H-chip (DST80) rolling code transponder</li>
                  <li>• 80-bit encryption, OBD-programmable</li>
                  <li>• 4-button fob (Lock, Unlock, Panic, Hatch)</li>
                  <li>• Dedicated rear hatch release button on fob</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2">Common FCC IDs</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• <strong>HYQ14FBA</strong> — Board 0020, 0811</li>
                  <li>• <strong>HYQ14AEM</strong> — Non-smart entry trims</li>
                  <li>• 315 MHz operating frequency</li>
                  <li>• CR2032 battery (replace annually)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2019-2024 */}
          <div className="bg-card rounded-2xl p-6 border-2 border-accent/30">
            <h3 className="text-xl font-bold text-foreground mb-2">2019–2024 RAV4 (XA50 TNGA Platform)</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The fifth-generation RAV4 moved to Toyota's global TNGA architecture—the same platform under the 2018+ Camry. This brought 128-bit AES encryption and a secure CAN gateway that blocks unauthorized diagnostic access. The RAV4 Prime (plug-in hybrid) uses the identical immobilizer system.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2">Technical Details</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• 128-bit AES encrypted transponder</li>
                  <li>• Secure gateway requires authenticated access</li>
                  <li>• EEPROM-level BCM access for all-keys-lost</li>
                  <li>• Power tailgate antenna with wider LF range</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-2">Common FCC IDs</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• <strong>HYQ14FBE</strong> — Primary smart key</li>
                  <li>• <strong>HYQ14FBC</strong> — Select XLE trims</li>
                  <li>• 315 MHz with enhanced rolling code</li>
                  <li>• CR2032 battery (critical for LF response)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-foreground">Why Choose Us for Your RAV4</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            We've programmed smart keys on hundreds of RAV4s—from the first smart-entry XA40 models to the latest TNGA-based XA50 with its secure gateway. Our mobile unit carries the diagnostic platforms, blank key inventory, and EEPROM tools needed for every scenario. We understand the SUV-specific antenna quirks, the rear hatch detection issues, and the generational differences that trip up general locksmiths. Every job comes with a 1-year warranty on parts and programming.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="py-10 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-4">More Toyota Smart Key Services</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link to="/smart-key-programming/toyota" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Car className="w-5 h-5 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">All Toyota Models</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
            <Link to="/smart-key-programming/toyota/camry" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Key className="w-5 h-5 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Toyota Camry</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
            <Link to="/smart-key-programming/toyota/corolla" className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Key className="w-5 h-5 text-accent shrink-0" />
              <span className="font-semibold text-foreground text-sm">Toyota Corolla</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
          </div>
        </div>
      </section>
      <PricingAndTimeSection vehicleName="Toyota RAV4" />


      {/* FAQ */}
      <section className="py-14 md:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Can you make a Toyota RAV4 key without the original?", a: "Yes. We handle all-keys-lost for every RAV4 generation. On 2013–2018 models we reset the immobilizer through OBD. On 2019+ TNGA models, we perform EEPROM-level security access on the BCM to restore the key table from scratch." },
              { q: "How long does RAV4 smart key programming take?", a: "Adding a key with a working spare takes 15–20 minutes. All-keys-lost on pre-2019 models runs about 25 minutes. Newer TNGA RAV4s with AES encryption typically take 30–45 minutes due to secure gateway procedures." },
              { q: "Do I need a Toyota dealership for RAV4 key programming?", a: "No. We carry the same diagnostic platforms and program keys on-site at your location in Burbank. You avoid the tow, the wait, and the dealership markup." },
              { q: "Why does my RAV4 say 'key not detected'?", a: "On RAV4s this is often caused by a weak fob battery (below 2.8V), moisture in the rear hatch antenna, or interference from aftermarket accessories in the cargo area. Try holding the fob against the start button—if the engine starts, the fob battery needs replacing." },
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

      {/* LOCAL SEO */}
      <section className="py-10 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" /> Serving Burbank &amp; Surrounding Areas</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Our mobile locksmith team provides Toyota RAV4 smart key programming throughout <strong className="text-foreground">Burbank</strong> and the surrounding communities including <strong className="text-foreground">Glendale</strong>, <strong className="text-foreground">North Hollywood</strong>, and across the greater <strong className="text-foreground">Los Angeles</strong> area. Whether your RAV4 is parked at home, at a trailhead in the Verdugo Mountains, or in a shopping center lot, we come directly to you with a fully equipped mobile unit. Most calls are answered within minutes and our average arrival time is 15–25 minutes throughout the service area.
          </p>
        </div>
      </section>
      <EmergencyCallSection vehicleName="Toyota RAV4" />


      {/* CTA */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Need a RAV4 Key Now?</h2>
          <p className="text-lg opacity-90 mb-6">Mobile service · 15–25 min arrival · Licensed &amp; insured</p>
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

      <LocalSeoBlock vehicleName="Toyota RAV4" />

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/toyota/rav4" brandSlug="toyota" />


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
