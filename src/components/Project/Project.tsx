import React from "react";
import logo from "./logo.svg";
import styles from "./Project.module.css";


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

        <a href={props.codeUrl} className={styles.button}>{"<CODE/>"}</a>
      </div>

      <div className={styles.right} style={{backgroundImage: `url(${props.img})`}}>
        <div className={styles.rightContent}>
          <a href={props.demoUrl} className={styles.button}>DEMO</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
