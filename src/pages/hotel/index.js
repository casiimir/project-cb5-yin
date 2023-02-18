import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import { GET } from "@/utils/http";
import GuestReviews from "@/components/guestReviews";
import HotelDescription from "@/components/hotelDescription/HotelDescription";
import HotelInfo from "@/components/hotelInfo";
import HotelGalleryWrapper from "@/components/HotelGalleryWrapper/HotelGalleryWrapper";

function Hotel() {
  return (
    <MainLayout>
      <div>{hotel.name}</div>
      <HotelDescription />
      <HotelInfo />
      <GuestReviews />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const data = await GET(`hotels/data?locale=en-gb&hotel_id=1377074`);
  return { props: { data } };
}

export default Hotel;
