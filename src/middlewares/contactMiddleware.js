import axios from 'axios';
import {
  SUBMIT_MESSAGE,
  successSubmitMessage,
} from 'src/actions/contactActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';

const contactMiddleware = (store) => (next) => (action) => {
  const endPointSkatepark = '/send-email';
  switch (action.type) {
    case SUBMIT_MESSAGE:
      const endPointAdd_Spot = '/send-email';
      console.log('juste avant requete axios SUBMIT_MESSAGE');
      console.log('décommenter requete axios');
        axios
          .post(baseSpinningSquid + endPointAdd_Spot, {
            subject: 'test_sujet',
            email: 'romain.talbot.33@gmail.com',
            message: 'test_message',
          })
          .then((response) => {
            console.log('response from API : ');
            console.log(response);
            // store.dispatch(
            //   successGetSkateparkList(
            //     'a remplacer par kekchose ou pas dans contactMiddleware'
            //   )
            // );
          })
          .catch((error) => {
            console.warn(error);
          });
      // store.dispatch(
      //   successSubmitMessage(
      //     'a remplacer par kekchose ou pas dans contactMiddleware'
      //   )
      // );

      break;
    default:
  }
  next(action);
};
export default contactMiddleware;
