"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "./ui/Modal";
import Gallery from "./ui/Gallery";
import WashWindow from "./ui/WashWindow";
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
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition-colors hover:border-line-strong hover:shadow-lift">
        <WashWindow src={image} alt="" index={index} interactive />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
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
              <span className="shrink-0 rounded-full border border-rust/40 px-2.5 py-0.5 text-xs text-rust">
                {status}
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{summary}</p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <ul className="flex items-center gap-1.5" aria-label="Technologies">
              {preview.map((t) => (
                <li
                  key={t.name}
                  title={t.name}
                  className="grid size-8 place-items-center rounded-lg border border-line bg-paper-sunk p-1.5"
                >
                  {t.logo ? (
                    <Image src={t.logo} alt={t.name} width={20} height={20} className="size-5 object-contain logo-mono" />
                  ) : (
                    <span className="text-[10px] font-semibold text-ink">{t.name.slice(0, 2)}</span>
                  )}
                </li>
              ))}
              {extra > 0 && <li className="pl-1 text-xs text-ink-soft">+{extra}</li>}
            </ul>
            <span className="text-sm font-medium text-rust transition-transform group-hover:translate-x-0.5">
              Details
            </span>
          </div>
        </div>
      </article>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy={`${id}-modal-title`}>
        {gallery.length > 0 ? (
          <Gallery images={gallery} title={title} />
        ) : (
          <WashWindow src={image} alt={`${title} icon`} index={index} large />
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id={`${id}-modal-title`} className="text-2xl font-semibold sm:text-3xl">
              {title}
            </h3>
            {status && (
              <span className="rounded-full border border-rust/40 px-2.5 py-0.5 text-xs text-rust">{status}</span>
            )}
          </div>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft">
            {details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h4 className="mt-8 text-sm font-semibold text-ink">Built with</h4>
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
