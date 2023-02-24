import React from "react";
import { datedifference } from "@/utils/utils";
import styles from "./index.module.scss";

function DateFormReservation({ dates, setDates }) {
  const handleSetDates = (value, str) => {
    if (str === "check_in" && datedifference(value, dates.check_out) > 0) {
      setDates((prev) => {
        return {
          ...prev,
          check_in: value,
        };
      });
    } else if (
      str === "check_out" &&
      datedifference(dates.check_in, value) > 0
    ) {
      setDates((prev) => {
        return {
          ...prev,
          check_out: value,
        };
      });
    } else {
      return;
    }
  };

  return (
    <form>
      <label>
        Check in
        <input
          type="date"
          onChange={(e) => handleSetDates(e.target.value, "check_in")}
          value={dates.check_in}
        />
      </label>

      <label>
        Check out
        <input
          type="date"
          onChange={(e) => handleSetDates(e.target.value, "check_out")}
          value={dates.check_out}
        />
      </label>
    </form>
  );
}

export default DateFormReservation;
