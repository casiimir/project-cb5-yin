import styles from "./index.module.scss";
import CounterAdulti from "../../counter/counterA";
import CounterBambini from "../../counter/counterB";
import CounterCamere from "../../counter/counterC";
import { useState } from "react";

const ModalPersonRoom = ({ setOpenModal, setCount }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <div>
            Adulti <CounterAdulti setCount={setCount} />
            Bambini <CounterBambini />
            Camere <CounterCamere />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonRoom;
