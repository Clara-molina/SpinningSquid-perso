import { UPDATE_FIELD } from 'src/actions/userActions';
import { SUBMIT_MESSAGE_SUCCESS } from 'src/actions/contactActions';

export const initialState = {
  firstname: ['un', 'deux', 'trois'],
  name: 'searchFieldTown test state',
  email: {},
  message: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'firstname') {
        return {
          ...state,
          contact: {
            ...state.contact,
            firstname: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'name') {
        return {
          ...state,
          contact: {
            ...state.contact,
            name: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'email') {
        return {
          ...state,
          contact: {
            ...state.contact,
            email: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'message') {
        return {
          ...state,
          contact: {
            ...state.contact,
            message: action.fieldValue,
          },
        };
      }

    case SUBMIT_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    default:
      return state;
  }
};

export default reducer;
