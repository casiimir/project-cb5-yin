import { cityList } from "@/mocks/cityList";
import styles from "./index.module.scss";

const HotelList = (city) => {
  console.log(city);

  return (
    <>
      <div className={styles.List}>
        <p>Hotel per Città</p>
        <div className="">
          {cityList.map((city) => (
            <div>
              <img src={city.image_url} alt="" />
              <h4>{city.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelList;
