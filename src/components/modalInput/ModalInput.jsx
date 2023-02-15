import { useContext } from "react";
import AppContext from "@/store/context";

import styles from "./index.module.scss";

const ModalInput = ({ data, setOpenModal }) => {
  const { dispatch } = useContext(AppContext);
  const dispatchHandler = (el) => {
    setOpenModal(false);
    dispatch({ type: "ADD_LOCATION", payload: el });
    console.log(AppContext);
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
