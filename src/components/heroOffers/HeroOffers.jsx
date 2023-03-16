import Link from "next/link";
import styles from "./index.module.scss";
import Button from "@/atoms/Button/Button";

const HeroOffers = () => {
  return (
    <div className={styles.main}>
      <div>
        <h2>Offerte</h2>
        <p>Promozioni, offerte e altri sconti speciali per te</p>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o="
            alt="img"
            className={styles.img}
          />
          <div className={styles.content}>
            <h4>Prenditi un po' di tempo per te</h4>
            <p>Scegli la libertà di un soggiorno mensile con Booking.com</p>
            <Link href={"http://localhost:3000/search?dest_id=-123798"}>
              <Button
                style="outline"
                content={"Scopri il tuo alloggio ideale"}
                href={"http://localhost:3000/search?dest_id=-123798"}
              />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o="
            alt="img"
            className={styles.img}
          />
          <div className={styles.content}>
            <h4>Anno nuovo, avventure nuove</h4>
            <p>Risparmia se prenoti e soggiorni prima del 31 marzo 2023</p>
            <Link href={"/search?dest_id=-123798"}>
              {" "}
              <Button
                style="outline"
                content={"Scopri le ultime offerte"}
                href={"/search?dest_id=-123798"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOffers;
