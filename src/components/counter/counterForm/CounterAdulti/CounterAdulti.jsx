import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
const initialState = { count: 1 };
import Button from "@/atoms/Button/Button";
function CounterAdulti() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <Button
        type="operation"
        content="-"
        onClick={() => dispatch({ type: "REMOVE_ADULTS" })}
      />
      {state.prenotation.adults}
      <Button
        type="operation"
        content="+"
        onClick={() => dispatch({ type: "ADD_ADULTS" })}
      />
    </>
  );
}
export default CounterAdulti;
