import axios from 'axios';
import {
  GET_ARTICLE_LIST,
  successGetArticleList,
  SUBMIT_ADD_ARTICLE,
  successSubmitAddArticle,
  SUBMIT_UPDATE_ARTICLE,
  successSubmitUpdateArticle,
  SUBMIT_DELETE_ARTICLE,
  successSubmitDeleteArticle,
} from 'src/actions/articleActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';
const endPointArticle = baseURI + '/article?_embed=true';

const skateparkMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    //-------------------------------------------------------------------
    // à compléter
    case GET_ARTICLE_LIST:
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      //console.log('on y passe youpi');
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successGetArticleList(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
            L'ajout de skatepark a bien été enregistré.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );

      break;
    case SUBMIT_ADD_ARTICLE:
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      //console.log('on y passe youpi');
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitAddArticle(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
            L'ajout de skatepark a bien été enregistré.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );

      break;
    case SUBMIT_UPDATE_ARTICLE:
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      //console.log('on y passe youpi');
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitUpdateArticle(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
            L'ajout de skatepark a bien été enregistré.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );

      break;
    case SUBMIT_DELETE_ARTICLE:
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      //console.log('on y passe youpi');
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitDeleteArticle(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
            L'ajout de skatepark a bien été enregistré.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );

      break;
    //----------------------------------------------------------------------------------
    default:
  }
  next(action);
};
export default skateparkMiddleware;
