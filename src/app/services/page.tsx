import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Services — PigmentRegulatory",
  description:
    "Expert pigment regulatory compliance services including SDS authoring, REACH registration, FDA compliance, and compliance statement preparation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our Services
          </h1>
          <p className="hero-animate-delay-1 mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive regulatory solutions for pigment manufacturers &mdash;
            from compliance packages to statement preparation.
          </p>
        </div>
      </section>

      {/* ===== SERVICE 1: FULL PRODUCT REGULATORY COMPLIANCE PACKAGE ===== */}
      <section className="bg-white py-16 md:py-20">
        <AnimateOnScroll animation="fade-up" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Service Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-primary">
                  Service 01
                </span>
                <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-text">
                  Full Product Regulatory Compliance Package
                </h2>
              </div>
              <div className="flex-shrink-0 rounded-lg bg-accent/10 px-4 sm:px-6 py-2 sm:py-3 text-center">
                <p className="text-xs sm:text-sm text-text-light">Starting from</p>
                <p className="text-xl sm:text-2xl font-bold text-accent">
                  &#x20B9;3L
                </p>
                <p className="text-sm text-text-light">per product line</p>
              </div>
            </div>

            {/* Target Audience */}
            <p className="mt-6 text-text-light text-lg leading-relaxed">
              Designed for mid-size pigment manufacturers with 50&ndash;200
              products who export to international markets. Get end-to-end
              compliance for your entire product portfolio.
            </p>

            {/* Deliverables */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-text">Deliverables</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Complete SDS library (16-section GHS compliant)",
                  "MSDS for all target markets (USA/OSHA, EU/REACH/CLP, India, Japan, China)",
                  "Technical Data Sheets (TDS) for every pigment grade",
                  "Certificates of Analysis templates",
                  "Label compliance (GHS labels, hazard pictograms, multilingual)",
                  "Regulatory gap analysis",
                  "Remediation roadmap",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-text-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mt-8 rounded-lg bg-surface-dark border border-border p-6">
              <p className="text-text font-semibold text-lg leading-relaxed">
                &ldquo;One failed shipment can cost &#x20B9;10&ndash;50L+ in
                penalties. Our compliance package is your insurance.&rdquo;
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ===== SERVICE 2: COMPLIANCE STATEMENT PREPARATION ===== */}
      <section className="bg-surface py-16 md:py-20">
        <AnimateOnScroll animation="fade-up" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Service Header */}
            <span className="inline-block rounded-full bg-primary/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-primary">
              Service 02
            </span>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-text">
              Compliance Statement Preparation
            </h2>
            <p className="mt-4 text-text-light text-base sm:text-lg leading-relaxed max-w-3xl">
              Preparation of compliance statements for your products &mdash;
              ready for customer formats filing and regulatory submissions across
              international markets.
            </p>

            {/* Three Sub-Packages */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* EU Market Package */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.47.353-2.856.978-4.082"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  EU Market Package
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "REACH compliance",
                    "CLP classification",
                    "SDS authoring (EU format)",
                    "SVHC screening",
                    "Supply chain communication",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-text-light"
                    >
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* USA Market Package */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  USA Market Package
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "TSCA inventory check",
                    "FDA color additive compliance",
                    "SDS per OSHA HazCom",
                    "California Prop 65 compliance",
                    "EPA compliance review",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-text-light"
                    >
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Japan/Korea/China Package */}
              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text">
                  Asia-Pacific Market Package
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "CSCL / K-REACH / MEE assessment",
                    "Country-specific SDS authoring",
                    "Registration agent coordination",
                    "Local language documentation",
                    "Market-specific labeling",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-text-light"
                    >
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ===== SERVICE 3: ANNUAL REGULATORY RETAINER (AMC MODEL) ===== */}
      <section className="bg-white py-16 md:py-20">
        <AnimateOnScroll animation="fade-up" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Service Header */}
            <span className="inline-block rounded-full bg-primary/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-primary">
              Service 03
            </span>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-text">
              Annual Regulatory Retainer (AMC Model)
            </h2>
            <p className="mt-4 text-text-light text-base sm:text-lg leading-relaxed max-w-3xl">
              Continuous compliance management without the overhead of a
              full-time hire. Your outsourced regulatory department.
            </p>

            {/* Monthly Services Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "SDS Library Management",
                  desc: "Ongoing maintenance, updates, and version control of your entire SDS library",
                },
                {
                  title: "Regulatory Change Monitoring",
                  desc: "Track changes in REACH, FDA, FSSAI, and other relevant regulations",
                },
                {
                  title: "Impact Assessment",
                  desc: "Evaluate how regulatory changes affect your products and markets",
                },
                {
                  title: "Quarterly Compliance Audit",
                  desc: "Regular check-ups to ensure ongoing compliance across all products",
                },
                {
                  title: "Customer Query Handling",
                  desc: "Respond to customer compliance queries and documentation requests",
                },
                {
                  title: "New Product SDS Creation",
                  desc: "Author SDS for new pigment grades as they are launched",
                },
                {
                  title: "Quarterly Training",
                  desc: "Keep your team updated on regulatory developments and best practices",
                },
                {
                  title: "Dedicated Helpdesk",
                  desc: "Priority access to regulatory expertise whenever you need it",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-surface p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-semibold text-text">
                    {service.title}
                  </h4>
                  <p className="mt-1 text-sm text-text-light">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="mt-8 rounded-lg bg-surface-dark border border-border p-6">
              <p className="text-text font-semibold text-lg leading-relaxed">
                &ldquo;Hiring a full-time regulatory head costs
                &#x20B9;15&ndash;30L/year. Get the same expertise at a fraction
                of the cost.&rdquo;
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We&apos;ll assess your
            compliance needs and recommend the right package for your business.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:scale-105"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
