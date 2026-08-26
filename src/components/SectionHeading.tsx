"use client";

import { useEffect, useRef } from "react";
import { gsap, useGsapSetup } from "@/lib/gsap";

type Props = {
  eyebrow?: string;
  title: string;
  className?: string;
};

/**
 * The signature "grab from the side" heading effect: a wide highlight bar
 * races in from the right and slides past the title while the title itself
 * glides in from the right into the center, clipping into place. Reverses
 * cleanly when the user scrolls back up.
 */
export default function SectionHeading({ eyebrow, title, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  useGsapSetup();

  useEffect(() => {
    const wrap = wrapRef.current;
    const title = titleRef.current;
    const bar = barRef.current;
    if (!wrap || !title || !bar) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        bar,
        { xPercent: 220, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
      ).fromTo(
        title,
        { xPercent: 40, opacity: 0, clipPath: "inset(0 100% 0 0)" },
        {
          xPercent: 0,
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.45"
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </span>
      )}
      <div className="relative overflow-hidden">
        <span
          ref={barRef}
          aria-hidden
          className="absolute inset-y-0 left-0 w-full origin-right bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/40 to-amber-400/0"
        />
        <h2
          ref={titleRef}
          className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
