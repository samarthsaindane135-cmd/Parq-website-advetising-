"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Car, 
  LayoutDashboard, 
  MapPin, 
  Activity, 
  BarChart3, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { title: "Centralized Dashboard", desc: "Single-pane visibility for entire operations", href: "/#services" },
    { title: "Slot & Location Management", desc: "Manage parking zones and slot hierarchies", href: "/#services" },
    { title: "Real-Time Monitoring", desc: "Live occupancy telemetry and sensor status", href: "/#services" },
    { title: "Revenue & Earnings", desc: "Automated billing, collections and reconciliation", href: "/#services" },
    { title: "Alerts & Violation Management", desc: "Instant detection of overstays and unauthorized parking", href: "/#services" },
    { title: "Reports & Analytics", desc: "Deep operational insights and utilization trends", href: "/#services" },
  ];

  const productItems = [
    { title: "PARQ Smart Parking", desc: "Autonomous IoT parking sensing and guidance", href: "/#dashboard" },
    { title: "PARQ Dashboard", desc: "Command center for operations and facilities", href: "/#dashboard" },
    { title: "Admin Portal", desc: "Multi-tenant role and permission management", href: "/#dashboard" },
    { title: "Operator Management", desc: "Ground staff workflows, handhelds & POS tools", href: "/#dashboard" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-background/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/parq-logo.png" 
              alt="ParQ - It Is More Than Just Parking" 
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 p-3 bg-card rounded-2xl border border-border shadow-xl shadow-black/10 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-primary px-3 py-1 mb-1">
                    Platform Services
                  </div>
                  <div className="space-y-1">
                    {serviceItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-2 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180 text-primary" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 w-72 p-3 bg-card rounded-2xl border border-border shadow-xl shadow-black/10 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-primary px-3 py-1 mb-1">
                    Product Suite
                  </div>
                  <div className="space-y-1">
                    {productItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="block px-3 py-2 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/industries" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Industries
            </Link>
            <Link href="/technology" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Technology
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#request-demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="/#request-demo"
              className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium text-xs sm:inline-flex hidden"
            >
              Request Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-foreground hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-muted-foreground hover:text-primary"
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-muted-foreground hover:text-primary"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180 text-primary" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-primary/20 my-1">
                {serviceItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-foreground/80 hover:text-primary py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-muted-foreground hover:text-primary"
          >
            Solutions
          </Link>

          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-muted-foreground hover:text-primary"
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180 text-primary" : ""}`} />
            </button>
            {productsOpen && (
              <div className="pl-4 py-2 space-y-2 border-l-2 border-primary/20 my-1">
                {productItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-foreground/80 hover:text-primary py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-muted-foreground hover:text-primary"
          >
            Industries
          </Link>
          <Link
            href="/technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-muted-foreground hover:text-primary"
          >
            Technology
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-muted-foreground hover:text-primary"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-border">
            <a
              href="/#request-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
