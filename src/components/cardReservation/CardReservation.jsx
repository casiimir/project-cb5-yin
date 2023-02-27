import styles from "./index.module.scss";
import Image from "next/image";
import ReviewSearch from "@/atoms/ReviewSearch/ReviewSearch";

function CardReservation({ results }) {
  let str = "";
  let starStr = "⭐";
  for (let i = 0; i < results.class; i++) {
    str += starStr;
  }
  return (
    <div className={styles.Card}>
      {results && (
        <>
          <Image
            className={styles.CardImage}
            src={results?.main_photo_url?.replace("square60", "square500")}
            width={340}
            height={230}
            alt="str"
            priority
          />
          <div className={styles.CardInfo}>
            <div className={styles.CardWrapper}>
              <div className={styles.TopCard}>
                <span className={styles.typo}>
                  {
                    results?.booking_home?.group
                      .replaceAll("_", " ")
                      .split(" ")[0]
                  }
                </span>{" "}
                <span>{!results.class ? "" : str}</span>
              </div>
              <h4>{results?.name}</h4>
              <span>
                <p>
                  {results?.address}, {results?.city},{" "}
                </p>{" "}
                <span>
                  <Image
                    src={`https://flagcdn.com/${results?.countrycode}.svg`}
                    width={20}
                    height={15}
                    alt="flag"
                    priority
                  />{" "}
                  {results?.country} ({results?.zip})
                </span>
              </span>
            </div>

            <ReviewSearch data={results} />
          </div>
        </>
      )}
    </div>
  );
}

export default CardReservation;
