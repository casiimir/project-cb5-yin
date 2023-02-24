import styles from "./index.module.scss";
import OurTeam from "../OurTeam/OurTeam";
import Image from "next/image";
import Link from "next/link";

const AboutDescription = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Il nostro progetto</h1>
          <h4>Team Leader</h4>
          <h4>Casimiro Cianciamino</h4>
          <Image
            src={
              "https://media.licdn.com/dms/image/D4D03AQGANqMbwug4Cw/profile-displayphoto-shrink_400_400/0/1672573975735?e=1682553600&v=beta&t=yM7vY-YRTg0fIAvDoA8ui-gjUQFXY1PlKdywVzMGGyw"
            }
            className={styles.imgCasi}
            alt={"img"}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.titleDescription}>
            <h2>Il miglior clone di Booking.com</h2>
          </div>
          <div className={styles.miniDescription}>
            <p>
              <Link
                href={
                  "https://www.booking.com/index.it.html?aid=376372&label=it-5Srxg0e1twJI_ryrey2UnQS267778030990%3Apl%3Ata%3Ap1%3Ap22.563.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1008587%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YVcLb15uXY9drDRMbmnr9EE&sid=fcbb6f8c9ecce2c2826ce0a1d425d833&"
                }
              >
                Booking.com
              </Link>{" "}
              è un'agenzia olandese, con sede ad Amsterdam, di viaggi online,
              permette di prenotare alloggi e servizi aggiuntivi. Ci è stata
              commissionata la realizzazione del clone perfetto del sito web{" "}
              <Link
                href={
                  "https://www.booking.com/index.it.html?aid=376372&label=it-5Srxg0e1twJI_ryrey2UnQS267778030990%3Apl%3Ata%3Ap1%3Ap22.563.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1008587%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YVcLb15uXY9drDRMbmnr9EE&sid=fcbb6f8c9ecce2c2826ce0a1d425d833&"
                }
              >
                Booking.com
              </Link>
              , partendo dall'utilizzo di un'API denominata Booking on Rapid
              API. Questo progetto è l'esame finale del programma di formazione
              e sviluppo delle competenze del Coding Bootcamp di{" "}
              <Link href={"https://edgemony.com"}>Edgemony.com</Link>,
              un'importante scuola tecnologica di Palermo.
            </p>
          </div>
        </div>
        <div className={styles.titleTeam}>
          <OurTeam />
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
