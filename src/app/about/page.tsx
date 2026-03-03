import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";

export const metadata = {
  title: "About — PigmentRegulatory | Hemant M. Thombare",
  description:
    "Meet Hemant M. Thombare — 35 years of pigment regulatory expertise in the Global Chemical Industries, now helping manufacturers achieve global compliance.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About PigmentRegulatory
          </h1>
          <p className="hero-animate-delay-1 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Founded on 35 years of hands-on pigment industry experience
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-left">
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-white text-4xl sm:text-5xl font-bold">HT</span>
                </div>
                <h2 className="text-2xl font-bold text-text">
                  Hemant M. Thombare
                </h2>
                <p className="text-text-light mt-1">
                  Founder &amp; Principal Consultant
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-right">
              <div className="space-y-6">
                <p className="text-text-light text-base sm:text-lg leading-relaxed">
                  With over 35 years of dedicated experience in the Global Chemical
                  Industries — working with leading pigment manufacturers —
                  I have built deep expertise in every aspect of pigment regulatory
                  compliance.
                </p>
                <p className="text-text-light text-base sm:text-lg leading-relaxed">
                  Throughout my career, I&apos;ve handled MSDS/SDS preparation,
                  GHS classification, REACH documentation, and FDA compliance
                  for hundreds of pigment grades across multiple
                  international markets.
                </p>
                <p className="text-text-light text-base sm:text-lg leading-relaxed">
                  I founded PigmentRegulatory to make this specialized knowledge
                  accessible to pigment manufacturers who need expert guidance but
                  cannot justify a full-time regulatory team.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              Areas of <span className="text-primary">Expertise</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "SDS & MSDS Authoring", desc: "16-section GHS compliant documentation", icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" },
              { title: "REACH Registration & Compliance", desc: "EU market regulatory requirements", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.47.353-2.856.978-4.082" },
              { title: "FDA Color Additive Compliance", desc: "US food & cosmetic pigment regulations", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
              { title: "GHS Classification & Labelling", desc: "Global harmonized system implementation", icon: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" },
              { title: "FSSAI Compliance", desc: "Indian regulatory framework", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" },
              { title: "Export Documentation", desc: "Multi-market regulatory packages", icon: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" },
            ].map((item, i) => (
              <div key={i} className="animate-on-scroll animate-fade-up card-hover bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-text-light">{item.desc}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
              35 Years in <span className="text-primary">Numbers</span>
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 35, suffix: "+", label: "Years of Experience" },
              { end: 500, suffix: "+", label: "Pigment Grades Handled" },
              { end: 15, suffix: "+", label: "Countries' Regulations" },
              { end: 100000, suffix: "+", label: "SDS Documents Created", indian: true },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={2500}
                    useIndianFormat={stat.indian || false}
                  />
                </p>
                <p className="text-text-light text-sm sm:text-base md:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="bg-surface py-16 md:py-20">
        <AnimateOnScroll animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-8">
            Your Experience is Your <span className="text-primary">Credential</span>
          </h2>
          <p className="text-text-light text-base sm:text-lg leading-relaxed text-center mb-6">
            Regulatory consulting is not a licensed profession — expertise IS
            the credential. Companies like Freyr Solutions, knoell, and GPC
            Regulatory all started the same way: domain experts turning deep
            industry knowledge into valuable consulting services.
          </p>
          <p className="text-text-light text-base sm:text-lg leading-relaxed text-center">
            What sets us apart is not a certificate on the wall, but 35 years of
            solving real compliance problems on the factory floor.
          </p>
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Discuss Your Compliance Needs
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-8">
              Book a free 30-minute Regulatory Health Check call
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get in Touch
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
