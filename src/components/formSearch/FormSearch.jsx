import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { GET } from "@/utils/http";
import AppContext from "@/store/context";
import ModalInput from "../modalInput/ModalInput";
import styles from "./index.module.scss";
import ModalOccupancy from "../modalOccupancy";
import { useRouter } from "next/router";
import { cases } from "@/store/reducers";

const FormSearch = () => {
  const [formType, setFormType] = useState();
  const [location, setLocation] = useState(""); //locationID
  const [destid, setDestid] = useState(null); //dest_id
  const [data, setData] = useState([]);
  const [dates, setDates] = useState({
    checkIn: undefined,
    checkOut: undefined,
  });
  const [openModal, setOpenModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  useLayoutEffect(() => {
    setFormType(router.pathname == "/" ? "home" : "search");
  }, [router.isReady]);

  useEffect(() => {
    GET(`hotels/locations?locale=it&name=${location}`).then((res) => {
      if (Array.isArray(res)) {
        setData(res);
      }
    });
  }, [location]);

  const handleSubmit = (e) => {
    //controlli se checkout < checkin
    e.preventDefault();
    console.log(
      dates.checkIn,
      dates.checkOut,
      destid,
      !dates.checkIn || !dates.checkOut || !destid
    );
    if (!dates.checkIn || !dates.checkOut || !destid) return;
    router.push(
      `/search?dest_id=${destid}&checkin_date=${dates.checkIn}&checkout_date=${dates.checkOut}&adults_number=${state.prenotation.adults}&children_number=${state.prenotation.children}&room_number=${state.prenotation.rooms}`
    );
  };

  const handleCheckIn = (value) => {
    setDates((prev) => {
      return {
        ...prev,
        checkIn: value,
      };
    });
  };

  const handleCheckOut = (value) => {
    setDates((prev) => {
      return {
        ...prev,
        checkOut: value,
      };
    });
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
    <form
      className={
        formType === "home"
          ? `${styles.FormSearch}`
          : `${styles.FormSearch} ${styles.FormSearchOther}`
      }
      onSubmit={(e) => handleSubmit(e)}
    >
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
        {openModal && (
          <ModalInput
            setOpenModal={setOpenModal}
            data={data}
            setDestid={setDestid}
          />
        )}

        <div className={styles.inputDate}>
          <input type="date" onChange={(e) => handleCheckIn(e.target.value)} />
          <input type="date" onChange={(e) => handleCheckOut(e.target.value)} />
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
          <input
            value="Cerca"
            type="submit"
            //disabled={!dates.checkIn || !dates.checkOut || !destid}
          />
        </div>
      </div>
    </form>
  );
};

export default FormSearch;
