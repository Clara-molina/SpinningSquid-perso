export const MARKETPLACE_ON_LOADING = 'MARKETPLACE_ON_LOADING';
export const GET_MARKETPLACE_INITIAL_LIST = 'GET_MARKETPLACE_INITIAL_LIST';
export const GET_MARKETPLACE_INITIAL_LIST_SUCCESS =
  'GET_MARKETPLACE_INITIAL_LIST_SUCCESS';
export const GET_MARKETPLACE_ARTICLE_LIST = 'GET_MARKETPLACE_ARTICLE_LIST';
export const GET_MARKETPLACE_ARTICLE_DETAILS =
  'GET_MARKETPLACE_ARTICLE_DETAILS';
export const GET_MARKETPLACE_ARTICLE_LIST_SUCCESS =
  'GET_MARKETPLACE_ARTICLE_LIST_SUCCESS';

export const callGetMarketplaceList = () => ({
  type: GET_MARKETPLACE_INITIAL_LIST,
});
export const successMarketplaceInitialSearch = (data) => ({
  type: GET_MARKETPLACE_INITIAL_LIST_SUCCESS,
  responseApi: data,
  loaded: true,
});
export const setOnLoadingStatus = () => ({
  type: MARKETPLACE_ON_LOADING,
});
export const submitMarketplaceSearch = () => ({
  type: GET_MARKETPLACE_ARTICLE_LIST,
});
export const submitMarketplaceSearchDetails = (options) => ({
  type: GET_MARKETPLACE_ARTICLE_DETAILS,
  id: options,
});
export const successMarketplaceSearch = (data) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  responseApi: data,
  loaded: true,
});
