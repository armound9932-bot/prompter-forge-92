import { Cpu, Phone, CheckCircle, AlertTriangle, Info, Car, Shield, MapPin } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import MidPageCTA from "@/components/MidPageCTA";
import RelatedModelsSection from "@/components/RelatedModelsSection";


export default function KiaSorentoPage() {
  return (
    <ServicePageLayout
      page={{
        slug: "/smart-key-programming/kia/sorento",
        title: "Kia Sorento Smart Key Programming",
        metaTitle: "Kia Sorento Smart Key Programming Burbank | Mid-Size SUV Key Fob – Burbank Auto Locksmith",
        metaDescription: "Kia Sorento smart key programming in Burbank. PIN-based immobilizer reset, all keys lost, push-to-start fob replacement. Mobile SUV locksmith. Licensed & insured.",
        h1: "Kia Sorento Smart Key Programming in Burbank, CA",
        heroText: "The Kia Sorento's three-row cabin and extended wheelbase create unique challenges for smart key detection that smaller Kia models don't face. Our mobile locksmiths carry Kia-specific diagnostic tools and program proximity fobs on-site across Burbank — no dealer appointment, no tow truck.",
        icon: Cpu,
        benefits: [
          "Kia Sorento smart key programming — all generations",
          "PIN-based immobilizer reset for all-keys-lost situations",
          "Three-row antenna diagnostics and signal verification",
          "Push-to-start fob replacement and registration",
          "Same-day mobile service across Burbank",
          "Every key function tested before we leave",
        ],
        details: [
          "Call with your Sorento's year and VIN — we confirm key type, part number, and pricing before dispatching.",
          "Our mobile unit arrives at your Burbank location equipped with Kia-compatible programming hardware.",
          "We extract the vehicle PIN, access the Smart Key Module, and register your new fob to both the keyless entry and immobilizer systems.",
          "Full function verification: proximity unlock on all doors, push-to-start ignition, liftgate release, and panic alarm.",
        ],
        faqs: [
          {
            q: "Can you program a Kia Sorento key without the original?",
            a: "Yes. All-keys-lost programming requires extracting the vehicle's PIN code from the immobilizer system, resetting the Smart Key Module, and registering a new fob from scratch. Our technicians carry the tools to handle this on-site without a dealer visit."
          },
          {
            q: "Why does my Sorento say 'Key Not Detected'?",
            a: "Common causes include a weak CR2032 battery in the fob, signal interference from aftermarket accessories, or antenna wiring issues — especially in the rear cargo area and third-row zone. We diagnose each antenna zone individually to isolate the fault."
          },
          {
            q: "What is the PIN code used for?",
            a: "The PIN is a vehicle-specific security code stored in the immobilizer module. It's required for any smart key registration — especially all-keys-lost scenarios. We extract it using Kia-specific diagnostic protocols, not generic scan tools."
          },
          {
            q: "Do I need to go to the Kia dealer for key programming?",
            a: "No. Our mobile locksmith service handles full smart key programming at your location in Burbank. We use the same registration protocols as the dealer but come to you — often faster and at a lower cost."
          },
        ],
      }}
      extraContent={
        <>
          {/* Kia Smart Key System */}
          <section className="py-10 bg-muted">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                How the Kia Sorento Smart Key System Works
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                The Sorento uses Kia's Smart Key Module (SKM) architecture — a system that shares DNA with Hyundai's SMK platform but runs its own calibration tables and software paths. The SKM manages a network of low-frequency (125 kHz) antennas positioned throughout the vehicle. When you approach with a registered fob, these antennas emit polling signals. Your fob responds via UHF (315 MHz in North America), and the SKM forwards the encrypted credential to the ECU for ignition authorization.
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                What makes the Sorento different from smaller Kia models like the Sportage or Optima is antenna count and zone coverage. The Sorento's three-row layout requires additional antenna positions — particularly behind the second row and in the cargo area — to maintain reliable detection across the full cabin length. This is where most detection complaints originate.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Dual-Registration Requirement</h3>
                  <p className="text-muted-foreground text-xs">Every Sorento fob must be registered to both the keyless entry system and the immobilizer — two separate modules. Missing either registration means the key may unlock doors but fail to start the engine.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">ECU Authorization Chain</h3>
                  <p className="text-muted-foreground text-xs">The SKM validates the fob → forwards the encrypted token to the ECU → the ECU checks against its stored key profile → engine start is authorized. Any break in this chain triggers a no-start condition.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Large SUV Behavior */}
          <section className="py-10 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                Three-Row SUV Detection Challenges
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                The Sorento's mid-size three-row body creates real-world detection gaps that don't exist in compact SUVs or sedans. With a wheelbase approaching 111 inches on current models, the distance from the driver's seat to the cargo area exceeds what a single antenna zone can reliably cover.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">Rear Seat Dead Zones</h3>
                  <p className="text-muted-foreground text-xs">Third-row passengers holding the only fob can trigger "Key Not Detected" warnings at the dash because the rear antenna may not relay the signal fast enough during the polling cycle. This is more common than most owners expect.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">Cargo Area Coverage</h3>
                  <p className="text-muted-foreground text-xs">If the key fob lands in the cargo well — behind groceries or under a cargo cover — the LF polling signal from the nearest antenna may be partially absorbed. The fob responds, but the return signal is too weak for reliable detection.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">Liftgate Antenna Wiring</h3>
                  <p className="text-muted-foreground text-xs">The Sorento's power liftgate routes antenna wiring through the hinge area. Repeated open/close cycles cause flex fatigue in the harness, leading to intermittent or complete rear detection failure over time.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">Key Placement Sensitivity</h3>
                  <p className="text-muted-foreground text-xs">In a three-row cabin, where the driver places the fob matters more than in a sedan. Center console, door pocket, cupholder — each position sits within a different antenna zone and can affect start authorization timing.</p>
                </div>
              </div>
            </div>
          </section>

      <MidPageCTA vehicleName="Kia Sorento" />


          {/* Common Problems */}
          <section className="py-10 bg-muted">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Common Kia Sorento Smart Key Problems
              </h2>
              <div className="space-y-3">
                {[
                  { title: "\"Key Not Detected\" Warning", desc: "The most frequent complaint. Usually caused by a weak fob battery, but in the Sorento it's often compounded by the larger cabin requiring the signal to travel further. We test each antenna zone individually." },
                  { title: "Push Button No-Start", desc: "The fob unlocks doors via UHF but the LF polling doesn't detect it near the dash. Common when the fob is in a pocket on the passenger side or rear seat. Can also indicate a SKM communication fault." },
                  { title: "Intermittent Detection", desc: "Works sometimes, fails other times. Usually points to a marginal fob battery (2.8V instead of 3.0V), corroded antenna connectors, or a fob that's registered to keyless entry but has a weak immobilizer registration." },
                  { title: "Rear Hatch Won't Detect Key", desc: "Specific to Sorento models with power liftgate. The antenna harness runs through the hinge and is prone to flex fatigue. We see this frequently on 2016–2020 models with high liftgate usage." },
                  { title: "Doors Unlock but Engine Won't Start", desc: "Classic sign of a fob registered to keyless entry but not fully registered to the immobilizer. The UHF unlock works, but the ECU never receives a valid cryptographic token for ignition authorization." },
                  { title: "Module Communication Faults", desc: "The SKM loses communication with the ECU — often after a battery replacement or jump-start that causes a voltage spike. Requires module re-initialization and sometimes a full key re-registration." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Add Key vs All Keys Lost */}
          <section className="py-10 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-accent" />
                Add a Key vs. All Keys Lost
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Add a Key (Spare Exists)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-xs">
                    <li>• Present working key to confirm system access</li>
                    <li>• Connect diagnostic tool to OBD-II port</li>
                    <li>• Register new fob to keyless entry module</li>
                    <li>• Register same fob to immobilizer (dual registration)</li>
                    <li>• Verify all functions — unlock, start, liftgate</li>
                    <li>• Typically 20–30 minutes on-site</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    All Keys Lost
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-xs">
                    <li>• Extract vehicle PIN from immobilizer module</li>
                    <li>• Clear all previously registered key profiles</li>
                    <li>• Reset Smart Key Module to accept new fobs</li>
                    <li>• Register new fob(s) to both keyless and immobilizer</li>
                    <li>• Re-initialize SKM-to-ECU communication</li>
                    <li>• Full system verification — 45–60 minutes typical</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sorento By Year */}
          <section className="py-10 bg-muted">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                Kia Sorento Smart Key by Generation
              </h2>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-2">2011–2015 Sorento (XM Platform)</h3>
                  <p className="text-muted-foreground text-xs mb-2">
                    The second-generation Sorento introduced available smart key on higher trims. The XM platform uses a straightforward SKM architecture with 4 antenna zones and basic rolling-code encryption. Programming is relatively simple — PIN extraction is fast, and the immobilizer registration process completes in a single cycle.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    <strong>Common FCC ID:</strong> SY5HMFNA04 — typical part numbers include 95440-1U500 and 95440-1U501. These fobs are readily available and cost-effective compared to newer generations.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-2">2016–2020 Sorento (UM Platform)</h3>
                  <p className="text-muted-foreground text-xs mb-2">
                    The third-generation Sorento upgraded to a more robust SKM with expanded antenna coverage (5–6 zones) and stronger encryption. The UM platform introduced tighter PIN security — extraction requires Kia-specific diagnostic paths rather than generic OBD tools. This generation also brought the power liftgate antenna, which becomes a common failure point around 60,000–80,000 miles.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    <strong>Common FCC ID:</strong> TQ8-FOB-4F06 — part numbers include 95440-C6000 and 95440-C5000. Programming requires dual-registration to both keyless and immobilizer modules.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-2">2021–2024 Sorento (MQ4 Platform)</h3>
                  <p className="text-muted-foreground text-xs mb-2">
                    The current Sorento runs on Kia's N3 platform (shared architecture with Hyundai but distinct software calibration). It uses AES-128 encryption, a security gateway that restricts unauthorized diagnostic access, and up to 7 antenna zones for comprehensive three-row coverage. PIN extraction on 2022+ models requires online server authentication — the tool must connect to Kia's server to validate the request.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    <strong>Common FCC ID:</strong> CQOFD00790 — part numbers include 95440-R5000 and 95440-R5010. These fobs use a higher-security chip and require more advanced programming equipment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Programming Complexity */}
          <section className="py-10 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Programming Complexity
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                Kia Sorento smart key programming is not a DIY task. Every generation requires PIN-based security access, and newer models add layers that make generic scan tools useless.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <h3 className="font-semibold text-foreground text-sm mb-1">PIN Extraction</h3>
                  <p className="text-muted-foreground text-xs">Required for every key registration. Kia-specific diagnostic path — not accessible through generic OBD readers.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <h3 className="font-semibold text-foreground text-sm mb-1">SKM Module Access</h3>
                  <p className="text-muted-foreground text-xs">Direct communication with the Smart Key Module for fob registration. 2022+ models require security gateway bypass.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Server Authentication</h3>
                  <p className="text-muted-foreground text-xs">MQ4 platform (2022+) requires online server validation for PIN extraction — adding complexity but improving theft protection.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Locksmith Field Notes */}
          <section className="py-10 bg-muted">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-accent" />
                Field Notes from Our Locksmiths
              </h2>
              <div className="space-y-3">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">SKM Module Sensitivity</h3>
                  <p className="text-muted-foreground text-xs">The Sorento's SKM is more sensitive to voltage drops than the Sportage's. A battery that tests at 11.8V may still crank the engine but cause the SKM to throw intermittent "Key Not Detected" warnings. We always verify battery voltage and charging system health before diagnosing smart key issues.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Third-Row Antenna Weak Spots</h3>
                  <p className="text-muted-foreground text-xs">The Sorento's third-row area has the weakest antenna coverage in the vehicle. If the only fob is in a purse on the third-row seat, the system may not detect it reliably — especially on 2016–2020 models where the rear antenna count is lower than the current MQ4 platform.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Aftermarket Remote Start Interference</h3>
                  <p className="text-muted-foreground text-xs">We see a lot of Sorentos in Burbank with aftermarket remote start systems that interfere with the factory smart key polling cycle. The aftermarket module tries to emulate a key signal, which confuses the SKM during the registration process. We always check for aftermarket modules before programming.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Kia vs. Hyundai Software Paths</h3>
                  <p className="text-muted-foreground text-xs">Even though the MQ4 Sorento shares the N3 platform with the Hyundai Santa Fe, the programming software paths are completely different. Using a Hyundai diagnostic path on a Kia will fail — the modules reject the handshake. We carry both Kia and Hyundai software licenses for this reason.</p>
                </div>
              </div>
            </div>
          </section>

      <RelatedModelsSection category="suv" currentSlug="/smart-key-programming/kia/sorento" brandSlug="kia" />


          {/* Local SEO */}
          <section className="py-10 bg-background">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Kia Sorento Smart Key Service Areas
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Burbank</h3>
                  <p className="text-muted-foreground text-xs">Our home base. We respond to Kia Sorento smart key calls across Burbank — from the Media District to Magnolia Park and Burbank Boulevard. Most calls are completed within the hour.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Glendale</h3>
                  <p className="text-muted-foreground text-xs">Just minutes from Burbank. We handle Sorento smart key programming throughout Glendale — Brand Boulevard, Americana area, and surrounding neighborhoods.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">North Hollywood</h3>
                  <p className="text-muted-foreground text-xs">Adjacent to Burbank with quick response times. We service Kia Sorento owners in the NoHo Arts District, Valley Village, and surrounding areas.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Los Angeles</h3>
                  <p className="text-muted-foreground text-xs">Extended coverage across the greater LA area. Whether you're in Studio City, Sherman Oaks, or Hollywood — our mobile Kia locksmith can reach you for Sorento key programming.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-accent text-accent-foreground">
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2 className="text-2xl font-bold mb-3">Need a Kia Sorento Smart Key Programmed?</h2>
              <p className="text-sm mb-5 opacity-90">
                Whether you need a spare fob or you've lost all your keys, our mobile locksmith arrives at your Burbank location with everything needed to program your Sorento smart key on-site. No dealer wait times, no tow truck — just fast, professional service.
              </p>
              <a
                href="tel:+18184858877"
                className="inline-flex items-center gap-2 bg-card text-foreground font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                (818) 485-8877
              </a>
              <p className="mt-3 text-xs opacity-80">Same-day mobile service · Burbank &amp; surrounding areas</p>
            </div>
          </section>
        </>
      }
    />
  );
}