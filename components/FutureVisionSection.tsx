"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Car, 
  Network, 
  BrainCircuit, 
  Navigation, 
  Building 
} from "lucide-react";

export default function FutureVisionSection() {
  const roadmap = [
    { label: "Smart Parking", sub: "Sensor & Slot Digitization", icon: Car },
    { label: "Connected Parking", sub: "Cloud & IoT Ecosystem", icon: Network },
    { label: "Intelligent Parking", sub: "Predictive AI & Dynamic Tariffs", icon: BrainCircuit },
    { label: "Smart Mobility", sub: "Seamless Autonomous Ingress", icon: Navigation },
    { label: "Better Cities", sub: "Zero-Congestion Urban Life", icon: Building, isTarget: true },
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Urban Mobility Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Building the Future of Smart Parking
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            PARQ is focused on creating smarter, more connected and efficient parking ecosystems for the future of urban mobility.
          </p>
        </div>

        {/* Visual Progression Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {roadmap.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 border text-center flex flex-col items-center justify-between transition-all duration-300 ${
                  item.isTarget
                    ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/25 scale-105"
                    : "bg-card border-border shadow-sm hover:border-primary/40"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    item.isTarget ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    item.isTarget ? "text-white/80" : "text-primary"
                  }`}>
                    Milestone 0{idx + 1}
                  </div>
                  <h4 className={`text-base font-bold mb-1 ${
                    item.isTarget ? "text-white" : "text-foreground"
                  }`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs ${
                    item.isTarget ? "text-white/80" : "text-muted-foreground"
                  }`}>
                    {item.sub}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 w-full flex items-center justify-center text-[10px] font-semibold">
                  {item.isTarget ? "Ultimate Destination" : "Enabling Evolution"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
