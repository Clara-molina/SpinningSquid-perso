export const SKATEPARK_ON_LOADING = 'SKATEPARK_ON_LOADING';
export const SKATEPARK_DETAILS_ON_LOADING = 'SKATEPARK_DETAILS_ON_LOADING';
export const GET_SKATEPARK_LIST = 'GET_SKATEPARK_LIST';
export const GET_SKATEPARK_LIST_SUCCESS = 'GET_SKATEPARK_LIST_SUCCESS';
export const GET_SKATEPARK_DETAILS = 'GET_SKATEPARK_DETAILS';
export const GET_SKATEPARK_DETAILS_SUCCESS = 'GET_SKATEPARK_DETAILS_SUCCESS';
export const UPLOAD_IMG_LOCAL = 'UPLOAD_IMG_LOCAL';
export const SUBMIT_ADD_SPOT = 'SUBMIT_ADD_SPOT';
export const SUBMIT_ADD_SPOT_SUCCESS = 'SUBMIT_ADD_SPOT_SUCCESS';
export const SUBMIT_UPDATE_SPOT = 'SUBMIT_UPDATE_SPOT';
export const SUBMIT_UPDATE_SPOT_SUCCESS = 'SUBMIT_UPDATE_SPOT_SUCCESS';
export const SUBMIT_DELETE_SPOT = 'SUBMIT_DELETE_SPOT';
export const SUBMIT_DELETE_SPOT_SUCCESS = 'SUBMIT_DELETE_SPOT_SUCCESS';
export const GET_SKATEPARK_BY_CITY = 'GET_SKATEPARK_BY_CITY';
export const GET_SKATEPARK_BY_CITY_SUCCESS = 'GET_SKATEPARK_BY_CITY_SUCCESS';

export const setOnLoadingStatus = () => ({
  type: SKATEPARK_ON_LOADING,
});
export const setOnSkateparkDetailsLoading = () => ({
  type: SKATEPARK_DETAILS_ON_LOADING,
});
export const callGetSkateparkList = () => ({
  type: GET_SKATEPARK_LIST,
});
export const successGetSkateparkList = (data) => ({
  type: GET_SKATEPARK_LIST_SUCCESS,
  responseAPI: data,
  loaded: true,
});

export const callGetSkateparkDetails = (skateparkId) => ({
  type: GET_SKATEPARK_DETAILS,
  skateparkId: skateparkId,
});
export const successGetSkateparkDetails = (data) => ({
  type: GET_SKATEPARK_DETAILS_SUCCESS,
  responseAPI: data,

export const getSkateparkByCity = () => ({
  type: GET_SKATEPARK_BY_CITY,
});
export const successGetSkateparkByCity = (data) => ({
  type: GET_SKATEPARK_BY_CITY_SUCCESS,
  responseAPI: data,
  loaded: true,

});
export const submitAddSpot = () => ({
  type: SUBMIT_ADD_SPOT,
});
export const successSubmitAddSpot = (message) => ({
  type: SUBMIT_ADD_SPOT_SUCCESS,
  message_success: message,
});

//------------------------------------------------------------
// à compléter
export const submitUpdateSpot = () => ({
  type: SUBMIT_UPDATE_SPOT,
});
export const successSubmitUpdateSpot = (message) => ({
  type: SUBMIT_UPDATE_SPOT_SUCCESS,
  message_success: message,
});
export const submitDeleteSpot = () => ({
  type: SUBMIT_DELETE_SPOT,
});
export const successSubmitDeleteSpot = (message) => ({
  type: SUBMIT_DELETE_SPOT_SUCCESS,
  message_success: message,
});
