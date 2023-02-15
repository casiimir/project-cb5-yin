import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
const initialState = { count: 1 };
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
function CounterAdulti() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "REMOVE_ADULTS" })}>
        <BsDashSquare />
      </button>
      {state.prenotation.adults}
      <button type="button" onClick={() => dispatch({ type: "ADD_ADULTS" })}>
        <BsPlusSquare />
      </button>
    </>
  );
}
export default CounterAdulti;
