"use client";

import { stores } from "@/data/content";
import SectionHeading from "./SectionHeading";
import WorkGrid from "./WorkGrid";

export default function Stores() {
  return (
    <section id="stores" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="E-Commerce" title="Shopify Stores Managed" />
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          {stores.length} live Shopify stores I&apos;ve built, themed, and
          kept running smoothly for clients worldwide.
        </p>

        <div className="mt-16">
          <WorkGrid items={stores} />
        </div>
      </div>
    </section>
  );
}
