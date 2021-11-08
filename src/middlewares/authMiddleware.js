import axios from 'axios';
import {
  CHECK_USER,
  GET_USER_INFO,
  SUBMIT_LOGIN,
  successLogin,
  successRegister,
  SUBMIT_REGISTER,
  SUBMIT_UPDATE_PROFILE,
} from 'src/actions/userActions';
import { baseURIUser, baseSpinningSquid, baseURI } from 'src/routesBack';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(baseURIUser + '/token', {
          username: store.getState().user.usernameConnexion,
          password: store.getState().user.passwordConnexion,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          const doneLogin = successLogin(response.data.token);
          if (response.data.token) {
            const JSONInformationsObject = JSON.stringify(response.data);
            localStorage.setItem('userData', JSONInformationsObject);
            localStorage.setItem('logged', true);
          }
          store.dispatch(doneLogin);
        })
        .catch((error) => {
          console.warn(error);
          window.alert(
            `
            Ton mot de passe ou ton nom d'utilisateur est incorrect.
            `
          );
        });

      break;

    case SUBMIT_REGISTER:
      axios
        .post(baseSpinningSquid + '/newuser-save', {
          username: store.getState().user.usernameInscription,
          password: store.getState().user.passwordInscription,
          email: store.getState().user.email,
          lastname: store.getState().user.lastname,
          firstname: store.getState().user.firstname,
          street: store.getState().user.street,
          postal: store.getState().user.postal,
          city: store.getState().user.city,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          window.alert(
            `
            Inscription réussie! Merci de te connecter.
            `
          );
          const clearInput = successRegister();
          store.dispatch(clearInput);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
      case CHECK_USER:
        console.log(JSON.parse(localStorage.getItem('userData')).token);
        const options = {
          headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token
          }
        };
        axios
          .post(baseURIUser + '/token/validate', 
          null,
          options)
          .then((response) => {
            console.log('response from API : ');
            console.log(response.data);
          })
          .catch((error) => {
            console.warn(error);
          });
  
        break;
      case GET_USER_INFO:
        
        const userVar = 'pierre1'; //username localstorage
        console.log(userVar);
        axios
          .get(baseURI + '/users?slug=' + userVar,)
          .then((response) => {
            console.log('response from API : ');
            console.log(response.data);
          })
          .catch((error) => {
            console.warn(error);
          });
  
        break;
    case SUBMIT_UPDATE_PROFILE:
      console.log('Renseigner path update profile dans la requete axios');
      axios
        .post(baseSpinningSquid + '/user-edit', {
          username: store.getState().user.profile.usernameEdit,
          password: store.getState().user.profile.passwordEdit,
          email: store.getState().user.profile.emailEdit,
          lastname: store.getState().user.profile.lastnameEdit,
          firstname: store.getState().user.profile.firstnameEdit,
          street: store.getState().user.profile.streetEdit,
          zipcode: store.getState().user.profile.postalEdit,
          city: store.getState().user.profile.cityEdit,
          image: store.getState().user.profile.avatarImageEdit,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          window.alert(
            `
            La modification de votre profil a bien été enregistrée.
            Rendez-vous dans la page de votre Profil pour
            voir les modifications.
            Bisous.
            `
          );
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
