import { useContext } from "react";
import AppContext from "@/store/context";

import styles from "./index.module.scss";

const ModalInput = ({ data, setOpenModal }) => {
  const { dispatch, state } = useContext(AppContext);
  const dispatchHandler = (el) => {
    setOpenModal(false);
    dispatch({
      type: "ADD_LOCATION",
      payload: { city_name: el.city_name, dest_id: el.dest_id },
    });
    console.log("so", el);
  };

  return (
    <div className={styles.modalInput}>
      {data?.map((el) => (
        <div onClick={() => dispatchHandler(el)} className={styles.label}>
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default ModalInput;
