export const GET_SKATEPARK_LIST = 'GET_SKATEPARK_LIST';
export const GET_SKATEPARK_LIST_SUCCESS = 'GET_SKATEPARK_LIST_SUCCESS';

export const successGetSkateparkList = (data) => ({
  type: GET_SKATEPARK_LIST_SUCCESS,
  responseAPI: data,
});
export const callGetSkateparkList = () => ({
  type: GET_SKATEPARK_LIST,
});
