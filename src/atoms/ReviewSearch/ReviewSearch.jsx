import React from "react";
import styles from "./index.module.scss";
import { useState } from "react";

function ReviewSearch({ data }) {
  let cltrExist = false;

  if (data.review_nr > 0 && typeof data.review_score !== "undefined") {
    cltrExist = true;
  }

  return (
    <div className={styles.score}>
      <span className={cltrExist && styles.scoreNumber}>
        {data?.review_score}
      </span>{" "}
      <span className={cltrExist && styles.scoreText}>
        {data?.review_score_word}
      </span>{" "}
      {cltrExist && "·"}{" "}
      <span className={styles.reviewNumber}>
        {data.review_nr?.toLocaleString("de-DE")} {cltrExist && "recensioni"}
      </span>
    </div>
  );
}

export default ReviewSearch;
