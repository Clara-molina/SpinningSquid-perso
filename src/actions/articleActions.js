export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';
export const GET_ARTICLE_LIST_SUCCESS = 'GET_ARTICLE_LIST_SUCCESS';
export const GET_ARTICLE_DETAILS = 'GET_ARTICLE_DETAILS';
export const GET_ARTICLE_DETAILS_SUCCESS = 'GET_ARTICLE_DETAILS_SUCCESS';
export const UPDATE_ARTICLE_DETAILS = 'UPDATE_ARTICLE_DETAILS';
export const UPDATE_ARTICLE_DETAILS_SUCCESS = 'UPDATE_ARTICLE_DETAILS_SUCCESS';
export const DELETE_ARTICLE_DETAILS = 'DELETE_ARTICLE_DETAILS';
export const DELETE_ARTICLE_DETAILS_SUCCESS = 'DELETE_ARTICLE_DETAILS_SUCCESS';

//------------------------------------------------------------
// à compléter
export const submitGetArticleList = () => ({
  type: GET_ARTICLE_LIST,
});
export const successSubmitGetArticleList = (message) => ({
  type: GET_ARTICLE_LIST_SUCCESS,
  message_success: message,
});
export const submitGetArticleDetails = () => ({
  type: GET_ARTICLE_DETAILS,
});
export const successSubmitGetArticleDetails = (message) => ({
  type: GET_ARTICLE_DETAILS_SUCCESS,
  message_success: message,
});
export const submitUpdateArticle = () => ({
  type: UPDATE_ARTICLE_DETAILS,
});
export const successSubmitUpdateArticle = (message) => ({
  type: UPDATE_ARTICLE_DETAILS_SUCCESS,
  message_success: message,
});
export const submitDeleteArticle = () => ({
  type: DELETE_ARTICLE_DETAILS,
});
export const successSubmitDeleteArticle = (message) => ({
  type: DELETE_ARTICLE_DETAILS_SUCCESS,
  message_success: message,
});
