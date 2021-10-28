import { UPDATE_FIELD } from 'src/actions/userActions';
import { GET_MARKETPLACE_ARTICLE_LIST_SUCCESS } from 'src/actions/marketplaceActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'searchMarketplaceField initial state',
  responseApi: {},
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
    default:
      return state;
  }
};

export default reducer;
