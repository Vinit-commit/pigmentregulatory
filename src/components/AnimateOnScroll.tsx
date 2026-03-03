"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  stagger?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  stagger = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              const children = el.querySelectorAll(".animate-on-scroll");
              children.forEach((child) => {
                child.classList.add("is-visible");
              });
            } else {
              el.classList.add("is-visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  if (stagger) {
    return (
      <div ref={ref} className={`stagger-children ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`animate-on-scroll animate-${animation} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
