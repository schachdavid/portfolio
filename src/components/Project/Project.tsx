import React from "react";
import logo from "./logo.svg";
import styles from "./Project.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";


interface IProps {
  title: string, 
  description: string, 
  img: any, 
  codeUrl: string, 
  demoUrl: string
}


const Project: React.FC<IProps> = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.textContainer}>
          <h2>{props.title}</h2>
          <p>
            {props.description}
          </p>     
        </div>
        <ButtonLink href={props.codeUrl}>{"<CODE/>"}</ButtonLink>
      </div>

      <div className={styles.right} style={{backgroundImage: `url(${props.img})`}}>
        <div className={styles.rightContent}>
          <ButtonLink href={props.demoUrl}>DEMO</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
