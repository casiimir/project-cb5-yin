import styles from "./index.module.scss";

const BookingDetails = ({ results }) => {
  return (
    <div className={styles.BookingDetails}>
      <h3>I tuoi dati di soggiorno</h3>
      <div className={styles.wrapper}>
        <div className={styles.checkIn}>
          <p>Check-in</p>
          <h4>DATA</h4>
          <p>
            {results?.checkin.from} - {results?.checkin.to}
          </p>
        </div>

        <div className={styles.checkOut}>
          <p>Check-out</p>
          <h4>DATA</h4>
          <p>
            {results?.checkout.from} - {results?.checkout.to}
          </p>
        </div>
      </div>

      <div className={styles.stay}>
        <p>Durata soggiorno:</p>
        <h4> n. notti search</h4>
      </div>
    </div>
  );
};

export default BookingDetails;
