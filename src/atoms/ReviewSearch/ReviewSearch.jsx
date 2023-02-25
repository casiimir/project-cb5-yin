import React from "react";
import styles from "./index.module.scss";

function ReviewSearch({ data }) {
  return (
    <div className={styles.score}>
        <span className={styles.scoreNumber}>{data.review_score}</span>{" "}
        <span className={styles.scoreText}>{data.review_score_word}</span> ·{" "}
      <span className={styles.reviewNumber}>
        {data.review_nr?.toLocaleString("de-DE")} recensioni
      </span>
    </div>
  );
}

export default ReviewSearch;
