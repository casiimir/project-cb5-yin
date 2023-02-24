import styles from "./index.module.scss";

const FormReservation = ({ setShowCheckoutModal }) => {
  let audio;
  if (typeof audio != "undefined") {
    audio = new Audio("/SuperMarioBros.mp3");
  }
  const start = () => {
    if (audio) return audio?.play();
    return undefined;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.Form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.Top}>
        <h3>Inserisci le tue informazioni</h3>
        <p>*campi obbligatori</p>
      </div>

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

        <h4>I tuoi recapiti</h4>
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
      <button
        className={styles.ReserveNow}
        onClick={() => {
          setShowCheckoutModal(true);
          start();
        }}
      >
        Prenota subito
      </button>
    </div>
  );
};

export default FormReservation;
