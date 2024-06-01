import React from 'react'
import styles from '@/styles/navBar.module.css'


const navBar = () => {
  return (
    <div className={styles.banner}> 
        
        <div className={styles.imageContainer}>

          <a href="#home">
          <img src="/IRS-Logo.png" alt="" />
          </a>
       
        </div>

       <div className={styles.textContainer}>
        <a href='#AboutMe'> <h1 className={styles.title}>About</h1></a>
        <a href='#Experience'> <h1>Experience</h1></a>
        <a href='#Projects'><h1>Projects</h1></a>
        <a href='#Contact'><h1>Contact</h1></a>
       </div>
    </div>
  )
}

export default navBar