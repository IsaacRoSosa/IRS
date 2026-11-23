import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Web and iOS apps I've built, some on my own and some with a team. Open any project to see screenshots, the stack and links."
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </ul>
    </Section>
  );
}
