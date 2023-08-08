import './Navbar.css'
import { useRef, useEffect, useState} from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', handleScroll)


    return (
  <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className={navbar ? 'navbar-brand nav-home nav-link--scrolled' : 'navbar-brand nav-home' } id="home" href="#homepage">Home</a>
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
              <a className={navbar ? "nav-link nav-link--scrolled" : "nav-link"} id="navs" href="#skillspage">Skills</a>
            </li>

            <li className="nav-item">
              <a className={navbar ? "nav-link nav-link--scrolled" : "nav-link"} id="projects" href="#projectspage">
              Projects
              </a>
            </li>

            <li className="nav-item">
              <a className={navbar ? "nav-link nav-link--scrolled" : "nav-link"} id="about" href="#aboutpage">About</a>
            </li>

            <li className="nav-item">
              <a className={navbar ? "nav-link nav-link--scrolled" : "nav-link"} id="contact" href="#contactpage">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>
    )
}

export default Navbar;