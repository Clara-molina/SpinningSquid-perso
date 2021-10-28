import { combineReducers } from 'redux';
import userReducer from './userReducer';
import skateparkReducer from './skateparkReducer';
import marketplaceReducer from './marketplaceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  skatepark: skateparkReducer,
  marketplace: marketplaceReducer,
});

export default rootReducer;
