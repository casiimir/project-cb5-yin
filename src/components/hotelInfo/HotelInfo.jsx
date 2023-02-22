import Link from "next/link";
import styles from "./index.module.scss";

const HotelInfo = ({ pid }) => {
  return (
    <div className={styles.Info}>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium
      </p>
      <Link href={`/reservation/${pid}`}>
        <button className={styles.reserveBtn}>Prenota Adesso</button>
      </Link>
    </div>
  );
};

export default HotelInfo;
