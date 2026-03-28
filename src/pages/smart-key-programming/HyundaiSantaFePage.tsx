import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, Shield, Car, Cpu, CheckCircle, AlertTriangle, MapPin, Wrench } from "lucide-react";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";
import { setSeoMeta } from "@/utils/seo";


const defined_faqs = [
  { q: "Can you program a Hyundai Santa Fe smart key without the original?", a: "Yes. All-keys-lost programming on the Santa Fe requires extracting the vehicle-specific PIN from the SMK module and performing a full immobilizer reset. We complete the entire procedure on-site in Burbank — no dealer tow required." },
  { q: "Why does my Santa Fe say 'Key Not Detected'?", a: "On a large SUV like the Santa Fe, this is often caused by the fob sitting in a rear-seat pocket or deep in the cargo area where LF antenna coverage is weakest. Other causes include a depleted CR2032 battery, a corroded liftgate antenna connector, or SMK module faults." },
  { q: "What is a PIN code and why is it needed?", a: "The PIN is a vehicle-specific security credential stored in the Santa Fe's Smart Key Module. Hyundai requires it for virtually every key registration — even adding a spare. Without the correct PIN, the immobilizer rejects the new key outright." },
  { q: "Do I need a Hyundai dealer to program my Santa Fe key?", a: "No. We use Hyundai-compatible diagnostic platforms that perform the same SMK access, PIN extraction, and key registration as the dealer's GDS system. Mobile service across Burbank — same day, significantly lower cost." },
];

