import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import KnowledgeHub from "@/components/KnowledgeHub";

export const metadata = {
  title: "PigmentRegulatory — Expert Pigment Compliance Consulting",
  description:
    "Protect your pigment business from regulatory shutdowns. 35 years of expertise in SDS authoring, REACH, FDA, and FSSAI compliance for pigment manufacturers.",
  alternates: {
    canonical: "https://pigmentregulatory.com",
  },
};

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-14 sm:py-20 md:py-28 overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-primary-light/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Protect Your Pigment Business from{" "}
            <span className="text-accent">Regulatory Shutdowns</span>
          </h1>
          <p className="hero-animate-delay-1 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            35 years of hands-on experience in the Global Chemical Industries
            &mdash; now available to help your company achieve full regulatory
            compliance.
          </p>
          <div className="hero-animate-delay-2 mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:scale-105 animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary hover:border-white hover:scale-105 backdrop-blur-sm"
            >
              Explore Services
              <svg className="w-5 h-5 ml-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="hero-animate-delay-3 mt-6 sm:mt-10 flex items-center justify-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-white/30 flex-shrink-0">
              <img src="/founder.jpg" alt="Hemant M. Thombare" className="w-full h-full object-cover object-top" />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/50 text-left">
              Trusted by pigment manufacturers across India<br className="hidden sm:block" /> for FDA, REACH &amp; FSSAI compliance
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="bg-surface py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
                Is Your Business at <span className="text-primary">Risk?</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-text-light text-base sm:text-lg max-w-2xl mx-auto">
                Many pigment manufacturers are unknowingly exposed to compliance
                failures that can shut down operations overnight.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Problem Card 1 */}
            <div className="animate-on-scroll animate-fade-up card-hover bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
              <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-red-50">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-text">
                Non-Compliant SDS Documents
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-light leading-relaxed">
                70% of Indian pigment manufacturers have outdated or
                non-compliant Safety Data Sheets
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="animate-on-scroll animate-fade-up card-hover bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
              <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-red-50">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-text">
                Export Shipment Rejections
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-light leading-relaxed">
                One failed compliance check can cost &#x20B9;10-50 Lakhs in
                penalties, delays, and lost business
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="animate-on-scroll animate-fade-up card-hover bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
              <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-red-50">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-text">
                Changing Regulations
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-light leading-relaxed">
                Global regulations update constantly &mdash; REACH, FDA, FSSAI
                rules change every year
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
                How We <span className="text-primary">Help</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-text-light text-base sm:text-lg max-w-2xl mx-auto">
                Comprehensive regulatory consulting services tailored for the
                pigment industry.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="animate-on-scroll animate-fade-up card-hover group rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-text group-hover:text-primary transition-colors">
                Full Product Compliance Package
              </h3>
              <p className="mt-2 text-sm sm:text-base text-text-light leading-relaxed">
                End-to-end compliance for SDS, TDS, regulatory dossiers, and
                product compliance.
              </p>
              <Link href="/services" className="mt-4 sm:mt-5 inline-flex items-center text-primary font-medium transition-all duration-300 hover:text-accent">
                Learn More
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="animate-on-scroll animate-fade-up card-hover group rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-dark to-accent shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-text group-hover:text-primary transition-colors">
                Compliance Statement Preparation
              </h3>
              <p className="mt-2 text-sm sm:text-base text-text-light leading-relaxed">
                Preparation of compliance statements for your products &mdash;
                ready for customer formats filing and regulatory submissions.
              </p>
              <Link href="/services" className="mt-4 sm:mt-5 inline-flex items-center text-primary font-medium transition-all duration-300 hover:text-accent">
                Learn More
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="animate-on-scroll animate-fade-up card-hover group rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-text group-hover:text-primary transition-colors">
                Annual Regulatory Retainer
              </h3>
              <p className="mt-2 text-sm sm:text-base text-text-light leading-relaxed">
                Stay continuously compliant with ongoing monitoring, updates,
                and expert support.
              </p>
              <Link href="/services" className="mt-4 sm:mt-5 inline-flex items-center text-primary font-medium transition-all duration-300 hover:text-accent">
                Learn More
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-surface-dark py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
                Why <span className="text-primary">35 Years</span> of Experience Matters
              </h2>
              <p className="mt-3 sm:mt-4 text-text-light text-base sm:text-lg max-w-2xl mx-auto">
                There is no substitute for decades of hands-on work in the pigment
                industry.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale" className="mt-8 sm:mt-14 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
              {/* Table Header */}
              <div className="grid grid-cols-2 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white">
                <div className="px-3 sm:px-6 py-3 sm:py-5 font-semibold text-xs sm:text-sm md:text-base border-r border-white/10">
                  PigmentRegulatory
                </div>
                <div className="px-3 sm:px-6 py-3 sm:py-5 font-semibold text-xs sm:text-sm md:text-base text-white/70">
                  Generic Consultants
                </div>
              </div>

              {[
                { good: "Deep Pigment-Specific Knowledge", bad: "Generic chemical consulting" },
                { good: "35 Years Hands-On Experience", bad: "Textbook knowledge only" },
                { good: "Fast Turnaround", bad: "Long corporate timelines" },
                { good: "Personal Direct Service", bad: "Corporate bureaucracy" },
                { good: "SME-Friendly Pricing", bad: "Enterprise-only pricing" },
              ].map((row, i, arr) => (
                <div key={i} className={`grid grid-cols-2 ${i < arr.length - 1 ? "border-b border-border" : ""} transition-colors duration-200 hover:bg-surface`}>
                  <div className="px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 border-r border-border">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-text text-xs sm:text-sm md:text-base">{row.good}</span>
                  </div>
                  <div className="px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-lighter text-xs sm:text-sm md:text-base">{row.bad}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
                Industries We <span className="text-primary">Serve</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-text-light text-base sm:text-lg max-w-2xl mx-auto">
                Specialized pigment regulatory expertise across the sectors that
                depend on safe, compliant colorants.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Paints & Coatings",
                icon: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z",
                icon2: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z",
                gradient: "from-primary to-primary-light",
              },
              {
                name: "Plastics & Packaging",
                icon: "M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z",
                gradient: "from-accent-dark to-accent",
              },
              {
                name: "Textiles",
                icon: "M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM1.5 15.375c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 19.125v-3.75Z",
                gradient: "from-primary to-primary-light",
              },
            ].map((industry, i) => (
              <Link
                key={i}
                href="/industries"
                className="animate-on-scroll animate-fade-up card-hover group flex flex-col items-center rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center"
              >
                <div className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                  <svg className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d={industry.icon} />
                    {industry.icon2 && <path d={industry.icon2} />}
                  </svg>
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-text group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== KNOWLEDGE HUB ===== */}
      <KnowledgeHub />

      {/* ===== CTA SECTION ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Get Your Free Regulatory Health Check
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              A 30-minute call to identify compliance gaps in your pigment
              business. No obligation.
            </p>
            <div className="mt-6 sm:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:scale-105 animate-pulse-glow"
              >
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>
                Schedule Your Free Call
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
