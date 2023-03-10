import AppContext from "@/store/context";
import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { cases } from "@/store/reducers";
import styles from "./index.module.scss";
import { getFavouritesFromLS } from "@/utils/utils";

function Heart({ data }) {
  const { dispatch } = useContext(AppContext);
  const favourites = getFavouritesFromLS();
  let isFav = !!favourites?.find((el) => el.hotel_id === data.hotel_id);

  return (
    <div className={styles.wishBtn}>
      {isFav ? (
        <AiFillHeart
          onClick={() => {
            dispatch({
              type: cases.REMOVE_FAVOURITE,
              payload: data.hotel_id,
            });
          }}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            dispatch({
              type: cases.ADD_FAVOURITE,
              payload: data,
            });
          }}
        />
      )}
    </div>
  );
}

export default Heart;
