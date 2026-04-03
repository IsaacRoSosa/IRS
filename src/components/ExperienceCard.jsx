import React from 'react';

const ExperienceCard = ({ title, role, period, description, logo, companyDescription, linkedn}) => {
  return (
    <div className="flex w-[96%] p-5 border-2 border-[#BF90FF] rounded-[10px] bg-[#010623] text-white h-fit shadow-[0_0_25px_rgba(97,16,167,0.82)] max-md:flex-col">
      <div className="w-[30%] flex justify-center items-center max-md:hidden">
        <img src={logo} alt={`${title} logo`} className="w-4/5 h-4/5 object-contain" />
      </div>

      <div className="w-[70%] pl-5 max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:pl-0">
        <h2 className="text-[2.5rem] font-bold mb-0 max-lg:text-[2rem] max-md:text-[1.7em] max-[500px]:text-[1.5em]">{title}</h2>

        <div className="flex justify-between items-center w-[95%] max-md:flex-col max-md:text-center">
          <h3 className="text-[1.5rem] text-[#BF90FF] font-bold max-lg:text-[1.3rem] max-md:text-[1.2em] max-[500px]:text-[1em]">{role}</h3>
          <p className="text-[1.3rem] font-medium text-[#C1C2D3] max-lg:text-[1rem] max-md:text-[1em] max-[500px]:text-[0.9em]">{period}</p>
        </div>

        <div className="hidden justify-center max-md:flex max-md:block">
          <img src={logo} alt={`${title} logo`} className="w-1/2 h-1/2 object-contain max-[500px]:w-[40%] max-[500px]:h-[40%]" />
        </div>

        <p className="text-[1.2rem] text-justify w-[95%] font-semibold max-lg:text-[1.1rem] max-[500px]:text-[1em]">{companyDescription}</p>

        <ul className="text-[1.1rem] text-justify w-[90%] font-medium max-lg:text-[1rem] max-md:text-[1.1rem] max-md:w-[85%] max-md:self-center max-md:mx-auto max-md:list-none max-md:mr-[100px] max-[500px]:text-[1em] max-[500px]:w-[85%]">
          {description.map((item, index) => (
            <li key={index} className="mb-2.5 max-md:list-none">{item}</li>
          ))}
        </ul>

        <div className="w-[95%] flex items-center justify-end max-[500px]:justify-center max-[500px]:mt-[2vh]">
          <a href={linkedn} target="_blank" rel="noreferrer">
            <img
              src="/Logos/link2-logo.png"
              alt="LinkedIn Logo"
              className="w-10 h-10 bg-white rounded-[15%] transition-all duration-500 shadow-[0_0_10px_0_#CBACF9] hover:bg-[#CBACF9] hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
