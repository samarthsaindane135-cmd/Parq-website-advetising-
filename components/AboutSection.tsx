"use client";

import React, { useState, useEffect } from "react";
import { 
  Car, 
  Activity, 
  LayoutDashboard, 
  LineChart, 
  Radio, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: "01",
      title: "Smart Parking",
      desc: "Intelligent slot sensing, automatic vehicle detection, and instant state synchronization.",
      icon: Car,
      tag: "Autonomous IoT Sensing",
      badge: "Real-time accuracy",
    },
    {
      id: "02",
      title: "Real-Time Monitoring",
      desc: "Live occupancy heatmaps and telemetry streams across ground and multi-level facilities.",
      icon: Activity,
      tag: "Sub-Second Telemetry",
      badge: "Live sensory stream",
    },
    {
      id: "03",
      title: "Centralized Management",
      desc: "Single-command multi-location control for cities, campuses, malls, and commercial hubs.",
      icon: LayoutDashboard,
      tag: "Unified Cloud Console",
      badge: "Multi-facility network",
    },
    {
      id: "04",
      title: "Data & Analytics",
      desc: "Deep predictive forecasting on peak congestion, dwell durations, and revenue yields.",
      icon: LineChart,
      tag: "Predictive Intelligence",
      badge: "Yield optimization",
    },
  ];

  // Pure automatic slider - slides every 3 seconds automatically without manual buttons
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/40 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (No Learn More button) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>About PARQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Transforming Parking <br className="hidden sm:inline" />
              <span className="text-primary">Management</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              PARQ Services Private Limited provides smart parking solutions that help parking authorities gain better control, real-time visibility and improved operational efficiency.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              By combining robust IoT edge hardware, cloud analytics, and operator-first interfaces, we replace manual guesswork with automated, high-yield parking operations.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Zero-friction ticketless ingress and egress</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Real-time occupancy synchronization</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Centralized revenue auditing and automated reporting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pure Automatic Sliding Card Deck */}
          <div className="lg:col-span-7 relative">
            
            {/* Automatic Slider Card Container */}
            <div className="relative rounded-[2.5rem] border border-border bg-card shadow-xl p-8 sm:p-12 overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              {/* Automatic Sliding Content Track */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="w-full shrink-0 pr-4">
                        {/* Top Badge */}
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">
                            <ItemIcon className="w-3.5 h-3.5" />
                            <span>{item.tag}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-primary font-mono font-bold bg-primary/5 px-2.5 py-1 rounded-full">
                            <span>0{idx + 1}</span>
                            <span className="text-muted-foreground/60">/</span>
                            <span className="text-muted-foreground/60">04</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
                          {item.desc}
                        </p>

                        {/* Status Tag */}
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                          <Radio className="w-3.5 h-3.5 animate-pulse" />
                          <span>{item.badge} active</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Auto-Slide Progress Bar Indicators (Pure Auto, No Manual Buttons) */}
              <div className="pt-8 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3 w-full">
                  {items.map((item, dotIdx) => (
                    <div 
                      key={dotIdx} 
                      className="flex-1 h-1.5 rounded-full bg-border overflow-hidden relative"
                    >
                      <div 
                        className={`h-full bg-primary transition-all duration-300 ${
                          dotIdx === activeIndex ? "w-full" : dotIdx < activeIndex ? "w-full opacity-40" : "w-0"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="ml-4 shrink-0 text-[11px] font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>Auto</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
