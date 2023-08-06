import './Navbar.css'

function Navbar() {
    return (
        <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand nav-home" id="home" href="#homepage">Home</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">

            <li className="nav-item">
              <a className="nav-link" id="skills" href="#skillspage">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="projects" href="#projectspage">
              Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="about" href="#aboutpage">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="contact" href="#contactpage">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;