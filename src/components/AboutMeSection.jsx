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
                    
                    <p> I&apos;m a software developer passionate about leveraging technology and programming to solve real world challenges. My journey in technology has given me extensive experience in web development and process automation, and I am always eager to learn new technologies and methodologies. I also enjoy participating in hackathons and other competitions. My goal is to continue evolving as a developer and contribute to impactful projects.</p>       
                </div>
                <div className={styles.LTTContainer}>


                    <h1>Programming Languages</h1>

                    <div className={styles.CardContainer}>
                        <ProgrammingCard logo="/Logos/Python-logo.png" title="PYTHON" experience="2 years" />
                        <ProgrammingCard logo="/Logos/JavaScript-logo.png" title="JavaScript" experience="2 years" />
                        <ProgrammingCard logo="/Logos/c++-logo.png" title="C++" experience="1 year" />
                        <ProgrammingCard logo="/Logos/swift-logo.png" title="Swift" experience="< 6 Months" />
                        <ProgrammingCard logo="/Logos/matlab-logo.png" title="MATLAB" experience="< 6 Months" />
                        <ProgrammingCard logo="/Logos/c-logo.png" title="C#" experience="< 6 Months" />
                    </div>

                    <h1>Tools & Technologies</h1>

                    <div className={styles.CardContainer}> 

                        <TTCard logo="/Logos/React-logo.png" title="React" />
                        <TTCard logo="/Logos/next-logo.png" title="Next.js" />
                        <TTCard logo="/Logos/PostgreSQL-logo.png" title="PostgreSQL" />
                        <TTCard logo="/Logos/Flask-logo.png" title="Flask" />
                        <TTCard logo="/Logos/html-logo.webp" title="HTML" />
                        <TTCard logo="/Logos/css-logo.webp" title="CSS" />
                        <TTCard logo="/Logos/Mysql-logo.png" title="SQL" />
                        <TTCard logo="/Logos/supabase.png" title="Supabase" />
                        <TTCard logo="/Logos/Unity-logo.png" title="Unity" />
                        <TTCard logo="/Logos/Figma-logo.png" title="Figma" />
                    
                    </div>
                </div>
            </div>

    </div>

    
  )
}

export default AboutMeSection
