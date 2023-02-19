import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

function SearchCard({ el }) {
  const router = useRouter();
  console.log(el);
  // TODO: Completare card
  return (
    <div className={styles.Card}>
      <Image
        className={styles.CardImage}
        src={el.max_photo_url}
        width={200}
        height={200}
      />
      {/* <img
        className={styles.CardImage}
        src={el.max_photo_url}
        width="200px"
        alt=""
      /> */}
      <div className={styles.CardInfo}>
        <div className={styles.CardWrapper}>
          <h4>{el.hotel_name}</h4>
          <p>{el.city}</p>
          <p>{el.address}</p>
          <p>{el?.distances[0].text}</p>
        </div>
        <div className={styles.CardDetailedInfo}>
          <div className={styles.CardReviews}>
            <div className={styles.ReviewScore}>
              <p>{el.review_score}</p>
            </div>
            <div className={styles.ReviewsWrapper}>
              <span>{el.review_score_word}</span>
              <span>{el.review_nr} reviews</span>
            </div>
          </div>

          <button
            onClick={() => {
              router.push(`/hotel/${el.hotel_id}`);
            }}
            className={styles.CardButton}
          >
            Maggiori Informazioni
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
