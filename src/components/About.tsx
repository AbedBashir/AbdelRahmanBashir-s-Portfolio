"use client";

import { useEffect, useRef } from "react";
import { gsap, useGsapSetup } from "@/lib/gsap";
import { about, profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGsapSetup();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          if (el) el.textContent = Math.floor(counter.val).toString();
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [value]);

  return <span ref={ref}>0</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Who I Am" title={about.heading} />

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal direction="left">
            <div className="space-y-5 text-lg leading-relaxed text-gray-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {about.traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray-200"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm">
                <span className="uppercase tracking-[0.2em] text-cyan-400">
                  {profile.location}
                </span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-400">
                  {about.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
                </span>
              </div>

              <a
                href={profile.cvUrl}
                download
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" stagger={0.12}>
            <div className="grid grid-cols-2 gap-5">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="panel rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                    <Counter value={stat.value} />
                    <span>+</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
