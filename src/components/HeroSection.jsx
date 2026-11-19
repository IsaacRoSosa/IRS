import { profile } from "@/data/site";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

const ring = "absolute inset-0 m-auto rounded-full border border-lavender/15";

// The signature element of the page: a small planetary system that orbits slowly.
function Orbit() {
  return (
    <div aria-hidden="true" className="relative aspect-square w-60 sm:w-72 lg:w-[26rem]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(160,40,255,0.25)_0%,transparent_65%)]" />
      <div className={`${ring} size-[55%]`} />
      <div className={`${ring} size-[80%]`} />
      <div className={`${ring} size-full border-dashed`} />

      {/* Central planet */}
      <div
        className="absolute inset-0 m-auto size-[26%] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, #e9d8ff, #cbacf9 35%, #6a3fb5 75%, #22104a)",
          boxShadow: "0 0 60px rgba(203,172,249,0.55), inset -10px -10px 24px rgba(0,0,0,0.45)",
        }}
      />

      {/* Each orbit is a rotating square; the planet sits on its edge */}
      <div className="absolute inset-0 m-auto size-[55%] animate-orbit [animation-duration:28s]">
        <span
          className="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle at 35% 35%, #40d4ff, #0066cc, #001a40)", boxShadow: "0 0 18px rgba(40,160,255,0.7)" }}
        />
      </div>
      <div className="absolute inset-0 m-auto size-[80%] animate-orbit-reverse [animation-duration:45s]">
        <span
          className="absolute top-1/2 -right-3.5 size-7 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle at 35% 35%, #d060ff, #6600cc, #1a0040)", boxShadow: "0 0 24px rgba(160,40,255,0.7)" }}
        />
      </div>
      <div className="absolute inset-0 m-auto size-full animate-orbit [animation-duration:80s]">
        <span
          className="absolute bottom-[14%] left-[6%] size-4 rounded-full"
          style={{ background: "radial-gradient(circle at 35% 35%, #40ffb8, #00cc66, #00401a)", boxShadow: "0 0 16px rgba(40,255,160,0.6)" }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="top" className="starfield relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_15%_30%,rgba(120,40,220,0.22),transparent),radial-gradient(ellipse_50%_50%_at_85%_70%,rgba(40,140,255,0.14),transparent)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-space" />
      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pt-24 pb-16 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="order-2 lg:order-1">
          <p className="animate-rise text-lg text-haze sm:text-xl">Hi, I&apos;m</p>
          <h1 className="animate-rise mt-1 font-display [animation-delay:60ms] text-5xl leading-[1.05] text-lavender sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg [animation-delay:120ms] leading-relaxed text-star/90 sm:text-xl">
            {profile.role} based in {profile.location}. {profile.tagline}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-3 font-medium text-space transition-colors hover:bg-white"
            >
              <DownloadIcon />
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-medium text-star transition-colors hover:border-lavender hover:text-lavender"
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
                className="grid size-12 place-items-center rounded-full text-haze transition-colors hover:text-star"
              >
                <GitHubIcon width={22} height={22} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-12 place-items-center rounded-full text-haze transition-colors hover:text-star"
              >
                <LinkedInIcon width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-pop order-1 flex justify-center [animation-delay:100ms] lg:order-2 lg:justify-end">
          <Orbit />
        </div>
      </div>
    </section>
  );
}
