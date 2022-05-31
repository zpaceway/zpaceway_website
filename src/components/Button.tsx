import React from "react";
import styles from "../styles/Button.module.scss";

function Button({
  color = "secondary",
  children,
  onClick,
}: {
  color?: string;
  children: React.ReactNode;
  onClick?: (...args: any) => any;
}) {
  return (
    <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
