import Section from "./ui/Section";
import TechChip from "./ui/TechChip";
import Reveal from "./ui/Reveal";
import { about, skills } from "@/data/site";

export default function AboutSection() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/85">
          {about.map((p, i) => (
            <Reveal as="p" key={p} from="left" delay={i * 80}>
              {p}
            </Reveal>
          ))}
        </div>

        <div className="space-y-8">
          {skills.map((group) => (
            <Reveal key={group.group} from="fade">
              <h3 className="text-sm font-semibold text-rust">{group.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((s, i) => (
                  <TechChip key={s.name} {...s} style={{ animationDelay: `${i * 30}ms` }} className="in-data-shown:animate-rise" />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
