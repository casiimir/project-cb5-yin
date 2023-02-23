import React from "react";
import styles from "./index.module.scss";
import { MetaPropertiesDescription } from "../../mocks/metaPropertiesDescription";

function HotelFacilities({ dataHotelReview }) {
  const data_HotelFacilityType_id = dataHotelReview.hotel_facilities;
  let hotelFacilityType_id = [];
  hotelFacilityType_id = data_HotelFacilityType_id.split(",");

  const hotel_facilityKeys = Object.keys(
    MetaPropertiesDescription.hotel_facility
  );
  const hotel_facilityValues = Object.values(
    MetaPropertiesDescription.hotel_facility
  );

  let objectMocks = [];
  hotel_facilityKeys.map((res, index) =>
    objectMocks.push({
      id: res,
      value: hotel_facilityValues[index],
    })
  );

  let objectFacility = [];
  hotelFacilityType_id.map((res) => {
    objectMocks.map((ress) => {
      if (res == ress.id) {
        return objectFacility.push({
          id: ress.id,
          value: ress.value,
        });
      }
    });
  });

  return (
    <div>
      HotelFacilities
      <div className={styles.main}>
        <div className={styles.container}>
          {objectFacility.map((res) => (
            <div className={styles.valueFacility}>
              <h6>{res.value}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelFacilities;
