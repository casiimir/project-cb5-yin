import styles from "./index.module.scss";

const FormReservation = () => {
  return (
    <div className={styles.Form}>
      <p>Inserisci le tue informazioni</p>
      <form className={styles.FormAffari}>
        <label>Viaggi per affari?</label>
        <input type="radio" value="si" name="si" checked /> Si
        <input type="radio" value="no" name="si" /> No
      </form>
      <form className={styles.FormReservation}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
        <input type="text" placeholder="Email" />
      </form>
      <form className={styles.FormPrenotazione}>
        <label>Per chi stai prenotando?</label>
        <div className={styles.risposte}>
          <input type="radio" value="chi" name="chi" /> Per me
          <input type="radio" value="chi" name="chi" />
          Per un'altra persona
        </div>
      </form>
    </div>
  );
};

export default FormReservation;
