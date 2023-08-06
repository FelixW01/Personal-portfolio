import './Skills.css'

function Skills() {
    return (
        <>
        <section className="skills-container" id="skillspage">
      <h1 className="skills-header">Skills</h1>
      <div></div>
      <div className="skills-div">
        <div className="art-container">
          <div className="art-title"><h2>Hover over me!</h2></div>
          <div className="art" id="egg">
            <div className="yolk" id="yolk"></div>
          </div>
        </div>
        <div className="skills-display">
          <div className="skills-title-div">
            <h1 className="skills-title">Front-end</h1>
          </div>
          <div id="initial-content"></div>
          {/* <!-- front-end | initial icons --> */}
          <div className="initial-icons hidden" id="front-end">
            <div>
            <img src="../../dist/assets/images/react.png" alt="react_icon" />
            <p className="icon-title">React</p>
            </div>

            <div>
            <img src="../../dist/assets/images/css.png" alt="css_icon" />
            <p className="icon-title">CSS 3</p>
            </div>

            <div>
            <img src="../../dist/assets/images/html.png" alt="html_icon" />
            <p className="icon-title">HTML 5</p>
            </div>

            <div>
            <img src="../../dist/assets/images/js.png" alt="js_icon" />
            <p className="icon-title">Javascript</p>
            </div>

            <div>
            <img src="../../dist/assets/images/bootstrap.png" alt="bootstrap_icon" />
            <p className="icon-title">Bootstrap</p>
            </div>

          </div>
          {/* <!-- tools icons -->
          <div className="skills-icons hidden" id="tools">
            <div>
            <img src="./images/git.png" alt="git_icon" />
            <p className="icon-title">Git</p>
            </div>

            <div>
            <img src="./images/heroku.png" alt="heroku_icon" />
            <p className="icon-title">Heroku</p>
            </div>

            <div>
            <img src="./images/oauth.png" alt="oauth_icon" />
            <p className="icon-title">OAuth</p>
            </div>

            <div>
            <img src="./images/jest.png" alt="jest_icon" />
            <p className="icon-title">Jest</p>
            </div>

            <div>
            <img src="./images/insomnia.png" alt="insomnia_icon" />
            <p className="icon-title">Insomnia</p>
            </div>

          </div>

          {/* <!-- back-end --> */}
          {/* <div className="skills-icons hidden" id="back-end">
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
          </div>  */}
        </div>
      </div>
    </section>

    <div className="separator"></div>
        </>
    )
}

export default Skills;