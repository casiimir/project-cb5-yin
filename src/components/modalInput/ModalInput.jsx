import { useContext } from "react";
import AppContext from "@/store/context";

import styles from "./index.module.scss";

const ModalInput = ({ data, setOpenModal, setDestid }) => {
  const { dispatch, state } = useContext(AppContext);
  const dispatchHandler = (el) => {
    setOpenModal(false);
    dispatch({
      type: "ADD_LOCATION",
      payload: { city_name: el.city_name, dest_id: el.dest_id },
    });
    setDestid(el.dest_id);
  };

  return (
    <div className={styles.ModalInput}>
      <div className={styles.wrapperLabel}>
        {data?.map((el) => (
          <div onClick={() => dispatchHandler(el)} className={styles.label}>
            {el.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalInput;
