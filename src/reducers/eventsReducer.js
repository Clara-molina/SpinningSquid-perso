import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_DETAILS_SUCCESS,
  UPDATE_ARTICLE_DETAILS_SUCCESS,
  DELETE_ARTICLE_DETAILS_SUCCESS,
} from 'src/actions/articleActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'searchMarketplaceField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //-----------------------------------------------------------------
    // à  compléter
    case GET_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
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
