"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card with Organic Stepped Cutout Shape */}
        <div className="relative rounded-[2.5rem] border border-[#2d3f4a]/20 bg-[#2d3f4a] shadow-2xl overflow-hidden min-h-[580px] lg:h-[600px] flex flex-col lg:flex-row items-stretch">
          
          {/* Background Parking Facility Image filling the entire hero card space edge-to-edge */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-parking-modern.jpg"
              alt="Modern architectural covered parking structure with vehicles in marked bays"
              className="w-full h-full object-cover object-right md:object-center"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* DESKTOP SVG BACKGROUND: Exact organic stepped cutout matching reference */}
          <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
            <svg
              viewBox="0 0 1000 580"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 36 0
                   L 282 0
                   C 292 0, 298 12, 298 26
                   C 298 44, 312 50, 335 50
                   L 515 50
                   C 535 50, 547 62, 547 82
                   L 547 190
                   C 547 215, 525 227, 502 227
                   C 485 227, 479 238, 479 252
                   L 479 355
                   C 479 375, 445 380, 395 380
                   C 370 380, 359 392, 359 412
                   L 359 495
                   C 359 518, 315 525, 240 525
                   C 200 525, 189 538, 189 555
                   L 189 580
                   L 36 580
                   C 16 580, 0 564, 0 544
                   L 0 36
                   C 0 16, 16 0, 36 0
                   Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Left Column: Text & CTAs (Placed precisely over the white organic cutout) */}
          <div className="relative z-20 w-full lg:w-[54%] p-8 sm:p-12 lg:pl-14 lg:pr-6 lg:py-12 flex flex-col justify-center bg-white lg:bg-transparent">
            
            {/* Tag: ✦ Smart Parking Intelligence Platform */}
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm tracking-wide mb-6">
              <span className="text-primary text-base leading-none">✦</span>
              <span>Smart Parking Intelligence Platform</span>
            </div>

            {/* Headline matching exact reference typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.08] mb-6">
              <span className="text-[#0b181c] block">Smarter Parking.</span>
              <span className="text-primary block mt-1">Better Cities.</span>
            </h1>

            {/* Description matching exact text copy */}
            <p className="text-sm sm:text-base text-[#516e7c] leading-relaxed max-w-md mb-8">
              Smart parking solutions designed to help parking authorities manage, monitor and optimize parking operations with real-time IoT intelligence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#request-demo"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#47606d] text-white font-semibold text-sm sm:text-base shadow-md hover:bg-[#3d535f] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Request a Demo</span>
              </a>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border-2 border-[#2d3f4a] text-[#2d3f4a] font-semibold text-sm sm:text-base hover:bg-[#2d3f4a] hover:text-white transition-all shadow-sm"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Telemetry Badge on the live parking visual */}
          <div className="relative z-20 w-full lg:w-[46%] p-6 sm:p-8 lg:p-10 flex flex-col justify-end items-end pointer-events-none min-h-[260px] lg:min-h-0">
            {/* Real-time telemetry status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1b272f]/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xl pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>IoT Sensor Telemetry Active • 99.2% Accuracy</span>
            </div>
          </div>
        </div>

        {/* 3 Bottom Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card 1: EV / Outdoor Smart Parking */}
          <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/hero-card-1.png"
                alt="Smart EV charging and vehicle parking area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Modern Architectural Canopy with Highlight Border */}
          <div className="rounded-[2rem] overflow-hidden border-2 border-primary shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/hero-card-2.png"
                alt="Modern architectural parking facility entrance and structure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: Indoor Underground Facility */}
          <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/hero-card-3.png"
                alt="High-capacity indoor underground parking garage lanes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
