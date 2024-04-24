import './Home.css'
import Navbar from '../Navbar/Navbar.jsx'
import { useRef, useEffect, useState} from 'react';



function Home( { addToRefs } ) {
const [target, setTarget] = useState(true);
const targetRef = useRef([]);

const addToTargetRef = (ref) => {
    if(ref) {
      targetRef.current.push(ref);
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
        if (entry.isIntersecting) {
            setTarget(true);
        }
        if (!entry.isIntersecting) {
          setTarget(false)
        }
    })
    targetRef.current.forEach((ref) => observer.observe(ref))
  }, [target])

    return (
      
    <>
    <Navbar target={target}/>
    <section className="homepage-container hidden2" id="homepage" ref={addToRefs}>
      <div className="content-div home-content">
        <div ref={addToTargetRef}>
          <h1>Hi, I'm <span className="h1-span">Felix</span>.</h1>
          <h1>I'm a <span className="h1-span">full stack</span> web developer.</h1>
          <div className="icon-div">
          
            <a href="https://github.com/FelixW01" target="_blank" className="icons" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/felix-willem01/"
              rel="noopener noreferrer"
              target="_blank"
              className="icons">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a 
              href="https://drive.google.com/file/d/19fUivaAIMzcw16HD5yXxmg-kvLAD3TmK/view?usp=sharing" 
              rel="noopener noreferrer"
              target="_blank" 
              className="icons">
              <i className="fa-regular fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;