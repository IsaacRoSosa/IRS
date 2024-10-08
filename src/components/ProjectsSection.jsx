import React, {useState} from 'react'
import styles from '@/styles/ProjectSection.module.css'
import ProjectCard from '@/components/ProjectCard'
import CompetitionSlider from '@/components/CompetitionSlider';
  
const projects = [
  { id:1,
    image: '/Projects/JobHill.png',
    title: 'JobHill',
    description: 'JobHill is a platform that simplifies the internship application process for students, allowing them to track and manage applications in one place. It provides real-time job updates, the platform is designed to make the internship hunt more efficient and stress-free, ensuring students can focus on landing the right opportunity.',
    technologies: [
      {name: 'NextJs', logo: '/Logos/next-logo.png' },
      {name: 'javascript', logo: '/Logos/JavaScript-logo.png'},
      {name: 'Python', logo: '/Logos/Python-logo.png'},
      {name: 'PostgreSQL', logo: '/Logos/PostgreSql-logo.png'},
      {name: 'Supabase', logo: '/Logos/supabase.png'},
      {name: 'CSS', logo: '/Logos/css-logo.webp'},
    ],
    links: [
      {name: 'Website', logo: '/Logos/website-logo.png', url: 'https://jobhill.vercel.app/' },
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/JobHill' },

    ]
  },{
    id:7,
    image: '/Projects/Rockwell.png',
    title: 'RockWell Factory Simulator',
    description: 'RockWell Factory Simulator is a web-based platform developed for RockWell Automation. The primary goal of this project is to showcase RockWell Automations Digital Thread through engaging digital experiences, including interactive video games. These experiences demonstrate how RockWell products can enhance company operations and illustrate potential consequences of not utilizing their solutions.',
    technologies: [
      { name: 'Unity', logo: '/Logos/Unity-logo.png' },
      { name: 'C#', logo: '/Logos/c-logo.png' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
      { name: 'javaScript', logo: '/Logos/JavaScript-logo.png' },
      { name: 'React.js', logo: '/Logos/React-logo.png' },
      {name: 'Next.js', logo: '/Logos/next-logo.png'},
      {name: 'MySQL', logo: '/Logos/Mysql-logo.png'}
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/EcoGuardian' },
      { name: 'Video Demo', logo: '/Logos/yt.png', url: 'hhttps://youtu.be/DwJ_8V0cYkQ' },
      {name: 'Website', logo: '/Logos/website-logo.png', url: 'https://rock-well-factory-simulator.vercel.app/' }
    ]
  },{
    id:3,
    image: '/Projects/Innovaction.png',
    title: 'Innovaction Gym Event Dashboard',
    description: 'Web application for the Innovaction Gym at Tec de Monterrey, campus Monterrey. Features include a calendar for upcoming and past events, and an administration dashboard for improved event and data management. (On Development)',
    technologies: [
      { name: 'React', logo: '/Logos/React-logo.png' },
      { name: 'TypeScript', logo: '/Logos/TypeScript.png' },
      { name: 'Vite', logo: '/Logos/Vite.png' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
      { name: 'My SQL', logo: '/Logos/Mysql-logo.png' },
      { name: 'Flask', logo: '/Logos/Flask-logo.png' }

    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/Tect0r0/innovaction_dashboard' },
      { name: 'Video Demo', logo: '/Logos/yt.png', url: 'https://youtu.be/YSj2ur-VW94' }

     
    ]
  },{
    id:5,
    image: '/Projects/Olli.jpeg',
    title: 'OLLI App',
    description: 'A platform with interactive maps displaying States or Municipalities, where users can obtain a prediction with 90% accuracy regarding upcoming electrical consumption in the region. Depending on the datasets used, the platform provides detailed information on electrical consumption, including peak electricity usage and other relevant data.(On Development)',
    technologies: [
      { name: 'React', logo: '/Logos/React-logo.png' },
      { name: 'JavaScript', logo: '/Logos/JavaScript-logo.png' },
      { name: 'Python', logo: '/Logos/Python-logo.png' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
      {name: 'TensorFlow', logo: '/Logos/Tensorflow.png'},
      {name:'Matplotlib', logo: '/Logos/matplotlib.png'},
      {name:'Numpy', logo: '/Logos/numpy.svg'},
  

    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/example/repo2' },
      { name: 'Devpost', logo: '/Logos/Devpost.png', url: 'https://devpost.com/software/olli-app' }
    ]
  },{
    id:4,
    image: '/Projects/Ecoguardian.jpeg',
    title: 'ECO GUARDIAN',
    description: 'EcoGuardian is a project that uses IoT devices to monitor and collect environmental data to detect and anticipate forest fires. The project includes an interactive website that visualizes the collected data and displays the location and status of the devices on a map.',
    technologies: [
      { name: 'PHP', logo: '/Logos/php-logo.png' },
      { name: 'HTML', logo: '/Logos/html-logo.webp' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
      { name: 'javaScript', logo: '/Logos/JavaScript-logo.png' },
      { name: 'React.js', logo: '/Logos/React-logo.png' },
      {name: 'MySQL', logo: '/Logos/Mysql-logo.png'}
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/EcoGuardian' },
      { name: 'Presentation Video (Spanish)', logo: '/Logos/yt.png', url: 'https://example.com/project1' }
    ]
  },
  {
    id:8,
    image: '/Projects/HeyBanco1.jpeg',
    title: 'Hey Client!',
    description: 'A website to streamline customer service at X, identifying trends and brand perception. Designed for managers and customer service reps, it enhances response times to unusual behaviors and FAQs on social media. It aims to improve Hey Bancos customer service on Hey Cliente and implement these improvements across other social platforms.',
    technologies: [
      { name: 'React', logo: '/Logos/React-logo.png' },
      { name: 'TypeScript', logo: '/Logos/TypeScript.png' },
      { name: 'Vite', logo: '/Logos/Vite.png' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
      { name: 'Power BI', logo: '/Logos/powerBi.png' },
      { name: 'My SQL', logo: '/Logos/Mysql-logo.png' },
      { name: 'Flask', logo: '/Logos/Flask-logo.png' }

    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/Tect0r0/dsc2024' },
      { name: 'Video Demo', logo: '/Logos/yt.png', url: 'https://www.youtube.com/watch?v=n0gz5LrViM4&ab_channel=IsaacRojasSosa' }
    ]
  }, {
    id:9,
    image: '/Projects/Bamboo.png',
    title: 'Bamboo ',
    description: 'A chatbot that can be easily integrated with the most common communication platforms used by people of all ages. It is designed to answer finance-related questions, maintaining a professional and supportive profile for Atrato.',
    technologies: [
      { name: 'React', logo: '/Logos/React-logo.png' },
      {name: 'Next.js', logo: '/Logos/next-logo.png'},
      {name: 'TypeScript', logo: '/Logos/TypeScript.png'},
      {name: 'Node.js', logo: '/Logos/node-logo.png'},
      {name: 'Tailwind CSS', logo: '/Logos/tailwind.png'},
      {name: 'twilio', logo: '/Logos/twilio.webp'},
 
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/davidballezaa/bamboo' }
    ]
  },{
    id:10,
    image: '/Projects/Iglesia.png',
    title: 'Duelo de Escrituras',
    description: 'A trivia game app for Catholic children, featuring training and quiz modes. Players learn Bible passages and compete against bots, with customizable avatars and instant feedback.  Developed for iPads and tablets.',
    technologies: [
      { name: 'NextJs', logo: '/Logos/next-logo.png' },
      { name: 'React', logo: '/Logos/React-logo.png' },
      { name: 'TypeScript', logo: '/Logos/TypeScript.png' },
      { name: 'CSS', logo: '/Logos/css-logo.webp' },
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/davidballezaa/iglesia' },
      { name: 'Video Demo', logo: '/Logos/yt.png', url: 'https://youtu.be/seEyHl93n18' }
    ]
  },  {
    id:11,
    image: '/Projects/MatlabProjects.png',
    title: 'MATLAB Projects',
    description: 'Diverse Matlab projects showcasing computational modeling, simulation, and visualization. Topics include volcanic eruptions, Formula 1 dynamics, electric fields for malaria diagnosis, and magnetic fields of current-carrying rings.',
    technologies: [
      { name: 'Matlab', logo: '/Logos/matlab-logo.png' },
     
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/Matlab-Projects' },
     
    ]
  },

];


function ExperienceSection() {

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const sortedProjects = projects.sort((a, b) => a.id - b.id);
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageSelect = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id='Projects' className={styles.Container}>
      <div className={styles.blackContainer}>
        <div className={styles.ProjectContainer}>
          <h1>Projects</h1>
        </div>


        
        <div className={styles.pagination}>
          <div className={styles.projectCount}>
            Showing {currentProjects.length} / {projects.length} projects
          </div>
          <div className={styles.pageIndicators}>
            {Array.from({ length: totalPages }, (_, index) => (
              <div
                key={index}
                className={`${styles.pageIndicator} ${currentPage === index + 1 ? styles.active : ''}`}
                onClick={() => handlePageSelect(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Projects}>
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <h1 className={styles.subTitle}>Hackathons</h1>
        <CompetitionSlider />
      </div>
    </div>
  )
}

export default ExperienceSection