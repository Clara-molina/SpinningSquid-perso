import { createStore, applyMiddleware, compose } from 'redux';

import authMiddleware from 'src/middlewares/authMiddleware';
import skateparkMiddleware from 'src/middlewares/skateparkMiddleware';
import marketplaceMiddleware from 'src/middlewares/marketplaceMiddleware';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, skateparkMiddleware, marketplaceMiddleware),
);

const store = createStore(reducer, enhancers);
export default store;
