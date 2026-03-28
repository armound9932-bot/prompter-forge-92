import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


const defined_faqs = [
  { q: "Can you program a Hyundai Palisade smart key without the original?", a: "Yes. All-keys-lost programming on the Palisade requires extracting the vehicle-specific PIN from the SMK module and performing a full immobilizer reset. We complete the entire procedure on-site in Burbank — no dealer tow required for your luxury SUV." },
  { q: "Why does my Palisade say 'Key Not Detected'?", a: "Despite the Palisade's superior antenna calibration, this can still occur with a depleted CR2032 fob battery, SMK module polling faults, or when the fob is buried deep in a third-row pocket. The Palisade's system is more forgiving than smaller Hyundais, but not immune." },
  { q: "What is a PIN code and why is it needed?", a: "The PIN is a vehicle-specific security credential stored in the Palisade's Smart Key Module. Hyundai requires it for every key registration — even adding a spare. Without the correct PIN, the immobilizer will reject any new key." },
  { q: "Do I need a Hyundai dealer to program my Palisade key?", a: "No. We carry Hyundai-compatible diagnostic platforms that perform the same SMK access, PIN extraction, and key registration as the dealer's GDS system. Mobile service across Burbank — same day, at a fraction of dealer pricing." },
];

export default function HyundaiPalisadePage() {
  useEffect(() => {
    document.title = "Hyundai Palisade Smart Key Programming Burbank | Premium SUV SMK Service – Burbank Auto Locksmith";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Expert Hyundai Palisade smart key programming in Burbank. Premium SUV SMK diagnostics, PIN extraction, immobilizer reset. Mobile locksmith — no dealer needed.");
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
            <span className="text-primary-foreground">Palisade</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Hyundai Palisade Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Palisade is Hyundai's flagship SUV — and its Smart Key Module reflects that positioning. More antenna zones, tighter signal calibration, and a more refined detection algorithm set it apart from the Tucson and Santa Fe. When this premium system needs service, you want a locksmith who understands the difference. We handle Palisade SMK diagnostics, PIN extraction, and key programming on-site across Burbank.
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

      {/* SMK System */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-accent" /> How the Palisade's Smart Key Module Works
          </h2>
          <p className="text-muted-foreground mb-4">
            The Palisade's SMK system represents the top tier of Hyundai's keyless architecture. While the underlying technology — LF antennas, UHF encrypted response, PIN-gated registration — is shared across the Hyundai lineup, the Palisade's implementation is notably more polished. The antenna network is wider, the polling algorithm is faster, and the signal-to-noise calibration is tighter than what you'll find on a Tucson or Elantra.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Premium Antenna Coverage</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade deploys seven LF antenna positions: both front door handles, dashboard, center console, B-pillar, D-pillar, and liftgate. This is more coverage than any other Hyundai SUV — designed to maintain detection across all three rows and the cargo area without the dead zones that plague smaller models.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Refined UHF Handshake</h3>
              <p className="text-muted-foreground text-sm">
                The fob responds at 315 MHz with AES-encrypted rolling codes. The Palisade's SMK validates faster than older Hyundai systems — the polling cycle completes in under 200 milliseconds, reducing the "walk-up delay" that Tucson and Santa Fe owners sometimes notice.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Dual-Layer Immobilizer</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade uses a dual-layer authentication: the SMK verifies the fob's rolling code for door access, then the ECU runs a separate transponder challenge for engine start. Both must succeed — compromising one layer doesn't bypass the other. This is standard on premium Hyundai models but not on base-trim compacts.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN-Gated Security</h3>
              <p className="text-muted-foreground text-sm">
                Like all Hyundai smart key vehicles, the Palisade requires a vehicle-specific PIN for key registration. On the Palisade, the PIN extraction process may also require online server authentication on 2023+ models — an additional security layer befitting the flagship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury SUV Difference */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" /> What Makes the Palisade Different from Other Hyundai SUVs
          </h2>
          <p className="text-muted-foreground mb-4">
            The Palisade isn't just a bigger Santa Fe — its keyless system was engineered to a higher standard. Here's what we see in the field that sets it apart:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Smoother Detection Across All Rows</h3>
              <p className="text-muted-foreground text-sm">
                The Santa Fe struggles with third-row detection. The Palisade handles it noticeably better — the D-pillar antenna was added specifically to cover the third-row zone. Fob detection is more consistent when passengers move between rows or when the fob shifts position during driving.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Better Signal Calibration</h3>
              <p className="text-muted-foreground text-sm">
                Hyundai calibrated the Palisade's LF antenna power levels higher than the Tucson or Santa Fe. This means fewer false "Key Not Detected" warnings from marginal fob batteries — the system tolerates a slightly weaker fob signal before alarming.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Reduced Antenna Handoff Gaps</h3>
              <p className="text-muted-foreground text-sm">
                With seven antenna zones instead of the Santa Fe's six, the Palisade has tighter overlap between detection areas. The blind spot at the rear quarter panel — a known issue on the Santa Fe — is largely eliminated by the D-pillar antenna's extended range.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Premium Build = Fewer Wiring Issues</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade's wiring harness quality is a step above. The liftgate antenna wire uses a more robust grommet and heavier-gauge conductor than the Tucson or Santa Fe. We see significantly fewer hinge-related antenna failures on the Palisade — the premium build quality actually matters for key system reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Palisade Smart Key Issues
          </h2>
          <p className="text-muted-foreground mb-4">
            The Palisade's smart key system is more reliable than most Hyundai models, but no system is bulletproof. These are the issues we encounter most often:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected" — Still Happens', desc: "Even with superior antenna coverage, a dead CR2032 battery or an SMK polling fault can trigger this warning. The Palisade is more forgiving with weak batteries, but once the fob drops below a threshold voltage, detection fails regardless of antenna quality." },
              { title: "Push Button — No Crank", desc: "Fob detected, instrument cluster active, but the engine won't turn over. On the Palisade, this is typically a brake pedal position sensor issue or an ECU transponder timeout — not a key problem. The dual-layer authentication means the failure could be in either security stage." },
              { title: "Intermittent Third-Row Detection", desc: "While better than the Santa Fe, the Palisade's third-row zone can still lose detection when the fob is in a jacket pocket pressed against the rear seatback. The D-pillar antenna's range has limits, especially when passengers or child seats absorb the LF signal." },
              { title: "Weak Battery Masking", desc: "The Palisade's higher signal tolerance means a marginal fob battery can work for weeks after it would have failed on a Tucson. Then it fails suddenly — owners don't get the gradual degradation warnings that smaller Hyundai models provide." },
              { title: "Post-Service SMK Faults", desc: "We've seen SMK communication errors after dealership service visits where the 12V battery was disconnected without proper shutdown procedures. The SMK's volatile memory can lose calibration data, requiring a relearn cycle." },
              { title: "Digital Key Confusion", desc: "Palisade owners with Hyundai's phone-based Digital Key sometimes assume it replaces the fob entirely. The Digital Key system is separate from the SMK — phone key issues don't affect fob programming, and vice versa." },
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
                <li>• Typically 25–40 minutes for the Palisade</li>
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
                <li>• 60–110 minutes — longer due to premium security layers</li>
                <li>• All previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Palisade Smart Key by Model Year</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2020–2022 Palisade (LX2 — Launch Years)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The Palisade launched with Hyundai's most advanced smart key system at the time. Seven antenna zones, AES-encrypted rolling codes, and a refined SMK module set the standard. These early models use strong encryption but haven't yet adopted the online security gateway that later models require.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F29 — premium 4-button fob with chrome accents</li>
                <li>• AES rolling-code encryption standard across all trims</li>
                <li>• Seven LF antenna zones: doors, dash, console, B-pillar, D-pillar, liftgate</li>
                <li>• PIN code required for all key programming</li>
                <li>• Digital Key available on Limited and Calligraphy — separate from fob system</li>
                <li>• SMK module behind lower dash — robust connector design</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2023–2024 Palisade (LX2 Refresh)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The refreshed Palisade added Hyundai's security gateway to the key programming process. This means some key registration procedures now require online server authentication — an additional step that extends programming time but significantly hardens the vehicle against relay attacks and unauthorized key cloning.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F43 — updated fob internals with same premium shell</li>
                <li>• Security gateway may require Hyundai server authentication</li>
                <li>• AES-128 encryption with updated SMK firmware</li>
                <li>• Improved antenna polling speed — sub-150ms detection cycles</li>
                <li>• Digital Key 2.0 with UWB (Ultra-Wideband) on Calligraphy trim</li>
                <li>• All-keys-lost procedure requires updated diagnostic software and server access</li>
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
                Hyundai dealers use GDS to access the Palisade's SMK, extract the PIN, and register keys. For a flagship SUV, dealer service typically means scheduling around limited appointment slots, paying premium labor rates ($300+ for programming alone), and potentially towing if all keys are lost.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry the diagnostic platforms and software subscriptions needed to perform Palisade key programming — including 2023+ models with security gateway requirements. We come to your location in Burbank, complete the work the same day, and price significantly below dealer rates. Your Palisade stays where it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Palisade Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">More Stable Than Santa Fe — But Not Foolproof</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade's SMK system is noticeably more reliable than the Santa Fe or Tucson. Better antenna calibration, higher build quality in the wiring harness, and faster polling cycles mean fewer false detection failures. But the system still depends on fob battery condition and 12V supply — the two most common failure triggers we encounter.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Sudden Battery Failure Pattern</h3>
              <p className="text-muted-foreground text-sm">
                Because the Palisade tolerates weaker fob signals better than other Hyundai models, owners don't get early warning signs of a dying CR2032. The fob works perfectly until the battery drops below a critical threshold — then fails completely. We recommend proactive battery replacement every 14–18 months for Palisade owners.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Fewer Liftgate Antenna Failures</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade's power liftgate uses a heavier-gauge antenna wire and a more robust hinge grommet than the Tucson or Santa Fe. We've seen significantly fewer hinge-related antenna breaks on the Palisade — Hyundai clearly addressed this weak point when engineering their flagship.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">12V Battery Load Considerations</h3>
              <p className="text-muted-foreground text-sm">
                The Palisade's extensive electronics — heated/ventilated seats in all three rows, dual-screen entertainment, power everything — draw heavily from the 12V system. Batteries that test acceptable on a basic voltmeter can still sag under the SMK's polling load. We use a dynamic load test before every Palisade programming job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/hyundai/palisade" brandSlug="hyundai" />


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
                Our primary Palisade service area. Whether you're near the Burbank Town Center, Toluca Lake, or the hillside neighborhoods, we arrive with full diagnostic equipment for any Palisade model year. Most jobs completed within 40–75 minutes on-site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Minutes east of Burbank — we service Palisade owners throughout Glendale, from the Americana to Montrose and the Verdugo Woodlands. Same-day availability for add-a-key and all-keys-lost emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service radius. We handle Palisade smart key programming in the Arts District, Valley Village, and Studio City.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across greater LA for Hyundai Palisade key programming. We regularly service Bel Air, Beverly Hills, and Pasadena — areas where the Palisade is particularly popular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hyundai Palisade Smart Key FAQ</h2>
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
            Need Hyundai Palisade Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service for your Palisade. Premium SMK diagnostics, PIN extraction, and key programming — all at your location. No dealer appointment, no towing your flagship SUV.
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
