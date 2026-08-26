"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGsapSetup } from "@/lib/gsap";

/**
 * Wires up Lenis smooth-scrolling and syncs it with GSAP's ScrollTrigger so
 * every scroll-based animation in the app (including reverse-on-scroll-up)
 * stays perfectly in sync with the smoothed scroll position.
 */
export default function SmoothScroll() {
  useGsapSetup();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  return null;
}
