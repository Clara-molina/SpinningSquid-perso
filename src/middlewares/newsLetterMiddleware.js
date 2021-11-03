import axios from 'axios';
import {
  SUBMIT_NEWSLETTER,
  successSubmitNewsLetter,
} from 'src/actions/newsLetterActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';

const newsLetterMiddleware = (store) => (next) => (action) => {
  const endPointSkatepark = '/skatepark?_embed=true';
  switch (action.type) {
    case SUBMIT_NEWSLETTER:
      const endPointAdd_Spot = '/newskatepark-save';
      console.log('juste avant requete axios SUBMIT_NEWSLETTER');
      console.log('décommenter requete axios');
      //   axios
      //     .post(baseSpinningSquid + endPointAdd_Spot, {
      //       firstname: 'test',
      //       name: 'test',
      //       email: 'test',
      //       message: 'test',
      //     })
      //     .then((response) => {
      //       console.log('response from API : ');
      //       console.log(response);
      //       store.dispatch(
      //         successGetSkateparkList(
      //           'a remplacer par kekchose ou pas dans contactMiddleware'
      //         )
      //       );
      //     })
      //     .catch((error) => {
      //       console.warn(error);
      //     });
      store.dispatch(
        successSubmitNewsLetter(
          'a remplacer par kekchose ou pas dans newsLetterMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default newsLetterMiddleware;
