import styles from "./index.module.scss";
import CounterAdulti from "../../counter/counterForm/CounterAdulti";
import CounterBambini from "../../counter/counterForm/CounterBambini";
import CounterCamere from "../../counter/counterForm/CounterCamere";
import { useState } from "react";

const ModalPersonRoom = ({ setOpenModal, count }) => {
  return (
    <div className={styles.modalBackground}>
      <button
        className={styles.modalFormBtn}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        ❌
      </button>
      <div className={styles.modalContainer}>
        <div className={styles.closeBtn}>
          <div className={styles.modelForm}>
            <li>
              Adulti <CounterAdulti />
            </li>
            <li>
              Bambini <CounterBambini />
            </li>
            <li>
              Camere <CounterCamere />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonRoom;
