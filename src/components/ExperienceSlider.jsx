import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import styles from '@/styles/ExperienceSlider.module.css';

const experiences = [ 
  {
    id: 1,
    title: 'Oracle',
    role: 'Incoming SWE Intern',
    period: 'JUL 2025',
   companyDescription: 'Incoming SWE Intern at Oracle Hospitality',
   /* description: [
      'Incoming Software Engineer Intern for the Hospitality team',
     
    ]*/
   description: [],
   
    logo: '/Logos/Companies/Oracle.png',
    linkedn: 'https://www.linkedin.com/company/didiglobal/'
  },
  {
    id: 2,
    title: 'Softpital',
    role: 'Full Stack Developer',
    period: 'FEB 2025 - PRESENT',
    companyDescription: 'Softpital is an innovative startup focused on creating software solutions for the management and maintenance of medical equipment. The platform centralizes real-time monitoring and maintenance services, helping healthcare organizations optimize the performance of their medical technology',
    description: [
      'Enhance frontend features to improve user experience and functionality',

'Address and fix bugs found in the early stages of development.',

'Focus on optimizing backend operations to improve overall system performance.',
     
    ],
    logo: '/Logos/Companies/softpital.png',
    linkedn: 'https://www.linkedin.com/company/softpitalcmms/'
  },
  {
    id: 3,
    title: 'DiDi',
    role: 'Operations Intern',
    period: 'JUL 2024 - JAN 2024',
    companyDescription: 'Worked in the Growth team at Didi Food, developed and automated data driven solutions to streamline promotion workflows and optimize user acquisition for first to fourth orders in Peru and Colombia',
    description: [
      'Automated promotion and campaign workflows for DiDi Peru using Python, reducing manual effort by analyzing weekly-changing business rules and variable promotions.',
      'Streamlined data processing with pandas and integrated real-time updates from Google Sheets, generating optimized dish lists with targeted discounts and offers.',
      'Boosted ad engagement by 20% through data-driven promotions, enhancing user attraction and documenting the tools scalability for potential rollouts in other countries.',
    ],
    logo: '/Logos/Companies/Didi-logo.png',
    linkedn: 'https://www.linkedin.com/company/didiglobal/'
  },
  {
    id: 4,
    title: 'On Campus Intern',
    role: 'Full Stack Developer',
    period: 'FEB 2024 - FEB 2025',
    companyDescription: 'Control Tower Development is dedicated to overseeing and enhancing entrepreneurship events and initiatives across the universitys 26 campuses. That ensures  data integrity and accuracy are maintained while streamlining processes for maximum efficiency.',
    description: [
      "Developed a Python script that cut down weekly data processing by 95% automating everything from cleaning data to inserting it into SQL databases.", 
      "Improved the accuracy of event data across 26 campuses, ensuring we have reliable info to make better decisions for entrepreneurship programs.",
    ],
    logo: '/Logos/Companies/Tec.svg',
    linkedn: 'https://www.linkedin.com/school/tecdemonterrey/'
  },

];

{/*{
    id:5,
    title: 'CyberSecurity Tec',
    role: 'Web Developer',
    period: 'FEB 2024 - FEB 2025',
    companyDescription: 'Cyber Security Club at Tec is a student organization dedicated to promoting cybersecurity awareness and knowledge among students. We host workshops, competitions, and talks to help students develop their skills and knowledge in the field.',
    description: [
      'Frontend Development: Primarily focused on frontend development, creating attractive and easy-to-use user interfaces using React, JavaScript, and Next.js.',
      'Project Coordination: Demonstrated strong project coordination skills, ensuring timely deliveries and effective communication with team members.',
    
    ],
    logo: '/Logos/Companies/cst.png',
    linkedn: 'https://mx.linkedin.com/company/cyber-security-club-at-tec'
  }, */}

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
