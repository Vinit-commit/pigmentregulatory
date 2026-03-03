"use client";

import { useState } from "react";
import Link from "next/link";

const blocks = [
  {
    title: "Safety Data Sheets (SDS)",
    subtitle: "The Foundation of Chemical Compliance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
    alt: "Professional reviewing compliance documents at desk",
    example:
      "Ravi, a quality manager at a pigment plant in Gujarat, lost a ₹45L export order when their European buyer found outdated SDS documents missing GHS Rev 9 classifications. After we updated their entire SDS library, they secured 3 new EU clients within 6 months.",
    content:
      "A Safety Data Sheet is a standardized 16-section document that communicates hazards, safe handling procedures, and emergency measures for chemical products. Under the Globally Harmonized System (GHS), every pigment manufacturer must provide a compliant SDS for each product they sell or export.",
    bullets: [
      "Product identification & hazard classification",
      "Composition, first-aid & firefighting measures",
      "Handling, storage & exposure controls",
      "Physical properties & toxicological data",
      "Ecological, disposal & transport information",
    ],
  },
  {
    title: "REACH Compliance",
    subtitle: "Gateway to EU Markets",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format",
    alt: "Team of professionals discussing compliance strategy in meeting room",
    example:
      "Suresh, an export director at a Pune-based pigment company, had shipments held at Rotterdam port for 3 weeks due to incomplete REACH registration. Our team completed the full REACH dossier in 45 days, and his products now move through EU customs without any delays.",
    content:
      "REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) is the EU's chemical regulation. Any pigment manufacturer exporting to Europe must ensure substances are registered with ECHA and classified under CLP. Non-compliance can mean shipment seizures and penalties reaching millions of euros.",
    bullets: [
      "ECHA substance registration & dossier preparation",
      "CLP classification & SVHC screening",
      "Supply chain communication & compliance declarations",
      "Ongoing regulatory change monitoring",
    ],
  },
  {
    title: "FDA Color Additive Regulations",
    subtitle: "US Market Access for Pigments",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c27207?w=600&h=400&fit=crop&auto=format",
    alt: "Laboratory technician testing chemical samples in modern lab",
    example:
      "Meena, heading product development at a Mumbai colorant firm, couldn't understand why her iron oxide samples were being rejected by US cosmetics brands. We identified that her products needed FDA 21 CFR Part 73 exemption documentation — once filed, she secured two major US cosmetics clients.",
    content:
      "The FDA regulates all color additives used in food, drugs, cosmetics, and medical devices under Title 21 CFR. Pigments for food-contact packaging, cosmetics, or pharmaceuticals must comply with strict FDA requirements including batch certification or exemption documentation.",
    bullets: [
      "FD&C certified vs exempt color classification",
      "21 CFR Part 73/74 compliance documentation",
      "Heavy metal limits & purity specifications",
      "FDA import alert prevention strategies",
    ],
  },
  {
    title: "GHS Classification & Labelling",
    subtitle: "Global Hazard Communication",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format",
    alt: "Factory worker inspecting chemical products with safety labels",
    example:
      "Ankit, a plant safety officer in Vadodara, discovered during an audit that 60% of his facility's pigment labels had incorrect GHS pictograms. After our comprehensive GHS review and relabelling, the plant passed its next safety audit with zero non-conformities.",
    content:
      "The Globally Harmonized System (GHS) provides a unified framework for classifying chemical hazards and communicating them through standardized labels and Safety Data Sheets. Correct GHS classification is the foundation of all downstream regulatory compliance for pigment manufacturers.",
    bullets: [
      "9 standardized hazard pictograms",
      "Hazard (H-codes) & precautionary (P-codes) statements",
      "Signal words: Danger and Warning classifications",
      "Recognized across 70+ countries worldwide",
    ],
  },
  {
    title: "Why Compliance Matters",
    subtitle: "The Business Case for Getting it Right",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format",
    alt: "Business professionals shaking hands after successful compliance deal",
    example:
      "Prashant, MD of a Kolkata pigment firm, was spending ₹15L annually on rejected shipments and re-testing fees. Within one year of our compliance programme, his rejection rate dropped to zero and he added 4 new international clients — the programme paid for itself in 3 months.",
    content:
      "For pigment manufacturers, regulatory compliance is not just a legal obligation — it's a competitive advantage. Companies with compliant documentation gain faster customs clearance, stronger customer trust, and access to premium international markets.",
    bullets: [
      "Avoid ₹10-50L+ shipment rejections & penalties",
      "Build lasting trust with global buyers",
      "Unlock new international market access",
      "Reduce long-term costs with proactive compliance",
    ],
  },
  {
    title: "Global Export Documentation",
    subtitle: "Country-Specific Regulatory Packages",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format",
    alt: "Shipping containers at port ready for international export",
    example:
      "Deepa, an operations head at a Hyderabad pigment exporter, was preparing the same generic SDS for all markets. After we created market-specific documentation packages for USA, EU, Japan, and Korea, her customs clearance time dropped from 2 weeks to 3 days on average.",
    content:
      "Exporting pigments requires market-specific documentation that varies by country and end-use application. Each destination has its own requirements — from TSCA for the USA to K-REACH for South Korea and CSCL for Japan. Missing even one document can result in customs hold-ups and costly re-exports.",
    bullets: [
      "USA — TSCA & FDA compliance packages",
      "EU — REACH/CLP registration & dossiers",
      "Japan — CSCL substance notifications",
      "Korea — K-REACH & China MEE documentation",
    ],
  },
];

export default function KnowledgeHub() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ===== COMPACT KNOWLEDGE HUB ===== */}
      <section id="knowledge-hub" className="bg-surface py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
              Regulatory <span className="text-primary">Knowledge Hub</span>
            </h2>
            <p className="mt-3 text-text-light text-base sm:text-lg max-w-2xl mx-auto">
              Everything pigment manufacturers need to know about global
              compliance — backed by 35 years of real industry experience.
            </p>
          </div>

          {/* Topic Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {blocks.map((block, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setExpanded(true)}
              >
                <img
                  src={block.image}
                  alt={block.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
                    {block.title}
                  </h3>
                  <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 hidden sm:block">
                    {block.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expand / Collapse Button */}
          <div className="text-center mt-8 sm:mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {expanded ? "Show Less" : "Explore All Topics"}
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===== EXPANDED BLOCKS ===== */}
      {expanded && (
        <div className="animate-fade-in">
          {blocks.map((block, i) => (
            <section
              key={i}
              className={`${i % 2 === 0 ? "bg-white" : "bg-surface"} py-10 sm:py-14 md:py-18`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                  {/* Image - alternating sides */}
                  <div
                    className={`${i % 2 !== 0 ? "order-1 md:order-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={block.image}
                        alt={block.alt}
                        className="w-full aspect-[3/2] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`${i % 2 !== 0 ? "order-2 md:order-1" : ""}`}
                  >
                    <span className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {block.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text mb-3 sm:mb-4">
                      {block.title}
                    </h3>
                    <p className="text-text-light text-sm sm:text-base leading-relaxed mb-4">
                      {block.content}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-5">
                      {block.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-text-light text-sm sm:text-base"
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Human Example */}
                    <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-accent-dark"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-accent-dark mb-1">
                            Real Client Story
                          </p>
                          <p className="text-text-light text-xs sm:text-sm leading-relaxed">
                            {block.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Collapse + CTA */}
          <section className="bg-surface py-8 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setExpanded(false);
                  document
                    .getElementById("knowledge-hub")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border-2 border-border text-text font-semibold px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <svg
                  className="w-4 h-4 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                Collapse
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-semibold px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Expert Help With Your Compliance
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
