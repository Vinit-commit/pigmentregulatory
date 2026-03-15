import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PigmentRegulatory — Expert Pigment Compliance Consulting",
    template: "%s | PigmentRegulatory",
  },
  description:
    "35 years of pigment regulatory expertise. FDA, REACH, FSSAI compliance consulting for pigment manufacturers. SDS authoring, compliance statements, and regulatory consulting by Hemant M. Thombare.",
  keywords:
    "pigment regulatory, SDS authoring, REACH compliance, FDA pigment, FSSAI color additive, pigment compliance India, regulatory consulting pigments",
  metadataBase: new URL("https://pigmentregulatory.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pigmentregulatory.com",
    siteName: "PigmentRegulatory",
    title: "PigmentRegulatory — Expert Pigment Compliance Consulting",
    description:
      "35 years of pigment regulatory expertise. FDA, REACH, FSSAI compliance consulting for pigment manufacturers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PigmentRegulatory — Expert Pigment Compliance Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PigmentRegulatory — Expert Pigment Compliance Consulting",
    description:
      "35 years of pigment regulatory expertise. FDA, REACH, FSSAI compliance consulting for pigment manufacturers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "PigmentRegulatory",
      url: "https://pigmentregulatory.com",
      logo: "https://pigmentregulatory.com/favicon.svg",
      description:
        "Expert pigment regulatory compliance consulting with 35 years of industry experience.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7887686974",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
      founder: {
        "@type": "Person",
        name: "Hemant M. Thombare",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "PigmentRegulatory",
      url: "https://pigmentregulatory.com",
      telephone: "+91-7887686974",
      email: "hemant@pigmentregulatory.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      areaServed: "Worldwide",
      description:
        "Pigment regulatory compliance consulting — SDS authoring, REACH registration, FDA compliance, and FSSAI compliance for pigment manufacturers.",
      priceRange: "$$",
    },
    {
      "@type": "ProfessionalService",
      name: "PigmentRegulatory",
      url: "https://pigmentregulatory.com",
      serviceType: [
        "SDS Authoring",
        "REACH Compliance Consulting",
        "FDA Color Additive Compliance",
        "FSSAI Compliance Consulting",
        "GHS Classification & Labelling",
        "Regulatory Compliance Consulting",
      ],
      provider: {
        "@type": "Organization",
        name: "PigmentRegulatory",
      },
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
