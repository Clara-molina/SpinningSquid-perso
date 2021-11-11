import { UPDATE_FIELD } from 'src/actions/userActions';
import {
  ARTICLE_ON_LOADING,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_DETAILS_SUCCESS,
  POST_ADD_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_DETAILS_SUCCESS,
  DELETE_ARTICLE_DETAILS_SUCCESS,
} from 'src/actions/communityActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'communityField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
  addArticle: {
    title: '',
    date: '',
    place: '',
    uploadedImg: 'initial state',
    story: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'title') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            title: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'date') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            date: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'place') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            place: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'image') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            uploadedImg: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'story') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            story: action.fieldValue,
          },
        };
      }
      return state;

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
    case POST_ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message_success,
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
    default:
      return state;
  }
};

export default reducer;
