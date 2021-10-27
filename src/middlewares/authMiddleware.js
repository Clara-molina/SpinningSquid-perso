import axios from 'axios';
import {
  SUBMIT_LOGIN,
  successLogin,
  SUBMIT_REGISTER,
} from '../actions/userActions';
import {
  baseURIUser,
  baseSpinningSquid,
} from '../routesBack';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log('envoi requete login');
      console.log('envoi requete name: ' + store.getState().user.name);
      console.log('envoi requete password: ' + store.getState().user.password);
      // store.dispatch(successLogin('toto', 'tokendeTOTO'));
      axios.post('http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/jwt-auth/v1/token', {
        username: store.getState().user.name,
        password: store.getState().user.password,
      })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          const doneLogin = successLogin(response.data.usernanme, response.data.token);
          if (response.data.token) {
            const JSONInformationsObject = JSON.stringify(response.data);
            localStorage.setItem('userData', JSONInformationsObject);
          }
          store.dispatch(doneLogin);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case SUBMIT_REGISTER:
      console.log('envoi requete login');
      console.log('envoi requete name: ' + store.getState().user.name);
      console.log('envoi requete password: ' + store.getState().user.password);
      console.log('envoi requete email: ' + store.getState().user.email);
      // store.dispatch(successLogin('toto', 'tokendeTOTO'));
      axios.post('http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/spinningsquid/v1/newuser-save', {
        email: store.getState().user.email,
        username: store.getState().user.name,
        password: store.getState().user.password,
      })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    default:
  }
  next(action);
};
export default authMiddleware;
