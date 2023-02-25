import React from "react";
import { datedifference } from "@/utils/utils";
import styles from "./index.module.scss";
import { getTodayDate } from "@/utils/utils";

function DateFormReservation({ dates, setDates, errorMsg }) {
  const handleSetCheckIn = (value) => {
    if (
      datedifference(value, getTodayDate()) >= 0 ||
      (dates.check_out && datedifference(value, dates.check_out) < 1)
    )
      return;
    setDates((prev) => {
      return {
        ...prev,
        check_in: value,
      };
    });
  };
  const handleSetCheckOut = (value) => {
    if (
      datedifference(value, getTodayDate()) >= -1 ||
      (dates.check_in && datedifference(dates.check_in, value) < 1)
    )
      return;
    setDates((prev) => {
      return {
        ...prev,
        check_out: value,
      };
    });
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
