"use client";

import React from "react";
import { 
  Building2, 
  MapPin, 
  Radio, 
  Layers, 
  BellRing, 
  LineChart, 
  ArrowDown, 
  CheckCircle2, 
  Zap 
} from "lucide-react";

export default function SolutionSection() {
  const steps = [
    { title: "Parking Locations", desc: "Surface bays, multi-level towers, street curb spaces", icon: Building2 },
    { title: "Parking Slots", desc: "Digital mapping of each individual parking slot & bay", icon: MapPin },
    { title: "Real-Time Monitoring", desc: "Live sensory verification with wireless sub-second feedback", icon: Radio },
    { title: "PARQ Platform", desc: "Central cloud engine orchestrating telemetry, tariffs & access", icon: Layers, isCentral: true },
    { title: "Revenue & Alerts", desc: "Automated ticketless billing, enforcement & overstay alarms", icon: BellRing },
    { title: "Reports & Analytics", desc: "Executive KPI summaries, demand curves & predictive forecasts", icon: LineChart },
  ];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            <span>Integrated Smart Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            One Platform. Complete Parking Management.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            PARQ brings parking locations, slots, monitoring, revenue, alerts and analytics together in one centralized platform, eliminating operational silos and manual paperwork.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center p-5 rounded-3xl border transition-all duration-300 ${
                    step.isCentral
                      ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105"
                      : "bg-card border-border hover:border-primary/40 shadow-sm"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 ${
                      step.isCentral
                        ? "bg-white/20 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    step.isCentral ? "text-white/80" : "text-primary"
                  }`}>
                    Step {idx + 1}
                  </div>
                  <h4 className={`text-sm font-bold mb-1.5 ${step.isCentral ? "text-white" : "text-foreground"}`}>
                    {step.title}
                  </h4>
                  <p className={`text-[11px] leading-snug ${step.isCentral ? "text-white/85" : "text-muted-foreground"}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Flow Connector Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">
                Autonomous Loop
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                From Physical Parking Bay to Actionable Executive Intelligence
              </div>
            </div>
            <a
              href="#request-demo"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shrink-0"
            >
              See Architecture Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
