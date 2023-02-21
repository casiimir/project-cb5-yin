import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./index.module.scss";
import SearchCard from "./SearchCard";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import FormSearchPages from "../formSearchPages";
import SearchPageFilter from "../SearchPageFilter/SearchPageFilter";
import SearchPagination from "./../searchPagination/index";
import NotFoundSearch from "../NotFoundSearch/NotFoundSearch";
import { useRouter } from "next/router";
import { buildSearchQueryString } from "@/utils/utils";

const selectFilters = [
  { name: "Distance from city centre", id: "distance" },
  { name: "Popularity", id: "popularity" },
  { name: "Stars (5 to 0)", id: "class_descending" },
  { name: "Stars (0 to 5)", id: "class_ascending" },
  { name: "Guest review score", id: "review_score" },
  { name: "Price (low to high)", id: "price" },
];

function SearchWrapper() {
  const [selectFilter, setSelectFilter] = useState("popularity");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [navigation, setNavigation] = useState(0);
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
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      const qs = buildSearchQueryString({
        ...router.query,
      });

      GET(
        `hotels/search?${qs}&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1`
      )
        .then((res) => {
          console.log(res);
          setSearchResults(res);
        })
        .finally(() => setLoading(false));
    }
  }, [router.isReady, navigation, selectFilter]);

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
              <div className={styles.ResultWrapper}>
                {!searchResults || searchResults?.result.length < 1 ? (
                  <NotFoundSearch />
                ) : (
                  <>
                    <select
                      value={selectFilter}
                      onChange={(e) => setSelectFilter(e.target.value)}
                    >
                      {selectFilters.map((el, idx) => (
                        <option
                          className={styles.options}
                          key={idx}
                          value={el.id}
                        >
                          {el.name}
                        </option>
                      ))}
                    </select>

                    <h3>{searchResults?.result.length} STRUTTURE TROVATE</h3>
                    {searchResults?.result.map((el, id) => (
                      <SearchCard key={id} el={el} />
                    ))}

                    <SearchPagination
                      navigation={navigation}
                      setNavigation={setNavigation}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchWrapper;
