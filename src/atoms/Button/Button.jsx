import React from "react";
import styles from "./index.module.scss";

const buttonStyleMap = {
  primary: styles.Primary,
  secondary: styles.Secondary,
  icon: styles.Icon,
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
