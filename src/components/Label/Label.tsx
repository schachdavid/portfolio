import React from "react";
import logo from "./logo.svg";
import styles from "./Label.module.css";

interface IProps {
    
}

const Label: React.FC<IProps> = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Label;
