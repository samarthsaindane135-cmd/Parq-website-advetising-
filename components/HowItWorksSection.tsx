"use client";

import React from "react";
import { 
  FolderPlus, 
  Activity, 
  ShieldAlert, 
  BarChart3, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Manage",
      desc: "Add locations, structures, zones and individual parking slots effortlessly.",
      icon: FolderPlus,
    },
    {
      num: "02",
      title: "Monitor",
      desc: "Track parking activity, vehicle flow and bay occupancy in real time.",
      icon: Activity,
    },
    {
      num: "03",
      title: "Respond",
      desc: "Handle alerts, unauthorized parking and violations with automated escalations.",
      icon: ShieldAlert,
    },
    {
      num: "04",
      title: "Analyze",
      desc: "View reports, financial statements and multi-facility parking insights.",
      icon: BarChart3,
    },
    {
      num: "05",
      title: "Optimize",
      desc: "Improve parking turnover, reduce city congestion and maximize revenue yield.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <span>Operational Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            How PARQ Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A simple 5-step continuous cycle engineered for frictionless operations and maximum efficiency.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 text-[11px] font-semibold text-primary flex items-center gap-1">
                  <span>Phase {step.num}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
