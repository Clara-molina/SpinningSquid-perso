import {
  UPDATE_FIELD,
  SUCCESS_LOGIN,
  SUCCESS_LOGOUT,
  FILL_STATE_USERDATA,
  SUCCESS_REGISTER,
} from 'src/actions/userActions';

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
  profile: {
    usernameEdit: 'initial state name',
    passwordEdit: 'initial state',
    emailEdit: 'initial state',
    lastnameEdit: 'initial state',
    firstnameEdit: 'initial state',
    streetEdit: 'initial state',
    postalEdit: 'initial state',
    cityEdit: 'initial state',
    avatarImage: 'initial state',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FILL_STATE_USERDATA:
      return {
        ...state,
        isLogged: action.userData,
      };
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
      if (action.fieldName === 'usernameEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            usernameEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'lastnameEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            lastnameEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'firstnameEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            firstnameEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'streetEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            streetEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'postalEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            postalEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'cityEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            cityEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'emailEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            emailEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'passwordEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            passwordEdit: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'avatarImageEdit') {
        return {
          ...state,
          profile: {
            ...state.profile,
            avatarImageEdit: action.fieldValue,
          },
        };
      }
      return state;

    case SUCCESS_LOGIN:
      console.log('case: SUCCESS_LOGIN');
      return {
        ...state,
        isLogged: true,
        username: action.usernameConnexion,
      };

    case SUCCESS_LOGOUT:
      console.log('case: SUCCESS_LOGOUT');
      return {
        ...state,
        isLogged: false,
        usernameConnexion: '',
        passwordConnexion: '',
        clear: localStorage.clear(),
      };

    case SUCCESS_REGISTER:
      console.log('case: SUCCESS_REGISTER');
      return {
        ...state,
        isLogged: false,
        usernameInscription: '',
        passwordInscription: '',
        email: '',
        lastname: '',
        firstname: '',
        street: '',
        postal: '',
        city: '',
      };

    default:
      return state;
  }
};

export default reducer;
