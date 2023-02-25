import styles from "./index.module.scss";
import OurTeam from "../OurTeam/OurTeam";
import Image from "next/image";
import Link from "next/link";

const AboutDescription = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>The Booking Clone</h1>
          <h3>
            Team Leader <br />
            Casimiro Cianciamino
          </h3>
          <Image
            src={
              "https://media.licdn.com/dms/image/D4D03AQGANqMbwug4Cw/profile-displayphoto-shrink_400_400/0/1672573975735?e=1682553600&v=beta&t=yM7vY-YRTg0fIAvDoA8ui-gjUQFXY1PlKdywVzMGGyw"
            }
            className={styles.imgCasi}
            alt={"img"}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className={styles.description}>
          <div className={styles.titleDescription}>
            <h2>Il miglior clone di Booking.com</h2>
          </div>
          <div className={styles.miniDescription}>
            <p>
              <Link href={"https://www.booking.com/index.it.html"}>
                Booking.com
              </Link>{" "}
              è un'agenzia olandese, con sede ad Amsterdam, che permette di
              effettuare prenotazioni di alloggi, voli e altri servizi.
              <b>The Booking Clone</b> è il progetto che abbiamo realizzato per
              l'esame finale del programma di formazione per Web Developer
              Front-End di{" "}
              <Link href={"https://edgemony.com"}>Edgemony.com</Link>,
              un'importante tech school di Palermo.
              <br />
              <br /> La richiesta era di realizzare un sito clone di Booking.com
              che ne rispecchiasse funzionalità e design allo stato attuale
              (febbraio 2023). Per farlo abbiamo innanzitutto individuato l'API
              necessaria, che abbiamo trovato su{" "}
              <Link href={"https://rapidapi.com/tipsters/api/booking-com/"}>
                RapidAPI
              </Link>
              . Successivamente abbiamo strutturato il design che avrebbe dovuto
              assumere il progetto avvalendoci del software <b></b>Figma,
              realizzando contemporanemante struttura e funzionalità su Visual
              Studio.
              <br />
              <br /> Il progetto è stato realizzato con metodo <i>agile</i> e in
              ottica <i>responsive first</i>, utilizzando <b>HTML5</b> come
              linguaggio di markup, <b>SASS/SCSS</b> come linguaggio di stile,{" "}
              <b>Javascript</b> come linguaggio di scripting, <b>ReactJS</b>{" "}
              come libreria Javascript e <b>NextJS</b> come relativo framework
              di React.
              <br /> Ci siamo impegnati per realizzare un sito che fosse il più
              simile possibile al design e alle funzionalità originali di
              Booking.com, curando minuziosamente ogni più piccolo dettaglio e
              cercando di prevedere ogni possibile scenario ad ogni interazione
              dell'utente, sebbene alcune funzionalità saranno limitate per via
              degli ovvi limiti dell'API utilizzata.
              <br />
              <br /> Maggiori dettagli sul progetto nonché il codice nella sua
              interezza, sono visionabili all'interno delle pagine <b>
                Github
              </b>{" "}
              dei rispettivi autori developer, i cui link sono a seguire in
              descrizione.{" "}
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
