import './Projects.css'
import ProjectsCard from './ProjectsCard.jsx'
const projectsArray = [
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
    github: "movie-forum-app",
    video: "https://www.youtube-nocookie.com/embed/1zzl37IlHMU"
  },
  {
  icons: [
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
        {
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
        },
        {
          src: "/images/mapbox.png",
          title: "Mapbox API",
          alt: "mapbox"
        },
        {
          src: "/images/google-maps.png",
          title: "Google Maps API",
          alt: "google-map",
        }
    ],
    title: "City Snap",
    description: " Exploration at your fingertips. An interactive App that spins the globe onto the specific geolocation of a city that the user has specified. In addition, the user will be able to view a well-known image from the locale.",
    live: "https://ilirhajdari.github.io/city-snap/",
    github: "https://github.com/IlirHajdari/city-snap",
    video: "https://www.youtube-nocookie.com/embed/a_W2GmhaA_k"
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
  }
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