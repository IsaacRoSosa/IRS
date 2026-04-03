import React from 'react'
import ExperienceSlider from './ExperienceSlider'

function ExperienceSection() {
  return (
    <div id='Experience' className="w-full h-fit mt-[4%] justify-center flex max-sm:mt-[10%]">
      <div className="w-[90%] h-fit rounded-[25px] flex flex-col">
        <div className="w-full h-fit rounded-[25px] max-sm:justify-center max-sm:items-center max-sm:flex max-[500px]:flex max-[500px]:justify-center max-[500px]:items-center max-[450px]:flex max-[450px]:justify-center max-[450px]:items-center">
          <h1 className="text-[4em] text-white relative after:content-[''] after:absolute after:left-[1px] after:-bottom-2 after:h-[7px] after:w-[5.5em] after:bg-[#CBACF9] max-sm:text-[3.3em] max-[500px]:text-[3em] max-[450px]:text-[3em]">
            Experience
          </h1>
        </div>
        <ExperienceSlider />
      </div>
    </div>
  )
}

export default ExperienceSection