import React, { useState } from "react";
import styles from "./index.module.scss";

function CheckBox({ checked, id, label, onChange }) {
  return (
    <label>
      <input
        onClick={() => onChange(id)}
        checked={checked}
        type="checkbox"
        id=""
      />
      {label}
    </label>
  );
}

function SearchPageFilter({ setFilterBy, filterBy }) {
  const HandleCheck = (id) => {
    const updatedstarChecks = filterBy.class.map((box) => {
      if (box.id !== id) return box;
      return {
        ...box,
        checked: !box.checked,
      };
    });
    setFilterBy({ ...filterBy, class: updatedstarChecks });
  };

  return (
    <form className={styles.FilterForm}>
      <input
        className={styles.SubmitButton}
        type="submit"
        value="Submit"
      ></input>
      <div className={styles.Filter}>
        Stelle
        {filterBy.class.map((elem) => {
          return (
            <CheckBox
              id={elem.id}
              checked={elem.checked}
              onChange={HandleCheck}
              label={elem.label}
            />
          );
        })}
      </div>
    </form>
  );
}

export default SearchPageFilter;
