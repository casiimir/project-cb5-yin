import styles from "./index.module.scss";
import Image from "next/image";

function CardReservation({ results }) {
  console.log(results);
  return (
    <div className={styles.Card}>
      {results && (
        <>
          <Image
            className={styles.CardImage}
            src={results?.main_photo_url.replace("square60", "square500")}
            width={200}
            height={200}
            alt="str"
          />
          <div className={styles.CardInfo}>
            <div className={styles.CardWrapper}>
              <h4>{results?.name}</h4>
              <p>
                {results?.address}, {results?.city}, {results?.country},
                {results?.zip}
              </p>
              <p>
                {results?.review_score_word}--{results?.review_score}
              </p>
            </div>
            <div className={styles.CardDetailedInfo}>
              <div className={styles.CardReviews}>
                <div className={styles.ReviewScore}>
                  <p>{results?.review_score}</p>
                </div>
                <div className={styles.ReviewsWrapper}>
                  <span>{results?.review_nr} reviews</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CardReservation;
