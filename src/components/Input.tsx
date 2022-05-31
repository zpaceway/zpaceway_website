import React from "react";
import styles from "../styles/Input.module.scss";

function Input({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (...args: any) => any;
}) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
