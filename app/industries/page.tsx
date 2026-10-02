"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Landmark,
  Globe2,
  Building2,
  Briefcase,
  ShoppingBag,
  Cross,
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Activity,
  Layers,
  Radio,
  Clock
} from "lucide-react";

export default function IndustriesPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const sectors = [
    {
      id: "parking-authorities",
      title: "Parking Authorities",
      subtitle: "Regional Oversight & Concessionaire Governance",
      desc: "Centralized regional management, regulatory oversight and automated concessionaire compliance.",
      icon: ShieldCheck,
      badge: "Governance & Compliance",
      detailedOverview: "Empower state and regional transport authorities with single-pane visibility across multiple concessionaires, private operators, and public parking facilities. Enforce uniform tariff caps, verify real-time occupancy telemetry, and audit revenue streams automatically.",
      capabilities: [
        "Multi-concessionaire centralized registry and regional license verification",
        "Automated revenue reconciliation and royalty disbursement auditing",
        "Unified compliance monitoring with penalty triggers for unauthorized tariff surges",
        "Standardized GIS spatial mapping for all designated municipal parking zones"
      ],
      metrics: [
        { label: "Audit Accuracy", value: "100.0%" },
        { label: "Concessionaire Uptime", value: "99.9%" },
        { label: "Regulatory Reporting", value: "Instant 1-Click" }
      ],
      image: "/images/authorityHome.jpeg"
    },
    {
      id: "municipal-authorities",
      title: "Municipal Authorities",
      subtitle: "Civic Curb Management & Congestion Mitigation",
      desc: "On-street and off-street civic curb management to reduce city congestion and boost municipal revenues.",
      icon: Landmark,
      badge: "Civic Infrastructure",
      detailedOverview: "Modernize urban curb management with edge geomagnetic sensors and automated mobile warden enforcement. Eliminate unauthorized double-parking, recover municipal parking tax revenues, and alleviate arterial cruising traffic across commercial districts.",
      capabilities: [
        "On-street micro-bay wireless sensing with 5+ year battery lifespan",
        "Warden mobile app equipped with instant plate-scanning citation generation",
        "Dynamic zoning tariffs to balance peak downtown parking demand",
        "Public parking open data API for city-wide navigation integration"
      ],
      metrics: [
        { label: "On-Street Revenue", value: "+42% Yield" },
        { label: "Cruising Congestion", value: "-35% Drop" },
        { label: "Warden Efficiency", value: "3.4x Faster" }
      ],
      image: "/images/hero-parking-modern.jpg"
    },
    {
      id: "smart-cities",
      title: "Smart Cities",
      subtitle: "Integrated Urban Mobility & Command Centers",
      desc: "IoT-connected urban mobility infrastructure integrated into command-and-control centers.",
      icon: Globe2,
      badge: "Connected Mobility",
      detailedOverview: "Seamlessly link physical parking assets directly to Integrated Command and Control Centers (ICCC). Feed live occupancy heatmaps into city traffic lights, municipal transit apps, and public variable message displays (VMS) for coordinated urban mobility.",
      capabilities: [
        "Real-time bidirectional Kafka streaming to municipal ICCC dashboards",
        "Integration with urban variable messaging signs (VMS) at major road junctions",
        "Environmental monitoring correlation (reduced vehicle idling and CO2 tracking)",
        "Transit hub intermodal parking synchronization with metros and bus corridors"
      ],
      metrics: [
        { label: "ICCC Sync Latency", value: "< 250ms" },
        { label: "Downtown Emissions", value: "-18% Carbon" },
        { label: "Data Integrity", value: "99.99% SLA" }
      ],
      image: "/images/ParkingVisualized.jpeg"
    },
    {
      id: "commercial-parking",
      title: "Commercial Parking",
      subtitle: "High-Throughput Plazas & Yield Maximization",
      desc: "High-throughput ticketless plazas, automated tariffs, fast settlement and dynamic surge pricing.",
      icon: Building2,
      badge: "Revenue Maximization",
      detailedOverview: "Engineered for high-volume commercial parking plazas, multi-tier car parks, and transit interchanges. Eliminate barrier queues with sub-second license plate recognition, automated FASTag payments, and algorithmic dynamic surge tariffs.",
      capabilities: [
        "High-velocity barrier clearance (under 1.4 seconds per vehicle)",
        "100% ticketless operation with FASTag auto-debit and dynamic UPI QR",
        "Demand-responsive surge tariffs that maximize revenue during peak events",
        "Automated digital tax receipts dispatched directly to driver mobile phones"
      ],
      metrics: [
        { label: "Gate Clearance", value: "1.4s Dwell" },
        { label: "Revenue Leakage", value: "0.00% Zero Loss" },
        { label: "Turnover Boost", value: "+28% Yield" }
      ],
      image: "/images/StartEarningin4SimpleSteps.jpeg"
    },
    {
      id: "corporate",
      title: "Corporate",
      subtitle: "Enterprise Campus Mobility & Staff Allocation",
      desc: "Employee slot allocation, visitor pre-booking passes and VIP bay security reservation.",
      icon: Briefcase,
      badge: "Enterprise Campuses",
      detailedOverview: "Simplify campus parking for Fortune 500 tech parks and corporate headquarters. Automate employee ingress via RFID or whitelisted license plates, allocate department bay quotas, and reserve executive bays with overhead digital indicator control.",
      capabilities: [
        "Employee self-service slot booking and carpooling priority perks",
        "Visitor pre-registration with automated QR access passes via email/SMS",
        "Guaranteed VIP and executive reserved stall protection with smart LED overrides",
        "Tenant-level monthly parking allocation and corporate payroll integration"
      ],
      metrics: [
        { label: "Morning Gate Queues", value: "-78% Delay" },
        { label: "Space Utilization", value: "+32% Capacity" },
        { label: "Guard Workload", value: "-4.5 hrs/day" }
      ],
      image: "/images/hero-card-2.png"
    },
    {
      id: "shopping-malls",
      title: "Shopping Malls",
      subtitle: "Frictionless Shopper Flow & Retail Validation",
      desc: "Frictionless weekend retail parking, real-time LED bay signage and rapid FASTag checkout.",
      icon: ShoppingBag,
      badge: "Retail & Entertainment",
      detailedOverview: "Transform the mall customer journey from the moment they arrive. Overhead bay sensors and directional LED indicators guide shoppers directly to open bays, while retail POS integration validates free parking based on store purchases.",
      capabilities: [
        "Overhead aisle wayfinding arrows guiding shoppers to vacant bays in real time",
        "Retailer POS purchase barcode scanning for instant parking validation discounts",
        "Frictionless FASTag exit without lines or rolled-down windows during peak weekend rushes",
        "Digital valet tracking: live digital claim checks and vehicle summon via smartphone"
      ],
      metrics: [
        { label: "Cruising Search Time", value: "-62% Quicker" },
        { label: "Weekend Spend Boost", value: "+14% Sales" },
        { label: "Shopper CSAT", value: "4.9 / 5.0" }
      ],
      image: "/images/hero-card-1.png"
    },
    {
      id: "hospitals",
      title: "Hospitals",
      subtitle: "Zero-Latency Emergency & Healthcare Access",
      desc: "Emergency priority lane clearances, reserved doctor slots and compassionate patient access.",
      icon: Cross,
      badge: "Healthcare Facilities",
      detailedOverview: "Ensure zero delay where every second matters. Clear emergency access corridors for ambulances, guarantee doctor on-call parking with automated barrier bypass, and provide stress-free accessible bays for elderly patients.",
      capabilities: [
        "Dedicated automatic bypass lanes for ambulances and emergency response personnel",
        "Doctor on-call reserved bays equipped with high-visibility priority LED indicators",
        "Wheelchair-accessible stall reservations with direct pathway routing to clinics",
        "Compassionate visitor capped tariffs and patient inpatient barcode validation"
      ],
      metrics: [
        { label: "Emergency Lane Clear", value: "< 40 secs" },
        { label: "Doctor Arrival Delay", value: "-85% Reduced" },
        { label: "Bay Disputes", value: "Near Zero" }
      ],
      image: "/images/hero-card-3.png"
    },
    {
      id: "residential-communities",
      title: "Residential Communities",
      subtitle: "Gated Enclave Security & Resident Protection",
      desc: "Gated society resident bay protections, guest vehicle logs and overstay alert automation.",
      icon: Home,
      badge: "Residential Enclaves",
      detailedOverview: "Safeguard residential societies, condominiums, and gated communities. Prevent unauthorized visitors from taking resident assigned stalls, log visitor arrivals digitally, and automate overstay notifications to security teams.",
      capabilities: [
        "Resident assigned bay protection with automatic ANPR gate clearance",
        "Digital guest pre-approval passes integrated with resident intercom apps",
        "Automated overstay alarms for unauthorized vehicles parked in designated bays",
        "Real-time visitor parking capacity status displayed at entry security kiosks"
      ],
      metrics: [
        { label: "Resident Satisfaction", value: "98.5%" },
        { label: "Unauthorized Stalls", value: "0 Incidents" },
        { label: "Guard Logging Speed", value: "2.8x Faster" }
      ],
      image: "/images/ManageEverythingFromYourPhone.jpeg"
    }
  ];

  const current = sectors[activeIdx];
  const CurrentIcon = current.icon;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      
      {/* 1. Header Section */}
      <section className="py-14 lg:py-20 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-bold tracking-wider uppercase">Sectors & Applications</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto">
            Built for Modern Parking Environments
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Delivering tailored smart parking systems across multiple sectors to meet distinct operational needs.
          </p>
        </div>
      </section>

      {/* 2. Interactive Sector Selector (8 Horizontal Pills) */}
      <section className="py-8 bg-background border-b border-border sticky top-[68px] z-30 backdrop-blur-md bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar justify-start lg:justify-center">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#486070] text-white shadow-md shadow-[#486070]/25 scale-105"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Showcase for Selected Sector */}
      <section className="py-12 lg:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 lg:p-12 shadow-xl space-y-8">
            
            {/* Sector Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#486070] text-white flex items-center justify-center shadow-md shadow-[#486070]/20">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <span>Sector 0{activeIdx + 1}</span>
                    <span>•</span>
                    <span className="text-emerald-600">{current.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-0.5">
                    {current.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? sectors.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
                  title="Previous Sector"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold px-2 text-muted-foreground">
                  0{activeIdx + 1} / 0{sectors.length}
                </span>
                <button
                  onClick={() => setActiveIdx((prev) => (prev === sectors.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
                  title="Next Sector"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid Layout: Visual on Left, Narrative & Capabilities on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Visual & Impact Metrics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-md aspect-[16/11] bg-muted/20">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-primary">Deployment Profile</span>
                    <div className="text-sm font-bold">{current.title}</div>
                  </div>
                </div>

                {/* Impact Metric Chips */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-card border border-border">
                  {current.metrics.map((metric, i) => (
                    <div key={i} className="text-center space-y-0.5">
                      <div className="text-lg sm:text-xl font-black font-mono text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Narrative & Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {current.desc}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {current.detailedOverview}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Tailored Operational Capabilities:
                  </h4>
                  <div className="space-y-2">
                    {current.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Complete 8-Sector Grid Overview */}
      <section className="py-16 lg:py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              All 8 Sectors at a Glance
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Select any sector below to inspect its dedicated architecture profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={sec.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    window.scrollTo({ top: 280, behavior: "smooth" });
                  }}
                  className={`flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? "bg-card border-primary ring-2 ring-primary/20 shadow-xl -translate-y-1"
                      : "bg-card/70 border-border hover:border-primary/50 hover:bg-card hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Inspect Sector</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Tailored Deployment?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Schedule a Sector-Specific Consultation
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Our systems architecture team evaluates your specific facility constraints and designs a customized IoT rollout plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/#request-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Request Sector Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base transition-all"
            >
              <span>Back to Overview</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

