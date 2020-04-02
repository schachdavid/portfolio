import React, { useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Project from "./components/Project/Project";

import AOS from "aos";

import { FiLinkedin, FiMessageSquare, FiMail, FiGithub } from "react-icons/fi";

import classNames from "classnames";
import ButtonLink from "./components/ButtonLink/ButtonLink";
const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const imgHappy2Help = require("./images/happy2help.PNG");
  const imgDecisionMaker = require("./images/decision_maker.png");
  const imgReactEventAgenda = require("./images/react-event-agenda.png");
  const imgAgendaBuilder = require("./images/agenda-builder-add-in.png");

  const sketchSvg = require("./images/svgs/sketch.svg");
  const backgroundSvg = require("./images/svgs/background.svg");




  return (
    <div className={styles.app}>
      <header>
        <a
          href="mailto:schachdavid@web.de"
          aria-label="Send an Email"
        >
          <FiMessageSquare className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-schach-668a22137/"
          aria-label="View LinkedIn Profile"
        >
          <FiLinkedin className={styles.icon} />
        </a>
        <a
          href="https://github.com/schachdavid"
          aria-label="View Github Profile"
        >
          <FiGithub className={styles.icon} />
        </a>
      </header>
      <div className={styles.landing}>
        <div className={styles.titleTextContainer}>
          <h1 className={styles.title}>David Schach</h1>
          <h2 className={styles.subTitle}>Software Developer</h2>
          <div className={styles.description}>
            Passionate software developer currently doing his masters in
            computer science in media.
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonLink href="mailto:schachdavid@web.de">
              Get In Touch
            </ButtonLink>
          </div>
        </div>
        <div className={styles.artworkContainer}>
          <img
            src={backgroundSvg}
            className={styles.background}
            alt="background"
          ></img>

          <img
            src={sketchSvg}
            alt="Developer Self Portrait Sketch"
            className={styles.sketch}
          ></img>
        </div>
      </div>
      <h2 className={classNames(styles.projectsHeadline, styles.title)}>
        Projects
      </h2>
      <ul className={styles.projectsContainer} data-aos="fade-left">
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
            title="React Event Agenda"
            description="A reusable react component to plan an agenda for a meeting or event."
            codeUrl="https://github.com/schachdavid/react-event-agenda"
            demoUrl="https://schachdavid.github.io/react-event-agenda/"
            img={imgReactEventAgenda}
            labels={["React", "TypeScript", "MobX"]}
          />
        </li>
        <li className={styles.projectContainer}>
          <Project
            title="Agenda Builder Add-In"
            description="A decentralized Outlook Add-In to plan and share a meeting's or event's agenda directly into an e-mail."
            codeUrl="https://github.com/schachdavid/agenda-builder-add-in"
            demoUrl="https://github.com/schachdavid/agenda-builder-add-in#agenda-builder"
            img={imgAgendaBuilder}
            labels={["Office JS API", "React"]}
          />
        </li>
      </ul>
      <footer className={styles.footer} data-aos="fade-up">
        Got Interested? Get in Touch with Me:
        <div className={styles.socialMediaFooter}>
        <a
          href="mailto:schachdavid@web.de"
          className={styles.socialMediaLink}
          aria-label="Send an Email"
        >
          <FiMessageSquare className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-schach-668a22137/"
          className={styles.socialMediaLink}
          aria-label="View LinkedIn Profile"
        >
          <FiLinkedin className={styles.icon} />
        </a>
        <a
          href="https://github.com/schachdavid"
          className={styles.socialMediaLink}
          aria-label="View Github Profile"
        >
          <FiGithub className={styles.icon} />
        </a>
        </div>
       
      </footer>
    </div>
  );
};

export default App;
