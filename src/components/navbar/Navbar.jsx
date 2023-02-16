import styles from "./index.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li className={styles.active}>
          <Image
            className={styles.svg}
            src="/soggiorni.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
          <a href="/">Soggiorni</a>
        </li>
        <li>
          <Image
            className={styles.svg}
            src="/noleggioauto.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
          <a href="/">Noleggio Auto</a>
        </li>
        <li>
          <Image
            className={styles.svg}
            src="/attrazioni.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
          <a href="/">Attrazioni</a>
        </li>
        <li>
          <Image
            className={styles.svg}
            src="/team.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
          <a href="/">About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
