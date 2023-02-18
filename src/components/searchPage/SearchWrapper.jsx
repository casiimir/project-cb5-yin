import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./index.module.scss";
import SearchCard from "./SearchCard";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import FormSearchPages from "../formSearchPages";
import SearchPageFilter from "../SearchPageFilter/SearchPageFilter";

function SearchWrapper() {
  const [filterBy, setFilterBy] = useState({
    class: [
      { id: 1, label: "Nessuna Stella", checked: false },
      { id: 2, label: "1", checked: false },
      { id: 3, label: "2", checked: false },
      { id: 4, label: "3", checked: false },
      { id: 5, label: "4", checked: false },
      { id: 6, label: "5", checked: false },
    ],
    rating: null,
    review_num: null,
  });

  const [searchResults, setSearchResults] = useState(null);
  //const [filterResults, setFilterResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const { state } = useContext(AppContext);

  useEffect(() => {
    console.log(state.location);
    setLoading(true);
    GET(
      "hotels/search?dest_id=-553173&order_by=popularity&filter_by_currency=EUR&adults_number=2&room_number=1&checkout_date=2023-07-16&units=metric&checkin_date=2023-07-15&dest_type=city&locale=it&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2"
    )
      .then((res) => {
        console.log(res.count, res.result);
        setSearchResults(res);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(filterBy);
  }, [filterBy]);

  return (
    <div className={styles.Container}>
      <div className={styles.SearchWrapper}>
        <div className={styles.LeftSection}>
          <FormSearchPages />
          <div className={styles.Filter}>
            <SearchPageFilter setFilterBy={setFilterBy} filterBy={filterBy} />
          </div>
        </div>
        <div className={styles.RightSection}>
          {loading ? (
            <Loader></Loader>
          ) : (
            <>
              <h3>{searchResults?.count} STRUTTURE TROVATE</h3>
              <div className={styles.ResultWrapper}>
                {searchResults &&
                  searchResults.result.map((el) => <SearchCard el={el} />)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchWrapper;
