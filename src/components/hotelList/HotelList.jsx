import { cityList } from "@/mocks/cityList";
import styles from "./index.module.scss";

const HotelList = (city) => {
  console.log(city);

  return (
    <>
      <div className={styles.List}>
        <p>Hotel per Città</p>
        <ul className={styles.ul}>
          {cityList.map((city) => (
            <li className={styles.li} key={city.id}>
              <h5>{city.city}</h5>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HotelList;
