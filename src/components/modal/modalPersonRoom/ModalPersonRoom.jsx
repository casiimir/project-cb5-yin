import styles from "./index.module.scss";
import CounterAdulti from "../../counter/counterA";

import { useState } from "react";

const ModalPersonRoom = ({ setOpenModal, count }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.closeBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
          <div>
            Adulti <CounterAdulti />
            Bambini <CounterAdulti />
            Camere <CounterAdulti />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPersonRoom;
