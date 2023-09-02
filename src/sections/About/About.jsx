import './About.css'

function About( { addToRefs } ) {
    return (
        <>
    <div className="top-separator"></div>
    <section className="about-container" id="aboutpage">
      <h1 className="about-header">About</h1>
      <div className="about-div">
        <div className="about-img">
          <img
            src="/images/profile-pic3.png"
            className="profile-pic"
            alt="profile_picture_icon"
          />
        </div>
        <div className="about-content hidden2" ref={addToRefs}>
          <h2>
            I'm Felix, a passionate and innovative Full Stack Web Developer with a solid foundation in both front-end and back-end technologies.
          </h2>
          <h2>
            My coding journey began in 2021, and in 2023, I decided to take a significant step forward by enrolling in the UNC Chapel Hill Coding Bootcamp to delve into modern web development. Throughout this journey, I've demonstrated a knack for quickly grasping and applying new concepts, offering creative solutions to challenges, and maintaining a positive attitude.
          </h2>
          <h2>
             My love for learning extends beyond coding; whether it's mastering an instrument, honing photography skills, experimenting with cooking, or diving into computer programming, my quest for knowledge is an ongoing and deeply ingrained part of who I am.
          </h2>
        </div>
      </div>
    </section>
        </>
    )
}

export default About;