export default function HyundaiSantaFePage() {
  useEffect(() => {
    setSeoMeta({ title: "Hyundai Santa Fe Smart Key Programming Burbank | Large SUV SMK Service – Burbank Auto Locksmith", description: "Expert Hyundai Santa Fe smart key programming in Burbank. Large SUV antenna diagnostics, SMK module service, PIN extraction. Mobile locksmith — no dealer needed.", slug: "/smart-key-programming/hyundai/santafe" });
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
            <span className="text-primary-foreground">Santa Fe</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Hyundai Santa Fe Smart Key Programming in Burbank
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto text-base mb-6">
            The Santa Fe is Hyundai's largest mainstream SUV — and its cabin volume creates smart key challenges that smaller vehicles simply don't have. Three rows of seating, an expansive cargo bay, and more antenna zones than the Tucson or Sonata mean more potential failure points and weaker rear detection. We specialize in Santa Fe SMK diagnostics, PIN extraction, and immobilizer programming on-site across Burbank.
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
            <Cpu className="w-6 h-6 text-accent" /> How the Santa Fe's Smart Key Module Works
          </h2>
          <p className="text-muted-foreground mb-4">
            Hyundai's SMK architecture centralizes all keyless functions in a single controller — unlike Toyota's distributed BCM logic or Ford's PATS/Intelligent Access split. On the Santa Fe, the SMK has more work to do than on a compact car: it manages a larger antenna network, handles signal handoffs across three seating rows, and must maintain detection consistency in a cabin that's nearly twice the volume of an Elantra.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">Extended LF Antenna Network</h3>
              <p className="text-muted-foreground text-sm">
                The Santa Fe deploys 125 kHz Low-Frequency antennas in the front door handles, dashboard, center console, B-pillar area, rear seat zone, and liftgate. That's more antenna positions than the Tucson — each one must be polled by the SMK during every detection cycle.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">UHF Rolling-Code Authentication</h3>
              <p className="text-muted-foreground text-sm">
                When an LF antenna detects the fob, it responds at 315 MHz with an encrypted rolling code. The SMK validates this against its stored key database. In the Santa Fe's larger cabin, the UHF response must travel farther — signal reflection off metal seat frames and cargo hardware can occasionally cause validation delays.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">SMK → ECU Engine Authorization</h3>
              <p className="text-muted-foreground text-sm">
                With the brake pedal depressed and start button pressed, the SMK issues a cryptographic challenge to the ECU. The fob's transponder must respond correctly or the immobilizer blocks fuel delivery. On the Santa Fe, this handshake is identical to the sedan process — it's the detection step beforehand that's more complex.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">PIN-Gated Registration</h3>
              <p className="text-muted-foreground text-sm">
                Every new key must be registered through the SMK using a vehicle-specific PIN code tied to the VIN. Hyundai doesn't allow onboard key learning like some Ford models — the PIN is mandatory for every programming scenario, including adding a spare when you already have a working key.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA vehicleName="Hyundai Santa Fe" />


      {/* Large SUV Behavior */}
      <section className="py-10 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-accent" /> Large SUV Detection Challenges
          </h2>
          <p className="text-muted-foreground mb-4">
            The Santa Fe's size is its defining characteristic — and the source of most smart key complaints we see in the field. Here's how a larger cabin directly affects key detection:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Third-Row Signal Weakness</h3>
              <p className="text-muted-foreground text-sm">
                The Santa Fe's third-row seating area is the farthest point from the dashboard and B-pillar antennas. Fobs left in third-row pockets or on the rear seat cushion regularly trigger "Key Not Detected" warnings — the LF signal simply attenuates over that distance.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Cargo Bay Dead Zones</h3>
              <p className="text-muted-foreground text-sm">
                The Santa Fe's deep cargo area sits behind the liftgate antenna. When the fob ends up under luggage, in a gym bag, or on the cargo floor, the antenna must work through layers of material. Metal items — strollers, camp chairs, toolboxes — make it worse by reflecting the signal away.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Antenna Handoff Gaps</h3>
              <p className="text-muted-foreground text-sm">
                Walking around a large SUV means the SMK must hand off detection between six or more antenna zones. On the Santa Fe, the gap between the rear door handle zone and the liftgate zone is wider than on the Tucson — creating a brief detection blind spot at the rear quarter panel.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Child Seat & Passenger Interference</h3>
              <p className="text-muted-foreground text-sm">
                Rear-facing child seats with metal frames positioned in the second row can partially shield the B-pillar antenna. When the fob is in a parent's pocket on the opposite side, detection becomes inconsistent — a problem unique to family SUVs like the Santa Fe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" /> Common Santa Fe Smart Key Problems
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '"Key Not Detected"', desc: "The Santa Fe's most frequent complaint. In a large SUV, this is often positional — the fob is too far from the nearest antenna. But it can also indicate a dead CR2032, a corroded liftgate antenna connector, or an SMK module polling failure." },
              { title: "Push Button — No Crank", desc: "Dashboard lights up, fob detected, but the engine won't start. Common causes include brake pedal position sensor faults, a transponder authentication timeout between the SMK and ECU, or low 12V battery voltage affecting the starter circuit." },
              { title: "Intermittent Detection", desc: "Key works at the front doors but fails at the liftgate, or works in the morning but not in the evening. On the Santa Fe, thermal expansion can shift antenna connector tolerances, and fob batteries drain faster in Burbank's summer heat." },
              { title: "Rear Hatch Won't Respond", desc: "The power liftgate button ignores the fob. The rear antenna wiring routes through the liftgate hinge — thousands of open/close cycles fatigue the harness, creating intermittent breaks that are hard to reproduce on a diagnostic bench." },
              { title: "Doors Unlock But No Start", desc: "The UHF remote unlock works from distance, but the LF proximity detection fails when you're sitting in the driver's seat. Points to a dashboard or steering column antenna issue — the SMK can't confirm the fob is inside the cabin." },
              { title: "SMK Communication Fault", desc: "Diagnostic tool can't connect to the SMK module. Often caused by aftermarket accessory installations — alarm systems, dashcams, or trailer wiring harnesses — that introduce noise or voltage drops on the CAN bus." },
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
                <li>• Typically 20–35 minutes for Santa Fe</li>
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
                <li>• 50–100 minutes depending on Santa Fe generation</li>
                <li>• All previous keys permanently deauthorized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* By Year */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Santa Fe Smart Key by Generation</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2010–2016 Santa Fe (DM / 3rd Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The third-generation Santa Fe brought Hyundai's smart key system to a larger platform for the first time. The SMK architecture on these models is functional but less refined — fewer antenna zones, basic rolling-code encryption, and a simpler immobilizer challenge compared to later generations.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: SY5DMFNA04 — standard 4-button fob</li>
                <li>• PIN code required for all key programming</li>
                <li>• Sport trim (5-seat) uses fewer antennas than the 7-seat model</li>
                <li>• Base trims may still use traditional transponder keys (ID46 chip)</li>
                <li>• SMK module accessible behind lower dash panel</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2017–2020 Santa Fe (TM / 4th Gen Early)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                Hyundai significantly upgraded the Santa Fe's SMK system with stronger encryption, additional antenna positions for the expanded cabin, and an improved liftgate detection zone. Smart key became standard across most trim levels, and the immobilizer handshake received firmware hardening.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F19 — updated fob with improved range</li>
                <li>• Enhanced rolling-code encryption in the SMK</li>
                <li>• B-pillar antenna added for better rear-seat coverage</li>
                <li>• Liftgate antenna harness routing redesigned — but still hinge-routed</li>
                <li>• Trailer wiring integration can introduce CAN bus noise affecting SMK</li>
                <li>• PIN code complexity increased — requires updated extraction tools</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" /> 2021–2024 Santa Fe (MX5 / 4th Gen Refresh & 5th Gen)
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                The latest Santa Fe uses Hyundai's most advanced smart key system. AES-128 encryption, a security gateway that may require online authentication, and a completely redesigned SMK with six antenna zones make this the most complex Hyundai to program — but we carry the updated tools and software subscriptions to handle it.
              </p>
              <ul className="text-muted-foreground text-xs space-y-1">
                <li>• FCC ID: TQ8-FOB-4F43 — slim-profile fob with updated internals</li>
                <li>• AES-128 transponder encryption — requires current diagnostic software</li>
                <li>• Security gateway may require Hyundai server authentication</li>
                <li>• Six LF antenna zones: both doors, dash, console, B-pillar, liftgate</li>
                <li>• Digital key (phone-based) available on Calligraphy trim — separate system</li>
                <li>• All-keys-lost programming significantly longer due to security layers</li>
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
                Hyundai dealers use GDS (Global Diagnostic System) to access the SMK, extract the PIN, and register keys. For the Santa Fe, this means scheduling around dealer availability, potentially towing a large SUV, and paying dealer labor rates — often $250+ for programming alone, before the key cost.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-2">What We Do Differently</h3>
              <p className="text-muted-foreground text-sm">
                We carry Hyundai-compatible diagnostic platforms that perform identical SMK access, PIN extraction, and key registration. We drive to your Santa Fe's location in Burbank, complete the work the same day, and price well below dealer rates. No towing a large SUV across town — we come to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Locksmith Notes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-accent" /> Field Notes from Santa Fe Jobs
          </h2>
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Third-Row Antenna Weakness</h3>
              <p className="text-muted-foreground text-sm">
                The 7-seat Santa Fe's third-row zone is the most common source of "Key Not Detected" complaints. The B-pillar antenna is supposed to cover it, but signal attenuation through second-row seatbacks means coverage is marginal at best. We advise Santa Fe owners to keep the fob forward of the second row when driving.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Tow Hitch Wiring Interference</h3>
              <p className="text-muted-foreground text-sm">
                Santa Fe models equipped with Hyundai's factory or aftermarket tow packages sometimes develop CAN bus noise from the trailer wiring module. This doesn't prevent the engine from starting — but it can cause the SMK to throw intermittent communication faults during key programming, forcing us to isolate the tow module before proceeding.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">Liftgate Hinge Harness Wear</h3>
              <p className="text-muted-foreground text-sm">
                Like the Tucson, the Santa Fe routes its liftgate antenna wire through the hinge grommet. But the Santa Fe's heavier power liftgate puts more stress on this harness. We see fatigue breaks earlier — sometimes within 40,000 miles — on Santa Fe models compared to 60,000+ on the Tucson. Always check the liftgate harness before replacing a fob for rear detection issues.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-1">12V Battery Load Impact</h3>
              <p className="text-muted-foreground text-sm">
                The Santa Fe's larger electrical load — power liftgate, heated seats, panoramic roof motor — draws more from the 12V battery than a sedan. A battery at 12.0V under load (enough to crank) can still cause the SMK to poll erratically. We test battery condition before every Santa Fe key job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/hyundai/fe" brandSlug="hyundai" />


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
                Our primary Hyundai Santa Fe service area. Whether you're near the Empire Center, Verdugo Park, or the Media District, we arrive with full diagnostic equipment for any Santa Fe generation. Most jobs completed within 35–75 minutes on-site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Glendale</h3>
              <p className="text-muted-foreground text-sm">
                Minutes east of Burbank — we handle Santa Fe key programming throughout Glendale, from the Galleria to Montrose. Same-day availability for add-a-key and all-keys-lost emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">North Hollywood</h3>
              <p className="text-muted-foreground text-sm">
                Bordering Burbank to the south, NoHo is within our core service area. We service Santa Fe owners in the Arts District, Valley Village, and the Lankershim corridor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Los Angeles</h3>
              <p className="text-muted-foreground text-sm">
                Extended mobile service across greater LA for Hyundai Santa Fe key programming. Contact us for availability beyond our core Burbank coverage — we regularly service Silver Lake, Echo Park, and Hollywood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hyundai Santa Fe Smart Key FAQ</h2>
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
            Need Hyundai Santa Fe Smart Key Service in Burbank?
          </h2>
          <p className="text-accent-foreground/90 mb-6 text-base">
            Same-day mobile service for your Santa Fe. SMK diagnostics, PIN extraction, large-SUV antenna troubleshooting, and key programming — all at your location. No dealer appointment, no towing.
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
