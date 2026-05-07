import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import CompetitionSlider from '@/components/CompetitionSlider';
import projectsData from '@/data/projects.json';

function ExperienceSection() {

  const sortedProjects = projectsData.sort((a, b) => a.id - b.id);

  return (
    <div id='Projects' className="w-full h-fit justify-center flex flex-col items-center">
      <div className="w-[90%] h-full rounded-[25px] flex flex-col">
        <div className="w-full h-fit rounded-[25px]">
          <h1 className="text-[4em] text-white relative after:content-[''] after:absolute after:left-[1px] after:-bottom-2 after:h-[7px] after:w-[4em] after:bg-[#CBACF9] max-md:text-center max-md:after:left-1/2 max-md:after:-translate-x-1/2">
            Projects
          </h1>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 400px))",
          gap: "2.5rem",
          justifyContent: "center",
          padding: "1.5rem",
          width: "100%"
        }}>
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.image}
              title={project.title}
              description={project.description}
              expandDescription={project.expandDescription}
              technologies={project.technologies || []}
              links={project.links || []}
              images={project.images || []}
            />
          ))}
        </div>

        <h1 className="text-[2.7em] text-[#EEE2FF] max-md:text-center mt-6">Hackathons</h1>
        <div className="w-full  flex items-center justify-center ">
          <CompetitionSlider />
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
