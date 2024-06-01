import React from 'react'
import styles from '@/styles/ExperienceSection.module.css'
import ExperienceSlider  from './ExperienceSlider'

function ExperienceSection() {
  return (
    <div id='Experience' className={styles.Container}>
        
        <div className={styles.blackContainer}>


        <div className={styles.ExperienceContainer}>
                    <h1> Experience</h1>  
                </div>
               
                   <ExperienceSlider />
        </div>
         
    </div>
  )
}

export default ExperienceSection