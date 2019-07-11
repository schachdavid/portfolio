import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Project from "./components/Project/Project";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown
} from "react-icons/fa";
const App: React.FC = () => {
  let projectsHeadline: any = null;
  const onScrollClick = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: projectsHeadline.offsetTop
    });
  };

  const imgHappy2Help = require("./images/happy2help.PNG");
  const imgDecisionMaker = require("./images/decision_maker.png");



  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <a href="mailto:schachdavid@web.de">
            <FaEnvelope className={styles.icon} />
          </a>

          <span className={styles.cvIcon}>CV</span>
        </div>

        <div className={styles.rightHeader}>
          <a href="https://github.com/schachdavid">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/david-schach-668a22137/">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.landing}>
        <div className={styles.titleTextContainer}>
          <div className={styles.title}>DAVID SCHACH</div>
          <div className={styles.subTitle}>FULL STACK DEVELOPER</div>
        </div>

        <a className={styles.scrollDown} onClick={onScrollClick}>
          <FaChevronDown className={styles.downIcon} />
          <div
            ref={ph => {
              projectsHeadline = ph;
            }}
            className={styles.downText}
          >
            Projects
          </div>
        </a>
      </div>

      <ul className={styles.projectsContainer}>
        <li className={styles.projectContainer}>
          <Project
            title="Happy 2 Help"
            description="  A React Native app which helps helps people to volunteer."
            codeUrl="https://github.com/saefty/happy2help_app"
            demoUrl="https://github.com/saefty/happy2help_app/blob/master/readme_assets/demo.gif"
            img={imgHappy2Help}
          />
        </li>
        <li className={styles.projectContainer}>
          <Project
            title="Decision Maker"
            description="  A simple flutter app which helps you to make the best decision
            possible."
            codeUrl="https://github.com/schachdavid/decision-maker"
            demoUrl="https://github.com/schachdavid/decision-maker"
            img={imgDecisionMaker}
          />
        </li>
        <li className={styles.projectContainer}>
          <Project
            title="Another Project"
            description="Some Description."
            codeUrl="https://github.com/schachdavid/decision-maker"
            demoUrl="https://github.com/schachdavid/decision-maker"
            img="https://github.com/schachdavid/decision-maker"
          />
        </li>
      </ul>
    </div>
  );
};

export default App;
