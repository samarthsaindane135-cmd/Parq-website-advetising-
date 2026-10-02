"use client";

import React from "react";
import { 
  Maximize2, 
  TrendingUp, 
  Sliders, 
  Smile, 
  CheckCircle2 
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Better Utilization",
      desc: "Make better use of available parking spaces by directing drivers immediately to open bays, minimizing empty slot time.",
      icon: Maximize2,
      metric: "+45%",
      metricLabel: "Bay Turnover",
    },
    {
      title: "Increased Revenue",
      desc: "Gain better visibility into parking earnings, eliminate cash leakages, and capture dynamic pricing during peak events.",
      icon: TrendingUp,
      metric: "+28%",
      metricLabel: "Net Yield",
    },
    {
      title: "Better Control",
      desc: "Manage parking operations from one platform with real-time audit trails, automated gates, and remote staff dispatch.",
      icon: Sliders,
      metric: "100%",
      metricLabel: "Central Audit",
    },
    {
      title: "Better Experience",
      desc: "Create a smoother parking experience for drivers, staff, and visitors with zero circling and instant contactless ingress/egress.",
      icon: Smile,
      metric: "-65%",
      metricLabel: "Search Time",
    },
  ];

  return (
    <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
          <span>Impact & Value</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Benefits of Smarter Parking
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Proven returns across facility utilization, bottom-line financial yield, operational governance, and customer satisfaction.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-baseline justify-between">
                <div>
                  <div className="text-2xl font-black text-primary">{item.metric}</div>
                  <div className="text-[11px] text-muted-foreground uppercase font-semibold">
                    {item.metricLabel}
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
