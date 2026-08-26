"use client";

import Image from "next/image";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import type { WorkItem } from "@/data/content";

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass relative block overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <FiArrowUpRight />
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
          <span className="font-medium text-cyan-300">{item.company}</span>
          <span className="inline-flex items-center gap-1">
            <FiMapPin size={13} /> {item.location}
          </span>
        </div>
      </div>
    </a>
  );
}
