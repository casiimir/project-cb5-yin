import ModalCheckOut from "@/components/modalCheckOut/ModalCheckOut";
import styles from "./index.module.scss";

const FormReservation = () => {
  return (
    <div className={styles.Form}>
      <h3>Inserisci le tue informazioni</h3>
      <p>*campi obbligatori</p>
      <form className={styles.FormAffari}>
        <label>Viaggi per affari?</label>
        <div className={styles.risposte}>
          <input type="radio" value="si" name="si" /> Si
          <input type="radio" value="no" name="no" /> No
        </div>
      </form>
      <form className={styles.FormReservation}>
        <label>
          Nome *
          <input type="text" placeholder="Es. Mario" required />
        </label>
        <label>
          Cognome *
          <input type="text" placeholder="Es. Rossi" required />
        </label>
        <label>
          Indirizzo e-mail *
          <input type="text" placeholder="Es. mariorossi@gmail.com" required />
        </label>
      </form>
      <form className={styles.recapiti}>
        <p>I tuoi recapiti</p>
        <label>
          Indirizzo *
          <input type="text" required />
        </label>
        <label>
          Città *
          <input type="text" required />
        </label>
        <label>
          Paese
          <select>
            <option value="a">Austria</option>
            <option value="be">Belgio</option>
            <option value="bu">Bulgaria</option>
            <option value="ci">Cipro</option>
            <option value="cr">Croazia</option>
            <option value="da">Danimarca</option>
            <option value="e">Estonia</option>
            <option value="f">Finlandia</option>
            <option value="fr">Francia</option>
            <option value="g">Germania</option>
            <option value="gr">Grecia</option>
            <option value="it" autoFocus={true}>
              Italia
            </option>
            <option value="lt">Lettonia</option>
            <option value="lit">Lituania</option>
            <option value="lus">Lussemburgo</option>
            <option value="ma">Malta</option>
            <option value="pb">Paesi Bassi</option>
            <option value="pol">Polonia</option>
            <option value="por">Portogallo</option>
            <option value="rp">Repubblica Ceca</option>
            <option value="ro">Romania</option>
            <option value="sl">Slovacchia</option>
            <option value="sp">Spagna</option>
            <option value="sv">Svezia</option>
            <option value="u">Ungheria</option>
          </select>
        </label>
        <label>
          Numero di telefono *
          <input type="text" required />
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
