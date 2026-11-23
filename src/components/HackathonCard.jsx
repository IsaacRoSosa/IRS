"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./ui/Modal";
import LinkButton from "./ui/LinkButton";
import Reveal from "./ui/Reveal";

export default function HackathonCard({ hack, index = 0 }) {
  const [open, setOpen] = useState(false);
  const { id, event, project, team, date, result, summary, details, image, links } = hack;

  return (
    <Reveal as="li" from={index % 2 === 0 ? "left" : "right"} delay={(index % 2) * 80} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition-colors hover:border-line-strong hover:shadow-lift sm:flex-row">
        <div className="shine relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
          <Image
            src={image}
            alt={`Team ${team} at ${event}`}
            fill
            sizes="(min-width: 640px) 240px, 100vw"
            className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-sm text-ink-soft">
            {event}, <time>{date}</time>
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ink">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-has-[:focus-visible]:underline"
            >
              {project}
            </button>
          </h3>
          {result && (
            <p className="mt-2 w-fit rounded-full bg-vermilion/20 px-2.5 py-0.5 text-xs font-medium text-rust">
              {result}
            </p>
          )}
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{summary}</p>
          <span className="mt-auto pt-4 text-sm font-medium text-rust">Read more</span>
        </div>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={`${id}-modal-title`}>
        <div className="relative aspect-video w-full">
          <Image src={image} alt={`Team ${team} at ${event}`} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-sm text-ink-soft">
            Team {team} at {event}, {date}
          </p>
          <h3 id={`${id}-modal-title`} className="mt-1 text-2xl font-semibold sm:text-3xl">
            {project}
          </h3>
          {result && (
            <p className="mt-3 w-fit rounded-full bg-vermilion/20 px-3 py-1 text-sm font-medium text-rust">{result}</p>
          )}
          <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
            {details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <LinkButton key={l.url} {...l} variant={i === 0 ? "solid" : "ghost"} />
              ))}
            </div>
          )}
        </div>
      </Modal>
    </Reveal>
  );
}
