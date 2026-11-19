"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./ui/Modal";
import Gallery from "./ui/Gallery";
import PlanetWindow from "./ui/PlanetWindow";
import TechChip from "./ui/TechChip";
import LinkButton from "./ui/LinkButton";
import Reveal from "./ui/Reveal";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const { id, title, status, summary, details, image, gallery, stack, links } = project;
  const preview = stack.slice(0, 4);
  const extra = stack.length - preview.length;

  return (
    <Reveal as="li" delay={(index % 3) * 80} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-deep transition-colors hover:border-lavender/60">
        <PlanetWindow src={image} alt="" index={index} interactive />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-star sm:text-xl">
              {/* The whole card is clickable through this button's stretched hit area. */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-has-[:focus-visible]:underline"
              >
                {title}
              </button>
            </h3>
            {status && (
              <span className="shrink-0 rounded-full border border-lavender/40 px-2.5 py-0.5 text-xs text-lavender">
                {status}
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-haze">{summary}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <ul className="flex items-center gap-1.5" aria-label="Technologies">
              {preview.map((t) => (
                <li
                  key={t.name}
                  title={t.name}
                  className="grid size-8 place-items-center rounded-lg border border-line bg-deep-2 p-1.5"
                >
                  {t.logo ? (
                    <Image src={t.logo} alt={t.name} width={20} height={20} className="size-5 object-contain brightness-0 invert" />
                  ) : (
                    <span className="text-[10px] font-semibold text-star">{t.name.slice(0, 2)}</span>
                  )}
                </li>
              ))}
              {extra > 0 && <li className="pl-1 text-xs text-haze">+{extra}</li>}
            </ul>
            <span className="text-sm font-medium text-lavender transition-transform group-hover:translate-x-0.5">
              Details
            </span>
          </div>
        </div>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={`${id}-modal-title`}>
        {gallery.length > 0 ? (
          <Gallery images={gallery} title={title} />
        ) : (
          <PlanetWindow src={image} alt={`${title} icon`} index={index} large />
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id={`${id}-modal-title`} className="text-2xl font-semibold sm:text-3xl">
              {title}
            </h3>
            {status && (
              <span className="rounded-full border border-lavender/40 px-2.5 py-0.5 text-xs text-lavender">{status}</span>
            )}
          </div>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-haze">
            {details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h4 className="mt-8 text-sm font-semibold text-star">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((t) => (
              <TechChip key={t.name} {...t} />
            ))}
          </ul>

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
