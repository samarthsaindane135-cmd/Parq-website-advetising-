"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Headphones, 
  Calendar, 
  Clock 
} from "lucide-react";

export default function RequestDemoSection() {
  return (
    <section id="request-demo" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[2.5rem] bg-foreground text-background p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-border">
        {/* Glow decorations */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Future</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Make Parking Smarter?
            </h2>

            <p className="text-white/80 text-base sm:text-xl max-w-2xl leading-relaxed">
              Discover how PARQ can help improve your parking operations. Book a live customized demo with our smart parking solutions architects.
            </p>

            {/* Benefit bullets */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>30-min live walk-through</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Custom facility ROI estimate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Zero obligation trial pilot</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all text-center"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-xs text-white/60 mt-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Fast response within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
