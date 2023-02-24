import React from "react";
import styles from "./index.module.scss";

function Review({ data }) {
  return (
    <div className={styles.score}>
      <div className={styles.text}>
        <span className={styles.scoreText}>{data.review_score_word}</span> ·{" "}
        <span className={styles.scoreNumber}>{data.review_score}</span>{" "}
      </div>
      <span className={styles.reviewNumber}>
        {data.review_nr?.toLocaleString("de-DE")} recensioni
      </span>
    </div>
  );
}

export default Review;
