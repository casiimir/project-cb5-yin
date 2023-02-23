import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.Navbar}>
      <ul>
        <Link href={"/"}>
          <li className={pathname === "/" ? `${styles.active}` : ""}>
            <Image
              className={styles.svg}
              src="/soggiorni.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
            <p>Home</p>
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <Image
              className={styles.svg}
              src="/noleggioauto.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
            <p>Noleggio Auto</p>
          </li>
        </Link>
        <Link href={"/yournexttrip"}>
          <li
            className={pathname === "/yournexttrip" ? `${styles.active}` : ""}
          >
            <Image
              className={styles.svg}
              src="/heart.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
            <p>Preferiti</p>
          </li>
        </Link>
        <Link href={"/about"}>
          <li className={pathname === "/about" ? `${styles.active}` : ""}>
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
