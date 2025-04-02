import React from 'react';
import styles from '@/styles/TTCard.module.css'; 


const TTCard = ({ logo, title }) => {
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={logo} alt={`${title} logo`} className={styles.logo} />
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.title}>{title}</p>
          
        </div>
      </div>
    );
  };
  
  export default TTCard;