import axios from 'axios';
import {
  GET_SKATEPARK_LIST,
  successGetSkateparkList,
  SUBMIT_ADD_SPOT,
  successSubmitAddSpot,
} from 'src/actions/skateparkActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';

const skateparkMiddleware = (store) => (next) => (action) => {
  const endPointSkatepark = '/skatepark?_embed=true';
  switch (action.type) {
    case GET_SKATEPARK_LIST:
      // axios
      //   .get(baseURI + endPointSkatepark)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      // store.dispatch(
      //   successGetSkateparkList(response.data)
      // );
      // })
      // .catch((error) => {
      //   console.warn(error);
      // });
      store.dispatch(
        successGetSkateparkList(
          'a remplacer par le call API dans skateparkMiddleware'
        )
      );

      break;
    case SUBMIT_ADD_SPOT:
      const endPointAdd_Spot = '/newskatepark-save';
      axios
        .post(baseSpinningSquid + endPointAdd_Spot,{
          skatepark:'test',
          pumptrack:'test',
          street:'test',
          streetspot:'test',
          zipcode:'test',
          city:'test',
          parking:'test',
          water:'test',
          trashcan:'test',
          lighting:'test',
          table:'test',
          benche:'test',
          state:'test',
          image:store.getState().addSpot.tryPromiseField,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
      store.dispatch(
        successGetSkateparkList('a remplacer par kekchose ou pas dans skateparkMiddleware')
      );
      })
      .catch((error) => {
        console.warn(error);
      });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'));

      break;
    default:
  }
  next(action);
};
export default skateparkMiddleware;
