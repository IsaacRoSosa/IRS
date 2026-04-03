import React from 'react'

const navBar = () => {
  return (
    <div className="w-full h-[9vh] min-h-fit flex items-center bg-gradient-to-r from-[#04071D] to-[#2b1645] fixed top-0 z-100">
        <div className="w-1/5 h-full">
          <a href="#home">
            <img src="/IRS-Logo.png" alt="" className="w-[70px] object-contain ml-[25%] max-sm:mt-[25%] max-md:mt-[15%]" />
          </a>
        </div>

        <div className="w-4/5 h-full flex justify-end items-center flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-[70%] max-sm:ml-[15%]">
          <a href='#AboutMe' className="text-[#C1C2D3] text-[1.3em] mr-[5%] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-md:mr-[10%] max-sm:w-1/2">
            <h1>About</h1>
          </a>
          <a href='#Experience' className="text-[#C1C2D3] text-[1.3em] mr-[5%] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-md:mr-[10%] max-sm:w-1/2">
            <h1>Experience</h1>
          </a>
          <a href='#Projects' className="text-[#C1C2D3] text-[1.3em] mr-[5%] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-md:mr-[10%] max-sm:w-1/2">
            <h1>Projects</h1>
          </a>
          <a href='#Contact' className="text-[#C1C2D3] text-[1.3em] mr-[5%] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-md:mr-[10%] max-sm:w-1/2">
            <h1>Contact</h1>
          </a>
        </div>
    </div>
  )
}

export default navBar