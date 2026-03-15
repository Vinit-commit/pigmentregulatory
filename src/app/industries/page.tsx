import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Industries Served — PigmentRegulatory",
  description:
    "Pigment regulatory compliance services for paints & coatings, plastics & packaging, and textile industries.",
  alternates: {
    canonical: "https://pigmentregulatory.com/industries",
  },
};

const industries = [
  {
    name: "Paints & Coatings",
    description:
      "Industrial pigments in paints and coatings require comprehensive chemical safety documentation for worker safety and environmental compliance.",
    regulations: [
      "REACH Registration",
      "TSCA (USA)",
      "K-REACH (Korea)",
      "GHS Classification",
    ],
    documentation: [
      "REACH registration dossiers",
      "Safety Data Sheets",
      "Exposure scenarios",
      "Environmental risk assessments",
    ],
    bg: "bg-white",
  },
  {
    name: "Plastics & Packaging",
    description:
      "Pigments used in food-contact plastics and packaging face dual regulation \u2014 both chemical safety and food-contact compliance.",
    regulations: [
      "FDA 21 CFR",
      "EU 10/2011",
      "FSSAI Packaging Standards",
      "IS 9845 Standards",
    ],
    documentation: [
      "Migration testing reports",
      "Food-contact compliance certificates",
      "SDS",
      "Specific migration limits testing",
    ],
    bg: "bg-surface",
  },
  {
    name: "Textiles",
    description:
      "Textile pigments must comply with restricted substance lists and eco-certification standards demanded by global fashion brands.",
    regulations: [
      "OEKO-TEX Standard 100",
      "ZDHC MRSL",
      "EU Azo-dye restrictions",
      "GOTS standards",
    ],
    documentation: [
      "MRSL compliance reports",
      "Restricted substance testing",
      "Eco-certification support",
      "Supply chain documentation",
    ],
    bg: "bg-white",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Industries We Serve
          </h1>
          <p className="hero-animate-delay-1 mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Specialized pigment regulatory expertise across every major industry
            that uses color.
          </p>
        </div>
      </section>

      {/* ===== INDUSTRY SECTIONS ===== */}
      {industries.map((industry, index) => (
        <section
          key={index}
          className={`${industry.bg} py-16 md:py-20`}
        >
          <AnimateOnScroll animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industry Name */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
              {industry.name}
            </h2>

            {/* Description */}
            <p className="mt-4 text-text-light text-base sm:text-lg leading-relaxed max-w-3xl">
              {industry.description}
            </p>

            {/* Two-column grid for regulations & documentation */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Regulations */}
              <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-text flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
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
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </span>
                  Key Regulations
                </h3>
                <ul className="mt-5 space-y-3">
                  {industry.regulations.map((reg, i) => (
                    <li key={i} className="flex items-start gap-3">
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
                      <span className="text-text-light">{reg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documentation We Provide */}
              <div className="rounded-xl border border-border bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-text flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </span>
                  Documentation We Provide
                </h3>
                <ul className="mt-5 space-y-3">
                  {industry.documentation.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
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
                      <span className="text-text-light">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Get Compliant Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
              >
                Get Compliant
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </section>
      ))}

      {/* ===== CTA SECTION ===== */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Industry-Specific Compliance Help?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We understand the unique regulatory requirements of your industry.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:scale-105"
              >
                Talk to an Expert
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
