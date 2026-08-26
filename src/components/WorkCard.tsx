"use client";

import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { WorkItem } from "@/data/content";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="group glass relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-300">{item.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-300"
            >
              Live Site <FiArrowUpRight />
            </a>
          )}
          {item.codeUrl && (
            <a
              href={item.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white"
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
