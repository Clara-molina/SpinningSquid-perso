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
} from 'src/actions/communityActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';
const endPointArticle = baseURI + '/article?_embed=true';

const communityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    //-------------------------------------------------------------------
    // à compléter
    case GET_ARTICLE_LIST:
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // const options = {
      //   headers: {
      //     Authorization:
      //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
      //   },
      // };
      // // console.log('on y passe youpi');
      // axios
      //   .get(baseSpinningSquid + endPointAdd_Spot, {}, options)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       callGetArticleList(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      setTimeout(() => {
        store.dispatch(
          successGetArticleList(
            'a remplacer par le call API dans communityMiddleware',
          ),
        );
        console.log('call API ok');
      }, 3000);

      break;

    case SUBMIT_ADD_ARTICLE:
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // //console.log('on y passe youpi');
      // axios
      //   .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       submitAddArticle(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //     window.alert(
      //       `
      //       L'ajout de votre article dans Whassup?! a bien été enregistré.
      //       Bisous.
      //       `
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      store.dispatch(
        successSubmitAddArticle(
          'a remplacer par le call API dans communityMiddleware',
        ),
      );

      break;

    case SUBMIT_UPDATE_ARTICLE:
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // //console.log('on y passe youpi');
      // axios
      //   .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       successSubmitUpdateArticle(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //     window.alert(
      //       `
      //       La modification de votre article dans Whassup?! a bien été enregistré.
      //       Bisous.
      //       `
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      store.dispatch(
        successSubmitUpdateArticle(
          'a remplacer par le call API dans communityMiddleware',
        ),
      );

      break;

    case SUBMIT_DELETE_ARTICLE:
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // // console.log('on y passe youpi');
      // axios
      //   .post(baseSpinningSquid + endPointAdd_Spot, {}, options)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       successSubmitDeleteArticle(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //     window.alert(
      //       `
      //       La suppression de votre article dans Whassup?! a bien été enregistré.
      //       Bisous.
      //       `
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      store.dispatch(
        successSubmitDeleteArticle(
          'a remplacer par le call API dans communityMiddleware',
        ),
      );

      break;
    //----------------------------------------------------------------------------------
    default:
  }
  next(action);
};
export default communityMiddleware;
