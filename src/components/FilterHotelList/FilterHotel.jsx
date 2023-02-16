import Filters from "../filters";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import { useState } from "react";

const FilterHotelList = () => {
  const [filterByStars, setFilterByStars] = useState([3, 4]);
  return (
    <div className={styles.section}>
      <p>Scopri il tuo hotel ideale</p>
      <Filters
        filterByStars={filterByStars}
        setFilterByStars={setFilterByStars}
      />
      <div className={styles.Hotels}>
        {hotels.map((elem) => {
          if (!filterByStars.includes(elem.class)) return undefined;
          return (
            <div className={styles.infoHotel}>
              <img src={elem.entrance_photo_url} alt="img" />
              <div className={styles.data}>
                <p>
                  <h5>{elem.name}</h5>
                </p>
                <p>
                  <h5>{elem.city}</h5>
                  <h5>{elem.country}</h5>
                </p>
                <div className={styles.review}>
                  <h5>{elem.review_score}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterHotelList;
