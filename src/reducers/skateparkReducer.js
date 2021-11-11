import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  FILL_STATE,
  SKATEPARK_ON_LOADING,
  UPDATE_LOCATION_ON_MAP,
  SKATEPARK_DETAILS_ON_LOADING,
  GET_SKATEPARK_LIST_SUCCESS,
  GET_SKATEPARK_DETAILS_SUCCESS,
  SUBMIT_ADD_SPOT_SUCCESS,
  SUBMIT_UPDATE_SPOT_SUCCESS,
  SUBMIT_DELETE_SPOT_SUCCESS,
  GET_SKATEPARK_BY_CITY_SUCCESS,
} from 'src/actions/skateparkActions';

export const initialState = {
  skateparkLocationList: ['un', 'deux', 'trois'],
  searchFieldTown: 'searchFieldTown test state',
  responseAPI: {},
  isLoaded: false,
  isLoading: false,
  locationOnMap: {
    lat: 37.42216,
    lng: -122.08427,
  },
  skateparkToDisplay_Id: 'initial state showDetails',
  addSpot: {
    id: '',
    title: '',
    categorySkatepark: false,
    categoryPumptrack: false,
    categoryStreet: false,
    street: '',
    postal: '',
    town: '',
    latitude: '',
    longitude: '',
    parking: false,
    water: false,
    trashcan: false,
    lighting: false,
    table: false,
    benche: false,
    etatRadioBtn: 'initial etatRadioBtn value into state',
    uploadedImg: 'initial state',
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
      if (action.fieldName === 'titleSkatepark') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            title: action.fieldValue,
          },
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
            postal: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotTown') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            town: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotlongitude') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            longitude: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotlatitude') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            latitude: action.fieldValue,
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
      if (action.fieldName === 'addSpotNew') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'New',
          },
        };
      }
      if (action.fieldName === 'addSpotGood') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Good',
          },
        };
      }
      if (action.fieldName === 'addSpotWay') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Way',
          },
        };
      }
      if (action.fieldName === 'addSpotEndoflife') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Endoflife',
          },
        };
      }

    case SKATEPARK_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LOCATION_ON_MAP:
      return {
        ...state,
        locationOnMap: action.locationOnMap,
      };
    case SKATEPARK_DETAILS_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SKATEPARK_LIST_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoaded: action.loaded,
      };
    case GET_SKATEPARK_DETAILS_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoaded: true,
      };
    case GET_SKATEPARK_BY_CITY_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoaded: action.loaded,
      };
    case SUBMIT_ADD_SPOT_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case SUBMIT_UPDATE_SPOT_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case FILL_STATE:
      return {
        ...state,
        addSpot: {
          ...state.addSpot,
          id: action.skateparkId,
          title: '',
          categorySkatepark: false,
          categoryPumptrack: false,
          categoryStreet: false,
          street: '',
          postal: '',
          town: '',
          latitude: '',
          longitude: '',
          parking: false,
          water: false,
          trashcan: false,
          lighting: false,
          table: false,
          benche: false,
          etatRadioBtn: 'initial etatRadioBtn value into state',
          uploadedImg: 'initial state',
        },
      };
    //--------------------------------------------------------------
    // à compléter
    case SUBMIT_DELETE_SPOT_SUCCESS:
      return {
        ...state,
      };
    //-------------------------------------------------------------
    default:
      return state;
  }
};

export default reducer;
