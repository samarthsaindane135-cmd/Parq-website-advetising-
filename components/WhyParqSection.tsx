"use client";

import React from "react";
import { 
  CircleCheck, 
  ArrowRight 
} from "lucide-react";

export default function WhyParqSection() {
  const pillars = [
    { step: "PILLAR 01", title: "Centralized Management & Control" },
    { step: "PILLAR 02", title: "Real-Time Visibility & IoT Telemetry" },
    { step: "PILLAR 03", title: "Intelligent Analytics & Automated Yield" },
  ];

  const highlights = [
    "End-to-End Reliability & Scalability",
    "Sub-Second Slot Detection & Verification",
    "Customized to Specific Site Requirements",
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container with exact gradient & styling matching Image 2 */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/20 bg-primary shadow-2xl">
        {/* Gradients matching reference site */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
        <div 
          className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-20 mix-blend-overlay size-[1000px] pointer-events-none"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        />

        <div className="relative z-30 p-8 sm:p-12 md:p-16 lg:p-20 grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white border border-white/20 text-xs sm:text-sm font-bold tracking-widest uppercase">
              Why Choose PARQ
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Built for the real world.
            </h2>

            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-xl">
              We don&apos;t just install devices — we deliver complete smart parking solutions that are reliable, scalable, and tailored for real-world conditions.
            </p>

            <ul className="space-y-4 pt-2">
              {highlights.map((text, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white">
                  <CircleCheck className="text-white/80 w-6 h-6 shrink-0" />
                  <span className="text-base sm:text-lg font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Step/Pillar Cards & Button */}
          <div className="grid gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-5 py-4 text-white"
              >
                <p className="text-xs tracking-wider text-white/75 mb-1">{item.step}</p>
                <p className="font-semibold text-base sm:text-lg">{item.title}</p>
              </div>
            ))}

            <a
              href="#request-demo"
              className="mt-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
