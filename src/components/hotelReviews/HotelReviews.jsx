import styles from "./index.module.scss";
import Image from "next/image";

const HotelReviews = ({ dataHotelReview, reviewData }) => {
  return (
    <div className={styles.main}>
      <div>
        <h3>Recensioni degli ospiti</h3>
        <div className={styles.score}>
          <span className={styles.scoreNumber}>
            {dataHotelReview.review_score}
          </span>{" "}
          <span className={styles.scoreText}>
            {dataHotelReview.review_score_word}
          </span>{" "}
          ·{" "}
          <span className={styles.reviewNumber}>
            {dataHotelReview.review_nr.toLocaleString("de-DE")} recensioni
          </span>
        </div>
      </div>
      <div className={styles.container}>
        {reviewData?.map((customer, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.authorContent}>
                <div className={styles.author}>
                  <Image
                    src={
                      customer.author.avatar
                        ? customer.author.avatar
                        : "https://graph.facebook.com/v2.9/554753386/picture?type=square&height=64&width=64"
                    }
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <div className={styles.country}>
                  <h5>{customer.author.name}</h5>
                  <span>
                    <Image
                      src={`https://flagcdn.com/${customer?.countrycode}.svg`}
                      width={20}
                      height={15}
                      alt="flag"
                    />
                    <p>{customer?.countrycode.toUpperCase()}</p>
                  </span>
                </div>
              </div>
              <div className={styles.content}>
                {/*<h3>{customer.title}</h3>*/}
                <div>
                  <h5>Pro</h5>
                  <span>«{customer.pros}»</span>
                </div>
                <div>
                  <h5>Contro</h5>
                  <span>«{customer.cons ? customer.cons : "Nessuno"}»</span>
                </div>
                <button>
                  <span>Leggi di più</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelReviews;
// <CardReviews key={customer.author.user_id} />
