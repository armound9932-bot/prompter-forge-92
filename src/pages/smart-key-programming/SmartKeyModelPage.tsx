import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";

interface ModelData {
  brand: string;
  model: string;
  slug: string;
  yearRange: string;
  keySystem: string;
  keyPartNumbers: string;
  commonProblems: string[];
  systemExplanation: string;
  whenNeeded: string[];
  serviceTime: string;
  uniqueNote: string;
}

const modelData: Record<string, ModelData> = {
  // ── Toyota ──
  "toyota/camry": {
    brand: "Toyota", model: "Camry", slug: "/smart-key-programming/toyota/camry",
    yearRange: "2012–2025",
    keySystem: "Toyota Smart Key System (SKS) with dual-band 315 MHz proximity detection",
    keyPartNumbers: "HYQ14FBE, HYQ14FBC (varies by generation)",
    commonProblems: [
      "Smart key not detected when inside the vehicle — often caused by weak battery or antenna module fault",
      "Push-to-start button flashing but engine won't crank after key fob battery replacement",
      "Intermittent keyless entry failure on driver-side door handle sensor",
      "Immobilizer warning light staying on after aftermarket remote start installation",
    ],
    systemExplanation: "The Camry's SKS uses a transponder chip embedded in the fob that communicates with the vehicle's immobilizer ECU via low-frequency signal. The car's interior and exterior antennas detect the fob's presence, allowing keyless entry through capacitive door handle sensors and push-button engine start. Programming requires synchronizing the fob's rolling code with the body control module.",
    whenNeeded: [
      "All smart keys lost — requires EEPROM-level programming of the immobilizer ECU",
      "Adding a spare proximity fob to an existing set",
      "Replacement after fob damage from water exposure or impact",
      "After battery disconnection that caused key deregistration",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "The 2018+ Camry (XV70) uses an updated encryption protocol that requires dealer-level diagnostic access — our equipment supports full initialization.",
  },
  "toyota/corolla": {
    brand: "Toyota", model: "Corolla", slug: "/smart-key-programming/toyota/corolla",
    yearRange: "2014–2025",
    keySystem: "Toyota Smart Entry & Start System with G-chip immobilizer",
    keyPartNumbers: "HYQ12BDP, HYQ14FBN",
    commonProblems: [
      "Key fob not recognized after prolonged storage — rolling code desynchronization",
      "Trunk release button on fob stops responding while door lock/unlock still works",
      "Push-to-start intermittently requires holding fob directly against the start button",
      "'Key not detected' warning appears randomly while driving",
    ],
    systemExplanation: "The Corolla's smart entry system relies on three interior antennas and two exterior antennas to triangulate the fob's position. The G-chip transponder uses AES 128-bit encryption for immobilizer authentication. When you touch the door handle, the car sends a low-frequency challenge signal; the fob responds with an encrypted UHF reply to authorize entry.",
    whenNeeded: [
      "Lost or stolen smart key — immediate reprogramming to deauthorize missing fobs",
      "Purchasing a used Corolla with only one key and needing a backup",
      "Fob circuit board failure requiring a complete replacement unit",
      "After ECU replacement or reset that cleared key registration data",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "Corolla Hatchback models (2019+) share the Auris platform and use a different antenna configuration — we carry both programming profiles.",
  },
  "toyota/prius": {
    brand: "Toyota", model: "Prius", slug: "/smart-key-programming/toyota/prius",
    yearRange: "2010–2025",
    keySystem: "Toyota Smart Key System with hybrid-specific immobilizer integration",
    keyPartNumbers: "HYQ14ACX, HYQ14FBC, M34FZ-22020",
    commonProblems: [
      "Smart key interference from aftermarket phone chargers or dashcam wiring",
      "Hybrid system won't initialize — 'Key not in vehicle' despite fob being present",
      "Reduced key detection range in cold weather conditions",
      "Multiple key registration conflicts when pairing a third-party replacement fob",
    ],
    systemExplanation: "The Prius smart key integrates with the hybrid vehicle control ECU in addition to the standard immobilizer. The system must verify key authenticity before allowing the high-voltage battery relay to close and the hybrid drivetrain to initialize. This dual-verification adds complexity compared to conventional vehicles — both the engine immobilizer and hybrid controller must accept the key's credentials.",
    whenNeeded: [
      "All keys lost — requires special hybrid-safe initialization procedure",
      "After 12V auxiliary battery replacement that reset the smart key module",
      "Upgrading from a basic key to a proximity smart key (select models)",
      "Key fob water damage from leaving the fob in a cupholder",
    ],
    serviceTime: "30–45 minutes",
    uniqueNote: "Prius programming takes slightly longer due to the hybrid system verification step — we ensure both the immobilizer and hybrid ECU accept the new key before completing service.",
  },
  "toyota/rav4": {
    brand: "Toyota", model: "RAV4", slug: "/smart-key-programming/toyota/rav4",
    yearRange: "2013–2025",
    keySystem: "Toyota Smart Key with power liftgate integration and remote start",
    keyPartNumbers: "HYQ14FBE, HYQ14FLA, 8990H-0R030",
    commonProblems: [
      "Power liftgate not responding to smart key foot-kick sensor activation",
      "Remote start function stops working while proximity entry remains functional",
      "Key fob buttons become unresponsive in high-temperature conditions (dashboard storage)",
      "Intermittent 'Check Smart Key System' warning on the dashboard",
    ],
    systemExplanation: "The RAV4's smart key system manages keyless entry, push-to-start, power liftgate activation, and available remote start through a single fob. The body control module coordinates signals from six antenna zones covering all doors, the cargo area, and the cabin interior. The system uses Toyota's proprietary frequency-hopping protocol to prevent relay attacks.",
    whenNeeded: [
      "Lost key while hiking or traveling — emergency on-site programming",
      "Adding a key for a family member or new driver",
      "After a vehicle break-in where the smart key module was tampered with",
      "Fob physical damage — cracked case exposing internal circuitry to moisture",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "RAV4 Prime (plug-in hybrid) requires additional steps to synchronize with the EV control module — we carry the necessary software for both hybrid and conventional RAV4 variants.",
  },

  // ── Honda ──
  "honda/civic": {
    brand: "Honda", model: "Civic", slug: "/smart-key-programming/honda/civic",
    yearRange: "2014–2025",
    keySystem: "Honda Smart Entry with Walk Away Auto Lock",
    keyPartNumbers: "KR5V2X, KR5TP-4, 72147-TEX-A01",
    commonProblems: [
      "Walk Away Auto Lock feature stops working — fob signal not detected by rear antenna",
      "Push-to-start requires multiple presses before the engine cranks",
      "Smart key battery drains within weeks instead of the typical 1–2 year lifespan",
      "Keyless entry range reduced to less than 3 feet from the vehicle",
    ],
    systemExplanation: "The Civic's smart entry system uses Honda's proprietary FHSS (Frequency Hopping Spread Spectrum) communication between the fob and the vehicle's keyless access control unit. The Walk Away Auto Lock feature monitors the fob's signal strength as you walk away, automatically locking the doors when the fob exits the detection zone. The immobilizer uses a separate LF channel for engine start authorization.",
    whenNeeded: [
      "All keys lost — full immobilizer reset and new key initialization",
      "Purchasing a pre-owned Civic with only one working smart key",
      "After a failed DIY key programming attempt that locked out existing keys",
      "Replacing a damaged fob where the transponder chip is no longer readable",
    ],
    serviceTime: "20–30 minutes",
    uniqueNote: "The 11th-gen Civic (2022+) introduced an updated encryption standard — our diagnostic tools support both legacy and current Civic platforms.",
  },
  "honda/accord": {
    brand: "Honda", model: "Accord", slug: "/smart-key-programming/honda/accord",
    yearRange: "2013–2025",
    keySystem: "Honda Proximity Key with Intelligent Multi-Information Display (i-MID) integration",
    keyPartNumbers: "KR5V2X, CWTWB1G0090, 72147-TVA-A01",
    commonProblems: [
      "Proximity key not detected on passenger side — antenna wiring harness issue common in 2018+ models",
      "Engine immobilizer activates randomly after aftermarket alarm installation",
      "Key fob buttons work for lock/unlock but proximity entry on door handle fails",
      "Dashboard displays 'Key Battery Low' prematurely after recent battery change",
    ],
    systemExplanation: "The Accord's proximity system communicates with the vehicle through a network of interior and exterior LF antennas managed by the smart key control unit. The i-MID integration allows key system status monitoring directly on the dashboard. Honda's rolling-code encryption regenerates with each lock/unlock cycle, making cloning impossible without proper diagnostic equipment.",
    whenNeeded: [
      "Lost key — urgent programming with mobile on-site service",
      "Worn key fob case allowing moisture to corrode internal contacts",
      "After battery terminal disconnect that caused smart key deregistration",
      "Transitioning from valet key to full smart key functionality",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "Accord Hybrid models require additional calibration with the powertrain control module — we handle both conventional and hybrid Accord variants.",
  },
  "honda/cr-v": {
    brand: "Honda", model: "CR-V", slug: "/smart-key-programming/honda/cr-v",
    yearRange: "2015–2025",
    keySystem: "Honda Smart Key with Remote Engine Start and Power Tailgate",
    keyPartNumbers: "KR5TP-4, KR5V2X, 72147-TLA-A01",
    commonProblems: [
      "Remote engine start activated but shuts off before driver enters — timing calibration issue",
      "Power tailgate ignores smart key foot sensor — requires antenna relearn",
      "Key registration error after replacing the 12V battery without proper shutdown procedure",
      "Intermittent 'Keyless Start System Problem' message on the driver information interface",
    ],
    systemExplanation: "The CR-V's keyless system integrates proximity entry, push-button start, remote engine start, and hands-free power tailgate into a unified smart key platform. The body control module manages seven antenna zones to detect the key's precise location relative to the vehicle. Honda's immobilizer protocol requires a two-step verification: transponder authentication followed by rolling-code challenge-response.",
    whenNeeded: [
      "All keys lost — complete system initialization required",
      "Second key needed for a shared family vehicle",
      "After a collision that damaged the smart key antenna wiring",
      "Key fob internal circuit board failure from drop damage",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "The 2023+ CR-V uses Honda's newest smart key architecture with enhanced range — our equipment fully supports this latest generation.",
  },

  // ── Ford ──
  "ford/f-150": {
    brand: "Ford", model: "F-150", slug: "/smart-key-programming/ford/f-150",
    yearRange: "2015–2025",
    keySystem: "Ford Intelligent Access with PATS (Passive Anti-Theft System) and SecuriCode",
    keyPartNumbers: "M3N-A2C931426, M3N-A2C93142600, 164-R8163",
    commonProblems: [
      "Intelligent Access key not detected — common after exposure to extreme heat in truck bed or toolbox",
      "PATS anti-theft system preventing engine start after jump-starting from a dead battery",
      "SecuriCode keypad on door pillar not syncing with new smart key after programming",
      "Tailgate release via smart key intermittently fails on SuperCrew models",
    ],
    systemExplanation: "The F-150's Intelligent Access system combines Ford's PATS immobilizer with proximity-based keyless entry. The PATS module verifies the transponder's encrypted ID before allowing the PCM (Powertrain Control Module) to enable fuel injection and ignition. The F-150 also features SecuriCode — a keypad on the driver's door pillar that provides backup entry without the fob. Smart key programming must synchronize with both PATS and the body control module.",
    whenNeeded: [
      "Lost key at a job site — emergency mobile programming",
      "Adding a key for a fleet vehicle with multiple authorized drivers",
      "After PATS lockout from too many failed start attempts",
      "Replacing a damaged fob that was run over or crushed",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "F-150 models with factory remote start require additional PATS parameter configuration — we program both the proximity entry and remote start functions in a single visit.",
  },
  "ford/escape": {
    brand: "Ford", model: "Escape", slug: "/smart-key-programming/ford/escape",
    yearRange: "2013–2025",
    keySystem: "Ford Intelligent Access with push-button start and hands-free liftgate",
    keyPartNumbers: "M3N-A2C931426, M3N-A2C93142600, 164-R8109",
    commonProblems: [
      "Hands-free liftgate sensor not recognizing smart key foot-kick gesture",
      "Push-button start intermittently shows 'No Key Detected' on the instrument cluster",
      "Key fob range drastically reduced after vehicle enters a parking garage",
      "Intelligent Access module loses key registration after software updates at non-dealer shops",
    ],
    systemExplanation: "The Escape's Intelligent Access system uses a dedicated receiver module that communicates with up to eight registered smart keys. The hands-free liftgate operates through a rear bumper proximity sensor that verifies the smart key is within range before activating. Ford's PATS III system provides immobilizer protection with an encrypted challenge that changes with every start cycle.",
    whenNeeded: [
      "All keys lost — full PATS initialization and new key registration",
      "After purchasing a used Escape and wanting to deauthorize previous owner's keys",
      "Key fob water damage — complete replacement and programming",
      "Adding a spare key for daily use while keeping the original as backup",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "The 2020+ Escape (fourth generation) moved to a new PATS architecture — we carry calibration data for both third-gen and fourth-gen Escape platforms.",
  },
  "ford/explorer": {
    brand: "Ford", model: "Explorer", slug: "/smart-key-programming/ford/explorer",
    yearRange: "2011–2025",
    keySystem: "Ford Intelligent Access with zone-detection and PATS anti-theft",
    keyPartNumbers: "M3N-A2C931426, M3N5WY8609, 164-R8154",
    commonProblems: [
      "Zone detection errors — vehicle unlocks when key is near but not directly at the door",
      "Third-row passenger door handle sensors failing to detect smart key proximity",
      "PATS theft light blinking continuously preventing engine start",
      "Key fob stuck in 'battery saver' mode reducing range and response time",
    ],
    systemExplanation: "The Explorer's Intelligent Access divides the vehicle into detection zones — each door, the liftgate, and the interior cabin are individually monitored. The system differentiates between an approaching key (for unlock) and a departing key (for auto-lock). Ford's body control module stores encrypted profiles for each registered key, enabling personalized settings like mirror position and seat memory per fob.",
    whenNeeded: [
      "Lost or stolen key — reprogramming to delete the missing fob from the vehicle's memory",
      "Fleet Explorer requiring additional authorized driver keys",
      "After an electrical system fault that corrupted key registration data",
      "Upgrading from a standard key to Intelligent Access capability (select trims)",
    ],
    serviceTime: "25–35 minutes",
    uniqueNote: "The sixth-gen Explorer (2020+) uses a rear-wheel-drive platform with an updated BCM — our tools support both the older CD4 and newer CD6 architectures.",
  },

  // ── Chevrolet ──
  "chevrolet/malibu": {
    brand: "Chevrolet", model: "Malibu", slug: "/smart-key-programming/chevrolet/malibu",
    yearRange: "2013–2024",
    keySystem: "Chevrolet Keyless Open and Start with Passkey III+ immobilizer",
    keyPartNumbers: "HYQ4EA, HYQ4AA, 13508769",
    commonProblems: [
      "Passkey III+ system intermittently preventing engine start — resistor pellet read failure on backup blade key",
      "'Service Keyless Start System' warning appearing on the driver information center",
      "Smart key fob buttons working but proximity detection completely unresponsive",
      "Key registration lost after disconnecting the battery for more than 30 minutes",
    ],
    systemExplanation: "The Malibu's keyless system uses GM's Passkey III+ immobilizer with a PIC (Passlock Integrated Circuit) transponder inside the fob. The system measures the fob's encrypted resistance value and compares it to stored profiles in the body control module. Keyless Open uses exterior door handle antennas, while push-button start relies on interior cabin antenna verification.",
    whenNeeded: [
      "All fobs lost — BCM-level relearn procedure required",
      "Replacement fob purchased online that needs to be registered to the vehicle",
      "After a Passkey system fault that disabled the anti-theft protection",
      "Key fob internal battery terminal corrosion causing intermittent operation",
    ],
    serviceTime: "20–30 minutes",
    uniqueNote: "The Malibu was discontinued after 2024 — we maintain full programming capability for all model years and carry replacement fobs in stock.",
  },
  "chevrolet/equinox": {
    brand: "Chevrolet", model: "Equinox", slug: "/smart-key-programming/chevrolet/equinox",
    yearRange: "2014–2025",
    keySystem: "Chevrolet Keyless Access with Push-Button Start and theft-deterrent system",
    keyPartNumbers: "HYQ4EA, HYQ4AA, 13529636",
    commonProblems: [
      "Theft-deterrent system falsely triggered — flashing security light and engine cranks but won't start",
      "Keyless entry works only from the driver's door — passenger side antenna module failure",
      "Smart key not detected when placed in center console or cupholder area",
      "Remote start via fob executes but engine shuts off when driver opens the door",
    ],
    systemExplanation: "The Equinox's keyless access system integrates with GM's Content Theft Deterrent (CTD) module. The smart key uses a 315 MHz UHF signal for remote functions and a 125 kHz LF signal for proximity detection. The CTD module validates the key's unique encrypted identifier before releasing the starter relay. Five antennas provide coverage across all entry points and the cabin interior.",
    whenNeeded: [
      "Lost key — mobile on-site replacement and programming in Burbank",
      "Adding keys for a family SUV shared by multiple drivers",
      "After replacing the body control module following an electrical fault",
      "Key fob dropped and cracked — replacement unit programming required",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "The 2025 Equinox EV uses an entirely new electronic architecture — contact us to confirm compatibility for the latest model year.",
  },
  "chevrolet/silverado": {
    brand: "Chevrolet", model: "Silverado", slug: "/smart-key-programming/chevrolet/silverado",
    yearRange: "2014–2025",
    keySystem: "Chevrolet Keyless Open/Start with Advanced Theft-Deterrent and available Multi-Flex Tailgate integration",
    keyPartNumbers: "M3N-32337200, M3N32337200, 13577770",
    commonProblems: [
      "Smart key fails to trigger Multi-Flex tailgate release on 2019+ models",
      "Key not detected after extended exposure to extreme cold temperatures in an unheated garage",
      "Advanced theft-deterrent system locks out all keys after a failed jump-start attempt",
      "Remote start function limited to two consecutive cycles without driving — reauthorization needed",
    ],
    systemExplanation: "The Silverado's smart key system manages keyless cab entry, push-button start, remote start, and available Multi-Flex tailgate operation. The truck's body control module uses GM's latest security protocol with AES encryption for transponder authentication. The system supports up to eight registered fobs and stores individual driver profiles including seat position, mirror settings, and climate preferences per key.",
    whenNeeded: [
      "Lost key on a job site or ranch — emergency mobile service",
      "Fleet Silverado needing additional programmed keys for crew access",
      "After an advanced theft-deterrent lockout requiring system reset",
      "Key fob circuit board failure from vibration damage common in work trucks",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "Silverado HD (2500/3500) models use a different BCM calibration than the 1500 — we carry programming data for the entire Silverado lineup.",
  },

  // ── Nissan ──
  "nissan/altima": {
    brand: "Nissan", model: "Altima", slug: "/smart-key-programming/nissan/altima",
    yearRange: "2013–2025",
    keySystem: "Nissan Intelligent Key with I-Key push-button ignition",
    keyPartNumbers: "KR5TXN7, KR5TXN1, 285E3-6CA1A",
    commonProblems: [
      "I-Key system error — 'Key System Fault' warning and vehicle won't start",
      "Smart key detected inside vehicle but push-button start requires touching fob to the button",
      "Keyless entry operates erratically — locks and unlocks randomly without user input",
      "Key ID registration fails after aftermarket BCM replacement",
    ],
    systemExplanation: "The Altima's Intelligent Key system uses Nissan's proprietary I-Key protocol with a NATS (Nissan Anti-Theft System) immobilizer. The key fob communicates bidirectionally with the Body Control Module through a network of six slot antennas. NATS verifies the transponder's cryptographic signature using a challenge-response mechanism that generates a new encrypted code for every start cycle.",
    whenNeeded: [
      "All I-Keys lost — NATS immobilizer requires pin-code extraction for virgin key registration",
      "Purchasing a pre-owned Altima and erasing previous owner's key data",
      "After a NATS system error that deregistered existing keys",
      "Replacement of a fob with a non-functional emergency blade key insert",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "The sixth-gen Altima (2019+) uses an updated NATS protocol that requires 20-digit pin code access — our tools extract this directly from the BCM.",
  },
  "nissan/sentra": {
    brand: "Nissan", model: "Sentra", slug: "/smart-key-programming/nissan/sentra",
    yearRange: "2013–2025",
    keySystem: "Nissan Intelligent Key with proximity entry and push-button ignition",
    keyPartNumbers: "KR5TXN7, CWTWB1U840, 285E3-3SG0D",
    commonProblems: [
      "Smart key not detected when placed in a bag or pocket — signal attenuation from metallic accessories",
      "Push-button start requires firm press and hold instead of a normal tap",
      "Keyless entry intermittently fails in rainy conditions — moisture on door handle sensors",
      "'No Key Detected' alert while driving at highway speeds — fob battery critically low",
    ],
    systemExplanation: "The Sentra's Intelligent Key operates on a dual-frequency system: 125 kHz LF for proximity wake-up and 315 MHz UHF for remote commands. The key fob contains both a transponder coil for immobilizer authentication and a separate RF transmitter for lock/unlock functions. The BCM coordinates between these systems to provide seamless keyless operation.",
    whenNeeded: [
      "Lost smart key — immediate replacement to maintain vehicle access",
      "Adding a second I-Key for daily driving convenience",
      "After accidentally washing the key fob — water damage to internal PCB",
      "Key system malfunction following an electrical short from jumper cable reversal",
    ],
    serviceTime: "20–30 minutes",
    uniqueNote: "The 2020+ Sentra shares its platform with the Kicks and Rogue Sport — our programming covers all shared-platform Nissan models.",
  },
  "nissan/rogue": {
    brand: "Nissan", model: "Rogue", slug: "/smart-key-programming/nissan/rogue",
    yearRange: "2014–2025",
    keySystem: "Nissan Intelligent Key with Divide-N-Hide cargo management and motion-activated liftgate",
    keyPartNumbers: "KR5TXN7, KR5TXN4, 285E3-6FL2B",
    commonProblems: [
      "Motion-activated liftgate not responding to foot-kick despite I-Key being in proximity",
      "Smart key detection drops out when sitting in the third-row seating area",
      "I-Key system enters emergency mode requiring physical key blade insertion to start",
      "Multiple key conflict — vehicle won't start when two registered fobs are inside simultaneously",
    ],
    systemExplanation: "The Rogue's Intelligent Key system integrates standard proximity entry and push-button start with motion-activated liftgate functionality. The rear liftgate sensor uses a dedicated antenna that detects the I-Key's presence before responding to the foot-kick gesture. Eight antennas cover the expanded cabin volume including the available third row, ensuring reliable key detection throughout the vehicle.",
    whenNeeded: [
      "All I-Keys lost — full NATS pin extraction and virgin key programming",
      "Key needed for a family Rogue with multiple regular drivers",
      "After a rear-end collision that damaged the liftgate antenna module",
      "Fob replacement due to worn-out button contacts from heavy daily use",
    ],
    serviceTime: "25–35 minutes",
    uniqueNote: "The Rogue's motion-activated liftgate requires a separate antenna relearn after key programming — we handle both steps in one service call.",
  },

  // ── Kia ──
  "kia/optima": {
    brand: "Kia", model: "Optima (K5)", slug: "/smart-key-programming/kia/optima",
    yearRange: "2011–2025",
    keySystem: "Kia Smart Key with immobilizer and available UVO connected car services",
    keyPartNumbers: "TQ8-FOB-4F24, SY5JFFGE04, 95440-D4100",
    commonProblems: [
      "Smart key immobilizer warning — 'Check Smart Key' message on the cluster after battery replacement",
      "UVO remote start from phone app conflicts with physical smart key registration",
      "Key fob unresponsive after exposure to strong electromagnetic fields near industrial equipment",
      "Push-to-start intermittently requires placing fob in the center console backup slot",
    ],
    systemExplanation: "The Optima (rebranded K5 from 2021) uses Kia's Smart Key system with a SMARTRA (Smart Transponder) immobilizer module mounted near the steering column. The SMARTRA coil reads the transponder's encrypted ID and communicates with the ECM to authorize engine start. The system also integrates with Kia's UVO telematics platform for remote lock/unlock and engine start via a smartphone app.",
    whenNeeded: [
      "Lost smart key — on-site replacement in Burbank with same-day service",
      "After SMARTRA module failure requiring new key registration",
      "Adding a key for a shared family sedan",
      "Key system reset needed after a failed third-party programming attempt",
    ],
    serviceTime: "20–35 minutes",
    uniqueNote: "The Optima was renamed K5 starting in 2021 — our programming covers the complete lineage from Optima through current K5 models.",
  },
  "kia/forte": {
    brand: "Kia", model: "Forte", slug: "/smart-key-programming/kia/forte",
    yearRange: "2014–2025",
    keySystem: "Kia Smart Key with Proximity Entry and immobilizer anti-theft",
    keyPartNumbers: "TQ8-FOB-4F27, CQOFD00120, 95440-M7001",
    commonProblems: [
      "Smart key battery drain within days — parasitic draw from a faulty proximity sensor module",
      "Door handle touch sensor fails to register in cold weather — capacitive sensor limitation",
      "Engine immobilizer activates after using the emergency key blade to manually open the door",
      "'Smart Key Not in Vehicle' warning despite fob resting on the wireless charging pad",
    ],
    systemExplanation: "The Forte's proximity entry system uses capacitive touch sensors embedded in the exterior door handles. When you touch the handle, the system activates the nearest LF antenna to query the smart key. The immobilizer SMARTRA module then performs a secondary authentication check before allowing the engine to start. The Forte's compact antenna layout requires precise fob positioning for reliable detection.",
    whenNeeded: [
      "All keys lost — SMARTRA pin extraction and new key initialization",
      "Spare key needed for a commuter vehicle used daily",
      "After a door handle replacement that disconnected the proximity antenna wiring",
      "Fob case cracked from daily wear — replacement unit programming",
    ],
    serviceTime: "20–30 minutes",
    uniqueNote: "The Forte GT and GT-Line trims use an identical smart key system to the standard model — no additional programming steps required for sport variants.",
  },
  "kia/sorento": {
    brand: "Kia", model: "Sorento", slug: "/smart-key-programming/kia/sorento",
    yearRange: "2014–2025",
    keySystem: "Kia Smart Key with Proximity Access, smart power tailgate, and available remote parking",
    keyPartNumbers: "TQ8-FOB-4F27, TQ8-FOB-4F24, 95440-P2200",
    commonProblems: [
      "Smart power tailgate opens unexpectedly — fob in adjacent pocket triggering the rear sensor",
      "Key not detected in third-row seating zone — extended cabin requires additional antenna coverage",
      "Remote parking assist feature loses connection with smart key during maneuvering",
      "Anti-theft system triggers car alarm when using emergency blade key to enter",
    ],
    systemExplanation: "The Sorento's smart key system manages a large SUV with up to three rows of seating, requiring an expanded antenna network. The smart power tailgate uses a dedicated rear proximity sensor that activates when the fob is detected within 3 feet of the bumper. The fourth-gen Sorento (2021+) added available remote smart parking assist, which communicates with the fob to allow the driver to move the vehicle from outside using fob buttons.",
    whenNeeded: [
      "Lost key during travel — emergency Burbank mobile service",
      "Adding keys for a multi-driver family SUV",
      "After a smart power tailgate module replacement requiring antenna relearn",
      "Key fob damage from dropping on pavement — cracked PCB board",
    ],
    serviceTime: "25–40 minutes",
    uniqueNote: "The Sorento Hybrid and PHEV use the same smart key hardware as the standard model — no additional complexity for electrified drivetrains.",
  },

  // ── Hyundai ──
  "hyundai/elantra": {
    brand: "Hyundai", model: "Elantra", slug: "/smart-key-programming/hyundai/elantra",
    yearRange: "2014–2025",
    keySystem: "Hyundai Smart Key with proximity unlock and Digital Key (2021+) compatibility",
    keyPartNumbers: "TQ8-FOB-4F27, SY5MQ4FGE08, 95440-AA100",
    commonProblems: [
      "Smart key not detected after updating the Hyundai Digital Key app on your smartphone",
      "Proximity unlock works on driver door only — passenger side handle sensor malfunction",
      "Push-button start hesitates with a 2-second delay before cranking",
      "Key fob LED stops blinking when pressing buttons — internal circuit fault",
    ],
    systemExplanation: "The Elantra's smart key system uses Hyundai's proximity-based authentication with SMARTRA immobilizer technology. The seventh-gen Elantra (2021+) introduced Digital Key capability, allowing NFC-equipped smartphones to function as a secondary key. The physical fob remains the primary key and communicates through four exterior antennas and two interior antennas for zone-specific detection.",
    whenNeeded: [
      "All keys lost — SMARTRA pin extraction and complete key initialization",
      "Setting up a Digital Key profile alongside the physical fob",
      "After a failed software update that disrupted key system communication",
      "Replacement fob programming for a pre-owned Elantra purchase",
    ],
    serviceTime: "20–30 minutes",
    uniqueNote: "The Elantra N performance variant uses the same smart key system — no special programming required for the sport model.",
  },
  "hyundai/sonata": {
    brand: "Hyundai", model: "Sonata", slug: "/smart-key-programming/hyundai/sonata",
    yearRange: "2015–2025",
    keySystem: "Hyundai Smart Key with Digital Key 2.0, remote smart parking assist, and SMARTRA immobilizer",
    keyPartNumbers: "TQ8-FOB-4F30, SY5MQ4FGE08, 95440-L1060",
    commonProblems: [
      "Digital Key 2.0 (UWB) fails to unlock when smartphone is in power-saving mode",
      "Remote smart parking assist loses fob connection mid-maneuver",
      "SMARTRA immobilizer intermittently prevents start after visiting a car wash",
      "Key fob buttons require excessive force — worn rubber membrane contacts",
    ],
    systemExplanation: "The Sonata features Hyundai's most advanced smart key ecosystem. Digital Key 2.0 uses Ultra-Wideband (UWB) technology for centimeter-accurate vehicle localization via smartphone, enabling hands-free unlock as you approach. The physical fob serves as the primary key with SMARTRA immobilizer authentication. Remote Smart Parking Assist allows the driver to move the vehicle in and out of tight spaces using the fob's directional buttons while standing outside.",
    whenNeeded: [
      "Lost fob — immediate mobile programming service in Burbank",
      "Configuring a new smartphone for Digital Key access alongside the physical fob",
      "After SMARTRA module service that cleared registered key data",
      "Adding a spare key for a household with multiple Sonata drivers",
    ],
    serviceTime: "25–35 minutes",
    uniqueNote: "The Sonata Hybrid uses identical smart key hardware — no additional steps needed for the hybrid powertrain variant.",
  },
  "hyundai/tucson": {
    brand: "Hyundai", model: "Tucson", slug: "/smart-key-programming/hyundai/tucson",
    yearRange: "2015–2025",
    keySystem: "Hyundai Smart Key with Bluelink connected services and smart power liftgate",
    keyPartNumbers: "TQ8-FOB-4F27, TQ8-FOB-4F30, 95440-N9070",
    commonProblems: [
      "Smart power liftgate height setting resets after key reprogramming",
      "Bluelink remote start conflicts with physical smart key immobilizer authentication",
      "Key not detected in cargo area despite proximity — rear antenna module fault",
      "'Check Smart Key' warning on cold mornings — temperature-related fob battery voltage drop",
    ],
    systemExplanation: "The Tucson's smart key system integrates with Hyundai's Bluelink connected car platform, which provides remote lock/unlock, engine start, and vehicle location via a smartphone app. The physical smart key manages proximity entry through exterior handle antennas and push-button start via interior cabin antennas. The smart power liftgate adds a rear proximity zone that detects the fob before responding to the foot-sensor gesture.",
    whenNeeded: [
      "All keys lost — full SMARTRA initialization with pin extraction",
      "Setting up Bluelink remote access alongside a newly programmed physical key",
      "After a liftgate motor replacement that disconnected the rear antenna",
      "Key fob replacement due to worn-out case and exposed circuitry",
    ],
    serviceTime: "25–35 minutes",
    uniqueNote: "The Tucson Hybrid and PHEV share the same smart key platform — we program all Tucson powertrain variants with the same equipment.",
  },
};

export default function SmartKeyModelPage({ brandSlug, modelSlug }: { brandSlug: string; modelSlug: string }) {
  const key = `${brandSlug}/${modelSlug}`;
  const data = modelData[key];
  if (!data) return null;

  const brandModels = Object.entries(modelData)
    .filter(([k]) => k.startsWith(`${brandSlug}/`) && k !== key)
    .map(([k, v]) => ({ slug: v.slug, label: `${v.brand} ${v.model}` }));

  return (
    <ServicePageLayout
      page={{
        slug: data.slug,
        title: `${data.brand} ${data.model} Smart Key Programming`,
        metaTitle: `${data.brand} ${data.model} Smart Key Programming Burbank | Push-to-Start Key Fob – Burbank Auto Locksmith`,
        metaDescription: `${data.brand} ${data.model} smart key programming in Burbank. ${data.keySystem}. ${data.serviceTime} mobile service. Covers ${data.yearRange} models. Licensed & insured.`,
        h1: `${data.brand} ${data.model} Smart Key Programming in Burbank`,
        heroText: `Need a smart key programmed for your ${data.yearRange} ${data.brand} ${data.model}? We specialize in ${data.keySystem}. Our mobile technician arrives in Burbank with dealer-level equipment — typical service completed in ${data.serviceTime}.`,
        icon: Cpu,
        benefits: [
          `Covers ${data.yearRange} ${data.brand} ${data.model} models`,
          `${data.keySystem}`,
          `Compatible fob types: ${data.keyPartNumbers}`,
          `Typical service time: ${data.serviceTime}`,
          `Resolves: ${data.commonProblems[0].split("—")[0].trim()}`,
          "OEM and quality aftermarket key options available",
        ],
        details: [
          `Tell us your ${data.brand} ${data.model} year and describe the smart key issue — ${data.commonProblems[0].split("—")[0].trim().toLowerCase()} or another problem.`,
          `Our technician arrives at your Burbank location equipped with ${data.brand}-specific diagnostic tools and a replacement ${data.model} smart key fob.`,
          `We perform the programming procedure using ${data.keySystem.toLowerCase()} protocols — ${data.uniqueNote.toLowerCase()}`,
          `All functions verified — proximity entry, push-to-start, and any integrated features like remote start or liftgate — before we leave.`,
        ],
        faqs: [
          { q: `How much does ${data.brand} ${data.model} smart key programming cost in Burbank?`, a: `Pricing depends on the ${data.model} model year and whether you need a new fob or are reprogramming an existing one. Our rates are significantly lower than ${data.brand} dealerships. Call for an exact quote.` },
          { q: `Can you program a ${data.brand} ${data.model} smart key if all keys are lost?`, a: `Yes. We perform full immobilizer initialization for the ${data.model}, including pin extraction and virgin key programming. No towing to a dealer required — we come to you in Burbank.` },
          { q: `What are common ${data.brand} ${data.model} smart key problems?`, a: `${data.commonProblems.slice(0, 2).map(p => p.split("—")[0].trim()).join(". ")}. These are typically resolved with proper reprogramming or fob replacement.` },
          { q: `How long does ${data.brand} ${data.model} smart key programming take?`, a: `Most ${data.model} smart key jobs are completed in ${data.serviceTime}. ${data.uniqueNote}` },
          { q: `What ${data.brand} ${data.model} key fob part numbers do you support?`, a: `We program ${data.keyPartNumbers} and compatible aftermarket equivalents for the ${data.yearRange} ${data.model}.` },
        ],
      }}
      extraContent={
        <section className="py-10 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-3">About the {data.brand} {data.model} Smart Key System</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{data.systemExplanation}</p>

            <h3 className="text-lg font-bold text-foreground mb-2">Common {data.model} Smart Key Problems</h3>
            <ul className="space-y-2 mb-6">
              {data.commonProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold mt-0.5">•</span> {p}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-foreground mb-2">When Is {data.model} Smart Key Programming Needed?</h3>
            <ul className="space-y-2 mb-6">
              {data.whenNeeded.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>

            {brandModels.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-foreground mb-2">Other {data.brand} Models We Service</h3>
                <div className="flex flex-wrap gap-2">
                  {brandModels.map(m => (
                    <Link key={m.slug} to={m.slug} className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition">
                      {m.label}
                    </Link>
                  ))}
                  <Link to={`/smart-key-programming/${brandSlug}`} className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition">
                    All {data.brand} Smart Keys →
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      }
    />
  );
}
