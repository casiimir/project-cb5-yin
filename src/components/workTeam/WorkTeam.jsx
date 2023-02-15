import Image from "next/image";
import styles from "./index.module.scss";
const WorkTeam = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.titleTeam}>
          <h3> Il nostro team </h3>
          <p>
            Ti piace questo progetto? Scopri i professionisti che lo hanno
            realizzato
          </p>
        </div>
        <div className={styles.photos}>
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
          <Image
            src="https://picsum.photos/200/300"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
        <div className={styles.moreInfo}>
          <button type="button">Scopri di più</button>
        </div>
      </div>
    </>
  );
};
export default WorkTeam;
