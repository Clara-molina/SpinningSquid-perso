import { UPDATE_FIELD } from 'src/actions/userActions';
import { SUBMIT_NEWSLETTER_SUCCESS } from 'src/actions/newsLetterActions';

export const initialState = {
  email: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'email') {
        return {
          ...state,
          firstname: action.fieldValue,
        };
      }

    case SUBMIT_NEWSLETTER_SUCCESS:
      return {
        ...state,
        response_API: action.message_success,
      };
    default:
      return state;
  }
};

export default reducer;