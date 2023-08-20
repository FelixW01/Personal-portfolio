import './Contact.css'

function Contact() {
    return (
        <>
    <div className="separator"></div>
    <section className="mb-4 contact-container" id="contactpage">
      <h2
        className="h1-responsive font-weight-bold text-center my-4 contact-header"
      >
        GET IN TOUCH
      </h2>
      <p className="text-end w-responsive mx-auto contact-p contact-p">
        Interested in working together? Let's connect via email or linkedIn
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5 form-content">
          <form
            id="contact-form"
            name="contact-form"
            className="main-form"
            data-netlify="true"
            method="POST"
            data-netlify-honeypot="bot-field"
            action="/success/"
          >
          <input type="hidden" name="contact-form" value="contact-form" />
          
            {/* <!-- Name --> */}
            <input className="d-none" name="bot-field" />
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    className="form-input"
                  />
                  <label htmlFor="name">Your name</label>
                </div>
              </div>
              {/* <!-- Email --> */}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email-input"
                    name="email"
                    className="form-input"
                  />
                  <label htmlFor="email">Your email</label>
                </div>
              </div>
            </div>
            {/* <!-- Subject --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    className="form-input"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
            </div>
            {/* <!-- Content --> */}
            <div className="row message-div">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message-input"
                    name="message"
                    rows="2"
                    className="md-textarea form-input"
                  ></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
        </>
    )
}

export default Contact;