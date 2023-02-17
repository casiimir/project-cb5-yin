import Image from "next/image";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss"



const HotelList = ({dataHotelReview}) => {


    return(
       
        <div className={styles.container}>

        <h2>Chi ha guardato{` ${dataHotelReview?.name}` } ha guardato anche queste strutture</h2> 
        
        <div className={styles.hotelContainer}>
          {hotels.map((elem) => {
            return (
              <div className={styles.cardHotel}>
                <img src={elem.entrance_photo_url} alt="img" />
                <h3>{elem.name}</h3>
                    <div className={styles.wrapper}>
                        <p className={styles.score}>{elem.review_score}</p>
                        <p className={styles.vote}>{elem.review_score_word}</p>
                    </div>
                <div className={styles.scoreContainer}>
        
                </div>
                <button className={styles.btn}>Vedi disponibilità</button>
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
