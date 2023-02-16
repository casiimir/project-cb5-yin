import styles from "./index.module.scss";
import CounterAdulti from "../../counter/counterForm/CounterAdulti";
import CounterBambini from "../../counter/counterForm/CounterBambini";
import CounterCamere from "../../counter/counterForm/CounterCamere";
import Button from "@/atoms/Button/Button";

const ModalOccupancy = ({ setOpenModal }) => {
  return (
    <div className={styles.ModalOccupancy}>
      <div
        className={styles.overlay}
        onClick={() => {
          setOpenModal(false);
        }}
      ></div>
      <div className={styles.modalRow}>
        <label>Adulti</label>
        <div>
          <CounterAdulti />
        </div>
      </div>
      <div className={styles.modalRow}>
        <label>Bambini</label>
        <div>
          <CounterBambini />
        </div>
      </div>
      <div className={styles.modalRow}>
        <label>Camere</label>
        <div>
          <CounterCamere />
        </div>
      </div>
      <div>
        <Button type="outline" content="Fatto" />
      </div>
    </div>
  );
};

export default ModalOccupancy;
