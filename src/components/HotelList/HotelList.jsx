import Image from "next/image";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";

const HotelList = () => {
  return (
    <div className={styles.container}>
      <h2>
        Chi ha guardato nome della struttura ha guardato anche queste strutture
      </h2>
      <div className={styles.hotelContainer}>
        {hotels.map((elem) => {
          return (
            <div className={styles.cardHotel} key={elem.hotel_id}>
              <img src={elem.entrance_photo_url} alt="img" />
              <h3>{elem.name}</h3>
              <p>punteggio, voto</p>
              <div className={styles.scoreContainer}>
                <div className={styles.wrap}>
                  <p className={styles.review}>a partire da</p>
                  <h3 className={styles.payment}>€ xxx</h3>
                </div>
                <button className={styles.btn}>Vedi disponibilità</button>
              </div>
            </div>
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
