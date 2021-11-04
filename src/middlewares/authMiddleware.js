import axios from 'axios';
import {
  SUBMIT_LOGIN,
  successLogin,
  SUBMIT_REGISTER,
  SUBMIT_UPDATE_PROFILE,
} from 'src/actions/userActions';
import { baseURIUser, baseSpinningSquid } from 'src/routesBack';

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
          window.alert(
            `
            Connexion réussie!
            Bisous.
            `
          );
          window.location.reload(false);
        })
        .catch((error) => {
          console.warn(error);
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
            Votre inscription a bien été enregistrée.
            Rendez-vous dans la page de votre Profil
            pour mettre à jour vos infos perso.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case SUBMIT_UPDATE_PROFILE:
      console.log('Renseigner path update profile dans la requete axios');
      axios
        .post('à renseigner update profile', {
          username: store.getState().user.profile.usernameEdit,
          password: store.getState().user.profile.passwordEdit,
          email: store.getState().user.profile.emailEdit,
          lastname: store.getState().user.profile.lastnameEdit,
          firstname: store.getState().user.profile.firstnameEdit,
          street: store.getState().user.profile.streetEdit,
          postal: store.getState().user.profile.postalEdit,
          city: store.getState().user.profile.cityEdit,
          avatarImage: store.getState().user.profile.avatarImageEdit,
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
