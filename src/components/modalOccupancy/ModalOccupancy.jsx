import { useState, useEffect } from "react";
import CounterAdulti from "@/components/counterForm/CounterAdulti/CounterAdulti";
import CounterBambini from "@/components/counterForm/CounterBambini/CounterBambini";
import CounterCamere from "@/components/counterForm/CounterCamere/CounterCamere";
import Button from "@/atoms/Button/Button";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

const ModalOccupancy = ({ setOpenModal }) => {
  const [modalType, setModalType] = useState("home");
  const router = useRouter();

  useEffect(() => {
    setModalType(router.pathname == "/" ? "home" : "search");
  }, [router.isReady]);

  return (
    <div
      className={
        modalType == "home"
          ? `${styles.ModalOccupancy}`
          : `${styles.ModalOccupancy} ${styles.modalOccupancyOther}`
      }
    >
      <div
        className={styles.modalOverlay}
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalRow}>
          <label>Adulti</label>
          <div className={styles.modalCounter}>
            <CounterAdulti />
          </div>
        </div>
        <div className={styles.modalRow}>
          <label>Bambini</label>
          <div className={styles.modalCounter}>
            <CounterBambini />
          </div>
        </div>
        <div className={styles.modalRow}>
          <label>Camere</label>
          <div className={styles.modalCounter}>
            <CounterCamere />
          </div>
        </div>
        <div className={styles.modalInput}>
          <Button
            type="submit"
            style="outline"
            content="Fatto"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalOccupancy;
