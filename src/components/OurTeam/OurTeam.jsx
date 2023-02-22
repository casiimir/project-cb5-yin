import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";

const OurTeam = () => {
  const [descrizione, setDescrizione] = useState();
  const [member, setMember] = useState();
  const [instagram, setInstagram] = useState();
  const [github, setGitHub] = useState();
  const [linkedin, setLinkedIn] = useState();
  const [links, setLinks] = useState(false);

  const teamMember = (member) => {
    let displayLinks = true;
    setLinks(true);
    switch (member) {
      case 1:
        setDescrizione(
          "Eddy Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit!"
        );
        setInstagram("instagram Eddy");
        setGitHub("/edwardsicily");
        setLinkedIn("/in/edwardcatrimi/");
        setMember("Edward Catrimi");
        break;

      case 2:
        setDescrizione(
          "Chiara Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit!"
        );
        setInstagram("https://chiacirrito.github.io/newportfolio/home.html");
        setGitHub("/chiacirrito");
        setLinkedIn("/in/chiara-cirrito-90a2021b7/");
        setMember("Chiara Cirrito");
        break;

      case 3:
        setDescrizione(
          "Fra Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit!"
        );
        setInstagram("https://francescodecarocarella.it");
        setGitHub("/FrancescoDeCaroCarella");
        setLinkedIn("/in/francescodecarocarella/");
        setMember("Francesco De Caro Carella");
        break;

      case 4:
        setDescrizione(
          "Gabri Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit!"
        );
        setInstagram("instagram Gabri");
        setGitHub("/Gabriele9102");
        setLinkedIn("/in/gabriele-chiaramonte/");
        setMember("Gabriele Chiaramonte");
        break;
      case 5:
        setDescrizione(
          "Zeni Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quo dignissimos sint, exercitationem libero placeat dolor eaque. Nostrum, reprehenderit!"
        );
        setInstagram("https://zaotosh.github.io/");
        setGitHub("/ZaoTosh");
        setLinkedIn("/in/hysen-shemollari");
        setMember("Hysen Shemolari");
        break;
      default:
        console.error("errore");
    }
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.titleTeam}>
          <h4>Our </h4> <h2 className={styles.colorBlue}>Team</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(1);
                }}
              >
                <a href="#arrivo">
                  <div className={styles.div}>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>
                </a>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>Edward Catrimi</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(2);
                }}
              >
                {" "}
                <a href={"#arrivo"}>
                  <div className={styles.div}>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>{" "}
                </a>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>Chiara Cirrito</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(3);
                }}
              >
                <a href="#arrivo">
                  <div className={styles.div}>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>
                </a>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>Francesco Decaro Carella</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer - UX Designer</p>
            </div>
          </div>
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(4);
                }}
              >
                <a href="#arrivo">
                  <div className={styles.div}>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>
                </a>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>Gabriele Chiaramonte</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
          </div>
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(5);
                }}
              >
                {" "}
                <a href="#arrivo">
                  <div className={styles.div}>
                    <Image
                      src="https://picsum.photos/200/300"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>
                </a>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>Hysen Shemollari</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className={links ? styles.memberDescription : styles.off}>
          <div className={styles.links}>
            {links && (
              <>
                <Link href={`https://www.linkedin.com${linkedin}`}>
                  <GrLinkedin />
                </Link>
                <Link href={`https://github.com/${github}`}>
                  <GrGithub />
                </Link>
                <Link href={`${instagram}`}>
                  <CgWebsite />
                </Link>
              </>
            )}
          </div>
          <div className={styles.textDescription}>
            <a name="arrivo"></a>
            <h2>{member}</h2>
            <p>{descrizione}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
