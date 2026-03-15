import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Regulatory Guides & Resources — PigmentRegulatory",
  description:
    "Free pigment regulatory guides, compliance checklists, and resources for FDA, REACH, and FSSAI compliance.",
  alternates: {
    canonical: "https://pigmentregulatory.com/resources",
  },
};

const guides = [
  {
    title: "FDA Compliance Guide for Pigments",
    description:
      "Complete guide to FDA color additive regulations for food and cosmetic pigments in the US market.",
    topics: [
      "FD&C Act requirements",
      "Batch certification process",
      "Exempt vs certified colors",
      "Heavy metal limits",
    ],
  },
  {
    title: "REACH Registration Guide",
    description:
      "Step-by-step guide to EU REACH registration for pigment substances and preparations.",
    topics: [
      "Pre-registration requirements",
      "Dossier preparation",
      "SVHC screening",
      "CLP classification",
    ],
  },
  {
    title: "FSSAI Color Additive Guide",
    description:
      "Navigate India's food color regulations under FSSAI for approved natural and synthetic colorants.",
    topics: [
      "Approved color list",
      "Purity standards",
      "Documentation requirements",
      "Labelling rules",
    ],
  },
];

const resources = [
  {
    title: "Pigment Regulatory Compliance Checklist 2026",
    description:
      "A comprehensive checklist covering FDA, REACH, and FSSAI requirements for pigment manufacturers.",
    type: "PDF Checklist",
  },
  {
    title: "SDS Readiness Self-Assessment",
    description:
      "Evaluate your current Safety Data Sheet documentation against GHS Rev 9 standards.",
    type: "Assessment Tool",
  },
  {
    title: "Country-wise Regulatory Comparison Chart",
    description:
      "Side-by-side comparison of pigment regulations across USA, EU, India, Japan, Korea, and China.",
    type: "Reference Chart",
  },
];

const regulatoryBodies = [
  {
    name: "FDA",
    region: "USA",
    scope: "Food, cosmetics, drugs",
  },
  {
    name: "ECHA / REACH",
    region: "EU",
    scope: "Chemical registration & safety",
  },
  {
    name: "FSSAI",
    region: "India",
    scope: "Food colors & flavors",
  },
  {
    name: "CDSCO",
    region: "India",
    scope: "Drug & cosmetic colorants",
  },
  {
    name: "Codex Alimentarius",
    region: "Global",
    scope: "International food color standards",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ───────── PAGE HEADER ───────── */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-animate text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Regulatory Guides &amp; Resources
          </h1>
          <p className="hero-animate-delay-1 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Your go-to hub for pigment compliance knowledge — guides,
            checklists, and regulatory updates.
          </p>
        </div>
      </section>

      {/* ───────── REGULATORY GUIDE CARDS ───────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-8 sm:mb-12">
            Compliance Guides by Regulation
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="card-hover border border-border rounded-2xl p-5 sm:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text">
                    {guide.title}
                  </h3>
                  <span className="shrink-0 ml-4 inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>

                <p className="text-text-light mb-6">{guide.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-text-lighter uppercase tracking-wide mb-3">
                    Key Topics
                  </h4>
                  <ul className="space-y-2">
                    {guide.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-text-light text-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FREE RESOURCES / LEAD MAGNETS ───────── */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3">
              Free Downloads
            </h2>
            <p className="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
              Practical tools to get started with your compliance journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white border border-border rounded-2xl p-5 sm:p-8 flex flex-col"
              >
                <span className="inline-block self-start bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {resource.type}
                </span>

                <h3 className="text-lg font-semibold text-text mb-3">
                  {resource.title}
                </h3>

                <p className="text-text-light text-sm mb-6 flex-1">
                  {resource.description}
                </p>

                <button
                  disabled
                  className="w-full py-3 rounded-lg bg-surface-dark text-text-lighter font-medium text-sm cursor-not-allowed"
                >
                  Download Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── KEY REGULATORY BODIES ───────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-8 sm:mb-12">
            Key Regulatory Bodies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryBodies.map((body) => (
              <div
                key={body.name}
                className="card-hover border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-text mb-1">
                  {body.name}
                </h3>
                <span className="inline-block text-xs font-medium text-accent mb-3">
                  {body.region}
                </span>
                <p className="text-text-light text-sm">{body.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Personalized Guidance?
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Our guides provide general information. For compliance specific to
              your products and markets, book a consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Free Consultation
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
