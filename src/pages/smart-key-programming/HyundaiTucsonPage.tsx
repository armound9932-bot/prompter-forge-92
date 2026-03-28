import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, Clock, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


const defined_faqs = [
  { q: "Can you program a Hyundai Tucson smart key without the original?", a: "Yes. All-keys-lost programming for the Tucson requires extracting the vehicle-specific PIN code from the SMK module and performing a full immobilizer reset. We handle the entire process on-site in Burbank — no dealer tow needed." },
  { q: "Why does my Tucson say 'Key Not Detected'?", a: "On the Tucson, this often traces to a weak CR2032 fob battery, a failing LF antenna in the door handle or liftgate, or RF interference from devices stored in the cargo area. We diagnose the actual cause rather than just swapping batteries." },
  { q: "What is a PIN code and why is it needed?", a: "The PIN is a vehicle-specific security credential stored in the Tucson's Smart Key Module. Hyundai requires it for any key registration — even adding a spare when you have a working key. Without the correct PIN, the immobilizer will reject the new key." },
  { q: "Do I need a Hyundai dealer to program my Tucson key?", a: "No. We carry Hyundai-compatible diagnostic platforms that perform the same SMK access, PIN extraction, and key registration as the dealer's GDS system. Mobile service across Burbank — same day, lower cost." },
];

