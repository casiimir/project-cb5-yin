import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./index.module.scss";

import { Navigation, Pagination } from "swiper";

function HotelCarousel({ galleryData }) {
  //console.log(galleryData);
  return (
    <div className={styles.HotelCarousel}>
      <Swiper
        className={styles.Swiper}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {galleryData.map((hotel) => {
          return (
            <SwiperSlide key={hotel?.photo_id} className={styles.slideWrapper}>
              <img
                className={styles.slideImg}
                src={hotel.url_max}
                alt={hotel?.ml_tags[0]?.tag_name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HotelCarousel;
