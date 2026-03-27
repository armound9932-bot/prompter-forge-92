import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function KeyProgramming() {
  return (
    <ServicePageLayout
      page={{
        slug: "/key-programming",
        title: "Key Programming",
        metaTitle: "Car Key Programming Burbank | OEM Smart Key & Fob – Burbank Auto Locksmith",
        metaDescription: "Professional car key programming in Burbank. Transponder keys, smart keys, push-to-start fobs. OEM-level dealer tools. Mobile service. Licensed & insured.",
        h1: "Car Key Programming Service in Burbank",
        heroText: "Transponder keys, smart keys, push-to-start fobs — programmed on-site with dealer-level tools. OEM and aftermarket solutions for all makes and models.",
        icon: Zap,
        benefits: [
          "Transponder key programming for all vehicles",
          "Smart key and push-to-start fob programming",
          "OEM-level tools — same as dealership quality",
          "Aftermarket and original key options available",
          "EEPROM and immobilizer system programming",
          "Mobile service — we come to your location",
        ],
        details: [
          "Tell us your vehicle details and the type of key you need programmed.",
          "Our technician arrives with dealer-level programming equipment.",
          "We program your key to sync with your vehicle's immobilizer system.",
          "We test all functions — lock, unlock, start, trunk — and you're done.",
        ],
        faqs: [
          { q: "What types of keys can you program?", a: "We program transponder keys, smart proximity keys, push-to-start fobs, and remote head keys for virtually all makes and models." },
          { q: "Do you use OEM or aftermarket keys?", a: "We offer both options. OEM keys are identical to dealer keys. Aftermarket keys offer the same functionality at a lower price." },
          { q: "Can you program a key I bought online?", a: "In many cases yes, but not all aftermarket keys are compatible. Call us with your key details and we'll let you know." },
          { q: "How long does key programming take?", a: "Most programming jobs take 15-45 minutes depending on the vehicle and key type." },
        ],
      }}
    />
  );
}
