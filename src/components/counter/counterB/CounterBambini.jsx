import { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement": {
      if (state.count >= 1) {
        return { count: state.count - 1 };
      }
      return { count: state.count };
    }
    default:
      throw new Error();
  }
}

function CounterBambini() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      {state.count}
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </>
  );
}
export default CounterBambini;
