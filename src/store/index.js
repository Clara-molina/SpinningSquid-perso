import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducer from 'src/reducers';

import authMiddleware from 'src/middlewares/authMiddleware';
import communityMiddleware from '../middlewares/communityMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';
import marketplaceMiddleware from 'src/middlewares/marketplaceMiddleware';
import newsLetterMiddleware from 'src/middlewares/newsLetterMiddleware';
import skateparkMiddleware from 'src/middlewares/skateparkMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    skateparkMiddleware,
    marketplaceMiddleware,
    communityMiddleware,
    contactMiddleware,
    newsLetterMiddleware
  )
);

export const history = createBrowserHistory();
export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        authMiddleware,
        skateparkMiddleware,
        marketplaceMiddleware,
        communityMiddleware,
        contactMiddleware,
        newsLetterMiddleware
      )
    )
  );

  return store;
}
