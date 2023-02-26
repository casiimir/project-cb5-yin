import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter, useState } from "next/router";
import ReviewSearch from "@/atoms/ReviewSearch/ReviewSearch";
import Heart from "@/atoms/Heart/Heart";
import SectionOne from "../heroOffers";

function SearchCard({ el }) {
  const router = useRouter();

  return (
    <div className={styles.Card}>
      <Image
        className={styles.CardImage}
        src={el.max_photo_url}
        width={400}
        height={400}
        alt="str"
        priority
      />

      <div className={styles.CardInfo}>
        <div className={styles.CardWrapper}>
          <div className={styles.SectionOne}>
            <h4>{el.hotel_name}</h4>
            <div>{el && <ReviewSearch data={el} />}</div>
          </div>
          <p>
            {el.city}
            <br />
            {el?.distances[0].text}
          </p>
        </div>
        <div className={styles.CardDetailedInfo}>
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
