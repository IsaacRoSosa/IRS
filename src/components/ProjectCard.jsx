import React from 'react';

const ProjectCard = ({ image, title, description, technologies, links }) => {
    return (
      <div id={title} className="flex flex-col bg-gradient-to-br from-[#04071D] to-[#230052] rounded-[10px] overflow-hidden transition-all duration-300 border border-[#BF90FF] shadow-[0_0_15px_rgba(97,16,167,0.82)] hover:-translate-y-2.5 hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
        <div className="w-full h-[30vh] bg-[#60a5fa] rounded-[15px]">
          <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" />
        </div>
        <div className="p-5 flex flex-col justify-between flex-grow">
          <h3 className="text-[1.4rem] text-white mb-0 mt-0">{title}</h3>
          <p className="text-[1rem] text-[#bbb] mb-2.5">{description}</p>
          <div className="flex gap-5 flex-wrap mb-5 mt-[5px]">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={tech.logo} alt={`${tech.name} logo`} className="w-[15px] h-[15px] mb-[5px]" />
                <span className="text-[0.65rem] text-[#bbb]">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            {links && links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[0.9rem] text-[#CBACF9] no-underline transition-all duration-500 hover:text-[#a46df7] hover:scale-110 group">
                  <img src={link.logo} alt={`${link.name} logo`} className="w-5 h-5 mr-2.5 bg-white rounded-full transition-all duration-500 shadow-[0_0_5px_rgba(142,67,207,0.82)] group-hover:bg-[#a46df7]" />
                  <span>{link.name}</span>
                </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ProjectCard;