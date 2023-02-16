import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Filters = ({ filterByStars, setFilterByStars }) => {
  useEffect(() => {
    console.log(filterByStars);
  }, [filterByStars]);

  function handleOnClick(star) {
    console.log(filterByStars, star, filterByStars.includes(star));
    if (!filterByStars.includes(star)) {
      //Aggiungi
      setFilterByStars([...filterByStars, star]);
    } else {
      //Rimuovi
      console.log(filterByStars.filter((el) => el !== star));
      setFilterByStars(filterByStars.filter((el) => el !== star));
    }
  }
  return (
    <div className={styles.DivFilters}>
      <ul className={styles.ulHotels}>
        <li className={filterByStars.includes(1) && styles.toggleOn}>
          <button type="button" name="star1" onClick={() => handleOnClick(1)}>
            ⭐
          </button>
        </li>
        <li className={filterByStars.includes(2) && styles.toggleOn}>
          <button type="button" name="star2" onClick={() => handleOnClick(2)}>
            ⭐⭐
          </button>
        </li>
        <li className={filterByStars.includes(3) && styles.toggleOn}>
          <button type="button" name="star3" onClick={() => handleOnClick(3)}>
            ⭐⭐⭐
          </button>
        </li>
        <li className={filterByStars.includes(4) && styles.toggleOn}>
          <button type="button" name="star4" onClick={() => handleOnClick(4)}>
            ⭐⭐⭐⭐
          </button>
        </li>
        <li className={filterByStars.includes(5) && styles.toggleOn}>
          <button type="button" name="star5" onClick={() => handleOnClick(5)}>
            ⭐⭐⭐⭐⭐
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
