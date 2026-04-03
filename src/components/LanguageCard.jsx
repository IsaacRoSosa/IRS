import React from 'react';

const ProgrammingCard = ({ logo, title, experience }) => {
    return (
      <div className="relative w-[calc((100%-50px)/4)] h-[100px] p-[5px] rounded-2xl bg-[#181818] flex items-center border-[3px] border-[#52268F] shadow-[0_0_25px_rgba(97,16,167,0.82)] m-[25px] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_45px_rgba(121,21,209,0.82)] max-lg:w-[calc((100%-50px)/3)] max-sm:w-full max-sm:h-[70px]">
        <div className="w-2/5 flex justify-center items-center h-full">
          <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain rounded-[15px]" />
        </div>
        <div className="text-white flex flex-col justify-center items-center w-3/5 h-[90%] overflow-visible rounded-[0.7rem] p-2.5 leading-[0.1]">
          <p className="font-bold tracking-[0.1em] text-[1em] text-white max-sm:text-[1.8em]">{title}</p>
          <p className="mt-[5px] text-[0.9em] text-[#C1C2D3] max-sm:text-[1.2em]">{experience}</p>
        </div>
      </div>
    );
  };

  export default ProgrammingCard;