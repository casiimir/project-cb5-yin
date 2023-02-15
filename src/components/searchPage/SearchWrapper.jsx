import React from "react";
import styles from "./index.module.scss";
import { searchMock } from "@/mocks/searchMock";
import SearchCard from "./SearchCard";

function SearchWrapper() {
  return (
    <div className={styles.Container}>
      <div className={styles.SearchWrapper}>
        <div className={styles.LeftSection}>
          {/* COMPONENTE SEARCH */}
          <div className={styles.Filter}>{/* COMPONENTE FILTER */}</div>
        </div>
        <div className={styles.RightSection}>
          <h3>NUMERO STRUTTURE TROVATE</h3>
          <div className={styles.ResultWrapper}>
            {searchMock.map((el) => (
              <SearchCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWrapper;
