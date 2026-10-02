"use client";

import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Car, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Bell, 
  Search, 
  Filter, 
  ArrowUpRight, 
  RefreshCw, 
  ChevronRight, 
  ShieldAlert 
} from "lucide-react";

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="dashboard" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title & Copy */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
          <span>Command Center Interface</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Everything You Need. At a Glance.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Get a complete view of your parking operations through a centralized and intuitive dashboard.
        </p>
      </div>

      {/* Dashboard Mockup Container */}
      <div className="rounded-[2.5rem] border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Dashboard Top Header Bar */}
        <div className="bg-foreground text-background px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-sm">
              P
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>PARQ Enterprise Console</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                  LIVE SYSTEM
                </span>
              </div>
              <div className="text-xs text-white/60">Multi-Facility Parking Network</div>
            </div>
          </div>

          {/* Quick Stats in Header */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-white/70 hidden sm:inline">Last Sync: 12 sec ago</span>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gateway Online</span>
            </div>
          </div>
        </div>

        {/* Dashboard Body Area */}
        <div className="p-6 lg:p-8 space-y-6 bg-muted/20">
          {/* Key Metric Tiles Required: Locations, Slots, Occupied, Available, Revenue, Alerts */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Total Locations */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="text-xs font-semibold uppercase">Total Locations</span>
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-black text-foreground">28</div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">Active nationwide</div>
            </div>

            {/* Total Slots */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="text-xs font-semibold uppercase">Total Slots</span>
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-black text-foreground">4,820</div>
              <div className="text-[11px] text-muted-foreground font-medium mt-1">Digitally mapped</div>
            </div>

            {/* Occupied */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="text-xs font-semibold uppercase">Occupied</span>
                <Car className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-black text-primary">3,615</div>
              <div className="text-[11px] text-primary font-medium mt-1">75% capacity</div>
            </div>

            {/* Available */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="text-xs font-semibold uppercase">Available</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-2xl font-black text-emerald-600">1,205</div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">Vacant bays ready</div>
            </div>

            {/* Revenue */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between text-muted-foreground mb-2">
                <span className="text-xs font-semibold uppercase">Revenue Today</span>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-2xl font-black text-foreground">₹2.45L</div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">+18.2% vs yesterday</div>
            </div>

            {/* Alerts */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 shadow-sm">
              <div className="flex items-center justify-between text-amber-700 mb-2">
                <span className="text-xs font-semibold uppercase">Active Alerts</span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl font-black text-amber-700">03</div>
              <div className="text-[11px] text-amber-700 font-medium mt-1">2 overstay, 1 blocked</div>
            </div>
          </div>

          {/* Sub-Panel: Live Occupancy Matrix + Incident Feeds */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Live Visual Map / Slots */}
            <div className="lg:col-span-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-foreground text-base">Terminal A - South Wing Deck</h4>
                  <p className="text-xs text-muted-foreground">Real-time status of individual smart sensors</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs font-medium text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Occupied
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Vacant
                  </span>
                </div>
              </div>

              {/* Slot Grid Graphic */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                {[
                  { id: "S-101", occ: true },
                  { id: "S-102", occ: true },
                  { id: "S-103", occ: false },
                  { id: "S-104", occ: true },
                  { id: "S-105", occ: false },
                  { id: "S-106", occ: true },
                  { id: "S-107", occ: true },
                  { id: "S-108", occ: false },
                  { id: "S-109", occ: false },
                  { id: "S-110", occ: true },
                  { id: "S-111", occ: true },
                  { id: "S-112", occ: true },
                  { id: "S-113", occ: false },
                  { id: "S-114", occ: false },
                  { id: "S-115", occ: true },
                  { id: "S-116", occ: true },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-2.5 text-center border font-mono transition-all ${
                      s.occ
                        ? "bg-primary/10 border-primary/40 text-primary font-bold"
                        : "bg-emerald-500/10 border-emerald-500/40 text-emerald-700 font-medium"
                    }`}
                  >
                    <div className="text-[10px] opacity-75">{s.id}</div>
                    <div className="text-xs mt-1">{s.occ ? "OCC" : "VAC"}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Operational Alerts Feed */}
            <div className="lg:col-span-4 rounded-3xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-foreground text-base">Real-time Activity</h4>
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-muted/60 border border-border text-xs space-y-1">
                    <div className="flex justify-between font-bold text-foreground">
                      <span>Vehicle Checked In</span>
                      <span className="text-muted-foreground font-normal">2m ago</span>
                    </div>
                    <p className="text-muted-foreground">DL-01-AB-2394 parked at Slot S-106</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-amber-800">
                      <span>Overstay Detected</span>
                      <span className="text-amber-700 font-normal">7m ago</span>
                    </div>
                    <p className="text-amber-800">Slot S-042 exceeded 3-hour max duration</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-muted/60 border border-border text-xs space-y-1">
                    <div className="flex justify-between font-bold text-foreground">
                      <span>Automated Payment</span>
                      <span className="text-muted-foreground font-normal">11m ago</span>
                    </div>
                    <p className="text-muted-foreground">₹120 collected via FASTag/UPI for HR-26-4421</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border mt-4">
                <a
                  href="#request-demo"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
