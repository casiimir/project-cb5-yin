import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { Us } from "../../mocks/photosAboutUs";

const OurTeam = () => {
  const [member, setMember] = useState([0]);
  const [description, setDescription] = useState([0]);
  const [links, setLinks] = useState(false);

  const teamMember = (member) => {
    let displayLinks = true;
    setLinks(true);
    switch (member) {
      case 1:
        //-------------Edward-------------
        setMember([
          Us[1].Name,
          Us[1].Photo,
          Us[1].Linkedin,
          Us[1].Github,
          Us[1].description,
        ]);

        break;

      case 2:
        //-------------Chiara-------------
        setMember([
          Us[0].Name,
          Us[0].Photo,
          Us[0].Linkedin,
          Us[0].Github,
          Us[0].description,
        ]);

        {/*setDescription(
          "Hi, I'm a 24 years old sicilian web developer, Edgemony scholarship winner since October. "
        );
        setInstagram("https://chiacirrito.github.io/newportfolio/home.html");
        setGitHub("/chiacirrito");
        setLinkedIn("/in/chiara-cirrito-90a2021b7/");
        setMember("Chiara Cirrito");*/}
        break;

      case 3:
        //-------------Francesco-------------
        setMember([
          Us[2].Name,
          Us[2].Photo,
          Us[2].Linkedin,
          Us[2].Github,
          Us[2].description,
          Us[2].Sito,
        ]);
        break;

      case 4:
        //-------------Gabriele-------------
        setMember([
          Us[3].Name,
          Us[3].Photo,
          Us[3].Linkedin,
          Us[3].Github,
          Us[3].description,
        ]);
        break;
      case 5:
        //-------------Hysen-------------
        setMember([
          Us[4].Name,
          Us[4].Photo,
          Us[4].Linkedin,
          Us[4].Github,
          Us[4].description,
        ]);
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
          {/* -------------Edward------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(1);
                }}
              >
                <div className={styles.div}>
                  <Image
                    src={Us[1].Photo}
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                </div>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[1].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
            {member[0] == "Edward Catrimi" && (
              <div className={links ? styles.memberDescription : styles.off}>
                <div className={styles.links}>
                  <>
                    <Link href={member[2]}>
                      <GrLinkedin />
                    </Link>
                    <Link href={member[3]}>
                      <GrGithub />
                    </Link>
                  </>
                </div>
                <div className={styles.textDescription}>
                  <h2>{member[0]}</h2>
                  <p>{member[4]}</p>
                </div>
              </div>
            )}
          </div>
          {/* -------------Chiara------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(2);
                }}
              >
                {" "}
                <div className={styles.div}>
                  <Image
                    src={Us[0].Photo}
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                </div>{" "}
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[2].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
          </div>
          {member[0] == "Chiara Cirrito" && (
            <div className={links ? styles.memberDescription : styles.off}>
              <div className={styles.links}>
                <>
                  <Link href={member[2]}>
                    <GrLinkedin />
                  </Link>
                  <Link href={member[3]}>
                    <GrGithub />
                  </Link>
                </>
              </div>
              <div className={styles.textDescription}>
                <h2>{member[0]}</h2>
                <p>{member[4]}</p>
              </div>
            </div>
          )}
          {/* -------------Francesco------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(3);
                }}
              >
                <div className={styles.div}>
                  <Image
                    src={Us[2].Photo}
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                </div>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[2].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer - UX Designer</p>
            </div>
          </div>
          {member[0] == "Francesco De Caro Carella" && (
            <div className={links ? styles.memberDescription : styles.off}>
              <div className={styles.links}>
                <>
                  <Link href={member[2]}>
                    <GrLinkedin />
                  </Link>
                  <Link href={member[3]}>
                    <GrGithub />
                  </Link>
                  <Link href={Us[2].Sito}>
                    <CgWebsite />
                  </Link>
                </>
              </div>
              <div className={styles.textDescription}>
                <h2>{member[0]}</h2>
                <p>{member[4]}</p>
              </div>
            </div>
          )}
          {/* -------------Gabriele------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(4);
                }}
              >
                <div className={styles.div}>
                  <Image
                    src={Us[3].Photo}
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                </div>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[3].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
          </div>
          {member[0] == "Gabriele Chiaramonte" && (
            <div className={links ? styles.memberDescription : styles.off}>
              <div className={styles.links}>
                <>
                  <Link href={member[2]}>
                    <GrLinkedin />
                  </Link>
                  <Link href={member[3]}>
                    <GrGithub />
                  </Link>
                </>
              </div>
              {/* -------------Hysen------------- */}
              <div className={styles.textDescription}>
                <h2>{member[0]}</h2>
                <p>{member[4]}</p>
              </div>
            </div>
          )}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(5);
                }}
              >
                {" "}
                <div className={styles.div}>
                  <Image
                    src={Us[4].Photo}
                    alt="13"
                    width={40}
                    height={31}
                    priority
                  />
                </div>
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[4].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Full Stack Developer</p>
            </div>
            {member[0] == "Hysen Shemollari" && (
              <div className={links ? styles.memberDescription : styles.off}>
                <div className={styles.links}>
                  <>
                    <Link href={member[2]}>
                      <GrLinkedin />
                    </Link>
                    <Link href={member[3]}>
                      <GrGithub />
                    </Link>
                  </>
                </div>
                <div className={styles.textDescription}>
                  <h2>{member[0]}</h2>
                  <p>{member[4]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* -------------Description Column------------- */}
        <div className={links ? styles.memberDescription_2 : styles.off}>
          <div className={styles.links2}>
            {links && (
              <>
                <Link href={member[2]}>
                  <GrLinkedin />
                </Link>
                <Link href={member[3]}>
                  <GrGithub />
                </Link>
                {member[5] && (
                  <Link href={member[5]}>
                    <CgWebsite />
                  </Link>
                )}
              </>
            )}
          </div>
          <div className={styles.textDescription2}>
            <h2>{member[0]}</h2>
            <p>{member[4]}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
