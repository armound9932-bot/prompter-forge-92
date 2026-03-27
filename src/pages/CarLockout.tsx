import { Car } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CarLockout() {
  return (
    <ServicePageLayout
      page={{
        slug: "/car-lockout",
        title: "Emergency Car Lockout",
        metaTitle: "Emergency Car Lockout Burbank | 24/7 Mobile Locksmith – Burbank Auto Locksmith",
        metaDescription: "Locked out of your car in Burbank? 24/7 emergency mobile locksmith. We arrive in 15-30 minutes. No damage to your vehicle. Licensed & insured. Call now!",
        h1: "Emergency Car Lockout Service in Burbank",
        heroText: "Locked out of your car? Don't panic. Our mobile locksmith arrives in 15-30 minutes, gets you back in fast — no damage to your vehicle. Available 24/7.",
        icon: Car,
        benefits: [
          "24/7 emergency response — nights, weekends, holidays",
          "15-30 minute average arrival time in Burbank area",
          "No damage to your vehicle — professional tools only",
          "All makes and models — domestic, import, luxury",
          "Licensed, insured & NASTF approved",
          "Upfront pricing — no hidden fees",
        ],
        details: [
          "Call us and describe your location and vehicle. We dispatch immediately.",
          "Our licensed technician arrives in 15-30 minutes with professional tools.",
          "We safely unlock your vehicle with zero damage using specialized equipment.",
          "You're back on the road. We can also make spare keys on the spot if needed.",
        ],
        faqs: [
          { q: "How fast can you unlock my car?", a: "We typically arrive within 15-30 minutes in the Burbank area. The actual unlock usually takes 2-10 minutes depending on the vehicle." },
          { q: "Will you damage my car?", a: "No. We use professional locksmith tools designed for non-destructive entry. Your vehicle will have zero damage." },
          { q: "Do you unlock all car brands?", a: "Yes — Toyota, Honda, Nissan, Ford, BMW, Mercedes, Lexus, Audi, and all other makes and models." },
          { q: "How much does car lockout service cost?", a: "Pricing depends on your vehicle and time of day. Call for an instant quote — no hidden fees." },
        ],
      }}
    />
  );
}
