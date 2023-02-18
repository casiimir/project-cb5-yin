import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Button from "@/atoms/Button/Button";


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
    <div className={styles.Filter}>
      <ul className={styles.ulHotels}>
        <li className={filterByStars.includes(1) && styles.toggleOn}>
          <Button
            style="outlineRounded"
            content="1 stella ⭐"
            name="star1"
            onClick={() => handleOnClick(1)}
          />
        </li>
        <li className={filterByStars.includes(2) && styles.toggleOn}>
          <Button
            style="outlineRounded"
            content="2 stelle ⭐"
            name="star2"
            onClick={() => handleOnClick(2)}
          />
        </li>
        <li className={filterByStars.includes(3) && styles.toggleOn}>
          <Button
            style="outlineRounded"
            content="3 stelle ⭐"
            name="star3"
            onClick={() => handleOnClick(3)}
          />
        </li>
        <li className={filterByStars.includes(4) && styles.toggleOn}>
          <Button
            style="outlineRounded"
            content="4 stelle ⭐"
            name="star4"
            onClick={() => handleOnClick(4)}
          />
        </li>
        <li className={filterByStars.includes(5) && styles.toggleOn}>
          <Button
            style="outlineRounded"
            content="5 stelle ⭐"
            name="star5"
            onClick={() => handleOnClick(5)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Filters;
