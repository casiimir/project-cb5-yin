import styles from "./index.module.scss";
import Image from "next/image";
import { counterCases } from "@/store/reducers";

const SearchPagination = ({ navigation, navigationDispatch }) => {
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

        <li>
          <button>{navigation.current}</button>
        </li>
        {navigation.current <= navigation.pages && (
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
      </ol>
      {navigation.current <= navigation.pages && (
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
