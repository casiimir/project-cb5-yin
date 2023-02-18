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
import HotelGalleryWrapper from "@/components/HotelGalleryWrapper/HotelGalleryWrapper";
import styles from "@/styles/Hotel.module.scss";

function Hotel() {
  const [dataHotelReview, setDataHotelReview] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [descriptionData, setdescriptionData] = useState([]);
  const [positionData, setPositionData] = useState([]);
  const router = useRouter();
  const { pid } = router.query;

  const [loading, setLoading] = useState(true);

  //------Description---------//
  //GET 1 --> DESCRIPTION HOTEL
  //GET 2 --> REVIEW HOTEL
  //GET 3 --> REVIEW USER
  //GET 4 --> POSITION HOTEL

  useEffect(() => {
    if (router.isReady === true) {
      GET(`hotels/description?hotel_id=${pid}&locale=it`)
        .then((res) => {
          console.log(res);
          setdescriptionData(res);
        })
        .catch((error) => console.log(error));

      wait();

      GET(`hotels/data?locale=it&hotel_id=${pid}`)
        .then((response) => {
          setDataHotelReview(response);
        })
        .catch((error) => console.log(error));

      wait();

      GET(
        `hotels/reviews?hotel_id=${pid}&locale=it&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=it%2Cde%2Cfr`
      )
        .then((response) => {
          setReviewData(response.result);
        })
        .catch((error) => console.log(error));

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
                {/* componenti search e gallery */}

                <HotelGalleryWrapper />
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
            <HotelList dataHotelReview={dataHotelReview} />
          </>
        )}
      </div>
    </MainLayout>
  );
}

/* export async function getServerSideProps() {

  const data= await GET(`hotels/data?locale=en-gb&hotel_id=1377074`)

  return { props: { data } }
} */

export default Hotel;
