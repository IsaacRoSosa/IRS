import Section from "./ui/Section";
import HackathonCard from "./HackathonCard";
import hackathons from "@/data/hackathons.json";

export default function HackathonsSection() {
  return (
    <Section
      id="hackathons"
      title="Hackathons"
      intro="Weekend builds with friends: a working product, a pitch and very little sleep."
    >
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {hackathons.map((hack, i) => (
          <HackathonCard key={hack.id} hack={hack} index={i} />
        ))}
      </ul>
    </Section>
  );
}
