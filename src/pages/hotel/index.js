import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import GuestReviews from "@/components/guestReviews";

function Hotel() {
  return (
    <MainLayout>
      <div>{hotel.name}</div>;
      <GuestReviews />
    </MainLayout>
  );
}

// export async function getServerSideProps() {

//   const data= await GET(`hotels/data?locale=en-gb&hotel_id=1377074`)

//   return { props: { data } }
// }

export default Hotel;
