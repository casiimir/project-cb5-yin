import styles from "./index.module.scss";

const HeroBanner = () => {
  return (
    <div className={styles.HeroBanner}>
      <div className={styles.wrapperHeroBanner}>
        <h1>Trova l'alloggio che fa per te</h1>
        <h3>Cerca offerte su hotel, case e tanto altro...</h3>
      </div>
    </div>
  );
};

export default HeroBanner;
