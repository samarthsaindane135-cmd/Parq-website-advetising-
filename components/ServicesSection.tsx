"use client";

import React from "react";
import { 
  ArrowRight, 
  LayoutDashboard, 
  MapPin, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  Layers
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      badge: "COMMAND CENTER",
      title: "Centralized Dashboard",
      subtitle: "SINGLE-PANE VISIBILITY FOR ENTIRE PARKING OPERATIONS.",
      desc: "Manage and monitor live parking operations from one unified cloud console with granular role-based controls, multi-facility coordination, live occupancy heatmaps, and complete operational hierarchy.",
      features: [
        "Multi-tenant role permissions",
        "Live occupancy telemetry & heatmaps",
        "Unified facility hierarchy tree",
        "Instant remote gate & lane commands",
      ],
      cta: "Explore Centralized Dashboard",
      href: "#dashboard",
      image: "/images/authorityHome.jpeg",
      imageType: "app-mockup",
      badgeText: "Authority Cloud Console • 3 Nodes Online",
      badgeColor: "bg-emerald-400",
      theme: {
        card: "bg-[#24333c] text-white border border-white/10",
        title: "text-white",
        subtitle: "text-emerald-400 font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-[#c2d0d8]",
        eyebrow: "text-emerald-400 font-bold",
        chip: "bg-white/10 text-white border-white/15 hover:bg-white/20",
        dot: "bg-emerald-400",
        ctaBtn: "bg-white text-[#24333c] hover:bg-white/90 shadow-md",
        number: "text-white/15",
      },
    },
    {
      id: "02",
      badge: "SPATIAL CONTROL",
      title: "Slot & Location Management",
      subtitle: "MANAGE PARKING ZONES, AREAS & INDIVIDUAL SLOT HIERARCHIES.",
      desc: "Configure and manage surface lots, underground basements, and multi-level parking structures with ease. Define reserved VIP bays, EV charging stations, disabled access, and dynamic zone allocation.",
      features: [
        "Interactive spatial zone mapping",
        "Dedicated EV charging bay control",
        "VIP & reserved slot allocation",
        "Real-time slot availability state",
      ],
      cta: "Explore Slot Management",
      href: "#request-demo",
      image: "/images/hero-card-1.png",
      imageType: "photo",
      badgeText: "Spatial Zone Controller Active",
      badgeColor: "bg-emerald-500",
      theme: {
        card: "bg-white text-[#0b181c] border border-border/80 ring-1 ring-black/[0.04]",
        title: "text-[#0b181c]",
        subtitle: "text-[#516e7c] font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-[#516e7c]",
        eyebrow: "text-primary font-bold",
        chip: "bg-[#0b181c]/[0.04] text-[#0b181c] border-black/10 hover:bg-[#0b181c]/[0.08]",
        dot: "bg-primary",
        ctaBtn: "bg-[#24333c] text-white hover:bg-[#1b272f] shadow-md",
        number: "text-[#0b181c]/15",
      },
    },
    {
      id: "03",
      badge: "LIVE TELEMETRY",
      title: "Real-Time Monitoring",
      subtitle: "LIVE OCCUPANCY TELEMETRY & SENSOR STATUS SYNCHRONIZATION.",
      desc: "View live parking occupancy and operational status across all parking gates, surface lots, and multi-level decks. Autonomous IoT sensors detect slot states with sub-second accuracy, slashing search times by 65%.",
      features: [
        "Sub-second slot state sync",
        "Dynamic entrance LED guidance",
        "65% faster bay discovery",
        "Sensor battery & mesh health",
      ],
      cta: "Explore Real-Time Monitoring",
      href: "#request-demo",
      image: "/images/hero-card-2.png",
      imageType: "photo",
      badgeText: "Sub-Second Telemetry Stream • 99.4% Precision",
      badgeColor: "bg-emerald-400",
      theme: {
        card: "bg-[#516e7c] text-white border border-white/10",
        title: "text-white",
        subtitle: "text-white/80 font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-white/90",
        eyebrow: "text-white/90 font-bold",
        chip: "bg-white/15 text-white border-white/20 hover:bg-white/25",
        dot: "bg-white",
        ctaBtn: "bg-[#0b181c] text-white hover:bg-black shadow-md",
        number: "text-white/20",
      },
    },
    {
      id: "04",
      badge: "FINANCIAL AUDIT",
      title: "Revenue & Earnings",
      subtitle: "AUTOMATED BILLING, DIGITAL COLLECTIONS & RECONCILIATION.",
      desc: "Track parking revenue, transactions, and earnings with automated Fastag auto-debit, UPI QR codes, dynamic tariff management, and tamper-proof ledger auditing to eliminate manual cash pilferage.",
      features: [
        "Fastag & UPI automated collections",
        "Zero revenue leakage guarantee",
        "Dynamic congestion pricing engine",
        "Automated daily cashier shift audits",
      ],
      cta: "Explore Revenue Management",
      href: "#request-demo",
      image: "/images/StartEarningin4SimpleSteps.jpeg",
      imageType: "app-mockup",
      badgeText: "100% Audited Digital Ingress",
      badgeColor: "bg-emerald-400",
      theme: {
        card: "bg-[#0e171b] text-white border border-white/10",
        title: "text-white",
        subtitle: "text-[#93b4c4] font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-[#a4b5bf]",
        eyebrow: "text-primary font-bold",
        chip: "bg-white/10 text-white border-white/15 hover:bg-white/20",
        dot: "bg-primary",
        ctaBtn: "bg-primary text-white hover:bg-primary/90 shadow-md",
        number: "text-white/15",
      },
    },
    {
      id: "05",
      badge: "SECURITY & ENFORCEMENT",
      title: "Alerts & Violation Management",
      subtitle: "INSTANT DETECTION OF OVERSTAYS & UNAUTHORIZED PARKING.",
      desc: "Identify and manage parking violations and security alerts in real-time. Automated edge triggers alert staff to unauthorized bay occupancy, illegal double-parking, overstay durations, and blacklisted vehicles.",
      features: [
        "Unauthorized parking detection",
        "Automated overstay alert trigger",
        "Instant security marshal dispatch",
        "Blacklisted vehicle ANPR matching",
      ],
      cta: "Explore Violation Management",
      href: "#request-demo",
      image: "/images/hero-card-3.png",
      imageType: "photo",
      badgeText: "Real-Time Incident Detection Active",
      badgeColor: "bg-amber-400",
      theme: {
        card: "bg-[#1b272f] text-white border border-white/10",
        title: "text-white",
        subtitle: "text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-[#c2d0d8]",
        eyebrow: "text-amber-400 font-bold",
        chip: "bg-white/10 text-white border-white/15 hover:bg-white/20",
        dot: "bg-amber-400",
        ctaBtn: "bg-white text-[#1b272f] hover:bg-white/90 shadow-md",
        number: "text-white/15",
      },
    },
    {
      id: "06",
      badge: "DATA INTELLIGENCE",
      title: "Reports & Analytics",
      subtitle: "DEEP OPERATIONAL INSIGHTS & PREDICTIVE UTILIZATION TRENDS.",
      desc: "Understand parking facility performance through deep analytics. Uncover turnover rates, peak traffic arrival curves, average dwell durations, and predictive demand forecasts to maximize facility ROI.",
      features: [
        "Peak traffic arrival forecasting",
        "Dwell duration & turnover velocity",
        "Revenue per available slot (RevPAS)",
        "Automated audit compliance reports",
      ],
      cta: "Explore Reports & Analytics",
      href: "#dashboard",
      image: "/images/ManageEverythingFromYourPhone.jpeg",
      imageType: "app-mockup",
      badgeText: "Predictive Intelligence Active",
      badgeColor: "bg-primary",
      theme: {
        card: "bg-[#f6f9fb] text-[#0b181c] border border-[#d2d8dd] ring-1 ring-primary/20",
        title: "text-[#0b181c]",
        subtitle: "text-[#516e7c] font-semibold text-xs sm:text-sm tracking-wider uppercase",
        desc: "text-[#516e7c]",
        eyebrow: "text-primary font-bold",
        chip: "bg-[#516e7c]/10 text-[#516e7c] border-[#516e7c]/20 hover:bg-[#516e7c]/15",
        dot: "bg-primary",
        ctaBtn: "bg-[#24333c] text-white hover:bg-[#1b272f] shadow-md",
        number: "text-[#0b181c]/15",
      },
    },
  ];

  return (
    <section id="services" className="relative bg-[#f6f9fb] py-20 lg:py-28 overflow-visible border-b border-border">
      {/* Section Header matching PARQ Platform Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 lg:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Platform Services</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight mb-4">
          Our Services
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Complete tools to manage and monitor modern parking operations. Each service functions seamlessly together or as modular enhancements.
        </p>
      </div>

      {/* Stacking Cards Deck Container */}
      <div className="services-deck mx-auto flex flex-col w-[94%] sm:w-[90%] max-w-6xl relative pb-24 lg:pb-32 space-y-8 lg:space-y-12">
        {services.map((item, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={idx}
              className="services-card sticky transition-all duration-300"
              style={{
                top: `calc(84px + ${idx * 20}px)`,
                zIndex: 10 + idx,
              }}
            >
              <article
                style={{
                  transformOrigin: "center top",
                  minHeight: "480px",
                }}
                className={`relative overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_40px_90px_-25px_rgba(0,0,0,0.45)] ${item.theme.card}`}
              >
                <div
                  className={`flex h-full flex-col lg:items-center gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 xl:p-14 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Visual Media Column */}
                  <div className="relative w-full lg:w-[45%] h-[260px] sm:h-[320px] lg:h-[440px] rounded-[22px] sm:rounded-[28px] overflow-hidden group/img shrink-0 bg-black/10 border border-black/5 shadow-inner">
                    {item.imageType === "app-mockup" ? (
                      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#1b272f] to-[#0f171c] overflow-hidden">
                        {/* Ambient glow behind device */}
                        <div className="absolute w-48 h-48 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                        
                        {/* Phone device mockup */}
                        <div className="relative h-full max-h-[380px] aspect-[9/18.5] rounded-[2rem] border-[3px] border-white/20 shadow-2xl overflow-hidden bg-black group-hover/img:scale-105 transition-transform duration-500">
                          <img
                            src={item.image}
                            alt={`${item.title} interface`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>

                        {/* Floating live indicator */}
                        <div className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-lg">
                          <span className={`w-2 h-2 rounded-full ${item.badgeColor} animate-pulse`} />
                          <span>{item.badgeText}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${item.title} visual demonstration`}
                          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Floating status badge */}
                        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b272f]/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                          <span className={`w-2 h-2 rounded-full ${item.badgeColor} animate-pulse`} />
                          <span>{item.badgeText}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Description Column */}
                  <div className="flex w-full flex-1 flex-col justify-center gap-4 sm:gap-5 overflow-hidden">
                    {/* Eyebrow & Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase tracking-widest ${item.theme.eyebrow}`}>
                          {item.badge}
                        </span>
                      </div>

                      <span className={`font-mono text-3xl sm:text-4xl font-extrabold select-none ${item.theme.number}`}>
                        {item.id}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] ${item.theme.title}`}>
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className={`text-xs sm:text-sm font-semibold tracking-wide ${item.theme.subtitle}`}>
                      {item.subtitle}
                    </p>

                    {/* Description Paragraph */}
                    <p className={`text-sm sm:text-base leading-relaxed ${item.theme.desc}`}>
                      {item.desc}
                    </p>

                    {/* Feature Chips */}
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {item.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${item.theme.chip}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.theme.dot}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Link Button */}
                    <div className="pt-3">
                      <a
                        href={item.href}
                        className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 group/btn ${item.theme.ctaBtn}`}
                      >
                        <span>{item.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
