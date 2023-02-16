import { BsReverseBackspaceReverse } from "react-icons/bs";
import { useState, useEffect } from "react";
import AppContext from "@/store/context";
import styles from "./index.module.scss";

const Filters = ({ toggle, setToggle }) => {
  function handleOnClick(star) {
    switch (star) {
      case 1:
        setToggle((prev) => {
          return { ...toggle, star1: !prev.star1 };
        });
        break;
      case 2:
        setToggle((prev) => {
          return { ...toggle, star2: !prev.star2 };
        });
        break;
      case 3:
        setToggle((prev) => {
          return { ...toggle, star3: !prev.star3 };
        });
        break;
      case 4:
        setToggle((prev) => {
          return { ...toggle, star4: !prev.star4 };
        });
        break;
      case 5:
        setToggle((prev) => {
          return { ...toggle, star5: !prev.star5 };
        });
        break;
      default:
        console.log("Error star filter");
    }
  }
  return (
    <div className={styles.DivFilters}>
      <ul className={styles.ulHotels}>
        <li className={toggle.star1 ? styles.toggleOn : styles.toggleOff}>
          <button type="button" name="star1" onClick={() => handleOnClick(1)}>
            ⭐
          </button>
        </li>
        <li className={toggle.star2 ? styles.toggleOn : styles.toggleOff}>
          <button type="button" name="star2" onClick={() => handleOnClick(2)}>
            ⭐⭐
          </button>
        </li>
        <li className={toggle.star3 ? styles.toggleOn : styles.toggleOff}>
          <button type="button" name="star3" onClick={() => handleOnClick(3)}>
            ⭐⭐⭐
          </button>
        </li>
        <li className={toggle.star4 ? styles.toggleOn : styles.toggleOff}>
          <button type="button" name="star4" onClick={() => handleOnClick(4)}>
            ⭐⭐⭐⭐
          </button>
        </li>
        <li className={toggle.star5 ? styles.toggleOn : styles.toggleOff}>
          <button type="button" name="star5" onClick={() => handleOnClick(5)}>
            ⭐⭐⭐⭐⭐
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
