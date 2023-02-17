import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import GuestReviews from "@/components/guestReviews";
import HotelGallery from "@/components/HotelGallery/HotelGallery";
import HotelDescription from "@/components/hotelDescription/HotelDescription";

function Hotel() {
  return (
    <MainLayout>
      <div>{hotel.name}</div>;
      <HotelGallery />
      <HotelDescription />
      <GuestReviews />
    </MainLayout>
  );
}

// export async function getServerSideProps() {

//   const data= await GET(`hotels/data?locale=en-gb&hotel_id=1377074`)

//   return { props: { data } }
// }

export default Hotel;
