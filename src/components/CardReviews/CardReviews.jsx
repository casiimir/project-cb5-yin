import styles from "./index.module.scss";

const CardReviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userReview}>
        <h2>{customer.title}</h2>
      </div>
      <div className={styles.cardReviews}>
        <h3>{customer.title}</h3>
        <p>{customer.cons}</p>
      </div>
    </div>
  );
};
export default CardReviews;
