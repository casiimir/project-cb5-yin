import React from "react";
import styles from "./index.module.scss";

const selectFilters = [
  { name: "Distance from city centre", id: "distance" },
  { name: "Popularity", id: "popularity" },
  { name: "Stars (5 to 0)", id: "class_descending" },
  { name: "Stars (0 to 5)", id: "class_ascending" },
  { name: "Guest review score", id: "review_score" },
  { name: "Price (low to high)", id: "price" },
];

function Select({ selectFilter, setSelectFilter }) {
  return (
    <select
      className={styles.select}
      value={selectFilter}
      onChange={(e) => setSelectFilter(e.target.value)}
    >
      {selectFilters.map((el, idx) => (
        <option className={styles.options} key={idx} value={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
