import { profile } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";
import Reveal from "./ui/Reveal";

export default function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl px-5 pt-12 pb-24 sm:px-8">
        <Reveal from="scale" className="starfield relative overflow-hidden rounded-3xl border border-line bg-deep px-6 py-14 sm:px-12 sm:py-20">
          <span
            aria-hidden="true"
            className="absolute -top-28 -right-28 size-56 rounded-full opacity-40 sm:-top-24 sm:-right-24 sm:size-96 sm:opacity-60"
            style={{ background: "radial-gradient(circle at 35% 35%, #cbacf9, #6a3fb5 45%, #22104a 75%, transparent 76%)" }}
          />
          <div className="relative max-w-xl">
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-haze">
              I&apos;m open to software engineering roles and interesting projects. Send me an email and I&apos;ll get back to you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full bg-lavender px-5 py-3 font-medium break-all text-space transition-colors hover:bg-white"
            >
              <MailIcon className="shrink-0" />
              {profile.email}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-haze sm:flex-row sm:px-8">
          <p>
            © {year} {profile.name}
          </p>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-full hover:text-star">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-full hover:text-star">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
