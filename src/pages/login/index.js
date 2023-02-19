import styles from "../../styles/login.module.scss";
import { useContext, useState } from "react";
import AppContext from "@/store/context";
import { cases } from "@/store/reducers";
import { useRouter } from "next/router";
import Loader from "@/atoms/Loader/Loader";
import { wait } from "@/utils/utils";


export default function Login() {
  const { dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    
    dispatch({
      type: cases.SET_AUTH,
      payload: { status: true, username: user },
    });
    
    wait(() => {setLoading(false)},5000) 
    
    router.push("/");
    
  };
  
  return (
    
    <div className={styles.login}>
    {
   
      loading ? <Loader /> : (<>
      <form className={styles.form} onSubmit={(e) =>{setLoading(true) 
      onHandleSubmit(e)}}>
      <img
        className={styles.logo}
        width="150px"
        src="/bookyn_color.svg"
        alt="Bookyn Logo"
      />
      <h2>Accedi o crea un account</h2>
      <label className={styles.user}>
        <h4>User</h4>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(() => e.target.value)}
          placeholder="Inserisci il tuo nome"
          required
        />

      </label>
      <label className={styles.user}>
        <h4>Password</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(() => e.target.value)}
          placeholder="Inserisci una password"
          required
        />
        </label>
        <input type="submit" value="Login" />
      </form>
      <div className={styles.copyright}>
        <p>
          Effettuando l'accesso o creando un account accetti i Termini e le
        <br />
           Condizioni e l’Informativa sulla Privacy
        </p>
        <div className={styles.other}>
        <p className> 
          Tutti i diritti riservati. 
        <br />
          Copyright (1996 – 2023) Booking.com™.</p>

        </div>
        
      </div>

      </>)  }
      
    </div>
  );
}
