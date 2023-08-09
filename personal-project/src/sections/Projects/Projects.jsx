import './Projects.css'
import ProjectsCard from './ProjectsCard.jsx'
const projectsArray = [
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
    ],
    title: "The Movie Forum",
    description: "An interactive, real-time forum app where users can congregate, interact and coverse about upcoming movies provided by the TMDB api.",
    live: "https://dry-cove-24471-f11ca301104d.herokuapp.com/",
    github: "movie-forum-app",
    video: "https://www.youtube-nocookie.com/embed/1zzl37IlHMU"
  },
]

// json array
// all of the dynamic content
// loop through the array
// for each item in the array, make a card

// <card json={json}/>
function Projects( props ) {
  const cards = projectsArray.map((project) => {
    return (
      <ProjectsCard key={project.title} {...project}/>
    )
  })
    return (
        <>
        
    <section className="projects-container" id="projectspage">
      <h1 className="projects-title">Projects</h1>
      <div>
      <div className="projects-main hidden2" ref={props.addToRefs}>
        {cards}
      </div>
      

        {/* <!-- project 1 --> */}

        {/* <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-desc">
            <h2>The Movie Forum</h2>
            <div className="projects-icons-div">
              <img
                src="../../dist/assets/images/nodejs.png"
                title="NodeJS"
                className="projects-icons"
                alt="nodejs_icon"
              />
              <img 
                src="../../dist/assets/images/js.png" 
                title="JavaScript"
                className="projects-icons" 
                alt="js_icon" 
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
                title="Express"
                alt="express_icon" 
                className="projects-icons" 
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg"
                title="Sequelize"
                className="projects-icons"
                alt="sequelize.icon"
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" 
                title="HandlebarsJS"
                alt="handlebars_icon" 
                className="projects-icons"
              />
                <img
                  src="../../dist/assets/images/tmdb.png"
                  title="TMDB API"
                  className="projects-icons"
                  alt="TMDB_icon"
              />
            </div>
            <p className="projects-summary">
              An interactive, real-time forum app where users can congregate, interact and coverse about
              upcoming movies provided by the TMDB api.
            </p>
            <div className="d-grid gap-2 d-md-block">
            <a href="https://dry-cove-24471-f11ca301104d.herokuapp.com/" target="_blank">
              <button
                className="btn btn-outline-primary live-btn"
                type="button">
                See Live
              </button>
            </a>

              <a href="https://github.com/FelixW01/movie-forum-app/"
                target="_blank"><button
                className="btn btn-outline-primary source-btn"
                type="button">
                Source Code
              </button></a>
            </div>
          </div>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1zzl37IlHMU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div> */}

        {/* <!-- project 2 --> */}

        {/* <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a_W2GmhaA_k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="projects-desc2">
            <h2>City Snap</h2>
            <img
              src="../../dist/assets/images/nodejs.png"
              title="NodeJS"
              className="projects-icons"
              alt="node_icon"
            />
            <img 
              src="../../dist/assets/images/js.png" 
              title="JavaScript"
              className="projects-icons" 
              alt="js_icon" 
            />
            <img
              src="../../dist/assets/images/mapbox.png"
              title="Mapbox API"
              className="projects-icons"
              alt="mapbox_icon"
            />
            <img
              src="../../dist/assets/images/google-maps.png"
              title="Google Maps API"
              className="projects-icons"
              alt="google-maps_icon"
            />
            <p className="projects-summary">
              Exploration at your fingertips. An interactive App that spins the globe onto the specific geolocation of a city that the user has specified. In addition, the user will be able to view a well-known image from the locale.
            </p>
            <div className="d-grid gap-2 d-md-block">
              <a href="https://ilirhajdari.github.io/city-snap/" target="_blank"><button className="btn btn-outline-primary live-btn" type="button">
                See Live
              </button></a>
              <a href="https://github.com/IlirHajdari/city-snap" target="_blank"><button className="btn btn-primary source-btn" type="button">Source Code</button></a>
            </div>
          </div>
        </div> */}

        {/* <!-- project 3 --> */}
        
        {/* <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-desc">
            <h2>Personal Portfolio</h2>
            <img src="../../dist/assets/images/js.png" 
              title="JavaScript"
              className="projects-icons" 
              alt="js_icon" />
            <img
              src="../../dist/assets/images/html.png"
              title="HTML"
              className="projects-icons"
              alt="html_icon"
            />
            <img
              src="../../dist/assets/images/css.png"
              title="CSS"
              className="projects-icons"
              alt="css_icon"
            />
            <p className="projects-summary">
              A personal portfolio website with an elegant and minimalistic design to showcase personal projects and content.
            </p>
            <div className="d-grid gap-2 d-md-block">
              <a href="#homepage"><button className="btn btn-outline-primary live-btn" type="button">
                See Live
              </button></a>
              <a href="https://github.com/FelixW01/Personal-portfolio" target="_blank"><button className="btn btn-primary source-btn" type="button">Source Code</button></a>
            </div>
          </div>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AMk6QMj5zTw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div> */}

      </div>
    </section>
        </>
    )
}

export default Projects;