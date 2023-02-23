import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
import Button from "@/atoms/Button/Button";
function CounterAdulti() {
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <Button
        type="button"
        style="operation"
        content="-"
        onClick={() => dispatch({ type: "REMOVE_ADULTS" })}
      />
      {state.prenotation.adults}
      <Button
        type="button"
        style="operation"
        content="+"
        onClick={() => dispatch({ type: "ADD_ADULTS" })}
      />
    </>
  );
}
export default CounterAdulti;
