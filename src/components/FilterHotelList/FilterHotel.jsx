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
              <h4>{elem.name}</h4>
            </div>
          );
        })}
        {hotels.map((hotel) => (
          <div className={styles.infoHotel}>
            <img src={hotel.entrance_photo_url} alt="img" />
            <div className={styles.data}>
              <p>
                <h5>{hotel.name}</h5>
              </p>
              <p>
                <h5>{hotel.city}</h5>
                <h5>{hotel.country}</h5>
              </p>
            </div>
            <div className={styles.review}>
              <h5>{hotel.review_score}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterHotelList;
