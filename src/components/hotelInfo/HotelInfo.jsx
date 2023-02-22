import Link from "next/link";
import styles from "./index.module.scss";

const HotelInfo = ({ pid }) => {
  return (
    <div className={styles.Info}>
      <h4>Qualità della struttura</h4>
      <p>Informazioni sulla colazione</p>
      <p>continentale, senza glutine, a buffet</p>
      <Link href={`/reservation/${pid}`}>
        <button className={styles.reserveBtn}>Prenota Adesso</button>
      </Link>
      <p>
        Se effettui l'accesso, hai diritto a sconti esclusivi per gli iscritti
      </p>
    </div>
  );
};

export default HotelInfo;
