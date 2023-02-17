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

function Button({ content, type, onClick = null }) {
  return (
    <button
    
    onClick={() =>{ if(onClick && typeof onClick === "function"){
      onClick()
    }}}  
     className={buttonStyleMap[type] ?? styles.Default}>
      {content}
    </button>
  );
}

export default Button;
