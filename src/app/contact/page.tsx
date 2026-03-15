"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="hero-animate-delay-1 text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Book your free 30-minute Regulatory Health Check or ask us anything
            about pigment compliance.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN - Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <div className="bg-surface rounded-lg p-5 sm:p-8">
                <h2 className="text-2xl font-bold text-text mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-light">
                        Phone
                      </p>
                      <a
                        href="tel:+917887686974"
                        className="text-primary font-semibold hover:underline"
                      >
                        +91 7887686974
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-light">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/917887686974"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-semibold hover:underline"
                      >
                        +91 7887686974
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-light">
                        Email
                      </p>
                      <a
                        href="mailto:hemant@pigmentregulatory.com"
                        className="text-primary font-semibold hover:underline"
                      >
                        hemant@pigmentregulatory.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-light">
                        Location
                      </p>
                      <p className="text-text font-semibold">
                        India{" "}
                        <span className="text-text-lighter font-normal">
                          (Serving clients globally)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-surface rounded-lg p-5 sm:p-8">
                <h3 className="text-xl font-bold text-text mb-4">
                  What to Expect from Your Free Call
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-light">
                      We&apos;ll discuss your product range and target markets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-light">
                      Identify key compliance gaps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-light">
                      Recommend priority actions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-light">
                      No obligation, no sales pressure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-light">
                      Duration: 30 minutes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div>
              {submitted ? (
                /* Success Message */
                <div className="bg-surface rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">
                    Thank You!
                  </h3>
                  <p className="text-text-light mb-4">
                    Your message has been received. Hemant will get back to you
                    within 24 hours.
                  </p>
                  <p className="text-text-lighter text-sm">
                    For urgent matters, call or WhatsApp:{" "}
                    <a
                      href="tel:+917887686974"
                      className="text-primary font-semibold hover:underline"
                    >
                      +91 7887686974
                    </a>
                  </p>
                </div>
              ) : (
                /* Contact Form */
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface rounded-lg p-5 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-text mb-6">
                    Send Us a Message
                  </h2>
                  <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
                      >
                        <option value="">Select your industry</option>
                        <option value="Paints & Coatings">
                          Paints & Coatings
                        </option>
                        <option value="Plastics & Packaging">
                          Plastics & Packaging
                        </option>
                        <option value="Textiles">Textiles</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text mb-1"
                      >
                        How Can We Help?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-vertical"
                        placeholder="Tell us about your compliance needs, target markets, or any specific regulatory challenges..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-accent text-primary-dark font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:scale-[1.02]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            Prefer WhatsApp?
          </h2>
          <p className="text-text-light mb-6 max-w-2xl mx-auto">
            Get a quick response on WhatsApp — tap the button below to start a
            conversation.
          </p>
          <a
            href="https://wa.me/917887686974?text=Hi%20Hemant%2C%20I%20need%20help%20with%20pigment%20regulatory%20compliance."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-green-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
