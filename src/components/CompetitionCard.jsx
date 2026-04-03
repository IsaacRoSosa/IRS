import React from 'react';

const CompetitionCard = ({ image, title, date, team, description, links, project }) => {
  return (
    <div className="flex flex-col bg-[#1e1e1e] rounded-[10px] overflow-hidden transition-all duration-300 mx-2.5 border border-[#BF90FF] shadow-[0_0_5px_rgba(97,16,167,0.82)] h-[85vh] hover:-translate-y-2.5 hover:shadow-[0_10px_15px_rgba(0,0,0,0.2)] max-lg:h-[78vh] max-md:h-[85vh] max-[450px]:h-[65vh]">
      <div className="w-full h-[200px] overflow-hidden">
        <img src={image} alt={`${title} event`} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col">
        <h3 className="text-[1.5rem] text-white mb-0 mt-[5px] text-center max-lg:text-[1.6rem] max-md:text-[1.5rem]">{title}</h3>

        <div className="flex justify-between">
          <p className="text-[1rem] text-[#f9d1f5] mb-2.5 max-lg:text-[0.9rem] max-md:text-[1rem] max-md:text-[1.3rem]">{team}</p>
          <p className="text-[1rem] text-[#bbbbbb] mb-2.5 max-lg:text-[0.9rem] max-md:text-[1rem] max-md:text-[1.3rem]">{date}</p>
        </div>

        <p className="text-[1rem] text-[#bbb] mb-5 max-lg:text-[0.9rem] max-md:text-[1rem]">{description}</p>
        <div className="flex justify-around gap-2.5">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[1rem] text-[#3b82f6] no-underline transition-colors duration-300 hover:text-[#60a5fa] max-lg:text-[0.9rem] max-md:text-[1.2em]">
              <img src={link.logo} alt={`${link.name} logo`} className="w-5 h-5 mr-2.5 bg-white rounded-full" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
 