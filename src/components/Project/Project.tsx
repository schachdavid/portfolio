import React from "react";
import logo from "./logo.svg";
import styles from "./Project.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import Label from "../Label/Label";
import { FiCode, FiExternalLink } from "react-icons/fi";

interface IProps {
  title: string;
  description: string;
  labels: string[];
  img: any;
  codeUrl: string;
  demoUrl: string;
}

const Project: React.FC<IProps> = props => {
  const labels = props.labels.map(labelText => {
    return <Label>{labelText}</Label>;
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.textContainer}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={styles.labelContainer}>{labels}</div>
        </div>
        <div className={styles.actions}>
          <a href={props.codeUrl} aria-label="View Code for this Project">
          
            <FiCode strokeWidth="1.2" className={styles.icon} />
          </a>
          <a href={props.demoUrl} aria-label="View a Demo for this Project">
            <FiExternalLink strokeWidth="1.2" className={styles.icon} />
          </a>
        </div>
      </div>

      <div
        className={styles.right}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className={styles.rightContent}>
        </div>
      </div>
    </div>
  );
};

export default Project;
