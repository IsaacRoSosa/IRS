"use client"; // Asegúrate de añadir esta línea al comienzo del archivo
import React from 'react'
import styles from '@/styles/HeroSection.module.css'
import CubeComponent from './CubeComponent'

 

const HeroSection = () => {
  return (
    <div id='home' className={styles.container}>

      <div className={styles.textContainer}> 
        <h2>Hi, I&apos;m</h2>
        <h1>Isaac Rojas </h1>
        <div className={styles.containers}>

          <a href="Resume_Isaac_Rojas.pdf" download className={styles.resumeButton}> Resume</a>

          <a href="https://www.linkedin.com/in/isaacrojassosa/" target="_blank" rel="noreferrer">
              <img src="/Logos/linkedn-logo.png" alt="LinkedIn Logo" className={styles.logo} />
            </a>

            <a href="https://github.com/IsaacRoSosa" target="_blank" rel="noreferrer">
              <img src="/Logos/github-logo.png" alt="GitHub Logo" className={styles.logo} />
            </a>

       
        </div>
      </div>
      <div className={styles.cubeContainer}>
      <CubeComponent />
      </div>
    </div>
  )
}

export default HeroSection
