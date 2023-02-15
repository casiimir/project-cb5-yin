import React from "react";
import styles from "./index.module.scss";

function SearchCard({ el }) {
  // TODO: Completare card
  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImage}
        src={el.main_photo_url}
        width="200px"
        alt=""
      />
      <div className={styles.CardWrapper}>
        <h4>{el.hotel_name}</h4>
        <p>{el.city}</p>
        <p>{el.address}</p>
      </div>
    </div>
  );
}

export default SearchCard;
