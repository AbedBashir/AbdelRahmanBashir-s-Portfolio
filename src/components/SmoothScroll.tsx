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

    // Lenis measures the document's scrollable height once and only
    // recalculates it on window resize — it has no way to know when React
    // changes the DOM height on its own (e.g. a "Show All" toggle adding
    // dozens of cards, or images finishing decode). Without this, Lenis
    // keeps enforcing the old, shorter scroll limit forever: scrolling
    // stalls short of the real bottom and everything below the changed
    // content becomes unreachable — sections that look "stuck". A
    // ResizeObserver on <body> catches any such height change and tells
    // both Lenis and ScrollTrigger to re-measure.
    const onBodyResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    const resizeObserver = new ResizeObserver(onBodyResize);
    resizeObserver.observe(document.body);

    // Route every in-page "#section" link through Lenis instead of letting
    // the browser jump there natively. A native jump moves window.scrollY
    // without Lenis's virtual scroll position ever knowing about it, so the
    // next wheel/touch scroll fights against Lenis trying to "correct" back
    // toward its stale position — which reads as a section refusing to
    // scroll. Intercepting the click keeps Lenis's internal state and the
    // real scroll position in sync at all times.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
      history.pushState(null, "", id);
    };
    document.addEventListener("click", onClick);

    // Layout can still shift after mount (images finishing decode, web
    // fonts swapping in), which leaves every ScrollTrigger's start/end
    // calculated against stale positions. A couple of refreshes after the
    // page fully settles keeps every section's reveal animation aligned
    // with the actual scroll position instead of firing at the wrong time
    // (or not at all).
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready?.then(refresh);
    const settleTimer = setTimeout(refresh, 1000);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      resizeObserver.disconnect();
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      clearTimeout(settleTimer);
    };
  }, []);

  return null;
}
