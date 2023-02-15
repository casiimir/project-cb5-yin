const cases = {
  ADD_LOCATION: "ADD_LOCATION",

  ADD_ADULTS: "ADD_ADULTS",
  REMOVE_ADULTS: "REMOVE_ADULTS",

  ADD_CHILDREN: "ADD_CHILDREN",
  REMOVE_CHILDREN: "REMOVE_CHILDREN",

  ADD_ROOMS: "ADD_ROOMS",
  REMOVE_ROOMS: "REMOVE_ROOMS",
};
const reducer = (state, action) => {
  switch (action.type) {
    case cases.ADD_LOCATION:
      return { ...state, location: action.payload };
    case cases.ADD_ADULTS:
      console.log({
        ...state,
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
      });
      if (state.prenotation.adults >= 2) {
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            adults: state.prenotation.adults - 1,
          },
        };
      } else
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            adults: state.prenotation.adults,
          },
        };

    case cases.ADD_CHILDREN:
      console.log({
        ...state,
      });
      return {
        ...state,
        prenotation: {
          ...state.prenotation,
          children: state.prenotation.children + 1,
        },
      };
    case cases.REMOVE_CHILDREN:
      console.log({
        ...state,
      });
      if (state.prenotation.children >= 1) {
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            children: state.prenotation.children - 1,
          },
        };
      } else
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            children: state.prenotation.children,
          },
        };
    case cases.ADD_ROOMS:
      console.log({
        ...state,
      });
      return {
        ...state,
        prenotation: {
          ...state.prenotation,
          rooms: state.prenotation.rooms + 1,
        },
      };
    case cases.REMOVE_ROOMS:
      console.log({
        ...state,
      });
      if (state.prenotation.rooms >= 2) {
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            rooms: state.prenotation.rooms - 1,
          },
        };
      } else
        return {
          ...state,
          prenotation: {
            ...state.prenotation,
            rooms: state.prenotation.rooms,
          },
        };
  }
};
export default reducer;
