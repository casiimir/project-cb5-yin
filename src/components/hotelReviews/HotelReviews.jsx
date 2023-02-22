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
        {reviewData?.map((customer) => {
          console.log(customer.author);
          return (
            <div className={styles.card}>
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
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAxlBMVEX///8AAAAAAAAAAAAAAAD////t7e2UzrCOyquDxqN+w6B5wJx1v5nulJZtupNquZHtjY9ftIles4hXsIPsg4dVr4JQrn7sf4JMqnvreX1IqHfqdXlEpXPobXA2oms7n2zpam4zn2gzmWYqm2PnX2MulmEjmV3mXmEplF4fllrmWFwjj1gfjVXjU1fmUFXgTFDeSkrjQkfdQkfeQkLXOD7gNjzgMzjWNDngLzXULzTfKjDfJyzSKzHeIynRJizQIyjdHyTNHyRobP1rAAAABXRSTlMAESIzRJTdRHwAAACYSURBVBgZrcE7DsJQDEXBc22HT2paSva/HBbADhANoLyHQxqL0CAxA38jxDddOjRmVxYn3s6hdqO6MDsqMBmpsRhJdwgkowjS5ARmTjGQmgjMnWJLmkRgHhRb0iQCHzYUThqNgN1AMZIejcBwPkkE6lRGMhF4o3LS1Am8OSuO4azJCOBB8WQmAu2ZicWGhWRirTchvun87AVVDBm1+yb5GwAAAABJRU5ErkJggg=="
                      }
                      alt="italia"
                      width={15}
                      height={15}
                    />
                    Italia
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
