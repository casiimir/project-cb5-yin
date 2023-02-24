import Link from "next/link";
import styles from "./index.module.scss";
import { useState } from "react";

const SectionOne = () => {
  return (
    <div className={styles.Section}>
      <h2>Le nostre scelte top</h2>
      <div className={styles.section}>
        <div className={styles.div}>
          <img
            src="https://picsum.photos/200"
            alt="img"
            className={styles.img}
          />
          <div className={styles.data}>
            <h4>Vuoi scoprire chi ha creato tutto ciò?</h4>
            <p>Leggi le storie dei web developer</p>
            <Link href={"/about"}>
              <button>Scopri il team</button>
            </Link>
          </div>
        </div>
        <div className={styles.div}>
          <img
            src="https://picsum.photos/200"
            alt="img"
            className={styles.img}
          />
          <div className={styles.data}>
            <h4>Vuoi saperne di più?</h4>
            <p>Leggi le storie del team di professionisti che li ha guidati</p>
            <Link href={"https://edgemony.com/"}>
              <button>Scopri il team</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
