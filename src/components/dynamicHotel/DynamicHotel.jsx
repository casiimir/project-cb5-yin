import HotelDescription from "../hotelDescription/HotelDescription";
import HotelInfo from "../hotelInfo";
import styles from "./index.module.scss";

const DynamicHotel = () => {
  return (
    <div className={styles.HotelInfo}>
      <HotelDescription />
      <HotelInfo />
    </div>
  );
};

export default DynamicHotel;
