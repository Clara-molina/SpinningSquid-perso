export const SUBMIT_MESSAGE_SUCCESS = 'SUBMIT_MESSAGE_SUCCESS';

export const submitMarketplaceSearch = (optionsSearch) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST,
});
export const successMarketplaceSearch = (data) => ({
  type: GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  responseApi: data,
});
