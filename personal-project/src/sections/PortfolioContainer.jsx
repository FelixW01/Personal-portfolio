import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './PortfolioContainer.css'
import { useRef, useEffect, useState} from 'react';


function PortfolioContainer() {
  const myRefs = useRef([]);
  myRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
    })
    myRefs.current.forEach((ref) => observer.observe(ref))
  }, [])

  const addToRefs = (ref) => {
    if(ref && !myRefs.current.includes(ref)) {
      myRefs.current.push(ref);
    }
    console.log(myRefs.current)
  }
  return (
    <>
    <Navbar />
    <Home addToRefs={addToRefs}/>
    <Skills />
    <Projects addToRefs={addToRefs}/>
    <About addToRefs={addToRefs}/>
    <Contact />
     <Footer />
    </>
  )
}

export default PortfolioContainer