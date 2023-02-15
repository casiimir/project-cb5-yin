import { cityList } from "@/mocks/cityList";
import styles from "./index.module.scss";

const HotelList = (city) => {
  console.log(city);

  return (
    <>
      <div className={styles.sectionHotelSicily}>
        <div className={styles.List}>
          <p>Hotel in Sicilia</p>
          <div className={styles.Div}>
            {cityList.map((city) => (
              <div className={styles.DivImg}>
                <img className={styles.image} src={city.image_url} alt="img" />
                <h4>{city.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;
