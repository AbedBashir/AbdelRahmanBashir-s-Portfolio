"use client";

import { useEffect, useRef } from "react";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { gsap, useGsapSetup } from "@/lib/gsap";
import { studies } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useGsapSetup();

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          item,
          { x: fromLeft ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="My Journey" title="Experience & Education" />

        <div ref={listRef} className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full origin-top bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-amber-400"
            />
          </div>

          <div className="space-y-14">
            {studies.map((item, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`timeline-item relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 md:pr-0 ${
                    fromLeft
                      ? "md:mr-auto md:pr-14 md:text-right"
                      : "md:ml-auto md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)] md:left-auto md:top-1.5 md:translate-x-1/2 ${
                      fromLeft ? "md:right-0" : "md:right-full"
                    }`}
                  />
                  <div className="panel rounded-2xl p-6">
                    <div
                      className={`flex items-center gap-2 ${
                        fromLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-cyan-400">
                        {item.type === "work" ? (
                          <FiBriefcase size={12} />
                        ) : (
                          <FiBookOpen size={12} />
                        )}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-heading mt-2 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-fuchsia-300">
                      {item.place}
                    </p>
                    <p className="mt-3 text-gray-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
