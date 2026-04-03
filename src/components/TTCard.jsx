import React from 'react';

const TTCard = ({ logo, title }) => {
    return (
      <div className="relative w-[calc((100%-50px)/6)] h-[80px] p-[5px] rounded-2xl bg-[#181818] flex items-center justify-between flex-nowrap border-[3px] border-[#52268F] shadow-[0_0_10px_rgba(97,16,167,0.82)] m-2.5 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_#7915d1d1] max-lg:w-[calc((100%-50px)/3)] max-sm:w-4/5 max-sm:h-[60px]">
        <div className="w-[35%] flex justify-center items-center h-full">
          <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain rounded-[15px]" />
        </div>
        <div className="text-white flex flex-col justify-center items-center w-3/5 h-[90%] overflow-visible rounded-[0.7rem] p-2.5 leading-[1.1]">
          <p className="font-bold text-[1.7vw] text-white max-sm:text-[1.6em]">{title}</p>
        </div>
      </div>
    );
  };

  export default TTCard;