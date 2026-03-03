import type { Metadata } from "next";
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
  title: "PigmentRegulatory — Expert Pigment Compliance Consulting",
  description:
    "35 years of pigment regulatory expertise. FDA, REACH, FSSAI compliance consulting for pigment manufacturers. SDS authoring, compliance statements, and regulatory consulting by Hemant M. Thombare.",
  keywords:
    "pigment regulatory, SDS authoring, REACH compliance, FDA pigment, FSSAI color additive, pigment compliance India, regulatory consulting pigments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
