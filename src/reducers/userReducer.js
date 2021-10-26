import { UPDATE_FIELD, SUCCESS_LOGIN } from 'src/actions/userActions';

export const initialState = {
  isLogged: false,
  trystate: 'initial State UserReducer OK',
  name: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'name') {
        return {
          ...state,
          name: action.fieldValue,
        };
      }

      if (action.fieldName === 'password') {
        return {
          ...state,
          password: action.fieldValue,
        };
      }
      return state;

    case SUCCESS_LOGIN:
      console.log('on envoit ou?');
      return {
        ...state,
        name: action.name,
        token: action.token,
        isLogged: true,
      };

    default:
      return state;
  }
};

export default reducer;
