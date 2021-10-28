import { UPDATE_FIELD, SUCCESS_LOGIN } from 'src/actions/userActions';

export const initialState = {
  isLogged: false,
  name: '',
  firstname: '',
  street: '',
  postal: '',
  city: '',
  email: '',
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

      if (action.fieldName === 'firstname') {
        return {
          ...state,
          firstname: action.fieldValue,
        };
      }

      if (action.fieldName === 'street') {
        return {
          ...state,
          street: action.fieldValue,
        };
      }

      if (action.fieldName === 'postal') {
        return {
          ...state,
          postal: action.fieldValue,
        };
      }

      if (action.fieldName === 'city') {
        return {
          ...state,
          city: action.fieldValue,
        };
      }

      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.fieldValue,
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
