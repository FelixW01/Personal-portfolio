import './Projects.css'
import ProjectsCard from './ProjectsCard.jsx'
const projectsArray = [
  {
  icons: [
        {
          src: "/images/react.png",
          title: "React",
          alt: "React"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          title: "Express",
          alt: "Express"
        },
        {
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          title: "GraphQL",
          alt: "GraphQL"
        },
        {
          src: "/images/nodejs.png",
          title: "NodeJS",
          alt: "NodeJS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          title: "Mongodb",
          alt: "Mongodb",
        },
        {
          src: "/images/framer-motion.png",
          title: "FramerMotion",
          alt: "FramerMotion"
        },
        {
          src: "/images/ant-design.png",
          title: "AntDesign",
          alt: "AntDesign"
        }
    ],
    title: "ChoreBuddy",
    description: "ChoreBuddy is your family's chore management companion, streamlining task allocation and tracking with ease. With modern technology at its core, ChoreBuddy ensures a secure and user-friendly experience for efficient household chore management.",
    live: "https://chore-buddy-6e6d2559dc60.herokuapp.com/",
    github: "https://github.com/FelixW01/ChoreBuddy",
    video: "https://www.youtube.com/embed/0uwXTIX8SYI?si=yx_so5qH0MLd9V9x"
  },
    {
    icons: [
        {
          src: "/images/nodejs.png",
          title: "NodeJS",
          alt: "NodeJS"
        },
        {
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          title: "Express",
          alt: "Express"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg",
          title: "Sequelize",
          alt: "sequelize.icon",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
          title: "HandlebarsJS",
          alt: "handlebars"
        },
        {
          src: "/images/tmdb.png",
          title: "TMDB API",
          alt: "TMDB"
        },
    ],
    title: "The Movie Forum",
    description: "An interactive, real-time forum app where users can congregate, interact and coverse about upcoming movies provided by the TMDB api.",
    live: "https://dry-cove-24471-f11ca301104d.herokuapp.com/",
    github: "https://github.com/FelixW01/The-Movie-Forum",
    video: "https://www.youtube-nocookie.com/embed/1zzl37IlHMU"
  },
  {
  icons: [
        {
          src: "/images/react.png",
          title: "NodeJS",
          alt: "NodeJS"
        },
        {
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
        },
        {
          src: "/images/html.png",
          title: "Html",
          alt: "Html"
        },
        {
          src: "/images/css.png",
          title: "CSS",
          alt: "CSS"
        },
    ],
    title: "Personal Portfolio",
    description: " A personal portfolio website with an elegant and minimalistic design to showcase personal projects and content.",
    live: "#homepage",
    github: "https://github.com/FelixW01/Personal-portfolio",
    video: "https://www.youtube-nocookie.com/embed/AMk6QMj5zTw"
  },
]


function Projects( props ) {
  const cards = projectsArray.map((project) => {
    return (
      <ProjectsCard addToRefs={props.addToRefs} key={project.title} {...project}/>
    )
  })
    return (
<>
  <section className="projects-container" id="projectspage">
    <h1 className="projects-header">Projects</h1>     
      {cards}
  </section>
</>
    )
}

export default Projects;