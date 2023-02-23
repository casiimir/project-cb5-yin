import styles from "./index.module.scss";
import Image from "next/image";
import Review from "@/atoms/Review/Review";

function CardReservation({ results }) {
  return (
    <div className={styles.Card}>
      {results && (
        <>
          <Image
            className={styles.CardImage}
            src={results?.main_photo_url?.replace("square60", "square500")}
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
            </div>

            <Review data={results} />
          </div>
        </>
      )}
    </div>
  );
}

export default CardReservation;
