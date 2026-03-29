import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield, Star, MapPin, Wrench, Key, Car, Zap, ChevronRight, Award, CheckCircle, Cpu } from "lucide-react";
import { setSeoMeta } from "@/utils/seo";

import serviceCarLockout from "@/assets/service-car-lockout.jpg";
import serviceAllKeysLost from "@/assets/service-all-keys-lost.jpg";
import serviceKeyProgramming from "@/assets/service-key-programming.jpg";
import serviceIgnitionRepair from "@/assets/service-ignition-repair.jpg";
import serviceEcuProgramming from "@/assets/service-ecu-programming.jpg";
import toyotaLogo from "@/assets/brands/toyota-logo.png";
import hondaLogo from "@/assets/brands/honda-logo.png";
import fordLogo from "@/assets/brands/ford-logo.png";
import chevroletLogo from "@/assets/brands/chevrolet-logo.png";
import nissanLogo from "@/assets/brands/nissan-logo.png";
import kiaLogo from "@/assets/brands/kia-logo.png";
import hyundaiLogo from "@/assets/brands/hyundai-logo.png";

const PHONE = "8186061684";
const PHONE_DISPLAY = "(818) 606-1684";
const WHATSAPP = `https://wa.me/1${PHONE}`;

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">🔑 Burbank Auto Locksmith</h2>
          <p className="text-xs opacity-80">KPN Electronic Inc. • CA Lic# LCO8538</p>
        </div>
        <div className="flex items-center gap-2">
          <a href={`sms:${PHONE}`} className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-sm font-medium transition">
            <MessageCircle className="w-4 h-4" /> Text Us
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow transition hover:brightness-110">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-sm font-bold mb-4 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            24/7 Emergency Locksmith
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Locked Out? Lost Your Car Keys?<br />
            <span className="text-accent">We're There in 30 Minutes</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
            Fast, reliable mobile car locksmith in Burbank. Call now for immediate service.
          </p>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest opacity-60 mb-3">We service all major brands</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {[
                { src: "/assets/brands/toyota-logo.png", alt: "Toyota" },
                { src: "/assets/brands/honda-logo.png", alt: "Honda" },
                { src: "/assets/brands/ford-logo.png", alt: "Ford" },
                { src: "/assets/brands/chevrolet-logo.png", alt: "Chevrolet" },
                { src: "/assets/brands/nissan-logo.png", alt: "Nissan" },
                { src: "/assets/brands/kia-logo.png", alt: "Kia" },
                { src: "/assets/brands/hyundai-logo.png", alt: "Hyundai" },
              ].map(b => (
                <img key={b.alt} src={b.src} alt={b.alt} className="h-5 md:h-6 w-auto object-contain brightness-0 invert opacity-70" loading="lazy" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-bold text-xl shadow-xl animate-pulse-glow hover:brightness-110 transition">
              <Phone className="w-6 h-6" /> Call Now – {PHONE_DISPLAY}
            </a>
            <a href="#quote-section" className="inline-flex items-center gap-2 px-8 py-5 rounded-xl bg-white text-primary font-bold text-lg shadow-lg hover:bg-gray-100 transition">
              Get Instant Quote
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center items-center gap-8 md:gap-14 text-base md:text-lg font-bold text-white tracking-wide">
        <span className="flex items-center gap-2.5">
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" /> 5.0 Rating
        </span>
        <span className="hidden md:block w-px h-6 bg-white/25" />
        <span className="flex items-center gap-2.5">
          <Shield className="w-6 h-6 text-emerald-400" /> Licensed &amp; Insured
        </span>
        <span className="hidden md:block w-px h-6 bg-white/25" />
        <span className="flex items-center gap-2.5">
          <CheckCircle className="w-6 h-6 text-emerald-400" /> NASTF Approved
        </span>
        <span className="hidden md:block w-px h-6 bg-white/25" />
        <span className="flex items-center gap-2.5">
          <CheckCircle className="w-6 h-6 text-emerald-400" /> 1-Year Warranty
        </span>
      </div>
    </div>
  );
}
import toyotaLogo from "@/assets/brands/toyota-logo.png";
import hondaLogo from "@/assets/brands/honda-logo.png";
import fordLogo from "@/assets/brands/ford-logo.png";
import chevroletLogo from "@/assets/brands/chevrolet-logo.png";
import nissanLogo from "@/assets/brands/nissan-logo.png";
import kiaLogo from "@/assets/brands/kia-logo.png";
import hyundaiLogo from "@/assets/brands/hyundai-logo.png";

