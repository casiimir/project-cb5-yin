import React, { useState } from "react";
import styles from "./index.module.scss";

function HotelCarousel({ galleryData }) {
  return (
    <div className={styles.HotelCarousel}>
      <div className={styles.CarouselImgWrapper}>
        <img
          className={styles.CarouselImg}
          src={galleryData[0].url_max}
          alt=""
        />
      </div>
    </div>
  );
}

export default HotelCarousel;
