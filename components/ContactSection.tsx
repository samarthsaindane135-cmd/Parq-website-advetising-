"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  MessageSquare 
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Let&apos;s Connect
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions about integrating PARQ with your parking structure or scheduling a live on-site demo? Our team is ready to assist.
            </p>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Email Us</div>
                  <a href="mailto:contact@parq.in" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    contact@parq.in
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Quick response within 1 business day</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Phone Support</div>
                  <a href="tel:+919876543210" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                    +91 (080) 4567 8900 / +91 98765 43210
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Corporate Headquarters</div>
                  <p className="text-base font-semibold text-foreground">
                    PARQ Services Private Limited
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">India - Urban Mobility Tech Corridor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-10 shadow-xl shadow-primary/5">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send an Enquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the quick form below and our parking solutions specialist will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Thank You for Reaching Out!</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We have received your message. A PARQ representative will contact you shortly to discuss your parking management needs.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="text-xs font-bold text-primary hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@authority.gov.in"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Message / Parking Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your parking facility (number of slots, locations, current pain points)..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-98 transition-all"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
