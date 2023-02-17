import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import GuestReviews from "@/components/guestReviews";
import { useRouter } from "next/router";

function Hotel() {
  const [dataHotelReview, setDataHotelReview] = useState([])
  const [reviewData, setReviewData]= useState([])
  const router= useRouter()
  const {pid} = router.query;

  useEffect(() => {
    if(router.isReady === true)
    GET(`hotels/data?locale=it&hotel_id=${pid}`)
    .then((response) => setDataHotelReview(response))
  },[router.isReady])


  useEffect(() => {
    if(router.isReady === true)
    GET(`/hotels/reviews?hotel_id=${pid}&locale=it&sort_type=SORT_MOST_RELEVANT&customer_type=solo_traveller%2Creview_category_group_of_friends&language_filter=it%2Cde%2Cfr}`)
    .then((response) => setReviewData(response))
  },[router.isReady])

  
  return (
    <MainLayout>

    <p>{pid}</p>
    {/* {photoData && <img src={photoData[0]?.url_max} alt="siamo cotti"/>} */}
    
      <div>{hotel.name}</div>;
      <GuestReviews reviewData={reviewData} dataHotelReview={dataHotelReview} />
    </MainLayout>
  );
}



/* export async function getServerSideProps() {

  const data= await GET(`hotels/data?locale=en-gb&hotel_id=1377074`)

  return { props: { data } }
} */

export default Hotel;
