import React from 'react'
import styles from '@/styles/AboutMe.module.css'
import ProgrammingCard from './LanguageCard'
import TTCard from './TTCard' 
 
function AboutMeSection() { 
  return (
    <div id='AboutMe' className={styles.Container}>

            <div className={styles.blackContainer}>

                <div className={styles.aboutMeContainer}>
                    <h1> About Me</h1>
                    <div className={styles.line}></div>
                    
                    <p> I&apos;m a software engineer, studying computer science in Tecnolo</p>       
                </div>
                <div className={styles.LTTContainer}>


                    <h1>Programming Languages</h1>

                    <div className={styles.CardContainer}>
                        <ProgrammingCard logo="/Logos/Languages/python.png" title="Python" experience="2 years" />
                        <ProgrammingCard logo="/Logos/Languages/javascript.png" title="JavaScript" experience="2 years" />
                        <ProgrammingCard logo="/Logos/Languages/c++.png" title="C++" experience="1 year" />
                        <ProgrammingCard logo="/Logos/Languages/swift.png" title="Swift" experience="< 6 Months" />
                        <ProgrammingCard logo="/Logos/Languages/typescript.png" title="TypeScript" experience="< 6 Months" />
                        <ProgrammingCard logo="/Logos/Languages/c.png" title="C#" experience="< 6 Months" />
                    </div>

                    <h1>Tools & Technologies</h1>

                    <div className={styles.CardContainer}> 

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
