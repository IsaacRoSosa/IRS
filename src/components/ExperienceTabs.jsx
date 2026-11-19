"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import TechChip from "./ui/TechChip";
import Reveal from "./ui/Reveal";

// Tabs: a vertical list on desktop, a horizontally scrollable row on mobile.
// Arrow keys move between tabs, following the WAI-ARIA tabs pattern.
export default function ExperienceTabs({ items }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const job = items[active];

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (active + keys[e.key] + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Reveal from="up" className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
      <div
        role="tablist"
        aria-label="Companies"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:border-l md:border-line md:px-0"
      >
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.id}
              ref={(el) => (tabRefs.current[i] = el)}
              id={`tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              style={{ animationDelay: `${80 + i * 60}ms` }}
              className={`in-data-shown:animate-[slide-in_0.45s_cubic-bezier(0.2,0.8,0.2,1)_both] shrink-0 snap-start rounded-full border px-4 py-2 text-left text-sm whitespace-nowrap transition-colors md:-ml-px md:rounded-none md:border-0 md:border-l-2 md:px-5 md:py-3 md:text-base ${
                selected
                  ? "border-lavender bg-lavender/10 text-star"
                  : "border-line text-haze hover:text-star md:border-transparent md:hover:bg-deep"
              }`}
            >
              {item.company}
            </button>
          );
        })}
      </div>

      <div
        key={job.id}
        id={`panel-${job.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${job.id}`}
        className="animate-panel rounded-2xl md:min-h-[22rem] border border-line bg-deep p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-white p-2 sm:size-16">
              <Image src={job.logo} alt="" width={48} height={48} className="size-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-star sm:text-2xl">{job.role}</h3>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-haze underline decoration-line underline-offset-4 transition-colors hover:text-lavender hover:decoration-lavender"
              >
                {job.company}
              </a>
            </div>
          </div>
          <p className="shrink-0 text-sm text-lavender sm:pt-1.5">{job.period}</p>
        </div>

        <p className="mt-6 max-w-[65ch] leading-relaxed text-star/85">{job.summary}</p>

        {job.highlights.length > 0 && (
          <ul className="mt-5 max-w-[65ch] space-y-3">
            {job.highlights.map((h) => (
              <li key={h} className="relative pl-5 leading-relaxed text-haze">
                <span aria-hidden="true" className="absolute top-2.5 left-0 size-1.5 rounded-full bg-lavender" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
          {job.stack.map((t) => (
            <TechChip key={t.name} {...t} />
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
