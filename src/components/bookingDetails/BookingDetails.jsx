import styles from "./index.module.scss";

const BookingDetails = ({ results }) => {
  return (
    <div className={styles.BookingDetails}>
      <h3>I tuoi dati di soggiorno</h3>
      <div className={styles.wrapper}>
        <div className={styles.checkIn}>
          <p>Check-in</p>
          <h6> DATA-search </h6>
          <p>
            {results.checkin.from}-{results.checkin.to}
          </p>
        </div>

        <div className={styles.checkOut}>
          <p>Check-out</p>
          <h6> DATA-search </h6>
          <p>
            {results.checkout.from}-{results.checkout.to}
          </p>
        </div>
      </div>

      <div className={styles.stay}>
        <p>Durata soggiorno</p>
        <h6> n. notti search</h6>
      </div>
    </div>
  );
};

export default BookingDetails;
