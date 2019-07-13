import React from "react";
import logo from "./logo.svg";
import styles from "./Navigation.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import { FaCircle } from "react-icons/fa";

interface IProps {
  scrollToProjects: () => void;
  scrollToContactMe: () => void;
}

const Navigation: React.FC<IProps> = props => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <div className={styles.about}>ABOUT</div>
          </li>
          <li onClick={props.scrollToProjects}>
            <a>PROJECTS</a>
          </li>
          <li onClick={props.scrollToContactMe}>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
