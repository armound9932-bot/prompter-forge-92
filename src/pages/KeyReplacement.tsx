import { Key } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function KeyReplacement() {
  return (
    <ServicePageLayout
      page={{
        slug: "/key-replacement",
        title: "Car Key Replacement",
        metaTitle: "Car Key Replacement Burbank | All Keys Lost Service – Burbank Auto Locksmith",
        metaDescription: "Lost your car keys in Burbank? We cut and program new keys on-site — even with zero keys. All makes & models. Mobile service. Licensed & insured. Call now!",
        h1: "Car Key Replacement in Burbank — Even All Keys Lost",
        heroText: "Lost every key? We program brand-new car keys on-site using OEM-level equipment. No tow to the dealer needed. Fast mobile service across Burbank.",
        icon: Key,
        benefits: [
          "All-keys-lost service — we create keys from scratch",
          "OEM-level key cutting and programming on-site",
          "Transponder, smart key, and fob replacement",
          "All makes and models — Toyota, Honda, Nissan, BMW & more",
          "1-year warranty on all key replacements",
          "Faster and more affordable than dealer service",
        ],
        details: [
          "Call us with your vehicle year, make, and model for an instant quote.",
          "We arrive at your location with all necessary equipment and key blanks.",
          "We cut and program your new key on-site using dealer-level tools.",
          "We test the key, verify all functions, and you're ready to drive.",
        ],
        faqs: [
          { q: "Can you make a key if I lost all my keys?", a: "Yes! We specialize in all-keys-lost situations. We can program brand-new keys from scratch for most vehicles." },
          { q: "Is it cheaper than the dealer?", a: "Yes — typically 30-50% less than dealership pricing, and we come to you so there's no tow bill." },
          { q: "How long does key replacement take?", a: "Most key replacements are completed in 30-60 minutes on-site." },
          { q: "Do you provide a warranty?", a: "Yes, all key replacements come with a 1-year warranty." },
        ],
      }}
    />
  );
}
