import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default Button;
