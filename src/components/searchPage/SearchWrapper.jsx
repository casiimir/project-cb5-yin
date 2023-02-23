import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./index.module.scss";
import SearchCard from "./SearchCard";
import Loader from "@/atoms/Loader/Loader";
import { GET } from "@/utils/http";
import FormSearchPages from "@/components/formSearchPages/FormSearchPages";
import FormSearch from "../formSearch";
import SearchPagination from "@/components/searchPagination/SearchPagination";
import NotFoundSearch from "./../NotFoundSearch/NotFoundSearch";
import { useRouter } from "next/router";
import { buildSearchQueryString } from "@/utils/utils";
import { counterReducer } from "@/store/reducers";
import { counterCases } from "@/store/reducers";
import Select from "./../Select/Select";

function SearchWrapper() {
  const [navigation, navigationDispatch] = useReducer(counterReducer, {
    current: 1,
    pages: null,
  });
  const [selectFilter, setSelectFilter] = useState("popularity");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    navigationDispatch({
      type: counterCases.SETPAGES,
      payload: Math.ceil(searchResults?.count / 20),
    });
  }, [searchResults]);

  useEffect(() => {
    setLoading(true);

    if (router.isReady) {
      const qs = buildSearchQueryString({
        ...router.query,
        page_number: navigation.current - 1 ? navigation.current - 1 : 0,
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
  }, [router.isReady, navigation.current, selectFilter]);

  return (
    <div className={styles.Container}>
      <div className={styles.SearchWrapper}>
        <div className={styles.LeftSection}>
          {/* <FormSearchPages /> */}
          <FormSearch />
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
                    <Select
                      selectFilter={selectFilter}
                      setSelectFilter={setSelectFilter}
                    />

                    <h3>{searchResults?.result.length} STRUTTURE TROVATE</h3>
                    {searchResults?.result.map((el, id) => (
                      <SearchCard key={id} el={el} />
                    ))}

                    <SearchPagination
                      navigation={navigation}
                      navigationDispatch={navigationDispatch}
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
