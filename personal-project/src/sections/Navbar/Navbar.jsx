import './Navbar.css'
import { useRef, useEffect, useState} from 'react';

function Navbar() {
  const navRefs = useRef([]);
  navRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('nav-link--scrolled');
        }
    });
    })
    navRefs.current.forEach((ref) => observer.observe(ref))
  }, [])

  const addToNavRefs = (ref) => {
    if(ref && !navRefs.current.includes(ref)) {
      navRefs.current.push(ref);
    }
    console.log(navRefs.current)
  }
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
              <a className="nav-link" id="navs" href="#navspage">navs</a>
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