import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Review from "@/atoms/Review/Review";
import Heart from "@/atoms/Heart/Heart";

function SearchCard({ el }) {
  const router = useRouter();
  console.log(el);
  return (
    <div className={styles.Card}>
      <Image
        className={styles.CardImage}
        src={el.max_photo_url}
        width={200}
        height={200}
        alt="str"
      />

      <div className={styles.CardInfo}>
        <div className={styles.CardWrapper}>
          <h4>{el.hotel_name}</h4>
          <p>{el.city}</p>
          <p>{el.address}</p>
          <p>{el?.distances[0].text}</p>
        </div>
        <div className={styles.CardDetailedInfo}>
          <div>
            <Review data={el} />
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
