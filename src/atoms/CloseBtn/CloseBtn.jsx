import AppContext from "@/store/context";
import React, { useContext } from "react";
import { cases } from "@/store/reducers";
import styles from "./index.module.scss";
import Image from "next/image";
import { getFavouritesFromLS } from "@/utils/utils";

function CloseBtn({ data }) {
  const { dispatch } = useContext(AppContext);
  const favourites = getFavouritesFromLS();
  let isFav = !!favourites?.find((el) => el.hotel_id === data.hotel_id);

  return (
    <>
      {isFav ? (
        <button
          className={styles.button}
          onClick={() => {
            dispatch({
              type: cases.REMOVE_FAVOURITE,
              payload: data.hotel_id,
            });
          }}
        >
          <Image src={"closebtn.svg"} width={18} height={18} alt="close" />
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: cases.ADD_FAVOURITE,
              payload: data,
            });
          }}
        >
          <Image src={"closebtn.svg"} width={15} height={15} alt="close" />
        </button>
      )}
    </>
  );
}

export default CloseBtn;
