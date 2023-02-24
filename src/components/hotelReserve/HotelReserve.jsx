import Link from "next/link";
import styles from "./index.module.scss";

const HotelReserve = ({ pid, additionalstr }) => {
  const linktoReservation = additionalstr
    ? `/reservation/${pid}${additionalstr}`
    : `/reservation/${pid}`;
  return (
    <div className={styles.HotelReserve}>
      <Link href={linktoReservation}>
        <button>Prenota ora</button>
      </Link>
    </div>
  );
};

export default HotelReserve;
