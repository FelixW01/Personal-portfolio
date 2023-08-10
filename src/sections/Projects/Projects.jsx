import './Projects.css'


function Projects( props ) {
  
    return (
        <>
    <section className="projects-container" id="projectspage">
      <h1 className="projects-title">Projects</h1>
      <div>
        {/* <!-- project 1 --> */}
        <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-desc">
            <h2>The Movie Forum</h2>
            <div className="projects-icons-div">
              <img
                src="/images/nodejs.png"
                title="NodeJS"
                className="projects-icons"
                alt="nodejs_icon"
              />
              <img 
                src="/images/js.png" 
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
                  src="/images/tmdb.png"
                  title="TMDB API"
                  className="projects-icons"
                  alt="TMDB_icon"
              />
            </div>
            <p className="projects-summary">
              An interactive, real-time forum app where users can congregate, interact and coverse about
              upcoming movies provided by the TMDB api.
            </p>
            <div>
            <a href="https://dry-cove-24471-f11ca301104d.herokuapp.com/" target="_blank" className="btn-link">
              <button
                className="btn btn-outline-primary live-btn"
                type="button">
                See Live
              </button>
            </a>

              <a href="https://github.com/FelixW01/movie-forum-app/"
                target="_blank" className="btn-link">
                <button
                className="btn btn-outline-primary source-btn"
                type="button">
                Source Code
              </button></a>
            </div>
          </div>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1zzl37IlHMU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        {/* <!-- project 2 --> */}
        <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a_W2GmhaA_k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="projects-desc2">
            <h2>City Snap</h2>
            <img
              src="/images/nodejs.png"
              title="NodeJS"
              className="projects-icons"
              alt="node_icon"
            />
            <img 
              src="/images/js.png" 
              title="JavaScript"
              className="projects-icons" 
              alt="js_icon" 
            />
            <img
              src="/images/mapbox.png"
              title="Mapbox API"
              className="projects-icons"
              alt="mapbox_icon"
            />
            <img
              src="/images/google-maps.png"
              title="Google Maps API"
              className="projects-icons"
              alt="google-maps_icon"
            />
            <p className="projects-summary">
              Exploration at your fingertips. An interactive App that spins the globe onto the specific geolocation of a city that the user has specified. In addition, the user will be able to view a well-known image from the locale.
            </p>
            <div>
              <a href="https://ilirhajdari.github.io/city-snap/" target="_blank" className="btn-link">
              <button className="btn btn-outline-primary live-btn" type="button">
                See Live
              </button></a>
              <a href="https://github.com/IlirHajdari/city-snap" target="_blank" className="btn-link">
              <button className="btn btn-primary source-btn" type="button">Source Code</button></a>
            </div>
          </div>
        </div>
        {/* <!-- project 3 --> */}
        <div className="projects-main hidden2" ref={props.addToRefs}>
          <div className="projects-desc">
            <h2>Personal Portfolio</h2>
            <img src="/images/js.png" 
              title="JavaScript"
              className="projects-icons" 
              alt="js_icon" />
            <img
              src="/images/html.png"
              title="HTML"
              className="projects-icons"
              alt="html_icon"
            />
            <img
              src="/images/css.png"
              title="CSS"
              className="projects-icons"
              alt="css_icon"
            />
            <p className="projects-summary">
              A personal portfolio website with an elegant and minimalistic design to showcase personal projects and content.
            </p>
            <div>
              <a href="#homepage" className="btn-link">
              <button className="btn btn-outline-primary live-btn" type="button">
                See Live
              </button></a>
              <a href="https://github.com/FelixW01/Personal-portfolio" target="_blank"><button className="btn btn-primary source-btn" type="button">Source Code</button></a>
            </div>
          </div>
          <div className="projects-vid">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AMk6QMj5zTw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Projects;