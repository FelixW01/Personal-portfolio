import './Projects.css'
import ProjectsCard from './ProjectsCard.jsx'
const projectsArray = [
  {
    icons: [
        {
          src: "/images/react.png",
          title: "ReactJS",
          alt: "ReactJS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          title: "Express",
          alt: "Express"
        },
        {
          src: "/images/nodejs.png",
          title: "NodeJS",
          alt: "NodeJS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          title: "MySQL",
          alt: "MySQL.icon",
        },
        {
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
        },
        {
          src: "/images/ant-design.png",
          title: "AntDesign",
          alt: "AntDesign"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
          title: "Axios",
          alt: "Axios",
        },
    ],
    title: "Overcast",
    description: "Welcome to Overcast, your one-stop shop for stylish seasonal clothing. Overcast is designed for those who appreciate the cozy things in life, offering a seamless shopping experience with fashion solutions tailored to every season.",
    live: "https://overcast-98c306aa4a6c.herokuapp.com/",
    github: "https://github.com/FelixW01/overcast-2",
    video: "https://www.youtube.com/embed/kMV4FxscnB4?si=wZy29UBhMCVLGrBU"
  },
  {
  icons: [
        {
          src: "/images/react.png",
          title: "ReactJS",
          alt: "ReactJS"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          title: "Express",
          alt: "Express"
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
          src: "/images/js.png",
          title: "JavaScript",
          alt: "JS"
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
        },
        {
          src: "/images/stripe.png",
          title: "Stripe",
          alt: "Stripe"
        },
        {
          src: "/images/jwt.png",
          title: "JWT",
          alt: "JWT"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
          title: "Axios",
          alt: "Axios",
        },
    ],
    title: "Lili's Bakery",
    description: "Lili's Bakery is an e-commerce platform designed to provide a delightful online shopping experience for food enthusiasts, allowing you to explore, discover, and purchase Indonesian baked goods products from Lili's Bakery.",
    live: "https://lilisbakery-81b213953aed.herokuapp.com/",
    github: "https://github.com/FelixW01/lilis-bakery",
    video: "https://www.youtube.com/embed/p-y_5Eeo2Ts?si=Bu9VVs1e5JnpeOia"
  },
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
    github: "https://github.com/FelixW01/ChoreBuddy",
    video: "https://www.youtube.com/embed/0uwXTIX8SYI?si=yx_so5qH0MLd9V9x"
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