

const iconsArray = [
  {
  icons: [
        {
          src: "../../dist/assets/images/nodejs.png",
          title: "NodeJS",
          alt: "NodeJS"
        },
        {
          src: "../../dist/assets/images/js.png",
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
          alt: "sequelize.icon"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
          title: "HandlebarsJS",
          alt: "handlebars_icon" 
        },
        {
          src:"../../dist/assets/images/tmdb.png",
          title:"TMDB API",
          alt:"TMDB_icon"
        }
    ],
  },
]
// function 

function ProjectsCard( props ) {
  // const icons = iconsArray.map((icon) => {
  //   return (
      
  //   )
  // })


  return (
    <>
          <div className="projects-desc">
            <h2>{props.title}</h2>
            <div className="projects-icons-div">
              <img
                src={props.icons[0].src}
                title={props.icons[0].title}
                className="projects-icons"
                alt={`${props.icons[0].alt}_icon`}
              />
            </div>
            <p className="projects-summary">
              {props.description}
            </p>
            <div className="d-grid gap-2 d-md-block">
            <a href={props.live} target="_blank">
              <button
                className="btn btn-outline-primary live-btn"
                type="button">
                See Live
              </button>
            </a>

              <a href={props.github}
                target="_blank"><button
                className="btn btn-outline-primary source-btn"
                type="button">
                Source Code
              </button></a>
            </div>
          </div>
          <div className="projects-vid">
            <iframe width="560" height="315" src={props.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div> 
        </>
      )
}

 
export default ProjectsCard;