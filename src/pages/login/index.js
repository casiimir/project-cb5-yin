
import styles from "../../styles/login.module.scss";
import { useContext, useState } from 'react';
import AppContext from "@/store/context";
import { cases } from "@/store/reducers";
import Link from "next/link";


export default function Login () {

    const {dispatch} = useContext(AppContext)
    const [user, setUser] = useState("")
    const [password, setPassword]= useState("")
    
    const onHandleSubmit= (e) => {
        e.preventDefault();

        dispatch({type: cases.SET_AUTH, payload: { status: true, username: user}})
        console.log(user)
    }


    return (
      <div className={styles.login}>
        <img
          className={styles.logo}
          width="150px"
          src="/bookyn_color.svg"
          alt="Bookyn Logo"
        />
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(() => e.target.value)}
            placeholder="Inserisci il tuo nome"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(() => e.target.value)}
            placeholder="Inserisci una password"
            required
          />
          <input type="submit" value="Login" />
          <Link href={"/"}>Vai a home</Link>
        </form>
      </div>
    );



}