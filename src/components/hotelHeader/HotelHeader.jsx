import styles from "./index.module.scss";
import Heart from "@/atoms/Heart/Heart";

const HotelHeader = ({ dataHotelReview }) => {
  //console.log(positionData);
  //   if (positionData.geo_info.city_centre.distance < 500) {
  //     const positionHotel = "Ottima posizione - In centro";
  //   } else if (positionData.geo_info.city_centre.distance < 2000) {
  //     const positionHotel = "Buona posizione - Vicino al centro";
  //   }

  return (
    <div className={styles.HotelHeader}>
      {dataHotelReview && (
        <>
          <div className={styles.topHeader}>
            <div>
              <span className={styles.typo}>
                {dataHotelReview.booking_home.group}
              </span>{" "}
              <span className={styles.class}>{dataHotelReview.class}</span>
            </div>
            <Heart data={dataHotelReview} />
          </div>
          <div className={styles.mainHeader}>
            <span className={styles.title}>
              <h2>{dataHotelReview.name}</h2>
            </span>
            <span className={styles.address}>
              {dataHotelReview.address}, {dataHotelReview.city}
              <br></br>
              {dataHotelReview.country}
            </span>
            <div className={styles.score}>
              <span className={styles.scoreNumber}>
                {dataHotelReview.review_score}
              </span>{" "}
              <span className={styles.scoreText}>
                {dataHotelReview.review_score_word}
              </span>{" "}
              ·{" "}
              <span className={styles.reviewNumber}>
                {dataHotelReview.review_nr.toLocaleString("de-DE")} recensioni
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default HotelHeader;
