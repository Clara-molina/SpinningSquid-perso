import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  ARTICLE_ON_LOADING,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_DETAILS_SUCCESS,
  UPDATE_ARTICLE_DETAILS_SUCCESS,
  DELETE_ARTICLE_DETAILS_SUCCESS,
} from 'src/actions/communityActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'communityField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //-----------------------------------------------------------------
    // à  compléter
    case ARTICLE_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };
    case GET_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    case UPDATE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    case DELETE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    //--------------------------------------------------------------------
    default:
      return state;
  }
};

export default reducer;
