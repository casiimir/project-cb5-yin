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
      <span className={cltrExist ? styles.scoreNumber : null}>
        {data?.review_score}
      </span>{" "}
      <span className={cltrExist ? styles.scoreText : null}>
        {data?.review_score_word}
      </span>{" "}
      {cltrExist ? "·" : null}{" "}
      <span className={styles.reviewNumber}>
        {data.review_nr?.toLocaleString("de-DE")}{" "}
        {cltrExist ? "recensioni" : null}
      </span>
    </div>
  );
}

export default ReviewSearch;
