"use client";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactMeSection from "@/components/ContactMeSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-[200vh]">
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
