import styles from "./index.module.scss";
import Image from "next/image";
import { counterCases } from "@/store/reducers";

const SearchPagination = ({
  searchResults,
  navigation,
  navigationDispatch,
}) => {
  let totalPage = Math.ceil(searchResults.total_count_with_filters / 20);

  return (
    <nav className={styles.searchPagination}>
      {navigation.current > 1 && (
        <button
          className={styles.btnArrow}
          onClick={() => navigationDispatch({ type: counterCases.DECREMENT })}
        >
          <Image
            className={styles.svg}
            src="/arrowleft.svg"
            alt="arrowleft"
            width={20}
            height={20}
            priority
          />
        </button>
      )}

      <ol>
        {navigation.current == totalPage && totalPage > 2 && (
          <li>
            <button
              onClick={() =>
                navigationDispatch({
                  type: counterCases.SET,
                  payload: navigation.current - 2,
                })
              }
            >
              {navigation.current - 2}
            </button>
          </li>
        )}

        {navigation.current > 1 && (
          <li>
            <button
              onClick={() =>
                navigationDispatch({
                  type: counterCases.SET,
                  payload: navigation.current - 1,
                })
              }
            >
              {navigation.current - 1}
            </button>
          </li>
        )}

        <li className={styles.actuallPage}>
          <button>{navigation.current}</button>
        </li>

        {navigation.current < totalPage && (
          <li>
            <button
              onClick={() =>
                navigationDispatch({
                  type: counterCases.SET,
                  payload: navigation.current + 1,
                })
              }
            >
              {navigation.current + 1}
            </button>
          </li>
        )}

        {navigation.current == 1 && totalPage > 2 ? (
          <li>
            <button
              onClick={() =>
                navigationDispatch({
                  type: counterCases.SET,
                  payload: navigation.current + 2,
                })
              }
            >
              {navigation.current + 2}
            </button>
          </li>
        ) : null}
      </ol>
      {navigation.current < totalPage && (
        <button
          className={styles.btnArrow}
          onClick={() => navigationDispatch({ type: counterCases.INCREMENT })}
        >
          <Image
            className={styles.svg}
            src="/arrowright.svg"
            alt="arrowright"
            width={20}
            height={20}
            priority
          />
        </button>
      )}
    </nav>
  );
};

export default SearchPagination;
