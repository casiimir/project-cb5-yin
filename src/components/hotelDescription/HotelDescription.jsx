import React from "react";
import styles from "./index.module.scss";

function HotelDescription({ descriptionData }) {

  const handleClick = event => {
  event.currentTarget.classList.toggle("line-clamp-5");

  };

  return (
    <div className={styles.main}>
      <h2>Descrizione della struttura</h2>
      <p>{descriptionData?.description}</p>
            <button onClick={handleClick}>Leggi di più</button>
    </div>
  );
}

export default HotelDescription;
