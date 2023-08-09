 

function ProjectsCard( props ) {

return (
  <>
    <img
        src={props.icons[0].src}
        title={props.icons[0].title}
        className="projects-icons"
        alt={`${props.icons[0].alt}_icon`}
    />
 </>
)
}


export default Icons;