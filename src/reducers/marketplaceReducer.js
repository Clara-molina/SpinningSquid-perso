import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  MARKETPLACE_ON_LOADING,
  GET_MARKETPLACE_INITIAL_LIST_SUCCESS,
  GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  POST_MARKETPLACE_ADD_ARTICLE_SUCCESS,
  POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS,
  POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS,
} from 'src/actions/marketplaceActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'marketplaceField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
  addSale: {
    title: '',
    place: '',
    price: '',
    image: 'initial state',
    story: '',
  },
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
      if (action.fieldName === 'addSaleTitle') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            title: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSalePlace') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            place: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSalePrice') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            price: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSaleImage') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            image: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSaleDescription') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            story: action.fieldValue,
          },
        };
      }
      return state;

    case MARKETPLACE_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MARKETPLACE_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
      };
    case GET_MARKETPLACE_INITIAL_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };

    case POST_MARKETPLACE_ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    case POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    default:
      return state;
  }
};

export default reducer;
