import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './PortfolioContainer.css'


function PortfolioContainer() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default PortfolioContainer