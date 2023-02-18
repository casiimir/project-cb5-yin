import styles from "./index.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

const AddressHotel = ({ dataHotelReview }) => {
  //console.log(positionData);
  //   if (positionData.geo_info.city_centre.distance < 500) {
  //     const positionHotel = "Ottima posizione - In centro";
  //   } else if (positionData.geo_info.city_centre.distance < 2000) {
  //     const positionHotel = "Buona posizione - Vicino al centro";
  //   }

  return (
    <div className={styles.main}>
      {dataHotelReview && (
        <>
          <div className={styles.container}>
            <h3>{dataHotelReview.name}</h3>
            <p>
              {dataHotelReview.address} {dataHotelReview.city}
              {dataHotelReview.country} - positionHotel
            </p>
          </div>
          <div className={styles.buttons}>
            <i>
              <AiOutlineHeart />
            </i>
            <button>Prenota adesso</button>
          </div>
        </>
      )}
    </div>
  );
};
export default AddressHotel;
