import { Wrench } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function IgnitionRepair() {
  return (
    <ServicePageLayout
      page={{
        slug: "/ignition-repair",
        title: "Ignition Repair",
        metaTitle: "Ignition Repair Burbank | Key Won't Turn Fix – Burbank Auto Locksmith",
        metaDescription: "Ignition stuck or key won't turn? Mobile ignition repair & replacement in Burbank. All makes & models. Same-day service. Licensed & insured. Call now!",
        h1: "Ignition Repair & Replacement in Burbank",
        heroText: "Key won't turn? Ignition stuck? We diagnose and repair ignition problems on-site. Same-day service for all makes and models across Burbank.",
        icon: Wrench,
        benefits: [
          "Ignition cylinder repair and replacement",
          "Key-won't-turn diagnosis and fix",
          "Ignition switch replacement",
          "Steering column lock repair",
          "All makes and models — domestic and import",
          "Same-day mobile service — no tow needed",
        ],
        details: [
          "Describe your ignition problem — stuck key, won't turn, no start, etc.",
          "Our technician arrives and diagnoses the exact issue on-site.",
          "We repair or replace the ignition cylinder, switch, or related components.",
          "We test the repair thoroughly and ensure your vehicle starts reliably.",
        ],
        faqs: [
          { q: "Why won't my key turn in the ignition?", a: "Common causes include a worn ignition cylinder, a damaged key, steering wheel lock engagement, or an anti-theft system issue. We diagnose and fix all of these." },
          { q: "Can you fix my ignition without replacing it?", a: "Often yes — many ignition issues can be repaired without full replacement, saving you money. We always try repair first." },
          { q: "How much does ignition repair cost?", a: "Pricing varies by vehicle and issue. Call for a free diagnosis and upfront quote — no hidden fees." },
          { q: "Do I need to tow my car to you?", a: "No! We're a mobile service. We come to your location and perform all work on-site." },
        ],
      }}
    />
  );
}
