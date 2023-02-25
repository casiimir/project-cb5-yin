import { useState, useEffect, useContext } from "react";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "@/components/modalInput/ModalInput";
import styles from "./index.module.scss";
import ModalOccupancy from "@/components/modalOccupancy/ModalOccupancy";
import { useRouter } from "next/router";
//componente da rimuovere
const FormSearchPages = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const { state } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (location == "") return;
    GET(`hotels/locations?locale=it&name=${location}`).then((res) => {
      if (Array.isArray(res)) {
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
        <h2 className={styles.Title}>Cerca</h2>

        <label>
          Destinazione/nome struttura:
          <input
            value={state.location.label ? state.location.label : location}
            onChange={(e) => onHandleChangeInput(e.target.value)}
            type="search"
            placeholder="Dove ti va di andare?"
          />
        </label>

        {openModal && <ModalInput setOpenModal={setOpenModal} data={data} />}

        <label>
          Check-in
          <input type="date" placeholder="Data del check-in" />
        </label>
        <label>
          Check-out:
          <input type="date" placeholder="Data del check-out" />
        </label>

        <button
          type="button"
          className={styles.openModalFormBtn}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {state.prenotation.adults} adulti - {state.prenotation.children}{" "}
          bambini - {state.prenotation.rooms} camera
        </button>

        {modalOpen && <ModalOccupancy setOpenModal={setModalOpen} />}

        <input value="Cerca" type="submit" />
      </div>
    </form>
  );
};

export default FormSearchPages;
