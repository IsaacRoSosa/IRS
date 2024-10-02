import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import styles from '@/styles/ExperienceSlider.module.css';

const experiences = [ 
  {
    id: 1,
    title: 'DiDi',
    role: 'Operations Intern',
    period: 'JUL 2024 - PRESENT',
    companyDescription: 'DiDi Global Inc. is a leading mobility technology platform, offering app-based services like ride hailing, taxi hailing, chauffeur, and shared mobility across Asia-Pacific, Latin America, Africa, Central Asia, and Russia. DiDi also provides auto solutions, food delivery, intra-city freight, and financial services.',
    description: [
      'Optimizing daily operations for DiDi Food in Peru, automating data extraction to make performance analysis easier and faster.',
      'Developing a Python script that automates the analysis of weekly operations, selecting the top-performing promotions based on specific metrics, helping the team optimize communication strategies for better engagement.',
    ],
    logo: '/Logos/Didi-logo.png',
    linkedn: 'https://www.linkedin.com/company/didiglobal/'
  },
  {
    id: 2,
    title: 'On Campus Intern',
    role: 'Full Stack Developer',
    period: 'FEB 2024 - PRESENT',
    companyDescription: 'Control Tower Development is dedicated to overseeing and enhancing entrepreneurship events and initiatives across the universitys 26 campuses. We ensure that data integrity and accuracy are maintained while streamlining processes for maximum efficiency.',
    description: [
      "Developed a Python script that cut down weekly data processing by 95% automating everything from cleaning data to inserting it into SQL databases.", 
      "Improving the accuracy of event data across 26 campuses, ensuring we have reliable info to make better decisions for entrepreneurship programs.",
    ],
    logo: '/Logos/tec-logo.svg',
    linkedn: 'https://www.linkedin.com/school/tecdemonterrey/'
  },
  {
    id:3,
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

];

const ExperienceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(experiences[0].id); // Inicializar con el ID del primer elemento



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
