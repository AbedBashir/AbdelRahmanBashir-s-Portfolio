"use client";

import { useEffect, useRef } from "react";
import { gsap, useGsapSetup } from "@/lib/gsap";

type Direction = "left" | "right" | "up" | "down" | "scale";

type RevealProps = {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  /** stagger children of this element instead of animating it as one block */
  stagger?: number;
  as?: React.ElementType;
};

const getFrom = (direction: Direction, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, opacity: 0 };
    case "right":
      return { x: distance, opacity: 0 };
    case "up":
      return { y: distance, opacity: 0 };
    case "down":
      return { y: -distance, opacity: 0 };
    case "scale":
      return { scale: 0.85, opacity: 0 };
    default:
      return { opacity: 0 };
  }
};

/**
 * Wraps content and animates it into place as it enters the viewport —
 * and reverses the animation when the user scrolls back up past it, so
 * the page feels alive in both scroll directions, not just on first load.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 60,
  className,
  stagger,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGsapSetup();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;
    const from = getFrom(direction, distance);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        from,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, stagger]);

  const Tag = as;

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
