import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import GuestReviews from "@/components/guestReviews";
import { useRouter } from "next/router";
import HotelList from "@/components/HotelList";
import HotelDescription from "@/components/hotelDescription/HotelDescription";
import HotelInfo from "@/components/hotelInfo";
import AddressHotel from "@/components/addressHotel/AddressHotel";
import { wait } from "@/utils/utils";
import Loader from "@/atoms/Loader/Loader";
import FormSearchPages from "@/components/formSearchPages";
import HotelGallery from "@/components/HotelGallery/HotelGallery";
import styles from "@/styles/Hotel.module.scss";
import HotelCarousel from "@/components/hotelgalleryCarousel/HotelCarousel";
import HotelFacilities from "@/components/hotelFacilities/hotelFacilities";

function Hotel({ galleryData, descriptionData, dataHotelReview }) {
  //const [dataHotelReview, setDataHotelReview] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { pid } = router.query;

  //------Description---------//
  //GET 1 --> DESCRIPTION HOTEL
  //GET 2 --> REVIEW HOTEL
  //GET 3 --> REVIEW USER
  //GET 4 --> POSITION HOTEL

  useEffect(() => {
    if (router.isReady) {
      /*  GET(`hotels/description?hotel_id=${pid}&locale=it`)
        .then((res) => {
          console.log(res);
          setdescriptionData(res);
        })
        .catch((error) => console.log(error));
 */
      //wait(1000);

      /* GET(`hotels/data?locale=it&hotel_id=${pid}`)
        .then((response) => {
          setDataHotelReview(response);
        })
        .catch((error) => console.log(error)); */

      //wait(1000);

      GET(
        `hotels/reviews?hotel_id=${pid}&locale=it&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=it%2Cde%2Cfr`
      )
        .then((response) => {
          setReviewData(response.result);
        })
        .catch((error) => console.log(error));

      //wait(1000);

      /* GET(`hotels/photos?hotel_id=${pid}&locale=it`)
        .then((res) => setGalleryData(res))
        .catch((error) => console.log(error)); */

      // GET(`hotels/map-markers?locale=it&hotel_id=${pid}`).then((response) =>
      //   setPositionData(response)
      // );

      setLoading(false);
    }
  }, [router.isReady]);

  return (
    <MainLayout>
      <div className={styles.main}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <AddressHotel dataHotelReview={dataHotelReview} />
              <div className={styles.SearchAndGalleryWrapper}>
                <FormSearchPages />
                {galleryData && (
                  <div>
                    <HotelCarousel galleryData={galleryData} />
                    <HotelGallery
                      galleryData={galleryData}
                      //setGalleryData={setGalleryData}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              {descriptionData && (
                <HotelDescription descriptionData={descriptionData} />
              )}
              <HotelInfo />
            </div>
            <GuestReviews
              reviewData={reviewData}
              dataHotelReview={dataHotelReview}
            />
            <HotelFacilities dataHotelReview={dataHotelReview} />
            <h2>
              Chi ha guardato{` ${dataHotelReview?.name}`} ha guardato anche
              queste strutture
            </h2>
            <HotelList dataHotelReview={dataHotelReview} />
          </>
        )}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.params;
  //gallery
  const galleryData = await GET(
    `hotels/photos?hotel_id=${pid}&locale=it`
  ).catch((error) => console.log(error));

  const descriptionData = await GET(
    `hotels/description?hotel_id=${pid}&locale=it`
  ).catch((error) => console.log(error));

  const dataHotelReview = await GET(
    `hotels/data?locale=it&hotel_id=${pid}`
  ).catch((error) => console.log(error));

  return { props: { galleryData, descriptionData, dataHotelReview } };
}

export default Hotel;