const smartKeyBrands = [
  { slug: "/smart-key-programming/toyota", label: "Toyota", logo: toyotaLogo },
  { slug: "/smart-key-programming/honda", label: "Honda", logo: hondaLogo },
  { slug: "/smart-key-programming/ford", label: "Ford", logo: fordLogo },
  { slug: "/smart-key-programming/chevrolet", label: "Chevrolet", logo: chevroletLogo },
  { slug: "/smart-key-programming/nissan", label: "Nissan", logo: nissanLogo },
  { slug: "/smart-key-programming/kia", label: "Kia", logo: kiaLogo },
  { slug: "/smart-key-programming/hyundai", label: "Hyundai", logo: hyundaiLogo },
];

function SmartKeyBrandsSection() {
  return (
    <section className="py-10 bg-muted">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-black text-foreground mb-2">Smart Key Programming by Brand</h2>
        <p className="text-muted-foreground text-sm mb-5">Select your vehicle brand for expert smart key programming in Burbank.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {smartKeyBrands.map(b => (
            <Link key={b.slug} to={b.slug} className="flex items-center gap-2.5 bg-card rounded-xl p-4 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all group">
              <img src={b.logo} alt={`${b.label} logo`} className="w-7 h-7 object-contain shrink-0" loading="lazy" width={28} height={28} />
              <span className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">{b.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
            </Link>
          ))}
          <Link to="/smart-key-programming" className="flex items-center gap-2.5 bg-accent/10 rounded-xl p-4 border border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <Key className="w-5 h-5 text-accent shrink-0" />
            <span className="font-semibold text-accent text-sm">All Brands →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function UrgencyBanner() {
  return (
    <div className="bg-accent text-accent-foreground py-3 text-center font-bold text-sm md:text-base">
      🚨 Emergency Locksmith Available Now — Fast Mobile Service in Burbank, Glendale &amp; North Hollywood
    </div>
  );
}

const services = [
  {
    icon: Car,
    title: "Emergency Car Lockout",
    description: "Locked out of your car? We'll get you back in fast — no damage to your vehicle. Available 24/7.",
    seoAnchor: "Emergency Car Lockout Service in Burbank",
    image: serviceCarLockout,
    emergency: true,
    link: "/car-lockout",
  },
  {
    icon: Key,
    title: "All Keys Lost Replacement",
    description: "Lost every key? We program brand-new keys on-site using OEM-level equipment, even with zero keys.",
    seoAnchor: "All Keys Lost Car Key Replacement in Burbank",
    image: serviceAllKeysLost,
    emergency: false,
    link: "/key-replacement",
  },
  {
    icon: Zap,
    title: "Key Programming (OEM & Aftermarket)",
    description: "Transponder keys, smart keys, push-to-start fobs — programmed on-site with dealer-level tools.",
    seoAnchor: "OEM Car Key Programming Burbank",
    image: serviceKeyProgramming,
    emergency: false,
    link: "/key-programming",
  },
  {
    icon: Wrench,
    title: "Ignition Repair & Replacement",
    description: "Key won't turn? Ignition stuck? We repair and replace ignitions for all makes and models.",
    seoAnchor: "Ignition Repair & Replacement in Burbank",
    image: serviceIgnitionRepair,
    emergency: false,
    link: "/ignition-repair",
  },
  {
    icon: Shield,
    title: "ECU / BCM / Immobilizer Work",
    description: "Advanced EEPROM programming, ECU/BCM module synchronization, and anti-theft system restoration.",
    seoAnchor: "ECU BCM Immobilizer Programming in Burbank",
    image: serviceEcuProgramming,
    emergency: false,
    link: null,
  },
];

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">Our Auto Locksmith Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional mobile car locksmith serving Burbank, Glendale, Pasadena, and North Hollywood.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center backdrop-blur-sm">
                    <s.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{s.description}</p>
                <p className="text-accent text-xs font-medium mb-3">{s.seoAnchor}</p>
                {s.link ? (
                  <Link to={s.link} className="inline-flex items-center gap-1 text-accent font-semibold hover:underline text-sm">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-1 text-accent font-semibold hover:underline text-sm">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.emergency ? `tel:${PHONE}` : '#quote-section'}
              className={`flex items-start gap-4 rounded-xl p-4 shadow-sm border active:scale-[0.98] transition-all ${s.emergency ? 'bg-red-600/5 border-red-600/30 ring-1 ring-red-600/10' : 'bg-card border-border'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.emergency ? 'bg-red-600/15' : 'bg-accent/15'}`}>
                <s.icon className={`w-6 h-6 ${s.emergency ? 'text-red-600' : 'text-accent'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{s.description}</p>
                <p className="text-accent text-xs font-medium mb-2">{s.seoAnchor}</p>
                <span className={`inline-flex items-center gap-1 font-semibold text-sm ${s.emergency ? 'text-red-600' : 'text-accent'}`}>
                  {s.emergency ? '📞 Call Now' : 'Get Instant Quote'} <ChevronRight className="w-4 h-4" />
                </span>
                <span className={`block text-[11px] mt-1 ${s.emergency ? 'text-red-600/60' : 'text-muted-foreground/60'}`}>
                  {s.emergency ? 'Tap to call instantly' : 'Tap for a free quote'}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg animate-pulse-glow hover:brightness-110 transition">
            <Phone className="w-5 h-5" /> Call Now – {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const badges = [
    { icon: Shield, label: "Licensed & Insured", sub: "CA License LCO8538" },
    { icon: Award, label: "NASTF Approved", sub: "Authorized Locksmith" },
    { icon: Star, label: "5.0 ★ Google Rating", sub: "Verified Business" },
    { icon: CheckCircle, label: "1-Year Warranty", sub: "On Key Replacements" },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-foreground mb-10">Why Choose Burbank Auto Locksmith?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.label} className="text-center p-6 rounded-2xl bg-muted">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <b.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">{b.label}</h3>
              <p className="text-sm text-muted-foreground">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function GoogleReviewsShowcase() {
  const GOOGLE_LINK = "https://maps.app.goo.gl/vtRt23VC2Bfv3Jd49";

  return (
    <section className="py-16 md:py-24 bg-card border-b border-border" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border mb-5 shadow-sm">
            <GoogleIcon className="w-5 h-5" />
            <span className="text-sm font-bold text-foreground tracking-wide uppercase">Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 leading-tight">
            Our Google Reviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See what our customers say on Google. Your honest feedback helps us improve.
          </p>
        </div>

        {/* Honest empty state — no fake reviews */}
        <div className="max-w-lg mx-auto mb-12 text-center bg-muted rounded-2xl p-10 border border-border">
          <GoogleIcon className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Be the First to Leave a Google Review</h3>
          <p className="text-muted-foreground mb-6">
            We'd love to hear about your experience. Your feedback helps others find trusted locksmith service in Burbank.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={GOOGLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all animate-pulse-glow"
            >
              <Star className="w-5 h-5 fill-current" /> Leave a Review
            </a>
            <a
              href={GOOGLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-muted border border-border text-foreground font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <GoogleIcon /> Read All Reviews
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            { icon: Shield, text: "Licensed & Insured" },
            { icon: Award, text: "NASTF Approved" },
            { icon: CheckCircle, text: "CA Lic# LCO8538" },
            { icon: Clock, text: "24/7 Emergency Service" },
          ].map((badge) => (
            <div key={badge.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground">
              <badge.icon className="w-4 h-4 text-accent" />
              {badge.text}
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0!2d-118.3!3d34.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf6a7574b0ab%3A0x2b29c5417503b072!2sBurbank%20Auto%20Locksmith!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Burbank Auto Locksmith Location"
          />
        </div>
        <div className="text-center mt-4">
          <a
            href={GOOGLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:brightness-110 transition"
          >
            <MapPin className="w-4 h-4" /> Open in Google Maps
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Serving Burbank, Glendale, North Hollywood, Pacoima & Granada Hills
          </p>
        </div>
      </div>
    </section>
  );
}

function MidPageCTA() {
  return (
    <section className="py-12 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-3">Need a Locksmith Right Now?</h2>
        <p className="text-lg opacity-90 mb-6">We arrive in 15-30 minutes. Licensed & Insured. Serving Burbank, Glendale, North Hollywood & more.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl hover:brightness-110 transition">
            <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/15 text-accent-foreground font-semibold text-lg border border-accent-foreground/30 hover:bg-accent-foreground/25 transition">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
          <a href={`sms:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-accent-foreground/10 text-accent-foreground font-semibold text-lg border border-accent-foreground/20 hover:bg-accent-foreground/20 transition">
            <MessageCircle className="w-5 h-5" /> Text Us
          </a>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string || "").slice(0, 500);
    const phone = (data.get("phone") as string || "").slice(0, 500);
    const vehicle = (data.get("vehicle") as string || "").slice(0, 500);
    const service = (data.get("service") as string || "").slice(0, 500);
    const msg = `Quote Request:\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nService: ${service}`;
    window.open(`https://wa.me/1${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-card" id="quote-section">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-foreground mb-2">Get a Free Quote</h2>
          <p className="text-muted-foreground">Tell us about your vehicle and we'll respond in minutes via WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-muted rounded-2xl p-6 md:p-8 border border-border">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Your Name</label>
            <input name="name" required maxLength={500} placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Phone Number</label>
            <input name="phone" type="tel" required maxLength={500} placeholder="(818) 555-0000" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Vehicle (Year, Make, Model)</label>
            <input name="vehicle" required maxLength={500} placeholder="2022 Toyota Camry" className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Service Needed</label>
            <select name="service" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Select a service...</option>
              <option>Emergency Car Lockout</option>
              <option>All Keys Lost Replacement</option>
              <option>Key Programming (OEM)</option>
              <option>Ignition Repair / Replacement</option>
              <option>ECU / BCM / Immobilizer</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="w-full px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg hover:brightness-110 transition">
            Send Quote Request via WhatsApp
          </button>
          <p className="text-xs text-muted-foreground text-center">We respond within minutes. No spam, ever.</p>
        </form>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = ["Burbank", "Glendale", "North Hollywood", "Pacoima", "Granada Hills"];
  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-foreground mb-4">Service Areas</h2>
        <p className="text-muted-foreground mb-6">Mobile auto locksmith serving the greater Burbank and San Fernando Valley area.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {areas.map((area) => (
            <span key={area} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How fast can you get to me if I'm locked out?",
    a: "We offer 24/7 emergency mobile service across Burbank, Glendale, North Hollywood, Pacoima, and Granada Hills. Our average response time is 15–30 minutes.",
  },
  {
    q: "Can you make a new car key if I lost all my keys?",
    a: "Yes! We specialize in all-keys-lost situations. Using OEM-level equipment, we can program brand-new keys on-site — even with zero existing keys — for most makes and models.",
  },
  {
    q: "Do you work on push-to-start and smart key vehicles?",
    a: "Absolutely. We program transponder keys, smart keys, and push-to-start fobs using dealer-level tools for vehicles from Toyota, Honda, Nissan, BMW, Mercedes, and more.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We operate under KPN Electronic Inc. with California Locksmith License LCO8538. We are fully insured and NASTF-approved for advanced key programming.",
  },
  {
    q: "How much does car key replacement cost?",
    a: "Pricing depends on the vehicle make, model, and key type. We offer free quotes — call us or send a text and we'll give you an upfront price with no hidden fees.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Yes, all key replacements and programming services come with a 1-year warranty. If anything goes wrong, we'll fix it at no additional cost.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-card border-t border-border" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our car locksmith services in Burbank.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-muted overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronRight
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-black text-foreground mb-4">About Our Business</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Burbank Auto Locksmith is the trade name of <strong>KPN Electronic Inc.</strong>, a California-licensed locksmith company 
          (CA Locksmith License: <strong>LCO8538</strong>). We operate as a <strong>mobile-only</strong> service — we come to your 
          location anywhere in Burbank, Glendale, North Hollywood, and surrounding areas.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-3">
          We provide professional OEM key programming for advanced vehicle security and immobilizer systems, 
          ensuring proper synchronization with your car's anti-theft system. Our technicians are NASTF-authorized 
          and use dealer-level equipment for all programming services.
        </p>
        <p className="text-sm text-muted-foreground italic">
          All services require valid proof of vehicle ownership and government-issued ID.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">🔑 Burbank Auto Locksmith</h3>
            <p className="text-sm opacity-80">KPN Electronic Inc.</p>
            <p className="text-sm opacity-80">CA License: LCO8538</p>
            <p className="text-sm opacity-80">Mobile Service — 7 Days a Week</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Services</h3>
            <Link to="/car-lockout" className="block text-sm opacity-80 hover:opacity-100 mb-1">Emergency Car Lockout</Link>
            <Link to="/key-replacement" className="block text-sm opacity-80 hover:opacity-100 mb-1">Car Key Replacement</Link>
            <Link to="/key-programming" className="block text-sm opacity-80 hover:opacity-100 mb-1">Key Programming</Link>
            <Link to="/ignition-repair" className="block text-sm opacity-80 hover:opacity-100">Ignition Repair</Link>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <a href={`tel:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100 mb-1">📞 {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 hover:opacity-100 mb-1">💬 WhatsApp</a>
            <a href={`sms:${PHONE}`} className="block text-sm opacity-80 hover:opacity-100">📱 Text Us</a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Service Areas</h3>
            <p className="text-sm opacity-80">Burbank • Glendale • North Hollywood</p>
            <p className="text-sm opacity-80">Pacoima • Granada Hills</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Burbank Auto Locksmith – KPN Electronic Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-2xl border-t border-primary-foreground/20" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex gap-2 p-3">
        <a href={`tel:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm animate-pulse-glow">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={`sms:${PHONE}`} className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-foreground/15 text-primary-foreground font-bold text-sm border border-primary-foreground/30">
          <MessageCircle className="w-4 h-4" /> Text Us
        </a>
      </div>
    </div>
  );
}

function FloatingReviewButton({ reviewsSectionRef }: { reviewsSectionRef: React.RefObject<HTMLDivElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!reviewsSectionRef.current) return;
      const rect = reviewsSectionRef.current.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reviewsSectionRef]);

  if (!visible) return null;

  return (
    <a
      href="https://maps.app.goo.gl/vtRt23VC2Bfv3Jd49"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-2xl hover:brightness-110 hover:-translate-y-0.5 transition-all animate-fade-in bottom-20 md:bottom-6"
    >
      <Star className="w-4 h-4 fill-current" /> Leave a Review ⭐
    </a>
  );
}

export default function Index() {
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSeoMeta({
      title: "Car Locksmith Burbank | Mobile Key Programming & Ignition Repair – Burbank Auto Locksmith",
      description: "Burbank Auto Locksmith — mobile car locksmith specializing in key programming, smart keys, EEPROM/BCM/ECU programming, ignition repair. 15–30 min response. Licensed & insured.",
      slug: "/",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBar />
      <SmartKeyBrandsSection />
      <UrgencyBanner />
      <div ref={reviewsRef}>
        <GoogleReviewsShowcase />
      </div>
      <TrustSection />
      <ServicesSection />
      <MidPageCTA />
      <QuoteForm />
      <ServiceAreas />
      <FAQSection />
      <AboutSection />
      <Footer />
      <MobileStickyBar />
      <FloatingReviewButton reviewsSectionRef={reviewsRef} />
    </div>
  );
}
