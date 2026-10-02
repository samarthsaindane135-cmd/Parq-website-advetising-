"use client";

import React from "react";
import { 
  Building2, 
  Landmark, 
  Globe2, 
  Store, 
  Briefcase, 
  ShoppingBag, 
  Cross, 
  Home, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Parking Authorities",
      desc: "Centralized regional management, regulatory oversight and automated concessionaire compliance.",
      icon: ShieldCheck,
    },
    {
      title: "Municipal Authorities",
      desc: "On-street and off-street civic curb management to reduce city congestion and boost municipal revenues.",
      icon: Landmark,
    },
    {
      title: "Smart Cities",
      desc: "IoT-connected urban mobility infrastructure integrated into command-and-control centers.",
      icon: Globe2,
    },
    {
      title: "Commercial Parking",
      desc: "High-throughput ticketless plazas, automated tariffs, fast settlement and dynamic surge pricing.",
      icon: Building2,
    },
    {
      title: "Corporate",
      desc: "Employee slot allocation, visitor pre-booking passes and VIP bay security reservation.",
      icon: Briefcase,
    },
    {
      title: "Shopping Malls",
      desc: "Frictionless weekend retail parking, real-time LED bay signage and rapid FASTag checkout.",
      icon: ShoppingBag,
    },
    {
      title: "Hospitals",
      desc: "Emergency priority lane clearances, reserved doctor slots and compassionate patient access.",
      icon: Cross,
    },
    {
      title: "Residential Communities",
      desc: "Gated society resident bay protections, guest vehicle logs and overstay alert automation.",
      icon: Home,
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <span>Sectors & Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Built for Modern Parking Environments
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Delivering tailored smart parking systems across multiple sectors to meet distinct operational needs.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border group hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {ind.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
