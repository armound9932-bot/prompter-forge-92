import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import toyotaLogo from "@/assets/brands/toyota-logo.png";
import hondaLogo from "@/assets/brands/honda-logo.png";
import fordLogo from "@/assets/brands/ford-logo.png";
import chevroletLogo from "@/assets/brands/chevrolet-logo.png";
import nissanLogo from "@/assets/brands/nissan-logo.png";
import kiaLogo from "@/assets/brands/kia-logo.png";
import hyundaiLogo from "@/assets/brands/hyundai-logo.png";

const brands = [
  { slug: "/smart-key-programming/toyota", label: "Toyota", logo: toyotaLogo },
  { slug: "/smart-key-programming/honda", label: "Honda", logo: hondaLogo },
  { slug: "/smart-key-programming/ford", label: "Ford", logo: fordLogo },
  { slug: "/smart-key-programming/chevrolet", label: "Chevrolet", logo: chevroletLogo },
  { slug: "/smart-key-programming/nissan", label: "Nissan", logo: nissanLogo },
  { slug: "/smart-key-programming/kia", label: "Kia", logo: kiaLogo },
  { slug: "/smart-key-programming/hyundai", label: "Hyundai", logo: hyundaiLogo },
];

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
      extraContent={
        <section className="py-10 bg-muted">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Smart Key Programming by Brand</h2>
            <p className="text-muted-foreground text-sm mb-4">Select your vehicle brand for detailed smart key programming information, compatible fob types, and Burbank pricing.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {brands.map(b => (
                <Link key={b.slug} to={b.slug} className="flex items-center gap-2 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <Cpu className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-semibold text-foreground text-sm">{b.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
