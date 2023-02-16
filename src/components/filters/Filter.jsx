import { BsReverseBackspaceReverse } from "react-icons/bs";
import styles from "./index.module.scss";

const Filters = () => {
  let isToggleStar1 = false;
  let isToggleOn = [
    {
      nome: "star1",
      state: false,
    },
    {
      nome: "star2",
      state: false,
    },
    {
      nome: "star3",
      state: false,
    },
    {
      nome: "star4",
      state: false,
    },
    {
      nome: "star5",
      state: false,
    },
  ];
  function handleOnClick(star) {
    switch (star) {
      case isToggleOn.filter((tmp) => tmp.nome == star):
        console.log("trovato");
        break;
      case "star1":
        console.log("fine");
        break;
      default:
        console.log("Error star filter");
    }
  }
  return (
    <div className={styles.DivFilters}>
      <ul className={styles.ulHotels}>
        <li>
          <button
            type="button"
            name="star1"
            onClick={() => handleOnClick("star1")}
          >
            ⭐
          </button>
        </li>
        <li>
          <button type="button" name="star2">
            ⭐⭐
          </button>
        </li>
        <li>
          <button type="button" name="star3">
            ⭐⭐⭐
          </button>
        </li>
        <li>
          <button type="button" name="star4">
            ⭐⭐⭐⭐
          </button>
        </li>
        <li>
          <button type="button" name="star5">
            ⭐⭐⭐⭐⭐
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
