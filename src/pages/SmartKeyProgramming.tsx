import { Cpu } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function SmartKeyProgramming() {
  return (
    <ServicePageLayout
      page={{
        slug: "/smart-key-programming",
        title: "Smart Key Programming",
        metaTitle: "Smart Key Programming Burbank | Proximity Key & Push-to-Start – Burbank Auto Locksmith",
        metaDescription: "Expert smart key programming in Burbank. Proximity keys, push-to-start fobs, keyless entry for all makes. Mobile service, OEM tools. Licensed & insured.",
        h1: "Smart Key Programming in Burbank, CA",
        heroText: "Lost or need a new smart key? We program proximity keys, push-to-start fobs, and keyless entry remotes on-site with dealer-level equipment. Fast mobile service across Burbank and surrounding areas.",
        icon: Cpu,
        benefits: [
          "Proximity smart key programming for all major brands",
          "Push-to-start fob replacement and programming",
          "Keyless entry remote programming",
          "OEM dealer-level diagnostic tools",
          "Same-day mobile service in Burbank",
          "All keys tested before we leave",
        ],
        details: [
          "Call us with your vehicle year, make, and model — we'll confirm smart key compatibility.",
          "Our mobile technician arrives at your Burbank location with all necessary equipment.",
          "We program your new smart key to sync with your vehicle's immobilizer and keyless system.",
          "We verify all functions — proximity unlock, push-to-start, trunk release — and hand you the key.",
        ],
        faqs: [
          { q: "What is a smart key?", a: "A smart key is a proximity-based key fob that allows keyless entry and push-button start without inserting a traditional key into the ignition." },
          { q: "Can you program smart keys for any car brand?", a: "Yes, we program smart keys for Toyota, Honda, Ford, Chevrolet, Nissan, Kia, Hyundai, and many more makes and models." },
          { q: "How much does smart key programming cost in Burbank?", a: "Pricing varies by vehicle make and model. Call us for an exact quote — we offer competitive rates below dealership pricing." },
          { q: "Do I need to tow my car to a dealer for smart key programming?", a: "No. Our mobile locksmith comes to your location in Burbank and programs your smart key on-site." },
        ],
      }}
    />
  );
}
