"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire GA4 conversion event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "lead",
        event_label: "free_audit",
        company: formData.company,
      });
    }

    // Open WhatsApp with form data
    const msg = `Hi Hemant, I'd like a Free Regulatory Health Check.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Company:* ${encodeURIComponent(formData.company)}%0A*Email:* ${encodeURIComponent(formData.email)}${formData.phone ? `%0A*Phone:* ${encodeURIComponent(formData.phone)}` : ""}`;
    window.open(`https://wa.me/917887686974?text=${msg}`, "_blank");

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "lead",
        event_label: "free_audit_page",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Above the fold */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            100% Free — No Obligation
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Is Your Pigment SDS Compliant?
            <br />
            <span className="text-accent">Find Out in 30 Minutes — Free</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            70% of Indian pigment manufacturers have non-compliant SDS documents.
            One rejected shipment costs ₹10-50 Lakh. Don&apos;t wait for a port rejection to find out.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Trust Signals */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT: Value Props */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-text mb-6">
                What You Get in Your Free Health Check
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "SDS Compliance Review",
                    desc: "We check if your Safety Data Sheets meet current GHS Rev 9 standards",
                  },
                  {
                    title: "Regulatory Gap Analysis",
                    desc: "Identify gaps in REACH, FDA, FSSAI, or other market-specific compliance",
                  },
                  {
                    title: "Risk Assessment",
                    desc: "Flag any issues that could lead to shipment rejections or customer audit failures",
                  },
                  {
                    title: "Remediation Roadmap",
                    desc: "Get a practical, prioritized plan to fix compliance gaps",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <p className="text-sm text-text-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xl sm:text-2xl font-bold text-primary">35+</p>
                  <p className="text-xs text-text-light">Years Experience</p>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xl sm:text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs text-text-light">Pigment Grades</p>
                </div>
                <div className="bg-surface rounded-lg p-3">
                  <p className="text-xl sm:text-2xl font-bold text-primary">15+</p>
                  <p className="text-xs text-text-light">Countries Served</p>
                </div>
              </div>

              {/* Expert Info */}
              <div className="mt-8 bg-surface rounded-lg p-5">
                <p className="text-sm text-text-light">
                  <strong className="text-text">Your consultant: Hemant M. Thombare</strong>
                  <br />
                  35 years at one of India&apos;s leading pigment companies. Expert in SDS authoring,
                  REACH registration, FDA color additive compliance, and FSSAI regulations.
                </p>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div>
              {submitted ? (
                <div className="bg-surface rounded-xl p-8 text-center shadow-sm">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">Thank You!</h3>
                  <p className="text-text-light mb-6">
                    Hemant will contact you within 24 hours to schedule your free Regulatory Health Check.
                  </p>
                  <a
                    href="https://wa.me/917887686974?text=Hi%20Hemant%2C%20I%20just%20submitted%20the%20free%20audit%20form.%20Can%20we%20schedule%20a%20call%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message on WhatsApp for Faster Response
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface rounded-xl p-6 sm:p-8 shadow-sm border border-border"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-text mb-2">
                    Book Your Free Health Check
                  </h2>
                  <p className="text-sm text-text-light mb-6">
                    Fill in your details and Hemant will contact you within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Get Your Free Health Check"}
                    </button>

                    <p className="text-xs text-text-lighter text-center">
                      No spam. No obligation. Just expert advice.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning Banner */}
      <section className="bg-red-50 border-t border-red-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-red-800 font-semibold text-lg mb-2">
            Did you know?
          </p>
          <p className="text-red-700 max-w-2xl mx-auto">
            One non-compliant SDS can lead to a shipment held at port, costing
            <strong> ₹10-50 Lakh</strong> in demurrage, re-testing, and delayed delivery —
            plus damaged customer relationships. A 30-minute call can prevent that.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-primary-dark text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PigmentRegulatory. Founded by Hemant M. Thombare.</p>
          <p className="mt-1">
            <a href="tel:+917887686974" className="hover:text-white">+91 7887686974</a>
            {" | "}
            <a href="mailto:hemant@pigmentregulatory.com" className="hover:text-white">hemant@pigmentregulatory.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
