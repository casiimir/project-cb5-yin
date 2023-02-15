const cases = {
  ADD_LOCATION: "ADD_LOCATION",
  ADD_ADULTS: "ADD_ADULTS",
  REMOVE_ADULTS: "REMOVE_ADULTS",
};
const reducer = (state, action) => {
  switch (action.type) {
    case cases.ADD_LOCATION:
      return { ...state, location: action.payload };
    case cases.ADD_ADULTS:
      console.log({
        ...state,
        prenotation: {
          ...state.prenotation,
          adults: action.payload,
        },
      });
      return {
        ...state,
        prenotation: {
          ...state.prenotation,
          adults: state.prenotation.adults + 1,
        },
      };
    case cases.REMOVE_ADULTS:
      console.log({
        ...state,
        prenotation: {
          ...state.prenotation,
          adults: action.payload,
        },
      });
      return {
        ...state,
        prenotation: {
          ...state.prenotation,
          adults: state.prenotation.adults - 1,
        },
      };
  }
};
export default reducer;
