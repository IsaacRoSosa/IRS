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
      {name: 'NextJs', logo: '/Logos/Tools/nextjs.png' },
      {name: 'javascript', logo: '/Logos/Languages/javascript.png'},
      {name: 'Python', logo: '/Logos/Languages/python.png'},
      {name: 'PostgreSQL', logo: '/Logos/Tools/postgresql.png'},
      {name: 'Supabase', logo: '/Logos/Tools/supabase.png'},
      {name: 'CSS', logo: '/Logos/Tools/css.png'},
    ],
    links: [
      {name: 'Website', logo: '/Logos/website-logo.png', url: 'https://jobhill.vercel.app/' },
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/JobHill' },

    ]
  },{
    id:6,
    image: '/Projects/Rockwell.png',
    title: 'RockWell Factory Simulator',
    description: 'RockWell Factory Simulator is a web-based platform developed for RockWell Automation. The primary goal of this project is to showcase RockWell Automations Digital Thread through engaging digital experiences, including interactive video games. These experiences demonstrate how RockWell products can enhance company operations and illustrate potential consequences of not utilizing their solutions.',
    technologies: [
      { name: 'Unity', logo: '/Logos/Unity-logo.png' },
      { name: 'C#', logo: '/Logos/Languages/c.png' },
      { name: 'CSS', logo: '/Logos/Tools/css.png' },
      { name: 'javaScript', logo: '/Logos/Languages/javascript.png' },
      { name: 'React.js', logo: '/Logos/Tools/react.png' },
      {name: 'Next.js', logo: '/Logos/Tools/nextjs.png'},
      {name: 'MySQL', logo: '/Logos/Tools/mySql.png'}
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
      { name: 'React', logo: '/Logos/Tools/react.png' },
      { name: 'TypeScript', logo: '/Logos/Languages/typescript.png' },
      { name: 'Vite', logo: '/Logos/Vite.png' },
      { name: 'CSS', logo: '/Logos/Tools/css.png' },
      { name: 'My SQL', logo: '/Logos/Tools/mySql.png' },
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
      { name: 'React', logo: '/Logos/Tools/react.png' },
      { name: 'JavaScript', logo: '/Logos/Languages/javascript.png' },
      { name: 'Python', logo: '/Logos/Languages/python.png' },
      { name: 'CSS', logo: '/Logos/Tools/css.png' },
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
      { name: 'HTML', logo: '/Logos/Tools/html.png' },
      { name: 'CSS', logo: '/Logos/Tools/css.png' },
      { name: 'javaScript', logo: '/Logos/Languages/javascript.png' },
      { name: 'React.js', logo: '/Logos/Tools/react.png' },
      {name: 'MySQL', logo: '/Logos/Tools/mySql.png'}
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/IsaacRoSosa/EcoGuardian' },
      { name: 'Presentation Video (Spanish)', logo: '/Logos/yt.png', url: 'https://example.com/project1' }
    ]
  },{
    id:7,
    image: '/Projects/Iglesia.png',
    title: 'Duelo de Escrituras',
    description: 'A trivia game app for Catholic children, featuring training and quiz modes. Players learn Bible passages and compete against bots, with customizable avatars and instant feedback.  Developed for iPads and tablets.',
    technologies: [
      { name: 'NextJs', logo: '/Logos/Tools/nextjs.png' },
      { name: 'React', logo: '/Logos/Tools/react.png' },
      { name: 'TypeScript', logo: '/Logos/Languages/typescript.png' },
      { name: 'CSS', logo: '/Logos/Tools/css.png' },
    ],
    links: [
      { name: 'Github Repo', logo: '/Logos/github-logo.png', url: 'https://github.com/davidballezaa/iglesia' },
      { name: 'Video Demo', logo: '/Logos/yt.png', url: 'https://youtu.be/seEyHl93n18' }
    ]
  }
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