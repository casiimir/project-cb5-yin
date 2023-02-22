import styles from "./index.module.scss";
import OurTeam from "./../OurTeam/OurTeam";
const AboutDescription = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Casimiro's Team</h1>
          <p>the best Booking.com clone</p>
        </div>

        <div className={styles.description}>
          <div className={styles.titleDescription}>
            <h2>Project Description</h2>
          </div>
          <div className={styles.miniDescription}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores ab ad voluptatem quaerat illo veniam doloribus, hic
              aspernatur unde, tenetur temporibus voluptate. Dolorem at
              excepturi error! Odit nisi consequuntur doloremque veritatis in,
              earum eius voluptas corporis debitis harum voluptatibus fuga
              itaque aperiam tempore error? Asperiores perspiciatis vel,
              similique doloribus eos ut, beatae accusamus minus excepturi
              dolorem a vitae fugiat! Veritatis nesciunt officia aperiam quaerat
              eum pariatur reprehenderit obcaecati quia ab sequi facere fugiat,
              voluptatibus veniam, molestiae, officiis at. Eum, ullam. Unde
              ullam, repellendus debitis voluptates labore praesentium fugiat
              repudiandae officia in necessitatibus sapiente nesciunt esse
              consequuntur temporibus minima amet cum voluptas pariatur
              molestias nostrum exercitationem harum at nisi? Explicabo qui vel,
              minus laboriosam ea iste veritatis provident voluptate praesentium
              at adipisci autem odio, aliquam consequatur reprehenderit
              repellat. Quidem consequuntur culpa vitae odio numquam doloribus
              unde rerum ipsa aliquid veniam, eligendi qui repudiandae fugiat
              aut eveniet! Delectus, a eveniet dolorem quaerat hic culpa impedit
              quisquam optio repudiandae magni nesciunt suscipit sint fuga
              error? Eaque quaerat nesciunt cum molestias modi harum eveniet nam
              voluptate quas. Pariatur praesentium aut sapiente, esse nobis cum
              aperiam temporibus impedit, fugiat facilis distinctio
              reprehenderit ab nulla adipisci quasi eligendi magni voluptas
              possimus animi quisquam. Ratione, dolore aliquid?{" "}
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
