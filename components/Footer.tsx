"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block mb-3 group">
              <img 
                src="/images/parq-logo-white.png" 
                alt="ParQ - It Is More Than Just Parking" 
                className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity" 
              />
            </Link>

            <p className="text-primary text-xs uppercase tracking-widest font-bold">
              Smarter Parking. Better Cities.
            </p>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              PARQ Services Private Limited delivers end-to-end intelligent parking systems, combining smart IoT edge hardware, cloud telematics, and real-time operations dashboards.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Centralized Dashboard
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Slot Management
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Real-Time Monitoring
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Revenue & Earnings
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Violation Alerts
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary transition-colors">
                  Reports & Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Products */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Solutions & Products
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Smart Parking Platform
                </Link>
              </li>
              <li>
                <a href="/#dashboard" className="hover:text-primary transition-colors">
                  PARQ Dashboard
                </a>
              </li>
              <li>
                <a href="/#dashboard" className="hover:text-primary transition-colors">
                  Admin Portal
                </a>
              </li>
              <li>
                <a href="/#dashboard" className="hover:text-primary transition-colors">
                  Operator Management
                </a>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Tech */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/technology" className="hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#request-demo" className="hover:text-primary transition-colors">
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 6: Legal & Back to top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 PARQ Services Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#contact" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
