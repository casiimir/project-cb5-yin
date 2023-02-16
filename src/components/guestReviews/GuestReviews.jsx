import styles from "./index.module.scss";
import Image from "next/image";
const GuestReviews = () => {
  return (
    <div className={styles.main}>
      <h2>Recensioni degli ospiti</h2>
      <div className={styles.scoreHotel}>
        <h3> review_score </h3>
        <h4>review_score_word</h4>
        <h6> n recensioni </h6>
      </div>
      <div className={styles.container}>
        <div className={styles.userReview}>
          <Image
            src="https://picsum.photos/200/300" //{entrance_photo_url}
            alt="nameHotel" //{nameHotel}
            width={40}
            height={40}
          />
          <h2>Nome Utente</h2>
        </div>
        <div className={styles.cardReviews}>
          <h3>Titolo Recensione</h3>
          <p>Al momento non abbiamo recensioni</p>
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;
