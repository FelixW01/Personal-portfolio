import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
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