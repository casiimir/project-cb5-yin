import { cityList } from "@/mocks/cityList";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "@/store/context";
import { cases } from "@/store/reducers";

const CityList = () => {
  const router = useRouter();
  const { dispatch } = useContext(AppContext);

  const handleDynamicRoute = (dest_id) => {
    dispatch({ type: cases.ADD_LOCATION, payload: dest_id });
    router.push(`/search?dest_id=${dest_id}`);
  };

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
                onClick={() => handleDynamicRoute(city.dest_id)}
                className={styles.cityImage}
                src={city.image_url}
                alt="img"
              />
              <div
                className={styles.cityOverlay}
                onClick={() => handleDynamicRoute(city.dest_id)}
              ></div>
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
