import styles from "./index.module.scss";

const SectionOne = () => {
  return (
    <div className={styles.Section}>
      <h2>Le nostre scelte top</h2>
      <p>Promozioni, offerte e altri sconti speciali per te</p>
      <div className={styles.section}>
        <div className={styles.div}>
          <img src="https://picsum.photos/200" alt="img" />
          <div className={styles.data}>
            <h3>Sed ut perspiciatis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit.</p>
            <button>Scopri gli hotel</button>
          </div>
        </div>
        <div className={styles.div}>
          <img src="https://picsum.photos/200" alt="img" />
          <div className={styles.data}>
            <h3>Sed ut perspiciatis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit.</p>
            <button>Scopri gli hotel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
