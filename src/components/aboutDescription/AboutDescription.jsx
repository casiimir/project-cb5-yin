import styles from "./index.module.scss";
import WorkTeam from "../workTeam";
const AboutDescription = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Casimiro's Team</h1>
          <p>the best Booking.com clone</p>
        </div>

        <div className={styles.miniDescription}>
          <h2>Titolo descrizione</h2>
          <p>breve descrizione del progetto</p>
        </div>
        <div className={styles.titleTeam}>
          <h2>Titolo Team</h2>
          <p>Presentazione del team</p>
        </div>
        <div className={styles.teamImage}>
          <WorkTeam />
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
