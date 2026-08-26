"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, useGsapSetup } from "@/lib/gsap";
import { profile } from "@/data/content";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useGsapSetup();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          ".hero-word",
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-photo",
          { scale: 0.85, opacity: 0, rotate: -4 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.1 },
          "-=0.9"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const name = profile.name.split(" ");

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="hero-eyebrow mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {profile.role}
          </span>

          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            <span className="block overflow-hidden">
              <span className="hero-word inline-block">Hi, I&apos;m</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-word text-gradient inline-block">
                {name[0]}
              </span>{" "}
              <span className="hero-word inline-block">
                {name.slice(1).join(" ")}
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-xl text-lg text-gray-300 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#websites"
              className="hero-cta rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-7 py-3.5 font-semibold text-black transition-transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="hero-cta glass rounded-full px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-photo relative mx-auto aspect-square w-full max-w-sm">
          <div className="animate-float absolute inset-0">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 opacity-70 blur-2xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-[2.5rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gray-900">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 60vw, 24rem"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-gray-400 transition-colors hover:text-white"
        aria-label="Scroll to About section"
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <rect
            x="1"
            y="1"
            width="22"
            height="34"
            rx="11"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="10" r="3" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
