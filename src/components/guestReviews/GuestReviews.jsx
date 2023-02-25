import styles from "./index.module.scss";
import Image from "next/image";

const GuestReviews = ({ dataHotelReview, reviewData }) => {
  return (
    <div className={styles.main}>
      <h2>Recensioni degli ospiti</h2>
      <div className={styles.scoreHotel}>
        <h3> {dataHotelReview?.review_score} </h3>
        <h4>{dataHotelReview?.review_score_word}</h4>
        <h6>{dataHotelReview?.ranking} posizione </h6>
      </div>
      <div className={styles.container}>
        {reviewData?.map((customer, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.userReview}>
                <Image
                  src={
                    customer.author.avatar
                      ? customer.author.avatar
                      : "https://graph.facebook.com/v2.9/554753386/picture?type=square&height=64&width=64"
                  } //{entrance_photo_url}
                  alt="nameHotel" //{nameHotel}
                  width={40}
                  height={40}
                />
                <h2>{customer.author.name}</h2>
              </div>
              <div className={styles.cardReviews}>
                <h3>{customer.title}</h3>
                <p>{customer.cons}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestReviews;
// <CardReviews key={customer.author.user_id} />
