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
      </div>
    </div>
  );
};

export default FilterHotelList;
