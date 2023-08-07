import './Home.css'

function Home(props) {

    return (
    <>
    <section className="homepage-container hidden2" id="homepage" ref={props.addToRefs}>
      <div className="content-div home-content">
        <div>
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
              href="https://drive.google.com/file/d/1dbBZ-7sadI9HNHL0Ya_Q6Ck56RIad8sJ/view?usp=sharing" 
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