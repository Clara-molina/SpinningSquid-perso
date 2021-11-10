import axios from 'axios';
import {
  SUBMIT_MESSAGE,
  successSubmitMessage,
} from 'src/actions/contactActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';

const contactMiddleware = (store) => (next) => (action) => {
  const endPointSkatepark = '/skatepark?_embed=true';
  switch (action.type) {
    case SUBMIT_MESSAGE:
      const endPointAdd_Spot = '/newskatepark-save';
      console.log('juste avant requete axios SUBMIT_MESSAGE');
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
        successSubmitMessage(
          'a remplacer par kekchose ou pas dans contactMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default contactMiddleware;
