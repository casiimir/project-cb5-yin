import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
const initialState = { count: 1 };

function CounterBambini() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch({ type: "REMOVE_CHILDREN" })}
      >
        <BsDashSquare />
      </button>
      {state.prenotation.children}
      <button type="button" onClick={() => dispatch({ type: "ADD_CHILDREN" })}>
        <BsPlusSquare />
      </button>
    </>
  );
}
export default CounterBambini;
