import styles from "./index.module.scss";
import { datedifference } from "@/utils/utils";

const BookingDetails = ({ results, check_in, check_out }) => {
  const numOfDays = datedifference(check_in, check_out);
  return (
    <div className={styles.BookingDetails}>
      <h4>I tuoi dati di soggiorno</h4>
      <div className={styles.wrapper}>
        <div className={styles.checkIn}>
          <p>Check-in</p>
          <h4>{check_in ? check_in : "Seleziona Data"}</h4>
          <p>
            {results?.checkin.from} - {results?.checkin.to}
          </p>
        </div>

        <div className={styles.checkOut}>
          <p>Check-out</p>
          <h4>{check_out ? check_out : "Seleziona Data"}</h4>
          <p>
            {results?.checkout.from} - {results?.checkout.to}
          </p>
        </div>
      </div>

      <div className={styles.stay}>
        <p>Durata soggiorno:</p>
        {!!numOfDays && <h4>{numOfDays} notti</h4>}
      </div>
    </div>
  );
};

export default BookingDetails;
