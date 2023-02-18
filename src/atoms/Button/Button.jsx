import React from "react";
import styles from "./index.module.scss";

const buttonStyleMap = {
  primary: styles.Primary,
  secondary: styles.Secondary,
  currency: styles.Currency,
  icon: styles.Icon,
  outline: styles.Outline,
  operation: styles.Operation,
  outlineRounded: styles.OutlineRounded,
};

function Button({ content, style, onClick = null }) {
  return (
    <button type="button"
      onClick={() => {
        if (onClick && typeof onClick === "function") {
          onClick();
        }
      }}
      className={buttonStyleMap[style] ?? styles.Default}
    >
      {content}
    </button>
  );
}

export default Button;
