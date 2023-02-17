import { useReducer, useContext } from "react";
import AppContext from "@/store/context";
import Button from "@/atoms/Button/Button";
const initialState = { count: 1 };

function CounterCamere() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch, state } = useContext(AppContext);

  return (
    <>
      <Button
        type="operation"
        content="-"
        onClick={() => dispatch({ type: "REMOVE_ROOMS" })}
      />
      {state.prenotation.rooms}
        <Button
          type="operation"
          content="+"
          onClick={() => dispatch({ type: "ADD_ROOMS" })}
        />
    </>
  );
}
export default CounterCamere;
