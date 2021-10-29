import { UPDATE_FIELD, SUCCESS_LOGIN } from 'src/actions/userActions';

export const initialState = {
  isLogged: false,
  usernameInscription: '',
  passwordInscription: '',
  email: '',
  lastname: '',
  firstname: '',
  street: '',
  postal: '',
  city: '',
  usernameConnexion: '',
  passwordConnexion: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'usernameInscription') {
        return {
          ...state,
          usernameInscription: action.fieldValue,
        };
      }
      if (action.fieldName === 'usernameConnexion') {
        return {
          ...state,
          usernameConnexion: action.fieldValue,
        };
      }

      if (action.fieldName === 'lastname') {
        return {
          ...state,
          lastname: action.fieldValue,
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

      if (action.fieldName === 'passwordConnexion') {
        return {
          ...state,
          passwordConnexion: action.fieldValue,
        };
      }
      if (action.fieldName === 'passwordInscription') {
        return {
          ...state,
          passwordInscription: action.fieldValue,
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
