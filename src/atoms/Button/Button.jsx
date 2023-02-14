import React from "react";
import styles from "./index.module.scss";

const buttonStyleMap = {
  primary: styles.Primary,
  secondary: styles.Secondary,
  icon: styles.Icon,
};

function Button({ content, type }) {
  return (
    <button className={buttonStyleMap[type] ?? styles.Default}>
      {content}
    </button>
  );
}

export default Button;
