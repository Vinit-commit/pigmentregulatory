"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Regulatory Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-xl" : "bg-primary shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2.5 group">
            {/* Shield Logo */}
            <div className="relative w-9 h-10 flex-shrink-0">
              <svg viewBox="0 0 40 44" fill="none" className="w-9 h-10">
                <defs>
                  <linearGradient id="navShield" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#44337a" />
                  </linearGradient>
                </defs>
                <path d="M20 2L36 10V24C36 33 29 39 20 42C11 39 4 33 4 24V10L20 2Z" fill="url(#navShield)" />
                <path d="M20 6L32 12.5V24C32 31 27 35.5 20 38C13 35.5 8 31 8 24V12.5L20 6Z" stroke="#d69e2e" strokeWidth="0.8" fill="none" opacity="0.5" />
                <text x="20" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">PR</text>
              </svg>
            </div>
            <div className="text-base sm:text-lg font-bold tracking-tight">
              <span className="transition-colors duration-300 group-hover:text-accent-light">Pigment</span>
              <span className="text-accent transition-colors duration-300 group-hover:text-accent-light">Regulatory</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-3/4"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-accent hover:bg-accent-light text-primary-dark font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mobile-menu-enter">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 mx-3 bg-accent hover:bg-accent-light text-primary-dark font-semibold px-4 py-3 rounded-lg text-sm text-center transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
