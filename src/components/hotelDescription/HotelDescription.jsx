import React from "react";
import styles from "./index.module.scss";

function HotelDescription({ descriptionData }) {
  return (
    <div className={styles.main}>
      <h2>Il posto ideale per il tuo soggiorno</h2>
      <p>{descriptionData?.description}</p>
    </div>
  );
}

export default HotelDescription;
