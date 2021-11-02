import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  GET_SKATEPARK_LIST_SUCCESS,
  SUBMIT_ADD_SPOT_SUCCESS,
} from 'src/actions/skateparkActions';

export const initialState = {
  skateparkLocationList: ['un', 'deux', 'trois'],
  searchFieldTown: 'searchFieldTown test state',
  responseAPI: {},
  addStreet: 'initial street value into state',
  addPostal: 'initial postal value into state',
  addTown: 'initial town value into state',
  addSpot: 'initial addSpot value into state',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'town-search') {
        return {
          ...state,
          searchFieldTown: action.fieldValue,
        };
      }
      if (action.fieldName === 'street') {
        return {
          ...state,
          addStreet: action.fieldValue,
        };
      }
      if (action.fieldName === 'postal') {
        return {
          ...state,
          addPostal: action.fieldValue,
        };
      }
      if (action.fieldName === 'town') {
        return {
          ...state,
          addTown: action.fieldValue,
        };
      }
      if (action.fieldName === 'uploadImage') {
        return {
          ...state,
          addSpot: {
            ...state.addspot,
            uploadedImg: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'tryPromiseField') {
        return {
          ...state,
          addSpot: {
            ...state.addspot,
            tryPromiseField: action.fieldValue,
          },
        };
      }
    case GET_SKATEPARK_LIST_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
      };
    case SUBMIT_ADD_SPOT_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    default:
      return state;
  }
};

export default reducer;
