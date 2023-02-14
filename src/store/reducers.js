const cases = {
  ADD_LOCATION: "ADD_LOCATION"

}
const reducer = (state, action) => {
  switch (action.type) {
    case cases.ADD_LOCATION:
      return {...state, location: action.payload};
    case "case2":
      return {};
  }
};
export default reducer;
