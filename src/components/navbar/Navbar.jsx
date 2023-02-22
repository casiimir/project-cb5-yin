import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

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
        <Link href={"/about"}>
          <li>
            <Image
              className={styles.svg}
              src="/team.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
            <p>About Us</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
