import AppContext from "@/store/context";
import React, { useContext } from "react";
import styles from "./index.module.scss";
import { cases } from "@/store/reducers";
import Button from "@/atoms/Button/Button";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/router";

function MainModal({ children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className={styles.Modal}>
      <div
        className={styles.Overlay}
        onClick={() => {
          dispatch({ type: cases.TOGGLE_MODAL });
        }}
      ></div>
      <div className={`${styles.Content} ${styles.Open}`}>
        <div className={styles.Top}>
          {state.auth.username && (
            <div className={styles.Username}>Ciao, {state.auth.username}</div>
          )}
          <Button
            style="operation"
            content={<FiX />}
            onClick={() =>
              dispatch({
                type: cases.TOGGLE_MODAL,
              })
            }
          />
        </div>
        <div className={styles.authContainer}>
          <Button
            style="outline"
            content={"Iscriviti"}
            onClick={() => {
              dispatch({ type: cases.TOGGLE_MODAL });
              router.push("/login");
            }}
          />
          {!!state.auth.username ? (
            <Button
              style="outline"
              content={"Logout"}
              onClick={() => {
                dispatch({ type: cases.TOGGLE_MODAL });
                dispatch({ type: cases.LOGOUT });
              }}
            />
          ) : (
            <Button
              style="outline"
              content={"Login"}
              onClick={() => {
                dispatch({ type: cases.TOGGLE_MODAL });
                router.push("/login");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainModal;
