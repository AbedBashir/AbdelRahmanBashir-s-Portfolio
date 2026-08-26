"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGsapSetup } from "@/lib/gsap";

/** Thin gradient bar pinned to the top of the viewport that fills as you scroll the page. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useGsapSetup();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-white/5">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
