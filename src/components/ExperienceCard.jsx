import React from 'react'; 
import styles from '@/styles/ExperienceCard.module.css';

const ExperienceCard = ({ title, role, period, description, logo, companyDescription, linkedn }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={logo} alt={`${title} logo`} className={styles.logo} />
      </div>
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.roleDuration}>
          <h3 className={styles.role}>{role}</h3>
          <p className={styles.period}>{period}</p>
       </div>

      <div className={styles.hideImage}>
        <img src={logo} alt={`${title} logo`} className={styles.logo} />
      </div>

       <p className={styles.companyDescription}>{companyDescription}</p>
        <ul className={styles.description}>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      <div className={styles.additionalInfo}>
      <a href={linkedn} target="_blank" rel="noreferrer">
              <img src="/Logos/link2-logo.png" alt="LinkedIn Logo" className={styles.logo2} />
            </a>

      </div>
       

      </div>
    </div>
  );
};

export default ExperienceCard;
