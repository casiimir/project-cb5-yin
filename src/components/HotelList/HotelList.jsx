import Image from "next/image";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import Link from "next/link";

const HotelList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hotelContainer}>
        {hotels.map((elem, index) => {
          return (
            <Link key={index} href={`/hotel/${elem.hotel_id}`}>
              <div key={index} className={styles.cardHotel}>
                <img src={elem.entrance_photo_url} alt="img" />
                <h3>{elem.name}</h3>
                <div className={styles.wrapper}>
                  <p className={styles.score}>{elem.review_score}</p>
                  <p className={styles.vote}>{elem.review_score_word}</p>
                </div>
                <div className={styles.scoreContainer}></div>
              </div>
            </Link>
          );
        })}
        <button className={styles.arrowRight}>
          <Image
            className={styles.svg}
            src="/arrowright.svg"
            alt="image"
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default HotelList;
