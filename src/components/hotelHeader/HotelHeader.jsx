import styles from "./index.module.scss";

import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HotelReserve from "@/components/hotelReserve/HotelReserve";
import Heart from "@/atoms/Heart/Heart";
import Image from "next/image";
import Link from "next/link";
import Stars from "@/atoms/Stars/Stars";

const HotelHeader = ({ dataHotelReview }) => {
  //console.log(positionData);
  //   if (positionData.geo_info.city_centre.distance < 500) {
  //     const positionHotel = "Ottima posizione - In centro";
  //   } else if (positionData.geo_info.city_centre.distance < 2000) {
  //     const positionHotel = "Buona posizione - Vicino al centro";
  //   }

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
                {
                  dataHotelReview.booking_home.group
                    .replaceAll("_", " ")
                    .split(" ")[0]
                }
              </span>
              <Stars number={dataHotelReview.class} />
            </div>
            <div className={styles.right}>
              <div className={styles.fav}>
                <Heart data={dataHotelReview} />
                <Link href={"/yournexttrip"}>
                  <p>Vai ai preferiti</p>
                </Link>
              </div>
              <HotelReserve pid={pid} />
            </div>
          </div>
          <div className={styles.mainHeader}>
            <span className={styles.title}>
              <h2>{dataHotelReview.name}</h2>
            </span>
            <span className={styles.address}>
              {dataHotelReview.address}, {dataHotelReview.city}
            </span>

            <span className={styles.country}>
              <Image
                src={`https://flagcdn.com/${dataHotelReview?.countrycode}.svg`}
                width={20}
                height={15}
                alt="flag"
              />
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
