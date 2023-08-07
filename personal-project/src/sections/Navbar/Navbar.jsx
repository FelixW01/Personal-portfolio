import './Navbar.css'
import { useRef, useEffect, useState} from 'react';

function Navbar() {
  const navRefs = useRef([]);
  navRefs.current = [];
  const [navbar, setNavbar] = useState(false)
  const [flag, setFlag] = useState(false)
  let scrl = true;
  const addToNavRefs = (ref) => {
    if(ref && !navRefs.current.includes(ref)) {
      navRefs.current.push(ref);
    }
  }

  useEffect(() => {
  
  if(window.scrollY >= 80 && navbar !== true) {
    setNavbar(true);
  }
  if(window.scrollY < 90 && navbar !== false) {
    setNavbar(false)
  }
  }, [flag])


  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setFlag(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY)
    // console.log(navbar)
  }

  if (scrl) {
    window.addEventListener("scroll", handleScroll)
    console.log("scroll true")
    scrl=false
    console.log(scrl)
  } else {
    window.removeEventListener("Scroll", handleScroll)
    console.log("listener removed")
  }

  // useEffect(() => {
  
  // if(window.scrollY >= 80 && navbar !== true) {
  //   setNavbar(true);
  // }
  // if(window.scrollY < 90 && navbar !== false) {
  //   setNavbar(false)
  // }
  // }, [window.scrollY])
  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const changeColor = window.scrollY < 80
  //   } if (navRefs)
  //   if(window.scrollY >= changeColor && navbar !== true) {
  //     setNavbar(true)
  //   }
  //   if(window.scrollY < changeColor && navbar !== false) {
  //     setNavbar(false)
  //   }
  //   console.log(window.scrollY)
  // }, [window.scrollY])

    return (
  <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className={navbar ? 'navbar-brand nav-home nav-link--scrolled' : 'navbar-brand nav-home' } ref={addToNavRefs} id="home" href="#homepage">Home</a>
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