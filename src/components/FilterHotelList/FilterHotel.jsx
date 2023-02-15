import Filters from "../filters";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";

const FilterHotelList = () => {
  return (
    <div className={styles.section}>
      <p>Scopri il tuo hotel ideale</p>
      <Filters />
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
