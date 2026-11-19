import LavaWash from "./LavaWash";
import { profile } from "@/data/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate">
      <LavaWash />
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pt-24 pb-16 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="">
          <p className="animate-rise text-lg text-ink-soft sm:text-xl">Hi, I&apos;m</p>
          <h1 className="animate-rise mt-1 font-display [animation-delay:60ms] text-5xl leading-[1.05] text-rust sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg [animation-delay:120ms] leading-relaxed text-ink/90 sm:text-xl">
            {profile.role} based in {profile.location}. {profile.tagline}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-vermilion hover:text-on-wash"
            >
              <DownloadIcon />
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-medium text-ink transition-colors hover:border-rust hover:text-rust"
            >
              <MailIcon />
              Email me
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid size-12 place-items-center rounded-full text-ink-soft transition-colors hover:text-ink"
              >
                <GitHubIcon width={22} height={22} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-12 place-items-center rounded-full text-ink-soft transition-colors hover:text-ink"
              >
                <LinkedInIcon width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
