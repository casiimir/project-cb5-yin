import styles from "./index.module.scss";

const Filters = () => {
  return (
    <div className={styles.DivFilters}>
      <ul className={styles.ulHotels}>
        <li>⭐</li>
        <li>⭐⭐</li>
        <li>⭐⭐⭐</li>
        <li>⭐⭐⭐⭐</li>
        <li>⭐⭐⭐⭐⭐</li>
      </ul>
    </div>
  );
};

export default Filters;
