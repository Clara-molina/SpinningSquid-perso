import axios from 'axios';
import { SUBMIT_LOGIN, successLogin } from '../actions/userActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log('envoi requete login');
      console.log('envoi requete name: ' + store.getState().user.name);
      console.log('envoi requete password: ' + store.getState().user.password);
      store.dispatch(successLogin('toto', 'tokendeTOTO'));
      //   axios
      //     .post('http://localhost:3001/login', {
      //       email: store.getState().email,
      //     })
      //     .then((response) => {
      //       console.log(response);
      //       const actionSuccess = successLogin(response.data.pseudo);
      //       store.dispatch(actionSuccess);
      //     })
      //     .catch((error) => {
      //       console.warn(error);
      //     });

      break;

    default:
  }
  next(action);
};
export default authMiddleware;
