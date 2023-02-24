import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
const Navbar = () => {
  const { pathname, query } = useRouter();

  let randomValue = Math.floor(Math.random() * (1377074 - 1377071)) + 1377071;
  const [random, setRandom] = useState(randomValue);

  const onHandleRandom = () => {
    setRandom(randomValue);
  };

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
            <p>Soggiorni</p>
          </li>
        </Link>
        <Link href={`/hotel/${random}?mi_sento_fortunato=true`}>
          <li
            className={query.mi_sento_fortunato ? `${styles.active}` : ""}
            onClick={onHandleRandom}
          >
            <Image
              className={styles.svg}
              src="/attrazioni.svg"
              alt=""
              width={20}
              height={20}
              priority
            />
            <p>Mi sento fortunato</p>
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
