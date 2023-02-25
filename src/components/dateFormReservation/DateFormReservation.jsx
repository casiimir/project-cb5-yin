import React from "react";
import { datedifference } from "@/utils/utils";
import styles from "./index.module.scss";

function DateFormReservation({ dates, setDates, errorMsg }) {
  const handleSetCheckIn = (value) => {
    if (!dates.check_in || datedifference(value, dates.check_out) > 0) {
      setDates((prev) => {
        return {
          ...prev,
          check_in: value,
        };
      });
    }
  };
  const handleSetCheckOut = (value) => {
    if (!dates.check_out || datedifference(dates.check_in, value) > 0) {
      setDates((prev) => {
        return {
          ...prev,
          check_out: value,
        };
      });
    }
  };

  return (
    <form className={styles.FormDate}>
      <h4>Inserisci le date di soggiorno</h4>
      <label>
        Check in
        <input
          className={errorMsg && styles.Error}
          type="date"
          onChange={(e) => handleSetCheckIn(e.target.value)}
          value={dates.check_in}
        />
      </label>

      <label>
        Check out
        <input
          className={errorMsg && styles.Error}
          type="date"
          onChange={(e) => handleSetCheckOut(e.target.value)}
          value={dates.check_out}
        />
      </label>
    </form>
  );
}

export default DateFormReservation;
