import { GrGithub, GrLinkedin } from "react-icons/gr";
import { Us } from "@/mocks/photosAboutUs";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";
const WorkTeam = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.titleTeam}>
          <h1>About Us</h1>
          <p>
            Ti piace questo progetto?
            <br />
            Scopri i professionisti che lo hanno realizzato
          </p>
        </div>
        <div className={styles.photos}>
          <div className={styles.div}>
            <Image
              src={Us[0].Photo}
              alt="Chiara Cirrito"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link
                href={"https://www.linkedin.com/in/chiara-cirrito-90a2021b7/"}
              >
                <GrLinkedin className={styles.icon} />
              </Link>
              <Link href={"https://github.com/chiacirrito"}>
                <GrGithub />
              </Link>
              <Link href={"https://portfolio-chi-five-66.vercel.app/"}>
                <CgWebsite />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[1].Photo}
              width={400}
              height={400}
              alt="Edward Catrimi"
              priority
            />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/edwardcatrimi/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/edwardsicily"}>
                <GrGithub />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[2].Photo}
              alt="Francesco Carella"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link
                href={"https://www.linkedin.com/in/francescodecarocarella/"}
              >
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/FrancescoDeCaroCarella"}>
                <GrGithub />
              </Link>
              <Link href={"https://francescodecarocarella.it/"}>
                <CgWebsite />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[3].Photo}
              alt="Gabriele Chiaramonte"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/gabriele-chiaramonte/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/Gabriele9102"}>
                <GrGithub />
              </Link>
            </div>
          </div>
          <div className={styles.div}>
            <Image
              src={Us[4].Photo}
              alt="Hysen Shemollari"
              width={400}
              height={400}
              priority
            />
            <div className={styles.icons}>
              <Link href={"https://www.linkedin.com/in/hysen-shemollari/"}>
                <GrLinkedin />
              </Link>
              <Link href={"https://github.com/ZaoTosh"}>
                <GrGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <Link href={"/about"}>
            <button type="button">Scopri di più</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default WorkTeam;
