"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Car,
  Network,
  BrainCircuit,
  Navigation,
  Building,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Radio,
  Server,
  Activity,
  Zap,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function TechnologyPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const milestones = [
    {
      step: 1,
      number: "01",
      title: "Smart Parking",
      subtitle: "Sensor & Slot Digitization",
      status: "Enabling Evolution",
      isTarget: false,
      icon: Car,
      lead: "Establishing physical ground truth by digitizing individual parking stalls into real-time sensory endpoints.",
      detailedDesc: "The foundational layer of smart mobility. Every individual parking bay is equipped with dual-technology geomagnetic and optical surface sensors. This eliminates manual headcount estimation and creates a high-fidelity digital twin of the physical facility with sub-second occupancy change detection.",
      architectureLayer: "Edge Hardware & Spatial Sensing Layer",
      capabilities: [
        "Centimeter-precise spatial coordinate mapping and digital bay UUID generation",
        "Dual-technology sensing: 3-axis earth magnetic distortion + optical verification",
        "Sub-350 millisecond occupancy detection cycle with near-zero false triggers",
        "IP68 submersible hermetic sealing with 5+ year ultra-low power battery operation"
      ],
      techSpecs: [
        { label: "Sensing Array", value: "3-Axis AMR Magnetic + Optical" },
        { label: "State Refresh", value: "< 350ms Trigger" },
        { label: "Protection", value: "IP68 Submersible Grade" },
        { label: "Battery Life", value: "5+ Years Lithium Li-SOCl2" }
      ],
      image: "/images/hero-card-1.png"
    },
    {
      step: 2,
      number: "02",
      title: "Connected Parking",
      subtitle: "Cloud & IoT Ecosystem",
      status: "Enabling Evolution",
      isTarget: false,
      icon: Network,
      lead: "Unifying dispersed field hardware into a secure, high-throughput cloud telematics broker.",
      detailedDesc: "Edge sensor arrays, ANPR barrier cameras, and operator handhelds synchronize over ultra-low latency LoRaWAN, NB-IoT, and 4G networks to the PARQ Central Platform. Telemetry streams are processed in real time via an event-driven Apache Kafka pipeline with 99.99% uptime availability.",
      architectureLayer: "IoT Mesh & Cloud Telematics Broker",
      capabilities: [
        "Bi-directional telemetry streaming over encrypted MQTT with TLS 1.3 security",
        "Carrier-grade edge gateways aggregating up to 5,000 wireless sensor nodes",
        "Centralized operator console with multi-facility health telemetry and alert routing",
        "Open RESTful APIs and real-time Kafka event streams for BMS and ERP integration"
      ],
      techSpecs: [
        { label: "Protocol", value: "MQTT / LoRaWAN / TLS 1.3" },
        { label: "Throughput", value: "12,000+ Events/sec" },
        { label: "Cloud SLA", value: "99.99% High Availability" },
        { label: "Security", value: "SOC-2 Type II Certified" }
      ],
      image: "/images/authorityHome.jpeg"
    },
    {
      step: 3,
      number: "03",
      title: "Intelligent Parking",
      subtitle: "Predictive AI & Dynamic Tariffs",
      status: "Enabling Evolution",
      isTarget: false,
      icon: BrainCircuit,
      lead: "Harnessing machine-learning prediction models to forecast dwell times and optimize revenue yield.",
      detailedDesc: "Transforming passive monitoring into active operational intelligence. Historical dwell patterns, weather data, and calendar events feed gradient-boosted ML algorithms that forecast hourly demand curves. Dynamic pricing rules automatically adjust tariffs to balance facility loads and eliminate revenue loss.",
      architectureLayer: "Predictive AI Lakehouse & Policy Engine",
      capabilities: [
        "Seasonal gradient-boosted models forecasting bay demand up to 72 hours in advance",
        "Dynamic automated surge tariff adjustments to balance occupancy across peak hours",
        "Predictive overstay and violation detection with automated warden alerts",
        "Executive KPI summaries: RevPAS (Revenue Per Available Stall), turnover velocity, and dwell curves"
      ],
      techSpecs: [
        { label: "Analytics Engine", value: "OLAP Data Lakehouse" },
        { label: "Forecast Accuracy", value: "94.8% Demand Match" },
        { label: "Tariff Automation", value: "Rule-Based Dynamic Tiers" },
        { label: "Revenue Yield", value: "+34.5% Growth" }
      ],
      image: "/images/ParkingVisualized.jpeg"
    },
    {
      step: 4,
      number: "04",
      title: "Smart Mobility",
      subtitle: "Seamless Autonomous Ingress",
      status: "Enabling Evolution",
      isTarget: false,
      icon: Navigation,
      lead: "Eliminating driver friction with high-speed ANPR, FASTag auto-debit, and digital guidance.",
      detailedDesc: "The physical entry and exit barrier experience is re-engineered for total autonomy. Neural cameras scan vehicle license plates in under 0.3 seconds; barrier arms lift in 1.1 seconds; overhead LED indicators guide drivers turn-by-turn to their vacant stalls; fees clear automatically via FASTag.",
      architectureLayer: "Autonomous Access & Payment Clearing Layer",
      capabilities: [
        "Edge neural ANPR recognizing high-velocity license plates with 99.8% precision",
        "100% ticketless and window-up FASTag NETC / UPI auto-debit checkout",
        "Real-time turn-by-turn indoor wayfinding and overhead green/red bay LED indicators",
        "Instant digital GST tax invoices delivered directly via SMS and WhatsApp"
      ],
      techSpecs: [
        { label: "ANPR Latency", value: "< 300ms Recognition" },
        { label: "Gate Clearance", value: "1.4s Total Dwell" },
        { label: "Cruising Drop", value: "-65% Search Time" },
        { label: "Settlement", value: "100% Contactless Auto-Debit" }
      ],
      image: "/images/hero-parking-modern.jpg"
    },
    {
      step: 5,
      number: "05",
      title: "Better Cities",
      subtitle: "Zero-Congestion Urban Life",
      status: "Ultimate Destination",
      isTarget: true,
      icon: Building,
      lead: "Connecting macro-urban infrastructure to eliminate cruising traffic and decarbonize cities.",
      detailedDesc: "The ultimate destination of the PARQ roadmap. By networking thousands of private and public parking facilities into municipal Integrated Command and Control Centers (ICCC), cities eliminate the 30% of downtown traffic caused by drivers cruising for parking, dramatically slashing carbon emissions.",
      architectureLayer: "City-Scale Urban Mobility Network",
      capabilities: [
        "Open API telemetry streaming directly into municipal Integrated Command Centers (ICCC)",
        "Dynamic arterial curb management to balance traffic flows across urban districts",
        "Integration with public transport hubs for seamless park-and-ride intermodal transit",
        "Measurable urban carbon footprint reduction through eliminated cruising vehicle idling"
      ],
      techSpecs: [
        { label: "Urban Integration", value: "Municipal ICCC Command Feeds" },
        { label: "Traffic Reduction", value: "-35% Cruising Congestion" },
        { label: "Emission Impact", value: "Measurable CO2 Reductions" },
        { label: "Vision Status", value: "Ultimate Destination" }
      ],
      image: "/images/hero-card-2.png"
    }
  ];

  // Auto-play timeline simulation
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveMilestone((prev) => (prev + 1) % milestones.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, milestones.length]);

  const current = milestones[activeMilestone];
  const CurrentIcon = current.icon;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      
      {/* 1. Header Section */}
      <section className="py-14 lg:py-20 border-b border-border bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-bold tracking-wider uppercase">PARQ Evolution Roadmap</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto">
            Building the Future of Smart Parking
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PARQ is focused on creating smarter, more connected and efficient parking ecosystems for the future of urban mobility.
          </p>
        </div>
      </section>

      {/* 2. Interactive Progression Track (5 Milestones) */}
      <section className="py-10 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Evolutionary Progression
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                From Slot Sensors to Zero-Congestion Cities
              </h2>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2 bg-background p-1.5 rounded-2xl border border-border">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-all"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Auto Play</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveMilestone(0)}
                className="p-1.5 rounded-xl border border-border text-muted-foreground hover:text-foreground text-xs"
                title="Reset to Milestone 01"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Milestone Cards Track */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeMilestone === idx;

              return (
                <button
                  key={item.step}
                  onClick={() => {
                    setActiveMilestone(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-5 rounded-3xl border text-center flex flex-col items-center justify-between transition-all duration-300 cursor-pointer relative ${
                    isSelected
                      ? "bg-[#486070] text-white border-[#486070] shadow-xl shadow-[#486070]/25 scale-105"
                      : "bg-background border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSelected ? "text-white/80" : "text-primary"
                      }`}
                    >
                      Milestone 0{item.step}
                    </div>

                    <h3
                      className={`text-sm font-bold leading-snug ${
                        isSelected ? "text-white" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[11px] leading-tight line-clamp-1 ${
                        isSelected ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    className={`mt-4 pt-3 border-t w-full text-[10px] font-bold uppercase tracking-wider ${
                      isSelected
                        ? "border-white/20 text-white"
                        : item.isTarget
                        ? "border-border text-emerald-600 font-bold"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </div>

                  {/* Active Downward Indicator */}
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#486070] rotate-45" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Deep-Dive Showcase for Selected Milestone */}
      <section className="py-12 lg:py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-xl space-y-8">
            
            {/* Header of Active Milestone */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#486070] text-white flex items-center justify-center shadow-md shadow-[#486070]/20">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <span>Milestone {current.number}</span>
                    <span>•</span>
                    <span className={current.isTarget ? "text-emerald-600 font-bold" : "text-primary"}>
                      {current.status}
                    </span>
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
                  onClick={() => setActiveMilestone((prev) => (prev === 0 ? milestones.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl border border-border bg-background hover:bg-muted text-foreground transition-colors"
                  title="Previous Milestone"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold px-2 text-muted-foreground">
                  0{activeMilestone + 1} / 0{milestones.length}
                </span>
                <button
                  onClick={() => setActiveMilestone((prev) => (prev === milestones.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-xl border border-border bg-background hover:bg-muted text-foreground transition-colors"
                  title="Next Milestone"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Content: Visual on Left, Narrative & Capabilities on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Visual & Architecture Layer */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-md aspect-[16/11] bg-muted/20">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-primary">Architecture Level</span>
                    <div className="text-sm font-bold">{current.architectureLayer}</div>
                  </div>
                </div>

                {/* Tech Specs Matrix */}
                <div className="grid grid-cols-2 gap-2.5">
                  {current.techSpecs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-xl bg-background border border-border space-y-0.5">
                      <div className="text-[10px] text-muted-foreground uppercase font-semibold">
                        {spec.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-foreground">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Narrative & Detailed Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {current.lead}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {current.detailedDesc}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Core Technical Mechanisms:
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

      {/* 4. Complete 5-Stage Roadmap View */}
      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Evolutionary Timeline
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Every stage builds upon the previous layer to transition parking from disconnected physical lots to intelligent urban mobility.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isSelected = activeMilestone === idx;

              return (
                <div
                  key={m.step}
                  onClick={() => {
                    setActiveMilestone(idx);
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                    isSelected
                      ? "bg-background border-primary ring-2 ring-primary/20 shadow-xl scale-[1.01]"
                      : "bg-background/70 border-border hover:border-primary/50 hover:bg-background hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-primary">
                          Milestone 0{m.step}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground px-2 py-0.5 rounded-md bg-muted">
                          {m.status}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                        {m.title} — <span className="text-xs font-normal text-muted-foreground">{m.subtitle}</span>
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                        {m.lead}
                      </p>
                    </div>
                  </div>

                  <div className="self-end sm:self-center flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Inspect Layer</span>
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
            <span>Ready for Next-Gen Infrastructure?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Deploy PARQ Technology at Your Facility
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Take the first step in sensor and slot digitization or integrate your existing parking facilities into the cloud ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/#request-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Schedule Architecture Demo</span>
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

