import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  MARKETPLACE_ON_LOADING,
  GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  GET_MARKETPLACE_INITIAL_LIST_SUCCESS,
} from 'src/actions/marketplaceActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'searchMarketplaceField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'marketplace-search') {
        return {
          ...state,
          searchField: action.fieldValue,
        };
      }
    case GET_MARKETPLACE_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
      };
    case MARKETPLACE_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MARKETPLACE_INITIAL_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };
    default:
      return state;
  }
};

export default reducer;
