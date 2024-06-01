import React from 'react';
import Slider from 'react-slick';
import CompetitionCard from '@/components/CompetitionCard';
import styles from '@/styles/CompetitionSlider.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const competitions = [
  {
    image: 'Hacks/MontexTeam.jpeg',
    title: 'DATATHON DSC',
    date: 'MAY 2024',
    team: 'MONTEX 🇲🇽',
    description: 'Participated in my first Datathon hosted by Tecnologico de Monterrey\'s Data Science Club. Our team took on Hey Banco\'s challenge to create a costumer support dashboard that would help them improve their response time and overall service quality. It was an enlightening and enjoyable journey, revealing areas for improvement.',
    links: [

      { name: 'LinkedIn Post', logo: '/Logos/link2-logo.png', url: 'https://linkedin.com/in/example' },
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/Tect0r0/dsc2024' },
    ],
    project: 'Hey Banco - Costumer Support Dashboard'
  },
  {
    image: 'Hacks/TheMartIAns.jpeg',
    title: 'LinceHacks',
    date: 'MAY 2024',
    team: 'The MartIAns 👽',
    description: 'Participated in another exciting hackathon hosted by Universidad del Norte. Our team worked on a platform with interactive maps, where users can obtain a prediction with 90% accuracy regarding upcoming electrical consumption in the region. This tool is essential for efficient energy consumption planning and management, benefiting both authorities and citizens.',
    links: [
      { name: 'Devpost', logo: '/Logos/Devpost.png', url: 'https://devpost.com/software/olli-app' },
       { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/santiagosauma/OLLI-APP' },
  
    ], project: 'OLLI App'
  }, {
    image: '/Hacks/HackMTY2023.jpeg',
    title: 'HackMTY  ',
    date: 'SEP 2023',
    team: 'Code Monkeys 🐵',
    description: 'Participated in my first Hackathon. HackMTY is the largest hackathon in Mexico, hosted by Tec de Monterrey. Our team developed OptiFood, with OptiFood, users can register their pantry, and with a system powered by Artificial Inteligence, they can generate recipes giving priority to those that use their soon-to-expire foods, while also reminding them of set dates in order to avoid food waste. We even ended in the top 10 out of 130 teams!',
    links: [
    
      { name: 'Devpost', logo: '/Logos/Devpost.png', url: 'https://devpost.com/software/optifood' },
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/JesusRam04/Hackathon2023' },
 
    ]
  },
  {
    image: 'Hacks/Atrato.jpeg',
    title: 'Atrato Hack',
    date: 'FEB 2024',
    team: 'Codezilla 🦖',
    description: 'Participated in another exciting hackathon hosted by Atrato. Our team worked on a chatbot, designed to answer finance-related questions, maintaining a professional and supportive profile for Atrato. It was a great opportunity to learn about the financial sector and chatbot development.',
    links: [
      { name: 'GitHub Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/davidballezaa/bamboo'}],
    project: 'Bamboo'
  }
  // Añade más hackathons según sea necesario
];

const CompetitionSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.sliderSection}>

      <Slider {...settings} className={styles.slider}>
        {competitions.map((competition, index) => (
          <div key={index} className={styles.slide}>
            <CompetitionCard {...competition} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default CompetitionSlider;
 