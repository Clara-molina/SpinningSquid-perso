export const GET_MARKETPLACE_ARTICLE_LIST = 'GET_MARKETPLACE_ARTICLE_LIST';
export const GET_MARKETPLACE_ARTICLE_LIST_SUCCESS =
  'GET_MARKETPLACE_ARTICLE_LIST_SUCCESS';

export const submitMarketplaceSearch = (optionsSearch) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST,
});
export const successMarketplaceSearch = (data) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  responseApi: data,
});
