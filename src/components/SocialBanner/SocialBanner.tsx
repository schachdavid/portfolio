import React from "react";
import styles from "./SocialBanner.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
interface IProps {}

const SocialBanner: React.FC<IProps> = props => {
  return (
    <div className={styles.container}>
      <a href="mailto:schachdavid@web.de">
        <FiMessageSquare className={styles.icon} />
      </a>
      <a href="https://github.com/schachdavid">
        <FaGithub/>
      </a>
      <a href="https://www.linkedin.com/in/david-schach-668a22137/">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialBanner;
