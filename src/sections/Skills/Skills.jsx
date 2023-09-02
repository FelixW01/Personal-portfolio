import './Skills.css'
import { useRef, useEffect, useState} from 'react';

function Skills() {
  const skillRefs = useRef([]);
  skillRefs.current = [];
  const [toolHover, setToolHover] = useState(false)
  const [yolkHover, setYolkHover] = useState(false)
  const [stackTitle, setStackTitle] = useState('Front-end')

  //animation using Intersection observer, for each refs.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
    })
    skillRefs.current.forEach((ref) => observer.observe(ref))
  }, [])

  const addToSkillRefs = (ref) => {
    if(ref && !skillRefs.current.includes(ref)) {
      skillRefs.current.push(ref);
    }
  }
  // Mouse enters egg, sets stack to tools and title to tools
  function handleMouseEnter(event) {
    event.stopPropagation();
    setToolHover(true)
    setStackTitle('Tools')
  }
  // Mouse leaves egg, sets stack to front-end and title to front-end
  function handleMouseLeave(event) {
    event.stopPropagation();
    setToolHover(false)
    setStackTitle('Front-end')
  }
    // Mouse enters yolk, sets stack to back-end and title to back-end
  function handleYolkEnter(event) {
    event.stopPropagation();
    setToolHover(false)
    setYolkHover(true)
    setStackTitle('Back-end')
  }
    // Mouse leaves yolk, sets stack to tools and title to tools
  function handleYolkLeave(event) {
    event.stopPropagation();
    setYolkHover(false)
    setToolHover(true)
    setStackTitle('Tools')
  }
    return (
        <>
        <section className="skills-container" id="skillspage">
      <h1 className="skills-header">Skills</h1>
      <div></div>
      <div className="skills-div">
        <div className="art-container">
          <div className="art-title"><h2>Hover me!</h2></div>
          <div className="art" id="egg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="yolk" id="yolk" onMouseEnter={handleYolkEnter} onMouseLeave={handleYolkLeave}></div>
          </div>
        </div>
        <div className="skills-display">
          <div className="skills-title-div">
            <h1 className="skills-title">{stackTitle}</h1>
          </div>
          <div id="initial-content"></div>
          {/* <!-- front-end | initial icons --> */}
          <div className={toolHover || yolkHover ? "initial-icons icons-hidden hidden" : "initial-icons hidden"} id="front-end" ref={addToSkillRefs}>
            <div>
            <img src="/images/react.png" alt="react_icon" />
            <p className="icon-title">React</p>
            </div>

            <div>
            <img src="/images/css.png" alt="css_icon" />
            <p className="icon-title">CSS 3</p>
            </div>

            <div>
            <img src="/images/html.png" alt="html_icon" />
            <p className="icon-title">HTML 5</p>
            </div>

            <div>
            <img src="/images/js.png" alt="js_icon" />
            <p className="icon-title">Javascript</p>
            </div>

            <div>
            <img src="/images/bootstrap.png" alt="bootstrap_icon" />
            <p className="icon-title">Bootstrap</p>
            </div>

            <div>
            <img src="/images/redux.png" alt="Redux_icon" />
            <p className="icon-title">Redux</p>
            </div>

          </div>

          {/* <!-- tools icons --> */}
          <div className={toolHover ? "skills-icons icons-reveal hidden": "skills-icons icons-hidden hidden"} id="tools" ref={addToSkillRefs}>
            <div>
            <img src="/images/git.png" alt="git_icon" />
            <p className="icon-title">Git</p>
            </div>

            <div>
            <img src="/images/heroku.png" alt="heroku_icon" />
            <p className="icon-title">Heroku</p>
            </div>

            <div>
            <img src="/images/oauth.png" alt="oauth_icon" />
            <p className="icon-title">OAuth</p>
            </div>

            <div>
            <img src="/images/jest.png" alt="jest_icon" />
            <p className="icon-title">Jest</p>
            </div>

            <div>
            <img src="/images/insomnia.png" alt="insomnia_icon" />
            <p className="icon-title">Insomnia</p>
            </div>

            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="graphQL_icon" />
            <p className="icon-title">GraphQL</p>
            </div>

          </div>

          {/* <!-- back-end --> */}
          <div className={yolkHover ? "skills-icons hidden" : "skills-icons icons-hidden hidden"} id="back-end" ref={addToSkillRefs}>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="nodejs_icon"/>
            <p className="icon-title">Node JS</p>
            </div>

            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql_icon"/>
            <p className="icon-title">MySQL</p>
            </div>

            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg" alt="sequelize_icon"/>
            <p className="icon-title">Sequelize</p>
            </div>

            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb_icon"/>
            <p className="icon-title">MongoDB</p>
            </div>

            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express_icon"/>
            <p className="icon-title">Express</p>
            </div>

            <div>
            <img src="/images/api.png" alt="restApi_icon"/>
            <p className="icon-title">Rest Api</p>
            </div>

          </div>  
        </div>
      </div>
    </section>

    <div className="separator"></div>
        </>
    )
}

export default Skills;