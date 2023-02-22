import { useState } from "react";

import styles from "./index.module.scss";

const RegistrationForm = (onHandleSubmit) => {
  const [regUser, setRegUser] = useState("");
  const [passRegistration, setPassRegistration] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className={styles.login}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          onHandleSubmit(e);
        }}
      >
        <img
          className={styles.logo}
          width="150px"
          src="/bookyn_color.svg"
          alt="Bookyn Logo"
        />
        <h2>Crea un account</h2>
        <label className={styles.user}>
          <h4>User</h4>
          <input
            type="text"
            value={regUser}
            onChange={(e) => setRegUser(() => e.target.value)}
            placeholder="Inserisci il tuo nome"
            required
          />
        </label>
        <label className={styles.user}>
          <h4>Password</h4>
          <input
            type="password"
            value={passRegistration}
            onChange={(e) => setPassRegistration(() => e.target.value)}
            placeholder="Inserisci una password"
            required
          />
        </label>
        <label className={styles.user}>
          <h4>Conferma password</h4>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(() => e.target.value)}
            placeholder="Inserisci una password"
            required
          />
        </label>
        <input type="submit" value="Registrati" />
      </form>
    </div>
  );
};

export default RegistrationForm;
