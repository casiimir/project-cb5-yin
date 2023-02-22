import { useContext, useState } from "react";
import AppContext from "@/store/context";
import { cases } from "@/store/reducers";
import { useRouter } from "next/router";
import { wait } from "@/utils/utils";
import styles from "./index.module.scss";

const LoginForm = ({ setLoading }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { dispatch } = useContext(AppContext);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: cases.SET_AUTH,
      payload: { status: true, username: user },
    });

    wait(() => {
      setLoading(false);
    }, 5000);

    router.push("/");
  };

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
        <h2>Accedi</h2>
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
    </div>
  );
};

export default LoginForm;
