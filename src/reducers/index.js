import { combineReducers } from 'redux';
import userReducer from './userReducer';
import skateparkReducer from './skateparkReducer';

const rootReducer = combineReducers({
  user: userReducer,
  skatepark: skateparkReducer,
});

export default rootReducer;
