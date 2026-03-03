"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after content is ready
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Remove loader from DOM after fade-out animation
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="w-28 h-28 rounded-full border-4 border-primary-light/20 border-t-accent animate-spin-slow" />

          {/* Inner logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 40 44" fill="none" className="w-14 h-16 loader-logo-animate">
              <defs>
                <linearGradient id="loaderShield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#44337a" />
                </linearGradient>
              </defs>
              <path d="M20 2L36 10V24C36 33 29 39 20 42C11 39 4 33 4 24V10L20 2Z" fill="url(#loaderShield)" className="loader-circle-1" />
              <path d="M20 6L32 12.5V24C32 31 27 35.5 20 38C13 35.5 8 31 8 24V12.5L20 6Z" stroke="#d69e2e" strokeWidth="0.8" fill="none" opacity="0.5" className="loader-circle-2" />
              <text
                x="20"
                y="25"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="800"
                fontFamily="system-ui, sans-serif"
                letterSpacing="-0.5"
                className="loader-text"
              >
                PR
              </text>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-white text-xl font-bold tracking-tight loader-brand-animate">
          Pigment<span className="text-accent">Regulatory</span>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-1.5 mt-5">
          <div className="w-2 h-2 rounded-full bg-accent loader-dot-1" />
          <div className="w-2 h-2 rounded-full bg-accent loader-dot-2" />
          <div className="w-2 h-2 rounded-full bg-accent loader-dot-3" />
        </div>
      </div>
    </div>
  );
}
