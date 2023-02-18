import React from "react";
import HotelCarousel from "../hotelgalleryCarousel/HotelCarousel";
import HotelGallery from "../HotelGallery/HotelGallery";
import { useState, useEffect } from "react";
import { GET } from "@/utils/http";

function HotelGalleryWrapper() {
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    GET("hotels/photos?hotel_id=1377073&locale=it").then((res) =>
      setGalleryData(res)
    );
  }, []);
  if (!galleryData) return <div>Loading...</div>;
  return (
    <div>
      <HotelCarousel galleryData={galleryData} />
      <HotelGallery galleryData={galleryData} setGalleryData={setGalleryData} />
    </div>
  );
}

export default HotelGalleryWrapper;
