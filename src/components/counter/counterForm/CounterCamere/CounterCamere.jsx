import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
const initialState = { count: 1 };

function CounterCamere() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "REMOVE_ROOMS" })}>
        <BsDashSquare />
      </button>
      {state.prenotation.rooms}
      <button type="button" onClick={() => dispatch({ type: "ADD_ROOMS" })}>
        <BsPlusSquare />
      </button>
    </>
  );
}
export default CounterCamere;
