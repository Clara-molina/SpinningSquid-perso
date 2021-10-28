import axios from 'axios';
import {
  SUBMIT_LOGIN,
  successLogin,
  SUBMIT_REGISTER,
} from 'src/actions/userActions';
import { baseURIUser, baseSpinningSquid } from 'src/routesBack';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(baseURIUser + '/token', {
          username: store.getState().user.name,
          password: store.getState().user.password,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          const doneLogin = successLogin(
            response.data.usernanme,
            response.data.token,
          );
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
      axios
        .post(baseSpinningSquid + '/newuser-save', {
          username: store.getState().user.username,
          lastname: store.getState().user.lastname,
          firstname: store.getState().user.firstname,
          street: store.getState().user.street,
          postal: store.getState().user.postal,
          city: store.getState().user.city,
          email: store.getState().user.email,
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
