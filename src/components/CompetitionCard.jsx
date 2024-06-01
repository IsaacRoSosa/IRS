import React from 'react';
import styles from '@/styles/CompetitionCard.module.css';


const CompetitionCard = ({ image, title, date, team, description, links, project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`${title} event`} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.dateTeam}>
        <p className={styles.team}> {team}</p>
        <p className={styles.date}>{date}</p>
        </div>

        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
       
          {links.map((link, index) => (
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

export default CompetitionCard;
 