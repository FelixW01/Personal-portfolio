import './Footer.css'

function Footer() {
    return (
        <>
        <footer className="footer">

      <a href="#homepage" className="to-top"
        ><i className="fa-solid fa-chevron-up"></i>
      </a>

      <ul className="footer-ul">
        <li>
          <a
            href="https://www.linkedin.com/in/felix-willem01/"
            target="_blank"
            ><i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="mailto:felixwillem01@yahoo.com"
            ><i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/FelixW01" target="_blank"
            ><i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@BeepTheProgrammer/videos"
            target="_blank"
            ><i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1dbBZ-7sadI9HNHL0Ya_Q6Ck56RIad8sJ/view?usp=sharing"
            target="_blank"
            ><i className="fa-solid fa-file"></i>
          </a>
        </li>
      </ul>
    </footer>
        </>
    )
}

export default Footer;