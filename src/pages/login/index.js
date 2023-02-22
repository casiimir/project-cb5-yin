import { useState } from "react";
import Loader from "@/atoms/Loader/Loader";
import LoginForm from "./../../components/loginForm/LoginForm";
import RegistrationForm from "./../../components/registrationForm/RegistrationForm";
import styles from "../../styles/login.module.scss";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const onHandleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.login}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {toggle ? (
            <LoginForm setLoading={setLoading} />
          ) : (
            <RegistrationForm />
          )}
          <h6 onClick={onHandleToggle}>{toggle ? "Registrazione" : "Login"}</h6>

          <div className={styles.copyright}>
            <p>
              Effettuando l'accesso o creando un account accetti i Termini e le
              <br />
              Condizioni e l’Informativa sulla Privacy
            </p>
            <div className={styles.other}>
              <p>
                Tutti i diritti riservati.
                <br />
                Copyright (1996 – 2023) Booking.com™.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
