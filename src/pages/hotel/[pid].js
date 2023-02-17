import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import GuestReviews from "@/components/guestReviews";
import { useRouter } from "next/router";
import HotelList from "@/components/HotelList";
import HotelDescription from "@/components/hotelDescription/HotelDescription";
import HotelInfo from "@/components/hotelInfo";

function Hotel() {
  const [dataHotelReview, setDataHotelReview] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [descriptionData, setdescriptionData] = useState([]);
  const router = useRouter();
  const { pid } = router.query;

  //------Description---------//
  //GET 1 --> DESCRIPTION HOTEL
  //GET 2 --> REVIEW HOTEL
  //GET 3 --> REVIEW USER

  useEffect(() => {
    if (router.isReady === true)
      GET(`hotels/description?hotel_id=${pid}&locale=it`).then((res) =>
        setdescriptionData(res)
      );
    GET(`hotels/data?locale=it&hotel_id=${pid}`).then((response) =>
      setDataHotelReview(response)
    );
    GET(
      `hotels/reviews?hotel_id=${pid}&locale=it&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=it%2Cde%2Cfr`
    ).then((response) => setReviewData(response.result));
  }, [router.isReady]);

  return (
    <MainLayout>
      <div>{hotel.name}</div>;
      <div>
        <HotelDescription descriptionData={descriptionData} />
        <HotelInfo />
      </div>
      <GuestReviews reviewData={reviewData} dataHotelReview={dataHotelReview} />
      <HotelList />
    </MainLayout>
  );
}

/* export async function getServerSideProps() {

  const data= await GET(`hotels/data?locale=en-gb&hotel_id=1377074`)

  return { props: { data } }
} */

export default Hotel;
