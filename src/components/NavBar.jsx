import React from 'react'

const navBar = () => {
  return (
    <div className="w-full h-[9vh] min-h-fit flex items-center bg-gradient-to-r from-[#04071D] to-[#2b1645] fixed top-0 z-50">
        <div className="w-1/5 h-full flex items-center">
          <a href="#home" className="ml-[25%] max-sm:ml-[15%]">
            <h1 className="text-[#CBACF9] text-[2.5em] m-0 max-sm:text-[2em]" style={{fontFamily: 'Audiowide, sans-serif'}}>
              IRS
            </h1>
          </a>
        </div>

        <div className="w-4/5 h-full flex justify-end items-center pr-[5%] gap-[5%] max-md:gap-[3%] max-sm:gap-[2%]">
          <a href='#AboutMe' className="text-[#C1C2D3] text-[1.3em] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-sm:text-[0.8em]" style={{fontFamily: 'Audiowide, sans-serif'}}>
            About
          </a>
          <a href='#Experience' className="text-[#C1C2D3] text-[1.3em] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-sm:text-[0.8em]" style={{fontFamily: 'Audiowide, sans-serif'}}>
            Experience
          </a>
          <a href='#Projects' className="text-[#C1C2D3] text-[1.3em] no-underline hover:text-[#CDB8EC] hover:cursor-pointer max-md:text-[1em] max-sm:text-[0.8em]" style={{fontFamily: 'Audiowide, sans-serif'}}>
            Projects
          </a>
        </div>
    </div>
  )
}

export default navBar
