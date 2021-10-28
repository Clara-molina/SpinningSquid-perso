import axios from 'axios';
import { baseURI } from 'src/routesBack';
import {
  GET_MARKETPLACE_ARTICLE_LIST,
  successMarketplaceSearch,
} from 'src/actions/marketplaceActions';

const marketplaceMiddleware = (store) => (next) => (action) => {
  const endPointSale = '/sale?_embed=true';
  switch (action.type) {
    case GET_MARKETPLACE_ARTICLE_LIST:
      // axios
      //   .get(baseURI + endPointSale)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      // store.dispatch(
      //   successGetSkateparkList(response.data)
      // );
      // })
      // .catch((error) => {
      //   console.warn(error);
      // });
      store.dispatch(
        successMarketplaceSearch(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default marketplaceMiddleware;
