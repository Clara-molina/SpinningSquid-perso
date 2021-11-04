import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  GET_SKATEPARK_LIST_SUCCESS,
  SUBMIT_ADD_SPOT_SUCCESS,
} from 'src/actions/skateparkActions';

export const initialState = {
  skateparkLocationList: ['un', 'deux', 'trois'],
  searchFieldTown: 'searchFieldTown test state',
  responseAPI: {},
  skateparkToDisplay_Id: 'initial state showDetails',
  addSpot: {
    categorySkatepark: false,
    categoryPumptrack: false,
    categoryStreet: false,
    street: '',
    postal: '',
    town: '',
    parking: false,
    water: false,
    trashcan: false,
    lighting: false,
    table: false,
    benche: false,
    etatRadioBtn: 'initial etatRadioBtn value into state',
  },
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
      if (action.fieldName === 'categorySkatepark') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categorySkatepark: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'categoryPumptrack') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categoryPumptrack: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'categoryStreet') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categoryStreet: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'parking') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            parking: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'water') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            water: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'trashcan') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            trashcan: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'lighting') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            lighting: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'table') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            table: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'benche') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            benche: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotStreet') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            street: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotPostal') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            street: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotTown') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            street: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'uploadImage') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            uploadedImg: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'tryPromiseField') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            tryPromiseField: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotNew') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'addSpotNew',
          },
        };
      }
      if (action.fieldName === 'addSpotGood') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'addSpotGood',
          },
        };
      }
      if (action.fieldName === 'addSpotWay') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'addSpotWay',
          },
        };
      }
      if (action.fieldName === 'addSpotEndoflife') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'addSpotEndoflife',
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
