"use client";

import { useState } from "react";
import type { WorkItem } from "@/data/content";
import Reveal from "./Reveal";
import WorkCard from "./WorkCard";

export default function WorkGrid({
  items,
  initialCount = 6,
}: {
  items: WorkItem[];
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, initialCount);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {visible.map((item, i) => (
          <Reveal key={item.title + item.link} direction="up" delay={(i % 3) * 0.08}>
            <WorkCard item={item} />
          </Reveal>
        ))}
      </div>

      {items.length > initialCount && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="panel rounded-full px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {expanded ? "Show Less" : `Show All ${items.length}`}
          </button>
        </div>
      )}
    </div>
  );
}
