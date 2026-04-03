import React from 'react'
import ProgrammingCard from './LanguageCard'
import TTCard from './TTCard'

function AboutMeSection() {
  return (
    <div id='AboutMe' className="w-full h-fit mt-[1%] justify-center flex max-sm:mt-[10%]">
      <div className="w-[90%] h-full rounded-[25px] flex flex-col">
        <div className="w-full h-fit rounded-[25px]">
          <h1 className="text-[4em] text-white relative after:content-[''] after:absolute after:left-[1px] after:-bottom-2 after:h-[7px] after:w-[4.8em] after:bg-[#CBACF9] max-sm:text-[3.3em] max-sm:ml-[17.5%] max-[450px]:text-[3em] max-[450px]:ml-[17.5%] max-[400px]:ml-[12.5%] max-[500px]:ml-[22%]">
            About Me
          </h1>
          <p className="text-[1.8em] text-white relative mt-[8vh] font-semibold text-justify leading-[1.3] max-[500px]:text-[1.4em] max-[450px]:text-[1.4em] max-[400px]:text-[1.3em]">
            I&apos;m a software engineer, studying computer science in Tecnolo
          </p>
        </div>

        <div className="w-full h-[70%] rounded-[25px] flex flex-col max-sm:justify-center max-sm:items-center">
          <h1 className="text-[2.7em] text-[#EEE2FF] max-sm:text-[2.2em] max-[450px]:text-[1.8em] max-[400px]:text-[1.7em]">
            Programming Languages
          </h1>

          <div className="w-full flex h-fit flex-wrap justify-around">
            <ProgrammingCard logo="/Logos/Languages/python.png" title="Python" experience="2 years" />
            <ProgrammingCard logo="/Logos/Languages/javascript.png" title="JavaScript" experience="2 years" />
            <ProgrammingCard logo="/Logos/Languages/c++.png" title="C++" experience="1 year" />
            <ProgrammingCard logo="/Logos/Languages/swift.png" title="Swift" experience="< 6 Months" />
            <ProgrammingCard logo="/Logos/Languages/typescript.png" title="TypeScript" experience="< 6 Months" />
            <ProgrammingCard logo="/Logos/Languages/c.png" title="C#" experience="< 6 Months" />
          </div>

          <h1 className="text-[2.7em] text-[#EEE2FF] max-sm:text-[2.2em] max-[450px]:text-[1.8em] max-[400px]:text-[1.7em]">
            Tools & Technologies
          </h1>

          <div className="w-full flex h-fit flex-wrap justify-around">
            <TTCard logo="/Logos/Tools/react.png" title="React" />
            <TTCard logo="/Logos/Tools/nextjs.png" title="Next.js" />
            <TTCard logo="/Logos/Flask-logo.png" title="Flask" />
            <TTCard logo="/Logos/Tools/postgresql.png" title="PostgreSQL" />
            <TTCard logo="/Logos/Tools/mySql.png" title="MySQL" />
            <TTCard logo="/Logos/Tools/git.png" title="Git" />
            <TTCard logo="/Logos/Tools/supabase.png" title="Supabase" />
            <TTCard logo="/Logos/Tools/firebase.png" title="Firebase" />
            <TTCard logo="/Logos/Unity-logo.png" title="Unity" />
            <TTCard logo="/Logos/Tools/figma.png" title="Figma" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
