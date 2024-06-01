import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import styles from '@/styles/ExperienceSlider.module.css';

const experiences = [ 
  {
    title: 'On Campus Intern',
    role: 'Full Stack Developer',
    period: 'FEB 2024 - PRESENT',
    companyDescription: 'Control Tower Development is dedicated to overseeing and enhancing entrepreneurship events and initiatives across the universitys 26 campuses. We ensure that data integrity and accuracy are maintained while streamlining processes for maximum efficiency.',
    description: [
      "Automating Data Processing: Developed Python scripts that reduced data tasks from 6-10 hours a week to minutes by handling data cleaning, processing, SQL insertion, and verification", 
    ],
    logo: '/Logos/tec-logo.svg',
    linkedn: 'https://www.linkedin.com/school/tecdemonterrey/'
  },
  {
    title: 'CyberSecurity Tec',
    role: 'Web Developer',
    period: 'FEB 2024 - PRESENT',
    companyDescription: 'Cyber Security Club at Tec is a student organization dedicated to promoting cybersecurity awareness and knowledge among students. We host workshops, competitions, and talks to help students develop their skills and knowledge in the field.',
    description: [
      'Frontend Development: Primarily focused on frontend development, creating attractive and easy-to-use user interfaces using React, JavaScript, and Next.js.',
      'Project Coordination: Demonstrated strong project coordination skills, ensuring timely deliveries and effective communication with team members.',
      // Añade más puntos según sea necesario
    ],
    logo: '/Logos/cst-logo.png',
    linkedn: 'https://mx.linkedin.com/company/cyber-security-club-at-tec'
  },
  // Añade más experiencias según sea necesario
];

const ExperienceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.slider}>
      <div className={styles.buttonContainer}>
        {experiences.map((experience, index) => (
          <button
            key={index}
            className={`${styles.button} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {experience.title}
          </button>
        ))}
      </div>
      <ExperienceCard {...experiences[activeIndex]} />
    </div>
  );
};

export default ExperienceSlider;
