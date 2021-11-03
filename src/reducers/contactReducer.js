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
          firstname: action.fieldValue,
        };
      }
      if (action.fieldName === 'name') {
        return {
          ...state,
          name: action.fieldValue,
        };
      }
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.fieldValue,
        };
      }
      if (action.fieldName === 'message') {
        return {
          ...state,
          message: action.fieldValue,
        };
      }

    case SUBMIT_MESSAGE_SUCCESS:
      return {
        ...state,
        response_API: action.message_success,
      };
    default:
      return state;
  }
};

export default reducer;
