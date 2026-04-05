"use client";
import React from 'react'

const HeroSection = () => {
  return (
    <div
      id='home'
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `
          conic-gradient(from 90deg at 2px 2px, transparent 90deg, #78787827 0),
          conic-gradient(from 90deg at 1px 1px, transparent 90deg, #78787827 0)
        `,
        backgroundColor: '#000319',
        backgroundSize: '450px 450px, 90px 90px'
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center">
        <h2 className="text-[4.5em] text-white mb-0 mt-0 max-sm:text-[2.5em]">Hi, I&apos;m</h2>
        <h1 className="text-[6em] text-[#CBACF9] mb-0 mt-0 max-sm:text-[3em]">Isaac Rojas</h1>
        <div className="w-4/5 max-w-[500px] flex justify-around items-center mt-[6vh] max-sm:mt-[4vh]">
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
    </div>
  )
}

export default HeroSection
