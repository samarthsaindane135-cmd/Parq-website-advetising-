"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Radio,
  Layers,
  BellRing,
  LineChart,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Clock,
  Wifi,
  Server,
  FileCheck,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Activity,
  Car,
  Smartphone
} from "lucide-react";

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const CYCLE_DURATION = 5000; // 5 seconds per solution in auto mode

  const solutions = [
    {
      id: "locations",
      number: "01",
      title: "Location Digitization",
      subtitle: "Spatial Mapping & Zone...",
      fullSubtitle: "Spatial Mapping & Zone Hierarchy",
      icon: Building2,
      badge: "Spatial Architecture",
      tagline: "Digitize physical parking facilities into high-precision spatial digital twins with custom zone hierarchies.",
      desc: "Every parking environment—surface bays, multi-level towers, basement plazas, and street curb spaces—is mapped into real-time vector coordinate meshes. Administrators configure multi-floor spatial zones, vehicular entry/exit lanes, directional wayfinding vectors, and designated user access privileges.",
      motionType: "spatial-grid",
      capabilities: [
        "Multi-level floor hierarchy mapping (B2, B1, Ground, Multi-Tier, Rooftop)",
        "Georeferenced vector polygon grid with centimeter-accurate spatial boundaries",
        "Zoning classification: Visitor, Corporate Tenant, Reserved VIP, Valet Staging",
        "Automated CAD/BIM blueprint import with instant lane and stall vectorization"
      ],
      specs: [
        { label: "Mapping Format", value: "GeoJSON Vector Mesh" },
        { label: "Supported Facilities", value: "MLCP, Surface, Curbs" },
        { label: "Coordinate Accuracy", value: "±2cm Geo-anchored" },
        { label: "Zone Granularity", value: "Sub-zone & Bay-level" }
      ],
      impactMetrics: [
        { label: "Digitization Speed", value: "< 48 Hours" },
        { label: "Floor Level Support", value: "Unlimited Levels" },
        { label: "Spatial Accuracy", value: "99.9%" }
      ]
    },
    {
      id: "slots",
      number: "02",
      title: "Slot-Level Intelligence",
      subtitle: "Micro-bay Identity &...",
      fullSubtitle: "Micro-bay Identity & Configuration",
      icon: MapPin,
      hasDot: true, // Red dot accent matching user design
      badge: "Granular Bay Control",
      tagline: "Assign unique digital identity, granular vehicle categories, and dynamic policies to every single bay.",
      desc: "Go beyond aggregate facility counts. Every individual parking slot is tagged with a unique cryptographic UUID. Operators assign granular dimensions, specific stall classes (Standard, SUV, Compact, EV Fast-Charging, Accessible/ADA, VIP Reserved), dynamic hourly tariff bands, and real-time reservation holds.",
      motionType: "slot-matrix",
      capabilities: [
        "Unique cryptographic UUID and QR identifier generated for every stall",
        "8 distinct parameterized vehicle classes (Sedan, SUV, EV Charger, Disabled, Two-Wheeler)",
        "Dynamic tariff rules mapped to individual bay categories and peak utilization hours",
        "Remote reservation locking and emergency maintenance disablement"
      ],
      specs: [
        { label: "Stall Classification", value: "8 Distinct Parameterized Classes" },
        { label: "Policy Engine", value: "Dynamic Tariff Rules via Cloud Broker" },
        { label: "State Sync", value: "Sub-second synchronized registry" },
        { label: "Reservation Buffer", value: "5 min to 72 hr pre-booking window" }
      ],
      impactMetrics: [
        { label: "Space Utilization", value: "+32% Boost" },
        { label: "EV Bay Turn Ratio", value: "4.2x Daily" },
        { label: "Classification Errors", value: "Zero" }
      ]
    },
    {
      id: "monitoring",
      number: "03",
      title: "Real-Time Sensor Telemetry",
      subtitle: "Dual-Tech Occupancy...",
      fullSubtitle: "Dual-Tech Occupancy Verification",
      icon: Radio,
      badge: "IoT Telemetry Hardware",
      tagline: "Ultra-fast vehicle detection powered by dual geomagnetic and optical edge sensor arrays.",
      desc: "Combines 3-axis geomagnetic earth field distortion sensing with optical/ultrasonic verification to detect vehicle arrival and departure events with 99.4% precision. Hermetically sealed IP68 hardware operates in severe weather with 5+ year battery life and sub-second wireless telemetry over LoRaWAN or NB-IoT.",
      motionType: "sensor-waveform",
      capabilities: [
        "Dual-sensing array: 3-axis geomagnetic distortion + optical verification",
        "Sub-350ms occupancy change detection and cloud state synchronization",
        "IP68 submersible weatherproof enclosure designed for high-impact vehicular wheel rolls",
        "Ultra-low power LoRaWAN / NB-IoT mesh with 5+ year lithium battery longevity"
      ],
      specs: [
        { label: "Sensing Mechanism", value: "3-Axis Magnetic + Optical Verification" },
        { label: "Detection Latency", value: "< 350ms State Change Trigger" },
        { label: "Ingress Protection", value: "IP68 Submersible & Hermetically Sealed" },
        { label: "Wireless Protocol", value: "LoRaWAN / NB-IoT / MQTT TLS 1.3" }
      ],
      impactMetrics: [
        { label: "Sensor Accuracy", value: "99.4%" },
        { label: "Battery Lifespan", value: "5+ Years" },
        { label: "False Positives", value: "< 0.1%" }
      ]
    },
    {
      id: "platform",
      number: "04",
      title: "PARQ Central Platform",
      subtitle: "Cloud Telematics &...",
      fullSubtitle: "Cloud Telematics & Orchestration Core",
      icon: Layers,
      badge: "Cloud Telematics Core",
      tagline: "The central cloud engine uniting edge telemetry, gate barriers, tariffs, and operator portals.",
      desc: "The nerve center of PARQ. Unifies real-time sensor streams, ANPR license plate cameras, dynamic LED guidance displays, barrier arms, and POS handhelds into one high-availability command engine. Enterprise multi-tenant architecture supports role-based access for facility owners, concessionaires, and ground attendants.",
      motionType: "cloud-pipeline",
      capabilities: [
        "High-throughput event engine processing 12,000+ telemetry events per second",
        "Seamless integration with boom barriers, ANPR cameras, and digital display totems",
        "Multi-tenant role-based permissions (Super Admin, Facility Manager, Cashier, Warden)",
        "Open RESTful APIs and Kafka webhooks for BMS, ERP, and smart city command integration"
      ],
      specs: [
        { label: "Platform SLA", value: "99.99% High Availability Uptime" },
        { label: "Event Pipeline", value: "Apache Kafka Streaming Architecture" },
        { label: "API Standards", value: "REST, GraphQL & Webhooks (TLS 1.3)" },
        { label: "Compliance", value: "SOC-2 Type II & ISO 27001 Certified" }
      ],
      impactMetrics: [
        { label: "Platform Uptime", value: "99.99%" },
        { label: "Throughput", value: "12,000+ evt/s" },
        { label: "Latency", value: "< 120ms Global" }
      ]
    },
    {
      id: "revenue",
      number: "05",
      title: "Revenue & Enforcement Alerts",
      subtitle: "Automated Collections &...",
      fullSubtitle: "Automated Collections & Leakage Guard",
      icon: BellRing,
      badge: "Automated Revenue & Alarms",
      tagline: "Frictionless automated digital ticketing, FASTag reconciliation, and instant violation alerts.",
      desc: "Eliminate manual cash leakages and exit bottleneck queues. Vehicles are debited automatically via FASTag or dynamic UPI QR codes. Instant automated alerts notify security and marshals of overstay violations, lane obstructions, or unauthorized parking in reserved/handicap spaces.",
      motionType: "revenue-flow",
      capabilities: [
        "Automatic FASTag NETC vehicle clearance and contactless UPI/Card payments",
        "100% auditable digital receipts instantly delivered to drivers via SMS & WhatsApp",
        "Immediate overstay and unauthorized bay occupancy push notifications",
        "Mobile enforcement app for ground security with license plate citation scanner"
      ],
      specs: [
        { label: "Payment Channels", value: "FASTag NETC, UPI QR, Credit/Debit, POS" },
        { label: "Reconciliation", value: "100% automated settlement with zero loss" },
        { label: "Alert Dispatch", value: "< 1.2s push notification to marshals" },
        { label: "Receipt Format", value: "GST-compliant instant digital invoices" }
      ],
      impactMetrics: [
        { label: "Cash Leakage", value: "0.00% Zero Loss" },
        { label: "Gate Clearance", value: "1.4s Dwell" },
        { label: "Auto Collections", value: "94.2% Contactless" }
      ]
    },
    {
      id: "analytics",
      number: "06",
      title: "Predictive Analytics & KPI",
      subtitle: "Executive Forecasting & Yield...",
      fullSubtitle: "Executive Forecasting & Yield Optimization",
      icon: LineChart,
      badge: "Predictive Intelligence",
      tagline: "Empower leadership with predictive dwell patterns, occupancy curves, and yield management.",
      desc: "Transform raw sensory logs into actionable commercial intelligence. Track peak occupancy curves, turnover velocity, average dwell times, revenue per available stall (RevPAS), and carbon emission reductions. Machine-learning models recommend optimal dynamic pricing strategies for maximum yield.",
      motionType: "analytics-curves",
      capabilities: [
        "Real-time and historical turnover rates, average dwell, and peak utilization trends",
        "AI-driven dynamic pricing recommendations based on demand patterns and holidays",
        "Automated scheduled executive reports delivered via PDF and Excel exports",
        "City-scale traffic load and environmental emission reduction calculations"
      ],
      specs: [
        { label: "Data Pipeline", value: "Sub-minute OLAP Analytics Lakehouse" },
        { label: "Forecasting Model", value: "Seasonal Gradient-Boosted Predictors" },
        { label: "Export Formats", value: "Automated PDF, CSV, Excel & REST API" },
        { label: "Key Metrics", value: "RevPAS, Dwell, Turnover, Leakage, CO2" }
      ],
      impactMetrics: [
        { label: "Revenue Growth", value: "+34.5% Yield" },
        { label: "Turnover Velocity", value: "3.8 Cars/Bay/Day" },
        { label: "Report Generation", value: "Instant 1-Click" }
      ]
    }
  ];

  // Auto-progression effect with high-frequency progress bar animation
  useEffect(() => {
    let progressTimer: NodeJS.Timeout | null = null;

    if (isAutoPlaying) {
      const stepInterval = 50; // update progress every 50ms
      const increment = (stepInterval / CYCLE_DURATION) * 100;

      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveTab((currentTab) => (currentTab + 1) % solutions.length);
            return 0;
          }
          return prev + increment;
        });
      }, stepInterval);
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [isAutoPlaying, solutions.length]);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  const current = solutions[activeTab];
  const CurrentIcon = current.icon;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      
      {/* 1. Hero Section — Dramatic Asymmetric Split */}
      <section className="relative overflow-hidden border-b border-border bg-[#0a1219]">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#516e7c 1px, transparent 1px), linear-gradient(90deg, #516e7c 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500/8 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px]">

            {/* LEFT — Kinetic Headline + Live Counters */}
            <div className="flex flex-col justify-center py-16 lg:py-20 pr-0 lg:pr-16 space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  Live Operational Platform
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
                  Six Intelligent<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-emerald-400">
                    Solutions.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                  Every layer of the PARQ stack — from geomagnetic sensor to cloud dashboard — engineered for zero-friction, zero-leakage smart parking operations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "99.4%", label: "Detection Accuracy", color: "text-cyan-400" },
                  { value: "12K+", label: "Events / Second", color: "text-emerald-400" },
                  { value: "<350ms", label: "Sensor Latency", color: "text-purple-400" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className={`text-xl sm:text-2xl font-black font-mono ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
                <span className="w-6 h-px bg-slate-600 inline-block" />
                Interact with the motion architecture below ↓
              </p>
            </div>

            {/* RIGHT — Dark Terminal Live-Feed Panel */}
            <div className="hidden lg:flex flex-col justify-center py-16 border-l border-slate-800 pl-10">
              <div className="rounded-2xl bg-[#0c1920] border border-slate-700/60 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/70 border-b border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-[11px] font-mono text-slate-500">PARQ TELEMETRY STREAM — LIVE</span>
                </div>

                <div className="p-5 space-y-2 font-mono text-[11px] overflow-hidden">
                  {[
                    { time: "18:42:31.004", type: "SENSOR", msg: "Bay A-14 → OCCUPIED • AMR flux Δ 3.2mT", color: "text-emerald-400" },
                    { time: "18:42:31.219", type: "ANPR", msg: "MH12-AB-1234 → PLATE MATCHED • Barrier OPEN", color: "text-cyan-400" },
                    { time: "18:42:32.007", type: "PAYMENT", msg: "FASTag #8821 → AUTO DEBIT ₹60.00 CLEARED", color: "text-emerald-400" },
                    { time: "18:42:32.440", type: "ALERT", msg: "Bay C-08 OVERSTAY +35min → MARSHAL DISPATCH", color: "text-amber-400" },
                    { time: "18:42:33.102", type: "CLOUD", msg: "Kafka EVT #PRQ-89211 → 12,480 evt/s pipeline", color: "text-purple-400" },
                    { time: "18:42:33.558", type: "SENSOR", msg: "Bay B-03 → VACANT • Slot state SYNC <22ms", color: "text-slate-400" },
                    { time: "18:42:34.001", type: "ANALYTICS", msg: "Peak demand 18:00–20:30 • RevPAS +34.5%", color: "text-cyan-300" },
                    { time: "18:42:34.320", type: "SENSOR", msg: "Bay D-11 → OCCUPIED • EV charger START 82%", color: "text-emerald-400" },
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 animate-pulse"
                      style={{ animationDuration: `${3 + i * 0.7}s`, animationDelay: `${i * 0.15}s` }}
                    >
                      <span className="text-slate-600 shrink-0">{line.time}</span>
                      <span className="text-slate-700 shrink-0">[{line.type}]</span>
                      <span className={line.color}>{line.msg}</span>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-3 bg-slate-900/70 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    STREAM ACTIVE
                  </span>
                  <span className="text-slate-600">SLA: 99.99% uptime</span>
                  <span className="text-cyan-500">TLS 1.3 ENCRYPTED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 6 SOLUTION TABS */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Horizontal tabs */}
          <div className="overflow-x-auto pb-4 pt-1 no-scrollbar">
            <div className="flex lg:grid lg:grid-cols-6 gap-3 min-w-[780px] lg:min-w-0">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(idx)}
                    className={`relative p-4 sm:p-5 rounded-[1.25rem] text-left transition-all duration-300 flex flex-col justify-between cursor-pointer group shrink-0 w-[155px] lg:w-auto min-h-[145px] overflow-hidden ${
                      isSelected
                        ? "bg-[#486070] text-white shadow-xl shadow-[#486070]/25 scale-[1.02]"
                        : "bg-white border border-[#dce3e8] text-foreground hover:border-primary/50 hover:shadow-md"
                    }`}
                  >
                    {/* Active Tab Progress Line */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-75 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}

                    {/* Top Row: Number badge + Icon */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <span
                        className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          isSelected ? "bg-white/20 text-white" : "bg-[#edf2f5] text-[#6b7c85]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.hasDot && !isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                        )}
                        <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSelected ? "text-white" : "text-[#586b75]"}`} />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className={`text-[13px] sm:text-sm font-bold leading-tight mb-1 ${isSelected ? "text-white" : "text-[#162329]"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[11px] leading-tight line-clamp-1 ${isSelected ? "text-white/80" : "text-[#85959e]"}`}>
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Active downward arrow */}
                    {isSelected && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#486070] rotate-45 rounded-sm" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC MOTION GRAPHIC SHOWCASE STAGE (Replacing static manual card with live animated graphics) */}
      <section className="py-12 lg:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10 lg:p-12 shadow-xl space-y-10">
            
            {/* Header of Active Solution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#486070] text-white flex items-center justify-center shadow-md shadow-[#486070]/20">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <span>Solution {current.number}</span>
                    <span>•</span>
                    <span className="text-emerald-600">{current.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-0.5">
                    {current.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {current.fullSubtitle}
                  </p>
                </div>
              </div>

              {/* Prev / Next Solution Quick Switcher */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => {
                    handleTabClick(activeTab === 0 ? solutions.length - 1 : activeTab - 1);
                  }}
                  className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
                  title="Previous Solution"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold px-2 text-muted-foreground">
                  {activeTab + 1} / {solutions.length}
                </span>
                <button
                  onClick={() => {
                    handleTabClick(activeTab === solutions.length - 1 ? 0 : activeTab + 1);
                  }}
                  className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-colors"
                  title="Next Solution"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Screen: LEFT = MOTION GRAPHIC CANVAS, RIGHT = TECHNICAL ARCHITECTURE DETAILS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: HIGH-TECH MOTION GRAPHIC VISUALIZER */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0c151a] text-white shadow-2xl min-h-[380px] p-6 flex flex-col justify-between">
                  
                  {/* Motion Graphic Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">
                        LIVE TELEMETRY MOTION ENGINE
                      </span>
                    </div>
                    <span>NODE: PRQ-{current.number}0X</span>
                  </div>

                  {/* DYNAMIC MOTION GRAPHIC BASED ON ACTIVE SOLUTION */}
                  <div className="py-6 flex-grow flex items-center justify-center relative">
                    
                    {/* 1. MOTION GRAPHIC: LOCATION DIGITIZATION (3D Spatial Radar & Polygon Vector Grid) */}
                    {current.motionType === "spatial-grid" && (
                      <div className="w-full h-full flex flex-col items-center justify-center space-y-4 relative">
                        {/* Radar sweep circle */}
                        <div className="relative w-52 h-52 rounded-full border border-cyan-500/30 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20 animate-spin" style={{ animationDuration: '14s' }} />
                          <div className="w-36 h-36 rounded-full border border-cyan-500/40 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full border border-cyan-500/60 flex items-center justify-center bg-cyan-500/10">
                              <Building2 className="w-8 h-8 text-cyan-300 animate-pulse" />
                            </div>
                          </div>

                          {/* Radar scanning sweep line */}
                          <div
                            className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-transparent to-transparent pointer-events-none animate-spin"
                            style={{ animationDuration: '4s' }}
                          />

                          {/* Floating Zone Blips */}
                          <span className="absolute top-8 left-10 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="absolute bottom-10 right-12 w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '1s' }} />
                          <span className="absolute top-16 right-10 w-2 h-2 rounded-full bg-amber-400 animate-ping" style={{ animationDelay: '2s' }} />
                        </div>

                        {/* Spatial Coordinate Telemetry Bar */}
                        <div className="flex items-center justify-between w-full px-2 text-[10px] font-mono text-cyan-400/90 pt-2">
                          <span>GIS: ±2cm WGS84 ANCHOR</span>
                          <span>LEVELS: B2-4F STACKED</span>
                          <span className="text-emerald-400">14 ZONES ACTIVE</span>
                        </div>
                      </div>
                    )}

                    {/* 2. MOTION GRAPHIC: SLOT-LEVEL INTELLIGENCE (Interactive Dynamic Micro-Bay Grid) */}
                    {current.motionType === "slot-matrix" && (
                      <div className="w-full space-y-4">
                        <div className="grid grid-cols-4 gap-2.5">
                          {[
                            { name: "A-01", type: "EV FAST", color: "border-cyan-400 bg-cyan-500/15 text-cyan-300", status: "CHARGING 82%" },
                            { name: "A-02", type: "SEDAN", color: "border-emerald-400 bg-emerald-500/15 text-emerald-300", status: "OCCUPIED" },
                            { name: "A-03", type: "VIP RES", color: "border-purple-400 bg-purple-500/15 text-purple-300", status: "WHITELIST" },
                            { name: "A-04", type: "OPEN", color: "border-slate-600 bg-slate-800/40 text-slate-400", status: "VACANT" },
                            { name: "B-01", type: "SUV", color: "border-emerald-400 bg-emerald-500/15 text-emerald-300", status: "OCCUPIED" },
                            { name: "B-02", type: "DISABLED", color: "border-blue-400 bg-blue-500/15 text-blue-300", status: "PRIORITY" },
                            { name: "B-03", type: "OPEN", color: "border-slate-600 bg-slate-800/40 text-slate-400", status: "VACANT" },
                            { name: "B-04", type: "EV FAST", color: "border-cyan-400 bg-cyan-500/15 text-cyan-300", status: "CHARGING 45%" }
                          ].map((stall, i) => (
                            <div
                              key={i}
                              className={`p-2.5 rounded-xl border ${stall.color} text-center font-mono space-y-1 transition-all duration-300 hover:scale-105`}
                            >
                              <div className="text-[11px] font-bold">{stall.name}</div>
                              <div className="text-[8px] opacity-80 uppercase">{stall.type}</div>
                              <div className="text-[9px] font-black">{stall.status}</div>
                            </div>
                          ))}
                        </div>

                        {/* Live Status Pill */}
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span>DYNAMIC UUID ACTIVE</span>
                          </span>
                          <span className="text-emerald-400">RATE: ₹40/HR DYNAMIC</span>
                        </div>
                      </div>
                    )}

                    {/* 3. MOTION GRAPHIC: REAL-TIME SENSOR TELEMETRY (Live Waveform Oscilloscope & RF Beam) */}
                    {current.motionType === "sensor-waveform" && (
                      <div className="w-full space-y-5 flex flex-col items-center justify-center">
                        
                        {/* Waveform Visualization */}
                        <div className="w-full h-28 relative rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden flex items-center px-4">
                          <svg className="w-full h-20" viewBox="0 0 400 80">
                            <path
                              d="M 0 40 Q 25 15 50 40 T 100 40 T 150 10 T 200 70 T 250 40 T 300 40 T 350 20 T 400 40"
                              fill="none"
                              stroke="#06b6d4"
                              strokeWidth="2.5"
                              className="animate-pulse"
                            />
                            <path
                              d="M 0 40 Q 25 30 50 40 T 100 40 T 150 25 T 200 55 T 250 40 T 300 40 T 350 30 T 400 40"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="1.5"
                              opacity="0.6"
                            />
                          </svg>
                          <div className="absolute top-2 left-3 text-[10px] font-mono text-cyan-400">
                            AMR 3-AXIS MAGNETIC FLUX DISTORTION
                          </div>
                        </div>

                        {/* Telemetry packet details */}
                        <div className="w-full grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-300 text-center">
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">LATENCY</div>
                            <div className="text-cyan-300 font-bold">22ms PING</div>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">BATTERY</div>
                            <div className="text-emerald-400 font-bold">3.6V (5Y+)</div>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">PROTOCOL</div>
                            <div className="text-purple-300 font-bold">LoRaWAN</div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 4. MOTION GRAPHIC: PARQ CENTRAL PLATFORM (Cloud Core & Radiating Circuit Nodes) */}
                    {current.motionType === "cloud-pipeline" && (
                      <div className="w-full space-y-4">
                        {/* Central Hub and 4 Satellites */}
                        <div className="relative py-6 flex items-center justify-center">
                          
                          {/* Center Cloud Hub */}
                          <div className="w-20 h-20 rounded-2xl bg-primary text-white flex flex-col items-center justify-center shadow-lg shadow-primary/40 z-10 animate-pulse">
                            <Server className="w-8 h-8" />
                            <span className="text-[9px] font-mono font-bold mt-1">CLOUD</span>
                          </div>

                          {/* Circuit Connector Lines */}
                          <div className="absolute inset-x-8 h-0.5 bg-gradient-to-r from-cyan-400 via-primary to-emerald-400" />
                          <div className="absolute inset-y-2 w-0.5 bg-gradient-to-b from-purple-400 via-primary to-amber-400" />

                          {/* 4 Peripheral Satellite Nodes */}
                          <div className="absolute left-2 p-2 rounded-xl bg-slate-900 border border-cyan-500/50 text-[10px] font-mono text-cyan-300">
                            ANPR GATE
                          </div>
                          <div className="absolute right-2 p-2 rounded-xl bg-slate-900 border border-emerald-500/50 text-[10px] font-mono text-emerald-300">
                            POS APP
                          </div>
                          <div className="absolute top-0 p-2 rounded-xl bg-slate-900 border border-purple-500/50 text-[10px] font-mono text-purple-300">
                            LED VMS
                          </div>
                          <div className="absolute bottom-0 p-2 rounded-xl bg-slate-900 border border-amber-500/50 text-[10px] font-mono text-amber-300">
                            DRIVER APP
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono flex items-center justify-between text-slate-300">
                          <span className="text-cyan-300">THROUGHPUT: 12,480 EVT/S</span>
                          <span className="text-emerald-400 font-bold">99.99% HIGH AVAILABILITY</span>
                        </div>
                      </div>
                    )}

                    {/* 5. MOTION GRAPHIC: REVENUE & ENFORCEMENT ALARMS (Instant Settlement & Alert Stream) */}
                    {current.motionType === "revenue-flow" && (
                      <div className="w-full space-y-4">
                        {/* Automated FASTag Clearing Receipt */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/40 text-slate-100 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>FASTag AUTO-DEBIT CLEARED</span>
                            </span>
                            <span className="text-emerald-400 font-bold font-mono">₹60.00</span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 leading-tight">
                            TXN: #PRQ-89210 • 1.4s DWELL • ZERO MANUAL CASH LEAKAGE
                          </div>
                        </div>

                        {/* Real-time Violation Sentinel Warning */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 to-slate-900 border border-amber-500/40 text-slate-100 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                              <BellRing className="w-4 h-4 animate-bounce" />
                              <span>OVERSTAY SENTINEL ALERT</span>
                            </span>
                            <span className="text-amber-400 font-bold font-mono">BAY C-08</span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 leading-tight">
                            VEHICLE OVERSTAY EXCEEDED (+35m) • MARSHAL NOTIFICATION DISPATCHED
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 6. MOTION GRAPHIC: PREDICTIVE ANALYTICS & KPI (Dynamic Occupancy Curves & AI Demand) */}
                    {current.motionType === "analytics-curves" && (
                      <div className="w-full space-y-4">
                        {/* Dynamic SVG Histogram and Curve */}
                        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <div className="flex justify-between text-[10px] font-mono text-slate-400">
                            <span>HOURLY DEMAND FORECASTER</span>
                            <span className="text-cyan-400">PEAK PREDICTION: 18:00 - 20:30</span>
                          </div>

                          {/* Histogram Bars with smooth animation */}
                          <div className="flex items-end gap-1.5 h-20 pt-2">
                            {[30, 45, 60, 85, 98, 92, 75, 50, 35, 20].map((h, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <div
                                  className="w-full rounded-t-sm bg-gradient-to-t from-primary to-cyan-400 transition-all duration-500"
                                  style={{ height: `${h}%` }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metric Ticker */}
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">YIELD UPLIFT</div>
                            <div className="text-emerald-400 font-bold">+34.5%</div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">DAILY TURNOVER</div>
                            <div className="text-cyan-400 font-bold">3.8x BAYS</div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                            <div className="text-slate-500">CONGESTION DROP</div>
                            <div className="text-purple-400 font-bold">-65%</div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Motion Graphic Footer Bar */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>CRYPTOGRAPHIC STATE SYNC</span>
                    </span>
                    <span className="text-cyan-400">AUTO-CYCLE: 5.0s</span>
                  </div>

                </div>

                {/* 3 Quantifiable Impact Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-card border border-border">
                  {current.impactMetrics.map((metric, i) => (
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

              {/* RIGHT COLUMN: DETAILED ARCHITECTURAL CAPABILITIES & STANDARDS */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                    {current.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Core Architectural Capabilities:
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

                {/* Technical Specifications Matrix */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Technical Specifications & Standards:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.specs.map((spec, i) => (
                      <div key={i} className="p-3 rounded-xl bg-card border border-border space-y-0.5">
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

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom CTA — Diagonal Split Design */}
      <section className="relative overflow-hidden bg-[#0a1219]">

        {/* Diagonal divider at the top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-card"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        />

        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#516e7c 1px, transparent 1px), linear-gradient(90deg, #516e7c 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-emerald-500/8 rounded-full blur-[60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — Architecture Metric Schematic */}
            <div className="space-y-5">
              <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-6">
                Platform Performance Matrix
              </div>

              {/* 4 KPI cards in a 2×2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "⚡", label: "Detection Latency", value: "<350ms", sub: "Geomagnetic + Optical", color: "border-cyan-500/30 bg-cyan-500/5" },
                  { icon: "🔒", label: "Platform Uptime", value: "99.99%", sub: "SOC-2 Certified", color: "border-emerald-500/30 bg-emerald-500/5" },
                  { icon: "💰", label: "Revenue Leakage", value: "0.00%", sub: "FASTag + UPI Auto-debit", color: "border-purple-500/30 bg-purple-500/5" },
                  { icon: "📈", label: "Yield Improvement", value: "+34.5%", sub: "AI Dynamic Pricing", color: "border-amber-500/30 bg-amber-500/5" },
                ].map((kpi, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${kpi.color} space-y-1`}>
                    <div className="text-lg">{kpi.icon}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{kpi.label}</div>
                    <div className="text-xl font-black font-mono text-white">{kpi.value}</div>
                    <div className="text-[10px] text-slate-600">{kpi.sub}</div>
                  </div>
                ))}
              </div>

              {/* Live pulse nodes — mini architecture schematic */}
              <div className="flex items-center gap-3 pt-2 flex-wrap">
                {["ANPR GATE", "SENSOR MESH", "CLOUD CORE", "POS & PAY", "ANALYTICS"].map((node, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                    {node}
                    {i < 4 && <span className="text-slate-800 ml-1">—</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Call to Action */}
            <div className="space-y-7">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-bold text-xs uppercase tracking-wider">Deploy PARQ</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Ready to transform<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                    your parking?
                  </span>
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                  Our systems engineering team evaluates your facility, conducts on-site telemetry audits, and delivers a custom deployment roadmap — in under 48 hours.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "48hr Deployment Audit" },
                  { label: "IP68 Hardware" },
                  { label: "ISO 27001 Certified" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 px-3 py-1.5 rounded-full border border-slate-700 bg-white/5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    {badge.label}
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#request-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Request Facility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
