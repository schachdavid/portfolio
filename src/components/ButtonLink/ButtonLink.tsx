import React from "react";
import logo from "./logo.svg";
import styles from "./ButtonLink.module.css";


interface IProps {
  href: string 
}


const ButtonLink: React.FC<IProps> = (props) => {

  return (
    <a href={props.href} className={styles.button}>{props.children}</a>
  );
};

export default ButtonLink;
