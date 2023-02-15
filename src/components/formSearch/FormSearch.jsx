import { useState, useEffect, useContext } from "react";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "../modalInput/ModalInput";
import styles from "./index.module.scss";
import ModalPersonRoom from "../modal/modalPersonRoom";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";

const FormSearch = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  
  const { state } = useContext(AppContext);


  useEffect(() => {
    GET(`hotels/locations?locale=it&name=${location}`).then((res) => {
      console.log(res)
      if (Array.isArray(res)) {
        console.log(res);
        setData(res);
      }
    });
  }, [location]);

  const onHandleChangeInput = (value) => {
    setLocation(value);
    if (openModal && value === "") {
      setOpenModal(false);
    } else if (!openModal) setOpenModal(true);
  };

  return (
    <form className={styles.FormSearch}>
      <div className={styles.wrapper}>
        <input
          value={state.location.label ? state.location.label : location}
          onChange={(e) => onHandleChangeInput(e.target.value)}
          type="search"
          placeholder="Dove ti va di andare?"
        />
        {openModal && <ModalInput setOpenModal={setOpenModal} data={data} />}
        <div className={styles.wrapDate}>
          <input type="date" />
          <input type="date" />
        </div>

        <button
          type="button"
          className={styles.openModalFormBtn}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {state.prenotation.adults} adulti - {state.prenotation.children}{" "}
          bambini - {state.prenotation.rooms} camere
        </button>

        {modalOpen && <ModalPersonRoom setOpenModal={setModalOpen} />}

        <input value="Cerca" type="submit" />
      </div>
    </form>
  );
};

export default FormSearch;
