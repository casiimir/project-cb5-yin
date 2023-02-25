import { GET } from "../../utils/http";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

import FormSearch from "@/components/formSearch/FormSearch";
import HotelReviews from "@/components/hotelReviews/HotelReviews";
import HotelHeader from "@/components/hotelHeader/HotelHeader";
import HotelCarousel from "@/components/hotelCarousel/HotelCarousel";
import HotelDescription from "@/components/hotelDescription/HotelDescription";
import HotelGallery from "./../../components/HotelGallery/HotelGallery";
import HotelSimilarCard from "@/components/hotelSimilarCard/HotelSimilarCard";

import Loader from "@/atoms/Loader/Loader";
import MainLayout from "@/layout/mainLayout/MainLayout";
import Head from "next/head";

import styles from "./../../styles/Hotel.module.scss";
import AppContext from "@/store/context";

function Hotel({ galleryData, descriptionData, dataHotelReview }) {
  const { state } = useContext(AppContext);
  const [reviewData, setReviewData] = useState([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { pid } = router.query;

  const additionalstr =
    state.check_in && state.check_out
      ? `?check_in=${state.check_in}&check_out=${state.check_out}`
      : null;

  useEffect(() => {
    if (router.isReady) {
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
    <>
      <Head>
        <title>Booking | The best Booking clone built with NextJS</title>
        <meta
          name="description"
          content="Booking | The best Booking clone built with NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <MainLayout>
        <div className={styles.Hotel}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className={styles.columnWrapper}>
                <div className={styles.columnRight}>
                  <div>
                    <HotelHeader dataHotelReview={dataHotelReview} />
                    <div className={styles.SearchAndGalleryWrapper}>
                      {galleryData && (
                        <div>
                          <HotelCarousel galleryData={galleryData} />
                          <HotelGallery galleryData={galleryData} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {descriptionData && (
                      <HotelDescription descriptionData={descriptionData} />
                    )}
                  </div>
                </div>
                <div className={styles.columnLeft}>
                  <FormSearch />
                </div>
              </div>
              <HotelReviews
                reviewData={reviewData}
                dataHotelReview={dataHotelReview}
              />
              {/*<HotelFacilities dataHotelReview={dataHotelReview} />*/}
              <HotelSimilarCard dataHotelReview={dataHotelReview} />
            </>
          )}
        </div>
      </MainLayout>
    </>
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
