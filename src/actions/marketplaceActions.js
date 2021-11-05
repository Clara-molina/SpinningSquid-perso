export const GET_MARKETPLACE_ARTICLE_LIST = 'GET_MARKETPLACE_ARTICLE_LIST';
export const GET_MARKETPLACE_ARTICLE_DETAILS =
  'GET_MARKETPLACE_ARTICLE_DETAILS';
export const GET_MARKETPLACE_ARTICLE_LIST_SUCCESS =
  'GET_MARKETPLACE_ARTICLE_LIST_SUCCESS';

export const submitMarketplaceSearch = (optionsSearch) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST,
});
export const submitMarketplaceSearchDetails = (options) => ({
  type: GET_MARKETPLACE_ARTICLE_DETAILS,
  id: options,
});
export const successMarketplaceSearch = (data) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  responseApi: data,
});
