import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.blue}>
        <div className={styles.description}>
          <h2>Risparmia tempo e denaro!</h2>
          <h3>Iscriviti e ti invieremo le migliori offerte</h3>
        </div>
        <form className={styles.form}>
          <input
            className={styles.mail}
            type="email"
            placeholder="Il tuo indirizzo mail"
          />
          <input className={styles.submit} type="submit" value="Iscriviti" />
        </form>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 1996–2023 Booking.com™. Tutti i diritti riservati.</p>
        <p>
          Booking.com è parte di Booking Holdings Inc., leader mondiale nel
          settore dei viaggi online e relativi servizi.
        </p>
      </div>
      <div className={styles.logos}>
        <img className={styles.logo} width="130px" src="/booking.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
