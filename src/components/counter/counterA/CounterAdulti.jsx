import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
const initialState = { count: 1 };

function CounterAdulti() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "REMOVE_ADULTS" })}>
        -
      </button>
      {state.prenotation.adults}
      <button type="button" onClick={() => dispatch({ type: "ADD_ADULTS" })}>
        +
      </button>
    </>
  );
}
export default CounterAdulti;
