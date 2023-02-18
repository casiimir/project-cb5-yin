import { cityList } from "@/mocks/cityList";
import styles from "./index.module.scss";

const CityList = (city) => {
  console.log(city);

  return (
    <>
      <div className={styles.CityList}>
        <div>
          <h2>Sicilia: una straordinaria terra da scoprire</h2>
          <p>Queste mete popolari hanno tanto da offrire</p>
        </div>
        <div className={styles.cityGallery}>
          {cityList.map((city) => (
            <div className={styles.cityCard}>
              <img
                className={styles.cityImage}
                src={city.image_url}
                alt="img"
              />
              <div className={styles.cityOverlay}></div>
              <h3 className={styles.cityName}>{city.name}</h3>
              <h2 className={styles.cityCTA}>
                Scopri<br></br>
                {city.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CityList;
