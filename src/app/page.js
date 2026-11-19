import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-lavender focus:px-4 focus:py-2 focus:text-space"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main" className="relative overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonsSection />
        <ContactSection />
      </main>
    </>
  );
}
