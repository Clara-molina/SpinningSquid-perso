export const GET_SKATEPARK_LIST = 'GET_SKATEPARK_LIST';
export const GET_SKATEPARK_LIST_SUCCESS = 'GET_SKATEPARK_LIST_SUCCESS';
export const UPLOAD_IMG_LOCAL = 'UPLOAD_IMG_LOCAL';
export const SUBMIT_ADD_SPOT = 'SUBMIT_ADD_SPOT';
export const SUBMIT_ADD_SPOT_SUCCESS = 'SUBMIT_ADD_SPOT_SUCCESS';

export const successGetSkateparkList = (data) => ({
  type: GET_SKATEPARK_LIST_SUCCESS,
  responseAPI: data,
});
export const callGetSkateparkList = () => ({
  type: GET_SKATEPARK_LIST,
});
export const submitAddSpot = () => ({
  type: SUBMIT_ADD_SPOT,
});
export const successSubmitAddSpot = (message) => ({
  type: SUBMIT_ADD_SPOT_SUCCESS,
  message_success: message,
});