export default function HyundaiTucsonPage() {
  useEffect(() => {
    document.title = "Hyundai Tucson Smart Key Programming Burbank | SMK & SUV Diagnostics – Burbank Auto Locksmith";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Expert Hyundai Tucson smart key programming in Burbank. SMK module diagnostics, PIN code extraction, SUV antenna troubleshooting. Mobile locksmith — no dealer needed.");
    }
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: defined_faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-xs text-primary-foreground/70 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">Home</Link> &gt;{" "}
            <Link to="/smart-key-programming" className="hover:underline">Smart Key Programming</Link> &gt;{" "}
            <Link to="/smart-key-programming/hyundai" className="hover:underline">Hyundai</Link> &gt;{" "}
            <span className="text-primary-foreground">Tucson</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Hyundai Tucson Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Tucson is Hyundai's best-selling compact SUV — and its Smart Key Module (SMK) system brings SUV-specific challenges that sedans like the Elantra and Sonata don't face. Larger cabin volume, rear hatch antenna coverage, and cargo-area interference all affect how the Tucson detects your key fob. We handle SMK diagnostics, PIN extraction, and immobilizer resets on-site across Burbank.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18184014356" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
              <Phone className="w-5 h-5" /> Call Now: (818) 401-4356
            </a>
            <a href="https://wa.me/18184014356" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-card-foreground font-bold px-6 py-3 rounded-xl border border-border shadow hover:shadow-md transition">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Hyundai SMK System */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-accent" /> How the Tucson's Smart Key Module (SMK) Works
          </h2>
          <p className="text-muted-foreground mb-4">
            The Tucson's keyless system is controlled by a dedicated Smart Key Module — Hyundai's centralized controller that manages all communication between your fob, the door locks, and the engine immobilizer. Unlike Toyota's distributed BCM approach or Ford's PATS, Hyundai routes everything through this single module, which means SMK health directly determines whether your Tucson starts.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">LF Antenna Array — SUV Coverage</h3>
              <p className="text-muted-foreground text-sm">
                The Tucson uses 125 kHz Low-Frequency antennas in the front door handles, dashboard, center console, and rear liftgate. The SUV's larger cabin requires more antenna zones than a sedan — and each zone must detect the fob's presence before the SMK authorizes unlock or start.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Encrypted Response</h3>
              <p className="text-muted-foreground text-sm">
                When the LF signal wakes your fob, it responds at 315 MHz with a rolling-code encrypted payload. The SMK validates this against its stored key IDs. If the cryptographic handshake succeeds, the doors unlock and the push-to-start circuit is armed.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">SMK → ECU Immobilizer Challenge</h3>
              <p className="text-muted-foreground text-sm">
                Pressing the start button with your foot on the brake triggers a final security challenge. The SMK sends a cryptographic request to the ECU, which verifies the transponder chip embedded in the fob. If authentication fails, fuel injection is blocked — the engine won't crank.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN-Gated Key Registration</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai requires a vehicle-specific PIN code to register any new key to the Tucson's SMK. This PIN is tied to the VIN and can only be extracted with diagnostic software — it's Hyundai's primary defense against unauthorized key programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Hyundai Tucson" />


      {/* SUV Behavior */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-accent" /> Compact SUV Detection Behavior
          </h2>
          <p className="text-muted-foreground mb-4">
            The Tucson sits in a unique size category — bigger than the Elantra sedan but smaller than a full-size SUV like the Palisade. This affects how the SMK detects your key in ways that are distinct from both sedans and larger vehicles:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Rear Hatch Detection Zone</h3>
              <p className="text-muted-foreground text-sm">
                The Tucson's liftgate antenna covers a wider detection area than a sedan trunk, but the signal still drops off sharply when the fob is placed on the cargo floor behind grocery bags or luggage. We see "Key Not Detected" warnings spike when owners leave the fob in the cargo area.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Key Placement Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                In the Tucson's cabin, the fob works best within the front seat zone. Placing it in a bag on the rear seat or in a jacket in the back can create intermittent detection — the LF antennas in the dashboard and center console have a limited reach into the rear passenger area.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Multi-Zone Antenna Transitions</h3>
              <p className="text-muted-foreground text-sm">
                As you walk around the Tucson, the SMK hands off detection between the door handle, liftgate, and cabin antennas. On older models, this transition can be sluggish — creating a brief "dead zone" where the fob isn't detected by either zone.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Metal Cargo Interference</h3>
              <p className="text-muted-foreground text-sm">
                Tucson owners who carry metal tools, camping equipment, or bike racks in the cargo area report more frequent detection issues. Metal objects near the liftgate antenna absorb or reflect the LF signal, making it harder for the SMK to sense the fob.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Hyundai Tucson Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "The most common Tucson complaint. Causes range from a dead CR2032 battery to a corroded liftgate antenna connector. The rear hatch wiring harness flexes with every open/close cycle and eventually develops resistance." },
              { title: "Push Button — No Crank", desc: "Fob detected, dashboard lights up, but the engine won't turn over. Often a brake pedal position sensor issue or a transponder authentication timeout between the SMK and ECU. Not always a key problem." },
              { title: "Intermittent Detection", desc: "Key works in the morning, fails in the afternoon. On Tucson models, this frequently correlates with temperature — heat soak in the cargo area can push a marginal fob battery below the SMK's detection threshold." },
              { title: "Liftgate Won't Detect Key", desc: "The power liftgate button doesn't respond to the fob. The rear antenna is routed through the liftgate hinge — repeated open/close cycles can fatigue the wiring, especially on 2016–2021 models with power liftgates." },
              { title: "Doors Unlock But No Start", desc: "The UHF remote lock/unlock works, but the LF proximity system fails at the start button. This points to a dashboard or center console antenna fault — the SMK can't confirm the fob is inside the cabin." },
              { title: "SMK Communication Failure", desc: "The diagnostic tool can't reach the SMK module on the CAN bus. Common after aftermarket stereo installations or alarm systems that tap into the vehicle's wiring harness near the A-pillar." },
              { title: "RF Interference Issues", desc: "Tucson owners who keep phones, tablets, or wireless chargers near the center console report higher rates of detection problems. The 315 MHz UHF response frequency can be disrupted by nearby electronic devices." },
            ].map((p, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Key vs All Keys Lost */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Add a Key vs. All Keys Lost</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Add a Spare Key
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Working key present — SMK already authenticated</li>
                <li>• PIN code extracted via OBD-II diagnostic port</li>
                <li>• New fob registered alongside existing keys</li>
                <li>• Typically 20–35 minutes for Tucson models</li>
                <li>• All existing keys remain functional</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 border-accent/30">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" /> All Keys Lost
              </h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• No working key — full SMK reset required</li>
                <li>• PIN code extraction mandatory</li>
                <li>• Immobilizer reset and key slot clearing</li>
                <li>• New key(s) programmed from scratch</li>
                <li>• 45–90 minutes depending on Tucson generation</li>
                <li>• All previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Tucson Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2010–2015 Tucson (2nd Gen / LM)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The second-generation Tucson introduced Hyundai's smart key option on higher trim levels. The SMK system is relatively straightforward — fewer antenna zones, basic rolling-code encryption, and a simpler immobilizer handshake than later models.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5HMFNA04 — standard 4-button fob</li>
                <li>• PIN code required for all programming</li>
                <li>• Base trims may use traditional transponder keys (ID46 chip)</li>
                <li>• Two LF antennas: front doors and dashboard only</li>
                <li>• SMK module behind lower dashboard — accessible for diagnostics</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2016–2021 Tucson (3rd Gen / TL)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The third-generation Tucson expanded smart key availability and added a rear liftgate antenna. The SMK firmware was updated with stronger rolling-code encryption, and the antenna harness routing was changed — which introduced new failure points at the liftgate hinge.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F11 — updated slim fob on later models</li>
                <li>• Enhanced encryption with improved SMK firmware</li>
                <li>• Liftgate antenna added — routed through hinge wiring</li>
                <li>• Power liftgate models more prone to antenna wire fatigue</li>
                <li>• Smart key standard on SEL and Limited trims</li>
                <li>• Intermittent detection issues tied to antenna harness routing</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2022–2024 Tucson (4th Gen / NX4)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The current-generation Tucson features Hyundai's most advanced smart key architecture. AES-128 encryption, an updated security gateway, and a completely redesigned SMK module with expanded antenna coverage make these significantly more complex — but our diagnostic tools are updated to handle NX4 programming.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F37 — redesigned compact fob</li>
                <li>• AES-128 transponder encryption — requires current diagnostic software</li>
                <li>• Security gateway may require online authentication for registration</li>
                <li>• Five LF antenna zones: both door handles, dash, console, liftgate</li>
                <li>• Digital key (phone-based) available — separate from fob programming</li>
                <li>• All-keys-lost procedure significantly longer due to added security layers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Complexity */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Programming Complexity: Locksmith vs. Dealer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What the Dealer Does</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai dealers use GDS (Global Diagnostic System) to access the SMK, extract the PIN, and register keys. For the Tucson, this means scheduling an appointment, potentially towing the vehicle, and paying dealer labor rates — often $200+ just for programming, before the key cost.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry Hyundai-compatible diagnostic platforms that perform identical SMK access, PIN extraction, and key registration. The difference: we drive to your Tucson's location in Burbank, we do it the same day, and we consistently undercut dealer pricing — with the same result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Tucson Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Liftgate Wiring Fatigue</h3>
              <p className="text-muted-foreground text-sm">
                The 2016–2021 Tucson's power liftgate routes the rear antenna wire through the hinge grommet. After thousands of open/close cycles, this wire develops micro-fractures that cause intermittent rear detection failures. We've repaired dozens of these in the field — it's a known weak point that many shops misdiagnose as a fob issue.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Temperature-Related Fob Drain</h3>
              <p className="text-muted-foreground text-sm">
                Tucson fobs left in hot cars — common in Burbank summers — experience accelerated CR2032 drain. The SMK's standby polling draws more current from a heat-stressed battery, leading to "Key Not Detected" errors that seem to appear randomly but always correlate with afternoon temperatures.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Aftermarket Roof Rack Interference</h3>
              <p className="text-muted-foreground text-sm">
                We've diagnosed multiple Tucson detection issues traced to aftermarket roof rack crossbars. Metal bars running the length of the roof can create a Faraday cage effect that attenuates the LF signal reaching the cabin antennas — especially when the fob is on the rear seat.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">SMK Voltage Sensitivity</h3>
              <p className="text-muted-foreground text-sm">
                The Tucson's SMK module is sensitive to 12V battery condition. A battery that tests at 11.8V under load — enough to crank the engine — can still cause SMK polling failures. We always verify battery health before diving into key programming diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/hyundai/tucson" brandSlug="hyundai" />


      {/* Local SEO */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-accent" /> Serving Burbank and Surrounding Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Burbank</h3>
              <p className="text-muted-foreground text-sm">
                Our primary Hyundai Tucson smart key service area. Whether you're near the Burbank Town Center, Chandler Bike Path, or the Rancho neighborhood, we arrive equipped for any Tucson generation. Most jobs completed within 30–60 minutes on-site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Minutes east of Burbank — we service Tucson owners throughout Glendale, from the Americana to Adams Hill. Same-day availability for add-a-key and all-keys-lost emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service radius. We handle Tucson smart key programming throughout the Arts District, Valley Village, and Toluca Lake.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across the greater Los Angeles area for Hyundai Tucson key programming. Contact us for availability and scheduling beyond our core Burbank coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hyundai Tucson Smart Key FAQ</h2>
          <div className="space-y-4">
            {defined_faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-accent/90 to-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-3">
            Need Hyundai Tucson Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service for your Tucson. SMK diagnostics, PIN code extraction, liftgate antenna troubleshooting, and key programming — all done at your location. No dealer, no tow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18184014356" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition text-lg">
              <Phone className="w-5 h-5" /> (818) 401-4356
            </a>
            <a href="https://wa.me/18184014356" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-card text-card-foreground font-bold px-8 py-3 rounded-xl border border-border shadow hover:shadow-md transition text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
