import Link from "next/link";
import styles from "./index.module.scss";

const HotelReserve = ({ pid }) => {
  return (
    <div className={styles.HotelReserve}>
      <Link href={`/reservation/${pid}`}>
        <button>Prenota ora</button>
      </Link>
    </div>
  );
};

export default HotelReserve;
