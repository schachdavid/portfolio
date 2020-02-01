import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Project from "./components/Project/Project";

import classnames from "classnames";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaRocket
} from "react-icons/fa";
import { FiChevronDown, FiMessageSquare, FiMail } from "react-icons/fi";

import Navigation from "./components/Navigation/Navigation";
import SocialBanner from "./components/SocialBanner/SocialBanner";
import classNames from "classnames";
const App: React.FC = () => {
  let projectsHeadline: any = null;
  const scrollToProjects = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: projectsHeadline.offsetTop
    });
  };

  const scrollToContactMe = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 9999
    });
  };

  const imgHappy2Help = require("./images/happy2help.PNG");
  const imgDecisionMaker = require("./images/decision_maker.png");

  return (
    <div className={styles.app}>
      <div className={styles.socialBanner}>
        <SocialBanner />
      </div>
      <div className={styles.header}>
        <div className={styles.leftHeader}></div>

        <div className={styles.rightHeader}>
          <a href="mailto:schachdavid@web.de">
            <FiMessageSquare className={styles.icon} />
          </a>
          <a href="https://github.com/schachdavid">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/david-schach-668a22137/">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.navigation}>
        <Navigation
          scrollToProjects={scrollToProjects}
          scrollToContactMe={scrollToContactMe}
        />
      </div>

      <div className={styles.landing}>
        <div className={styles.titleTextContainer}>
          <h1 className={styles.title}>DAVID SCHACH</h1>
          <h2 className={styles.subTitle}>FULL STACK DEVELOPER</h2>
          <div className={styles.description}>
            <div>Passionate software developer</div>
            <div>currently studying computer science in media</div>
          </div>
        </div>

        <a className={styles.scrollDown} onClick={scrollToProjects}>
          <span className={styles.iconStrokeWidthContainer}>
            <FiChevronDown className={styles.downIcon} />
          </span>
        </a>
      </div>
      <h2
        ref={ph => {
          projectsHeadline = ph;
        }}
        className={classNames(styles.projectsHeadline, styles.title)}
      >
        PROJECTS
      </h2>
      <ul className={styles.projectsContainer}>
        <li className={styles.projectContainer}>
          <Project
            title="Happy 2 Help"
            description="An app which helps helps people to volunteer."
            codeUrl="https://github.com/saefty/happy2help_app"
            demoUrl="https://github.com/saefty/happy2help_app/blob/master/readme_assets/demo.gif"
            img={imgHappy2Help}
            labels={["React Native", "GraphQL", "Django"]}
          />
        </li>
        <li className={styles.projectContainer}>
          <Project
            title="Decision Maker"
            description="An app which helps you to make the best decision
            possible."
            codeUrl="https://github.com/schachdavid/decision-maker"
            demoUrl="https://github.com/schachdavid/decision-maker"
            img={imgDecisionMaker}
            labels={["Flutter", "Dart", "SQlite"]}
          />
        </li>
        <li className={styles.projectContainer}>
          <Project
            title="Another Project"
            description="Some Description."
            codeUrl="https://github.com/schachdavid/decision-maker"
            demoUrl="https://github.com/schachdavid/decision-maker"
            img="https://github.com/schachdavid/decision-maker"
            labels={[]}
          />
        </li>
      </ul>
      <a
        href="mailto:schachdavid@web.de"
        className={classnames(styles.button, styles.contactMeButton)}
      >
        <FiMail />
        <span>CONTACT ME</span>
      </a>
    </div>
  );
};

export default App;
