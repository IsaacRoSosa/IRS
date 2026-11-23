import Section from "./ui/Section";
import ExperienceTabs from "./ExperienceTabs";
import experience from "@/data/experience.json";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ExperienceTabs items={experience} />
    </Section>
  );
}
