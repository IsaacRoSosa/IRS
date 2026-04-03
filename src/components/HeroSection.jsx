"use client";
import React from 'react'
import CubeComponent from './CubeComponent'

const HeroSection = () => {
  return (
    <div
      id='home'
      className="w-full h-screen flex items-center max-sm:flex-col max-sm:mt-[5vh]"
      style={{
        backgroundImage: `
          conic-gradient(from 90deg at 2px 2px, transparent 90deg, #78787827 0),
          conic-gradient(from 90deg at 1px 1px, transparent 90deg, #78787827 0)
        `,
        backgroundColor: '#000319',
        backgroundSize: '450px 450px, 90px 90px'
      }}
    >
      <div className="w-[55%] min-h-[55vh] h-fit flex flex-col justify-center max-sm:w-full max-sm:h-[50vh] max-sm:min-h-0">
        <h2 className="text-[4.5em] text-white ml-[12%] mb-0 mt-0 max-sm:text-[2.5em]">Hi, I&apos;m</h2>
        <h1 className="text-[6em] text-[#CBACF9] ml-[12%] mb-0 mt-0 max-sm:text-[3em] max-sm:w-4/5">Isaac Rojas</h1>
        <div className="w-4/5 h-1/5 flex self-center justify-around items-center mt-[6vh] max-sm:mt-[2vh]">
          <a
            href="Resume_Isaac_Rojas.pdf"
            download
            className="text-white w-fit bg-transparent border-2 border-white no-underline rounded-[5px] px-5 py-2.5 transition-all duration-500 shadow-[0_0_10px_0_#CBACF9] flex items-center justify-center text-center text-[1.8em] hover:shadow-[0_0_20px_0_#CBACF9] hover:scale-110"
          >
            Resume
          </a>

          <a href="https://www.linkedin.com/in/isaacrojassosa/" target="_blank" rel="noreferrer">
            <img
              src="/Logos/linkedn-logo.png"
              alt="LinkedIn Logo"
              className="w-[60px] h-[60px] bg-white rounded-full transition-all duration-500 shadow-[0_0_10px_0_#CBACF9] hover:bg-[#CBACF9] hover:scale-[1.3]"
            />
          </a>

          <a href="https://github.com/IsaacRoSosa" target="_blank" rel="noreferrer">
            <img
              src="/Logos/github-logo.png"
              alt="GitHub Logo"
              className="w-[60px] h-[60px] bg-white rounded-full transition-all duration-500 shadow-[0_0_10px_0_#CBACF9] hover:bg-[#CBACF9] hover:scale-[1.3]"
            />
          </a>
        </div>
      </div>
      <div className="w-[45%] h-[55vh] flex items-center justify-center max-sm:w-full max-sm:h-[50vh]">
        <CubeComponent />
      </div>
    </div>
  )
}

export default HeroSection
