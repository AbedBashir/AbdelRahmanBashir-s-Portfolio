"use client";

import { apps } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WorkCard from "./WorkCard";

export default function Apps() {
  return (
    <section id="apps" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Built for Merchants" title="Shopify Apps" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {apps.map((item, i) => (
            <Reveal key={item.title} direction={i % 2 === 0 ? "left" : "right"}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
