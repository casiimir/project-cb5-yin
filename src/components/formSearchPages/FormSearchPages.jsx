import { useState, useEffect, useContext } from "react";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "../modalInput/ModalInput";
import styles from "./index.module.scss";
import ModalOccupancy from "../modal/modalOccupancy";
import { useRouter } from "next/router";

const FormSearchPages = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const { state } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    GET(`hotels/locations?locale=it&name=${location}`).then((res) => {
      console.log(res);
      if (Array.isArray(res)) {
        console.log(res);
        setData(res);
      }
    });
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("search");
  };

  const onHandleChangeInput = (value) => {
    setLocation(value);
    if (openModal && value === "") {
      setOpenModal(false);
    } else if (!openModal) setOpenModal(true);
  };

  return (
    <form className={styles.FormSearch} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.wrapper}>
      
      <div className={styles.wrapTitle}>
      <h2 className={styles.Title}>Cerca</h2>
      <p className={styles.paragraf}>Destinazione/nome struttura:</p>
      </div>
      
  
        <input
          value={state.location.label ? state.location.label : location}
          onChange={(e) => onHandleChangeInput(e.target.value)}
          type="search"
          placeholder="Dove ti va di andare?"
        />
        {openModal && <ModalInput setOpenModal={setOpenModal} data={data} />}
        <div className={styles.wrapDate}>
          <p>Check-in:</p>
          <input type="date" placeholder="Data del check-in"/>
          <p>Check-out:</p>
          <input type="date" placeholder="Data del check-out" />
        </div>

        <button
          type="button"
          className={styles.openModalFormBtn}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {state.prenotation.adults} adulti - {state.prenotation.children} bambini - {state.prenotation.rooms} camera
        </button>

        {modalOpen && <ModalOccupancy setOpenModal={setModalOpen} />}

        <input value="Cerca" type="submit" />
      </div>
    </form>
  );
};

export default FormSearchPages;
