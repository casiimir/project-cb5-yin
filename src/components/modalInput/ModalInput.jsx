import { useContext, useEffect, useState } from "react";
import AppContext from "@/store/context";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

const ModalInput = ({ data, setOpenModal, setDestid }) => {
  const [modalType, setModalType] = useState("home");
  const { dispatch, state } = useContext(AppContext);
  const router = useRouter();

  const dispatchHandler = (el) => {
    setOpenModal(false);
    dispatch({
      type: "ADD_LOCATION",
      payload: { city_name: el.city_name, dest_id: el.dest_id },
    });
    setDestid(el.dest_id);
  };

  useEffect(() => {
    setModalType(router.pathname == "/" ? "home" : "search");
  }, [router.isReady]);

  return (
    <div
      className={
        modalType === "home"
          ? `${styles.ModalInput}`
          : `${styles.modalInputOther}`
      }
    >
      <div className={styles.wrapperLabel}>
        {data?.map((el, index) => (
          <div
            key={index}
            onClick={() => dispatchHandler(el)}
            className={styles.label}
          >
            {el.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalInput;
