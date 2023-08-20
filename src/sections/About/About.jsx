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
            I'm Felix, a passionate and innovative Full Stack Web Developer with
            a strong foundation in both front-end and back-end technologies.
          </h2>
          <h2>
            I started my coding learning journey in 2021. In 2023, I took a leap
            and trained in modern web development at UNC Chapel Hill Coding
            Bootcamp. I quickly absorbed and reinforced new concepts while
            bringing creative ways to solve problems and a positive attitude to
            new challenges.
          </h2>
          <h2>
            I've always had a love for learning and discovering new things. Be
            it learning an instrument, photography, cooking, or computer
            programming. The quest for knowledge is never truly over.
          </h2>
        </div>
      </div>
    </section>
        </>
    )
}

export default About;