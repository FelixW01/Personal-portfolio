

function ProjectsCard( props ) {

  return (
    <>
          <div className="projects-desc">
            <h2>{props.title}</h2>
            <div className="projects-icons-div">
              {props.icons.map((icon) => {
                return (
                <img
                src={icon.src}
                title={icon.title}
                className="projects-icons"
                alt={`${icon.alt}_icon`}
              />)})}

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