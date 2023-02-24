import StarFilter from "@/components/starFilter/StarFilter";
import { hotels } from "@/mocks/hotels";
import styles from "./index.module.scss";
import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const FilterHotelList = () => {
  const [filterByStars, setFilterByStars] = useState([2, 3, 4]);
  // const [showLeftArrow, setshowLeftArrow] = useState(false);
  // const [showRightArrow, setshowRightArrow] = useState(true);

  const router = useRouter();

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    // if (ref.current.scrollLeft == 0) {
    //   setshowLeftArrow(showLeftArrow);
    //   console.log("ehy");
    // } else {
    //   setshowLeftArrow(!showLeftArrow);
    //   console.log("test");
    // }
    // if (
    //   ref.current.scrollLeft + ref.current.offsetWidth ==
    //   ref.current.scrollWidth
    // ) {
    //   setshowRightArrow(!showRightArrow);
    //   console.log("hey2");
    // } else {
    //   setshowRightArrow(showRightArrow);
    //   console.log("test2");
    // }

    // console.table({
    //   scrollWidth: ref.current.scrollWidth,
    //   offsetWidth: ref.current.offsetWidth,
    //   offsetLeft: ref.current.offsetLeft,
    //   clientWidth: ref.current.clientWidth,
    //   clientLeft: ref.current.clientLeft,
    //   childElementCount: ref.current.childElementCount,
    //   scrollLeft: ref.current.scrollLeft,
    //   scrollOffset: ref.current.scrollOffset,
    // });
  };
  return (
    <div className={styles.HotelList}>
      <h2>Soggiorna in una delle nostre strutture migliori</h2>
      <p>
        Stanze, Ville, Chalet... persino Castelli! Scopri i nostri migliori
        alloggi.
      </p>
      <StarFilter
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
                <img
                  src={elem.entrance_photo_url.replace("square60", "square300")}
                  alt="img"
                />
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
