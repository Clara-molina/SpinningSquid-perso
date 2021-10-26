import { UPDATE_FIELD } from "src/actions/userActions";

export const initialState = {
  logged: false,
  trystate: "initial State UserReducer OK",
  name: "",
  password: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === "name") {
        return {
          ...state,
          name: action.fieldValue,
        };
      }

      if (action.fieldName === "password") {
        return {
          ...state,
          password: action.fieldValue,
        };
      }
      console.log("ne rentre pas dans le if du reducer");
      console.log(action);
      return state;

    default:
      //console.log(state);
      return state;
  }
};

export default reducer;
