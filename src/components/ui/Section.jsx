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
            className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-star sm:text-4xl"
          >
            <span
              aria-hidden="true"
              className="size-3 shrink-0 rounded-full bg-lavender shadow-[0_0_14px_var(--color-lavender)]"
            />
            {title}
          </h2>
        </Reveal>
        {intro && (
          <Reveal as="p" delay={80} className="mt-4 text-base leading-relaxed text-haze sm:text-lg">
            {intro}
          </Reveal>
        )}
      </header>
      {children}
    </section>
  );
}
