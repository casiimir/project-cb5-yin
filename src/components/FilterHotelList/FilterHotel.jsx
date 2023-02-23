import Filters from "../filters";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const FilterHotelList = () => {
  const [filterByStars, setFilterByStars] = useState([2, 3, 4]);
  const router = useRouter();

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={styles.HotelList}>
      <h2>Soggiorna in una delle nostre strutture migliori</h2>
      <p>
        Stanze, Ville, Chalet... persino Castelli! Scopri i nostri migliori
        alloggi.
      </p>
      <Filters
        filterByStars={filterByStars}
        setFilterByStars={setFilterByStars}
      />
      <div className={styles.container}>
        <div className={styles.hotelContainer} ref={ref}>
          {hotels.map((elem, index) => {
            if (!filterByStars.includes(elem.class)) return undefined;
            return (
              <div
                key={index}
                className={styles.cardHotel}
                onClick={() => {
                  router.push(`/hotel/${elem.hotel_id}`);
                }}
              >
                <img src={elem.entrance_photo_url} alt="img" />
                <h3>{elem.name}</h3>
                <p>
                  {elem.country}, {elem.city}
                </p>
                <div className={styles.scoreContainer}>
                  <h6 className={styles.score}>{elem.review_score}</h6>
                  <p className={styles.review}> xxx recensioni</p>
                </div>
              </div>
            );
          })}
          <button onClick={() => scroll(-340)} className={styles.arrowLeft}>
            <Image
              className={styles.svg}
              src="/arrowleft.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
          </button>
          <button onClick={() => scroll(340)} className={styles.arrowRight}>
            <Image
              className={styles.svg}
              src="/arrowright.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterHotelList;
