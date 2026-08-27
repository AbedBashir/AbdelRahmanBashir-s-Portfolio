"use client";

import { useEffect, useRef } from "react";
import { gsap, useGsapSetup } from "@/lib/gsap";
import { skills } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  useGsapSetup();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: level / 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, barRef);

    return () => ctx.revert();
  }, [level]);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="font-mono text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          ref={barRef}
          className="h-full w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="What I Work With" title="Skills & Tools" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.05}
            >
              <div className="panel h-full rounded-3xl p-8 transition-transform hover:-translate-y-1">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {group.category}
                </h3>
                <div className="mt-6 space-y-5">
                  {group.items.map((item) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
