import React from "react";
import styles from "./SocialBanner.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface IProps {}

const SocialBanner: React.FC<IProps> = props => {
  return (
    <div className={styles.container}>
      <a href="mailto:schachdavid@web.de">
        <FaEnvelope className={styles.icon} />
      </a>

      <span className={styles.cvIcon}>CV</span>

      <a href="https://github.com/schachdavid">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/david-schach-668a22137/">
        <FaLinkedin className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialBanner;
