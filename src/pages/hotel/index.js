import MainLayout from "@/layout/mainLayout";
import { hotel } from "@/mocks/hotelPageMock";
import {GET} from "../../utils/http";
import { useEffect } from "react";



/* useEffect(() => {
  GET(`hotels/locations?locale=it&name=${location}`).then((res) => {
    
    if (Array.isArray(res)) {
      console.log(res);
      setData(res);
    }
  });
},[]) */


function Hotel() {
  
  
  return (
    <MainLayout>
      <div>{hotel.name}</div>;
    </MainLayout>
  );
}


// BISOGNERà USARE GETSERVERSIDEPROPS
/* export async function getStaticProps() {
  const data = await GET('hotels/data?locale=en-gb&hotel_id=1377073')
  return {props:{
    data
  }  }
} */

export default Hotel;


