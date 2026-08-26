"use client";

import { websites } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected Projects" title="Websites & Platforms" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {websites.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.1}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
