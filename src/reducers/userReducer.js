export const initialState = {
  logged: false,
  trystate: "trystateOK",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      //console.log(state);
      return state;
  }
};

export default reducer;
