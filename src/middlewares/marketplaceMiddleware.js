import axios from 'axios';
import { baseURI } from 'src/routesBack';
import {
  GET_MARKETPLACE_INITIAL_LIST,
  GET_MARKETPLACE_ARTICLE_LIST,
  GET_MARKETPLACE_ARTICLE_DETAILS,
  POST_MARKETPLACE_ADD_ARTICLE,
  POST_MARKETPLACE_UPDATE_ARTICLE,
  POST_MARKETPLACE_DELETE_ARTICLE,
  successMarketplaceSearch,
  successMarketplaceInitialSearch,
  successMarketplaceAddArticle,
  successMarketplaceUpdateArticle,
  successMarketplaceDeleteArticle,
} from 'src/actions/marketplaceActions';

const marketplaceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MARKETPLACE_INITIAL_LIST:
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
      setTimeout(() => {
        store.dispatch(
          successMarketplaceInitialSearch(
            'a remplacer par le call API dans marketplaceMiddleware'
          )
        );
        console.log('call API ok');
      }, 3000);

      break;
    case GET_MARKETPLACE_ARTICLE_LIST:
      const endPointSale = '/sale?_embed=true';
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
      setTimeout(() => {
        store.dispatch(
          successMarketplaceSearch(
            'a remplacer par le call API dans marketplaceMiddleware'
          )
        );
      }, 3000);

      break;
    case GET_MARKETPLACE_ARTICLE_DETAILS:
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
        successMarketplaceSearchDetails(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    case POST_MARKETPLACE_ADD_ARTICLE:
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
        successMarketplaceAddArticle(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    case POST_MARKETPLACE_UPDATE_ARTICLE:
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
        successMarketplaceUpdateArticle(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    case POST_MARKETPLACE_DELETE_ARTICLE:
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
        successMarketplaceDeleteArticle(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default marketplaceMiddleware;
