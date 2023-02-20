import { useState, useEffect, useContext } from "react";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "../modalInput/ModalInput";
import styles from "./index.module.scss";
import ModalOccupancy from "../modalOccupancy";
import { useRouter } from "next/router";
import { cases } from "@/store/reducers";

const FormSearch = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
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

  const handleRemoveInput = () => {
    if (location !== "") {
      setLocation("");
    }
    dispatch({ type: cases.REMOVE_LOCATION });
    setOpenModal(false);
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
        <div className={styles.wrapperSearch}>
          <div className={styles.inputSearch}>
            <input
              value={
                state.location.city_name ? state.location.city_name : location
              }
              onChange={(e) => onHandleChangeInput(e.target.value)}
              type="search"
              placeholder="Dove ti va di andare?"
            />
            {location !== "" && (
              <div className={styles.deleteInput}>
                <button onClick={() => handleRemoveInput()}> </button>
              </div>
            )}
          </div>
        </div>
        {openModal && <ModalInput setOpenModal={setOpenModal} data={data} />}

        <div className={styles.inputDate}>
          <input type="date" />
          <input type="date" />
        </div>
        <div className={styles.inputOccupancy}>
          <button
            type="button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {state.prenotation.adults} adulti - {state.prenotation.children}{" "}
            bambini - {state.prenotation.rooms} camera
          </button>
        </div>

        {modalOpen && <ModalOccupancy setOpenModal={setModalOpen} />}

        <div className={styles.inputSubmit}>
          <input value="Cerca" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default FormSearch;
