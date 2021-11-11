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

const communityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      // const endPointArticle = baseURI + '/article?_embed=true';
      // console.log('on y passe youpi');
      // axios
      //   .get(baseURI + endPointArticle)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(successGetArticleList(response.data));
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
      const endPointAddArticle = baseSpinningSquid + '/add-article';
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options_ADD = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      console.log('on y passe youpi');
      axios
        .post(
          endPointAddArticle,
          {
            title: store.getState().community.addArticle.title,
            date: store.getState().community.addArticle.date,
            place: store.getState().community.addArticle.place,
            image: store.getState().community.addArticle.image,
            story: store.getState().community.addArticle.story,
          },
          options_ADD,
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitAddArticle(),
          );
          window.alert(
            `
            L'ajout de votre article dans Whassup?! a bien été enregistré.
            Bisous.
            `
          );
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddArticle(
      //     'a remplacer par le call API dans communityMiddleware',
      //   ),
      // );

      break;

    case SUBMIT_UPDATE_ARTICLE:
      // const endPointUpdateArticle = baseSpinningSquid + '/update-article';
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // const options_UPDATE = {
      //   headers: {
      //     Authorization:
      //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
      //   },
      // };
      // console.log('on y passe youpi');
      // axios
      //   .post(endPointUpdateArticle, {}, options_UPDATE)
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
      // const endPointDeleteArticle = baseSpinningSquid + '/delete-article';
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // const options_DELETE = {
      //   headers: {
      //     Authorization:
      //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
      //   },
      // };
      // console.log('on y passe youpi');
      // axios
      //   .post(endPointDeleteArticle, {}, options_DELETE)
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
