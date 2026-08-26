"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { stores } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Stores() {
  return (
    <section id="stores" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Growth & Management" title="Stores I've Managed" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stores.map((store, i) => (
            <Reveal key={store.name} direction="up" delay={i * 0.1}>
              <div className="group glass relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
                    {store.metric}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {store.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">{store.description}</p>
                  {store.url && (
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-300"
                    >
                      Visit Store <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
