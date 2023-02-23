import Image from "next/image";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import Link from "next/link";

import { useRef } from "react";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HotelReserve from "@/components/hotelReserve/HotelReserve";

const HotelSimilarCard = ({ dataHotelReview }) => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

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
    <div className={styles.HotelSimilarCard}>
      <h4>Strutture simili</h4>
      <div className={styles.hotelContainer} ref={ref}>
        {hotels.map((elem, index) => {
          console.log(elem);
          return (
            <Link key={index} href={`/hotel/${elem.hotel_id}`}>
              <div key={index} className={styles.cardHotel}>
                <img src={elem.entrance_photo_url} alt="img" />
                <div className={styles.content}>
                  <div className={styles.typo}>
                    <span>
                      {
                        dataHotelReview.booking_home.group
                          .replaceAll("_", " ")
                          .split(" ")[0]
                      }
                    </span>{" "}
                    <span>{!dataHotelReview.class ? "" : str}</span>
                  </div>
                  <h4>{elem.name}</h4>
                  <div className={styles.score}>
                    <p>
                      {elem.review_score} {elem.review_score_word}
                    </p>
                  </div>
                </div>
                  <button
                    className={styles.reserveButton}
                    onClick={() => {
                      {
                        <Link
                          key={index}
                          href={`/hotel/${elem.hotel_id}`}
                        ></Link>;
                      }
                    }}
                  >
                    Scopri di più
                  </button>
              </div>
            </Link>
          );
        })}
        <button onClick={() => scroll(-225)} className={styles.arrowLeft}>
          <Image
            className={styles.svg}
            src="/arrowleft.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
        </button>
        <button onClick={() => scroll(225)} className={styles.arrowRight}>
          <Image
            className={styles.svg}
            src="/arrowright.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default HotelSimilarCard;
