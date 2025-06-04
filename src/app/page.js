"use client"; // Asegúrate de añadir esta línea al comienzo del archivo
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactMeSection from "@/components/ContactMeSection";



export default function Home() {
  return (
    <main className={styles.main}>
   
     
      <NavBar />
     <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
