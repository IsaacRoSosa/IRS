import Reveal from "./Reveal";

// Shared wrapper so every section has the same width, spacing and heading style.
export default function Section({ id, title, intro, children, className = "" }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24 ${className}`}
    >
      <header className="mb-10 max-w-2xl md:mb-14">
        <Reveal from="left">
          <h2
            id={`${id}-title`}
            className="flex items-center gap-3 text-3xl font-normal tracking-tight text-ink sm:text-5xl"
          >
            <span aria-hidden="true" className="relative inline-block h-5 w-8 shrink-0">
              <span className="absolute left-0 h-5 w-6 rounded-[62%_38%_55%_45%/48%_58%_42%_52%] bg-vermilion" />
              <span className="absolute left-4 top-1.5 h-4 w-4 rounded-[40%_60%_50%_50%/55%_45%_55%_45%] bg-fern [mix-blend-mode:var(--wash-blend)]" />
            </span>
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal as="p" delay={80} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            {intro}
          </Reveal>
        )}
      </header>
      {children}
    </section>
  );
}
