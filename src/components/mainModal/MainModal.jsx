import AppContext from "@/store/context";
import React, { useContext } from "react";
import styles from "./index.module.scss";
import { cases } from "@/store/reducers";
import Button from "@/atoms/Button/Button";
import { FiX } from "react-icons/fi";

function MainModal({ children }) {
  const { dispatch } = useContext(AppContext);
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
          <Button
            style="icon"
            content={<FiX />}
            onClick={() =>
              dispatch({
                type: cases.TOGGLE_MODAL,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MainModal;
