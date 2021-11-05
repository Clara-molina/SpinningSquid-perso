import { combineReducers } from 'redux';
import userReducer from './userReducer';
import skateparkReducer from './skateparkReducer';
import marketplaceReducer from './marketplaceReducer';
import contactReducer from './contactReducer';
import newsLetterReducer from './newsLetterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  skatepark: skateparkReducer,
  marketplace: marketplaceReducer,
  contact: contactReducer,
  newsLetter: newsLetterReducer,
});

export default rootReducer;
