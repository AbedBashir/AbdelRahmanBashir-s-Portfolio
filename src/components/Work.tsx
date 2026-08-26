"use client";

import { websites } from "@/data/content";
import SectionHeading from "./SectionHeading";
import WorkGrid from "./WorkGrid";

export default function Work() {
  return (
    <section id="websites" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected Work" title="Websites & Platforms" />
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          A selection of the {websites.length}+ WordPress and custom websites
          I&apos;ve designed and built for clients across Canada, Lebanon, and beyond.
        </p>

        <div className="mt-16">
          <WorkGrid items={websites} />
        </div>
      </div>
    </section>
  );
}
