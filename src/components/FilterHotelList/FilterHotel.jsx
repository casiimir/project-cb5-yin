import Filters from "../filters";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import { useState } from "react";

const FilterHotelList = () => {
  const [toggle, setToggle] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });
  return (
    <div className={styles.section}>
      <p>Scopri il tuo hotel ideale</p>
      <Filters toggle={toggle} setToggle={setToggle} />
      <div className={styles.Hotels}>
        {hotels.map((hotel) => (
          <div className={styles.infoHotel}>
            <h4>{hotel.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterHotelList;
