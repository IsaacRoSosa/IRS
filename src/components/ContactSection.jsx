import { profile } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SleeveArt from "./ui/SleeveArt";

export default function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl px-5 pt-12 pb-24 sm:px-8">
        <Reveal from="scale" className="relative overflow-hidden rounded-3xl border border-line bg-paper-raised px-6 py-14 sm:px-12 sm:py-20">
          <SleeveArt className="sleeve-fade pointer-events-none absolute inset-y-0 right-0 h-full w-[85%] opacity-60 sm:w-[60%] sm:opacity-100" />
          <div className="relative max-w-xl">
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              I&apos;m open to software engineering roles and interesting projects. Send me an email and I&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full bg-ink px-5 py-3 font-medium break-all text-paper transition-colors hover:bg-vermilion hover:text-on-wash"
            >
              <MailIcon className="shrink-0" />
              {profile.email}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:px-8">
          <p>
            © {year} {profile.name}
          </p>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-full hover:text-ink">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-full hover:text-ink">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
