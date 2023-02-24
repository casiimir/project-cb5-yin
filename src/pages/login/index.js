import { useState } from "react";
import Loader from "@/atoms/Loader/Loader";
import LoginForm from "@/components/loginForm/LoginForm";
import RegistrationForm from "@/components/registrationForm/RegistrationForm";
import styles from "@/styles/login.module.scss";
import Head from "next/head";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [authMessage, setAuthMessage] = useState("");

  const onHandleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Head>
        <title>Booking | The best Booking clone built with NextJS</title>
        <meta
          name="description"
          content="Booking | The best Booking clone built with NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cf.bstatic.com/static/img/b25logo/favicon/ebc77706da3aae4aee7b05dadf182390f0d26d11.ico"
        />
      </Head>
      <div className={styles.login}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <img
              className={styles.logo}
              width="150px"
              src="/booking.svg"
              alt="Bookyn Logo"
            />
            <div className={styles.form}>
              {toggle ? (
                <LoginForm setLoading={setLoading} authMessage={authMessage} />
              ) : (
                <RegistrationForm
                  setToggle={setToggle}
                  setAuthMessage={setAuthMessage}
                />
              )}
              <h5 onClick={onHandleToggle}>
                {toggle
                  ? "Non hai ancora un account? Iscriviti"
                  : "Hai già un account? Accedi"}
              </h5>
            </div>

            <div className={styles.copyright}>
              <p>
                Effettuando l'accesso o creando un account accetti i Termini
                <br />e le Condizioni e l’Informativa sulla Privacy
              </p>
              <p>
                Tutti i diritti riservati.
                <br />
                Copyright (1996 – 2023) Booking.com™
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
