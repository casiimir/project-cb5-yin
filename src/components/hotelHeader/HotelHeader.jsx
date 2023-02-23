import styles from "./index.module.scss";

import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HotelReserve from "@/components/hotelReserve/HotelReserve";
import Heart from "@/atoms/Heart/Heart";

const HotelHeader = ({ dataHotelReview }) => {
  //console.log(positionData);
  //   if (positionData.geo_info.city_centre.distance < 500) {
  //     const positionHotel = "Ottima posizione - In centro";
  //   } else if (positionData.geo_info.city_centre.distance < 2000) {
  //     const positionHotel = "Buona posizione - Vicino al centro";
  //   }
  let str = "";
  let starStr = "⭐";
  for (let i = 0; i < dataHotelReview.class; i++) {
    str += starStr;
  }

  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { pid } = router.query;

    useEffect(() => {
      if (router.isReady) {

        GET(
          `hotels/reviews?hotel_id=${pid}&locale=it&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=it%2Cde%2Cfr`
        )
          .then((response) => {
            setReviewData(response.result);
          })
          .catch((error) => console.log(error));

        setLoading(false);
      }
    }, [router.isReady]);

  return (
    <div className={styles.HotelHeader}>
      {dataHotelReview && (
        <>
          <div className={styles.topHeader}>
            <div className={styles.left}>
              <span className={styles.typo}>
                {dataHotelReview.booking_home.group.replaceAll("_", " ")}
              </span>
              <span className={styles.class}>
                {!dataHotelReview.class ? "" : str}
              </span>
            </div>
            <div className={styles.right}>
              <Heart data={dataHotelReview} />
              <HotelReserve pid={pid} />
            </div>
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
