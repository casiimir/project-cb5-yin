import styles from "./index.module.scss";
import CounterAdulti from "@/components/counterForm/CounterAdulti/CounterAdulti";
import CounterBambini from "@/components/counterForm/CounterBambini/CounterBambini";
import CounterCamere from "@/components/counterForm/CounterCamere/CounterCamere";
import Button from "@/atoms/Button/Button";

const ModalOccupancy = ({ setOpenModal }) => {
  return (
    <div className={styles.ModalOccupancy}>
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
