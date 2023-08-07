import './Navbar.css'
import { useRef, useEffect, useState} from 'react';

function Navbar() {
  const navRefs = useRef([]);
  navRefs.current = [];
  const [navbar, setNavbar] = useState(false)

  const addToNavRefs = (ref) => {
    if(ref && !navRefs.current.includes(ref)) {
      navRefs.current.push(ref);
    }
  }

  // const handleScroll = () => {
  //   if (window.scrollY >=80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  //   console.log("scrolling")
  // }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const changeColor = window.scrollY < 80
  //   } if (navRef)
  //   if(window.scrollY >= colorChange && navbar !== true) {
  //     setNavbar(true)
  //   }
  //   if(window.scrollY < colorChange && navbar !== false) {
  //     setNavbar(false)
  //   }
  //   console.log(window.scrollY)
  // }, [window.scrollY])

    return (
  <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className={navbar ? 'nav-link--scrolled' : 'navbar-brand nav-home' } ref={addToNavRefs} id="home" href="#homepage">Home</a>
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
              <a className="nav-link" id="navs" ref={addToNavRefs} href="#navspage">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="projects" ref={addToNavRefs} href="#projectspage">
              Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="about" ref={addToNavRefs} href="#aboutpage">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id="contact" ref={addToNavRefs} href="#contactpage">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>
    )
}

export default Navbar;