import { useState } from "react";
import styles from "./index.module.scss";

const RegistrationForm = ({ setToggle, setAuthMessage }) => {
  const [regUser, setRegUser] = useState("");
  const [passRegistration, setPassRegistration] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    if (confirmPass === passRegistration && passRegistration.length > 7) {
      setToggle("Login");
      setAuthMessage("Utente Registrato con successo");
    } else {
      confirmPass === passRegistration
        ? setError({ state: true, message: "Password troppo corta" })
        : setError({ state: true, message: "Le password sono diverse" });
    }
  };

  return (
    <div className={styles.signup}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSignUp(e);
        }}
      >
        <h2>Crea un account</h2>
        <label className={styles.user}>
          <h4>User</h4>
          <input
            type="text"
            value={regUser}
            onChange={(e) => setRegUser(e.target.value)}
            placeholder="Inserisci il tuo nome"
            required
          />
        </label>
        <label className={styles.user}>
          <h4>Password</h4>
          <input
            className={error.state && `${styles.error}`}
            type="password"
            value={passRegistration}
            onChange={(e) => setPassRegistration(e.target.value)}
            placeholder="Inserisci una password"
            required
          />
        </label>
        <label className={styles.user}>
          <h4>Conferma password</h4>
          <input
            className={error.state && `${styles.error}`}
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Inserisci una password"
            required
          />
        </label>
        <input type="submit" value="Registrati" />
      </form>
      <div className={styles.errorMessage}>
        {error.state && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;
