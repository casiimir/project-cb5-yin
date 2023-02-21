import ModalCheckOut from "../modalCheckOut";
import styles from "./index.module.scss";

const FormReservation = () => {
  return (
    <div className={styles.Form}>
      <h3>Inserisci le tue informazioni</h3>
      <form className={styles.FormAffari}>
        <label>Viaggi per affari?</label>
        <div className={styles.risposte}>
          <input type="radio" value="si" name="si" /> Si
          <input type="radio" value="no" name="si" /> No
        </div>
      </form>
      <form className={styles.FormReservation}>
        <label>
          Il tuo nome:
          <input type="text" placeholder="Es. Mario" />
        </label>
        <label>
          Il tuo cognome:
          <input type="text" placeholder="Es. Rossi" />
        </label>
        <label>
          La tua e-mail:
          <input type="text" placeholder="Es. mariorossi@gmail.com" />
        </label>
      </form>
      <form className={styles.FormPrenotazione}>
        <label>Per chi stai prenotando?</label>
        <div className={styles.risposte}>
          <input type="radio" value="chi" name="chi" /> Per me
          <input type="radio" value="chi" name="chi" />
          Per un'altra persona
        </div>
      </form>
      <div className={styles.ModalCheckOut}>
        <ModalCheckOut />
      </div>
    </div>
  );
};

export default FormReservation;
