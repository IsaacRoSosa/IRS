import React from 'react';
import styles from '@/styles/ProjectCard.module.css';
 
const ProjectCard = ({ image, title, description, technologies, links }) => {
    return (
      <div id={title} className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={`${title} screenshot`} className={styles. image} /> 
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                <img src={tech.logo} alt={`${tech.name} logo`} className={styles.techIcon} />
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
                    <div className={styles.links}>
    
            {links && links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <img src={link.logo} alt={`${link.name} logo`} className={styles.linkIcon} />
                <span className={styles.linkText}>{link.name}</span>
                </a>
            ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;