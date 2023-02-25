import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { Us } from "./../../mocks/photosAboutUs";

const OurTeam = () => {
  const [links, setLinks] = useState(1);
  const [member, setMember] = useState([
    Us[0].Name,
    Us[0].Photo,
    Us[0].Linkedin,
    Us[0].Github,
    Us[0].description,
    Us[0].Sito,
  ]);

  const teamMember = (member) => {
    setLinks(member);
    switch (member) {
      case 1:
        //-------------Chiara-------------
        setMember([
          Us[0].Name,
          Us[0].Photo,
          Us[0].Linkedin,
          Us[0].Github,
          Us[0].description,
          Us[0].Sito,
        ]);

        break;

      case 2:
        //-------------Edward-------------
        setMember([
          Us[1].Name,
          Us[1].Photo,
          Us[1].Linkedin,
          Us[1].Github,
          Us[1].description,
          Us[1].Sito,
        ]);

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
          Us[3].Sito,
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
          Us[4].Sito,
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
          <h3>
            Our<br></br> <span>Team</span>
          </h3>
        </div>
        <div className={styles.container}>
          {/* -------------Chiara------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(1);
                }}
              >
                {" "}
                <div className={styles.div}>
                  <Image
                    src={Us[0].Photo}
                    alt={Us[0].Name}
                    width={400}
                    height={400}
                    priority
                  />
                </div>{" "}
              </button>
            </div>
            <div className={styles.nameMember}>
              <h5>{Us[0].Name}</h5>
            </div>
            <div className={styles.figureMember}>
              <p>Front End Developer</p>
            </div>
            <div className={links == 1 && styles.flagPerson}></div>
          </div>

          {/* -------------Edward------------- */}
          <div className={styles.containerMember}>
            <div className={styles.photos}>
              <button
                onClick={() => {
                  teamMember(2);
                }}
              >
                <div className={styles.div}>
                  <Image
                    src={Us[1].Photo}
                    alt={Us[1].Name}
                    width={400}
                    height={400}
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
            <div className={links == 2 && styles.flagPerson}></div>
          </div>

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
                    alt={Us[2].Name}
                    width={400}
                    height={400}
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
            <div className={links == 3 && styles.flagPerson}></div>
          </div>

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
                    alt={Us[3].Name}
                    width={400}
                    height={400}
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
            <div className={links == 4 && styles.flagPerson}></div>
          </div>

          {/* -------------Hysen------------- */}

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
                    alt={Us[4].Name}
                    width={400}
                    height={400}
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
            <div className={links == 5 && styles.flagPerson}></div>
          </div>
        </div>
        {/* -------------Description Column------------- */}
        <div className={styles.memberDescription}>
          <div className={styles.links}>
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
          </div>
          <div className={styles.textDescription}>
            <h2>{member[0]}</h2>
            <p>{member[4]}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeam;
