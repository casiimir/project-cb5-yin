import React from "react";
import styles from "./index.module.scss";

function Review({ data }) {
  return (
    <div className={styles.CardReviews}>
      <div className={styles.ReviewScore}>
        <p>{data?.review_score}</p>
      </div>
      <div className={styles.ReviewsWrapper}>
        <span>{data?.review_score_word}</span>
        <span>{data?.review_nr} reviews</span>
      </div>
    </div>
  );
}

export default Review;
