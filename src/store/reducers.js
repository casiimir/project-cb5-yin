const cases = {
  ADD_LOCATION: "ADD_LOCATION",
  REMOVE_LOCATION: "REMOVE_LOCATION",

  ADD_ADULTS: "ADD_ADULTS",
  REMOVE_ADULTS: "REMOVE_ADULTS",

  ADD_CHILDREN: "ADD_CHILDREN",
  REMOVE_CHILDREN: "REMOVE_CHILDREN",

  ADD_ROOMS: "ADD_ROOMS",
  REMOVE_ROOMS: "REMOVE_ROOMS",
  SET_AUTH: "SET_AUTH",
  LOGOUT: "LOGOUT",

  TOGGLE_STAR1: "TOGGLE_STAR1",
  TOGGLE_STAR2: "TOGGLE_STAR2",
  TOGGLE_STAR3: "TOGGLE_STAR3",
  TOGGLE_STAR4: "TOGGLE_STAR4",
  TOGGLE_STAR5: "TOGGLE_STAR5",

  ADD_FAVOURITE: "ADD_FAVOURITE",
  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
  SET_FAVOURITES: "SET_FAVOURITES",

  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const counterCases = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET: "SET",
  SETPAGES: "SETPAGES",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case counterCases.SETPAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case counterCases.INCREMENT:
      return {
        current: state.current + 1,
      };
    case counterCases.DECREMENT:
      return {
        ...state,
        current: state.current - 1,
      };
    case counterCases.SET:
      return {
        ...state,
        current: action.payload,
      };
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case cases.TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case cases.SET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };
    case cases.ADD_FAVOURITE:
      let updatedFav = [...state.favourites, action.payload];
      localStorage.setItem("next-trip-favourites", JSON.stringify(updatedFav));
      return {
        ...state,
        favourites: updatedFav,
      };
    case cases.REMOVE_FAVOURITE:
      const updatedFavourites = state.favourites.filter(
        (el) => el.hotel_id !== action.payload
      );
      console.log(state.favourites, updatedFavourites);
      localStorage.setItem(
        "next-trip-favourites",
        JSON.stringify(updatedFavourites)
      );
      return {
        ...state,
        favourites: updatedFavourites,
      };
    case cases.ADD_LOCATION:
      return { ...state, location: action.payload };

    case cases.REMOVE_LOCATION:
      return {
        ...state,
        location: {},
      };

    case cases.ADD_ADULTS:
      return {
        ...state,
        prenotation: {
          ...state.prenotation,
          adults: state.prenotation.adults + 1,
        },
      };

    case cases.REMOVE_ADULTS:
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
      if (state.prenotation.children > 1) {
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

    case cases.SET_AUTH:
      if (!action.payload)
        return {
          ...state,
          username: "",
        };

      const newAuthState = {
        status: action.payload.status,
        username: action.payload.username ? action.payload.username : "",
      };

      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return {
        ...state,
        auth: newAuthState,
      };

    case cases.LOGOUT:
      localStorage.removeItem("auth");
      return {
        ...state,
        auth: {
          ...state.auth,
          username: "",
        },
      };
    case cases.TOGGLE_STAR1:
      console.log(stateFilter.star1);
      break;
  }
};
export { cases, reducer, counterCases, counterReducer };
