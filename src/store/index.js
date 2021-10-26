import { createStore, applyMiddleware, compose } from 'redux';

import authMiddleware from 'src/middlewares/authMiddleware';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(authMiddleware));

const store = createStore(reducer, enhancers);
export default store;
