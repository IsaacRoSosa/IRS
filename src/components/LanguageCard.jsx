import React from 'react';
import styles from '@/styles/LanguageCard.module.css';


const ProgrammingCard = ({ logo, title, experience }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={logo} alt={`${title} logo`} className={styles.logo} />
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.title}>{title}</p>
          <p className={styles.experience}>{experience}</p>
        </div>
      </div>
    );
  };
  
  export default ProgrammingCard;