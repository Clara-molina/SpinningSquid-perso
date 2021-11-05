import axios from 'axios';
import {
  GET_SKATEPARK_LIST,
  successGetSkateparkList,
  SUBMIT_ADD_SPOT,
  successSubmitAddSpot,
} from 'src/actions/skateparkActions';
import { baseURI, baseSpinningSquid } from 'src/routesBack';

const skateparkMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SKATEPARK_LIST:
      const endPointSkatepark = '/skatepark?_embed=true';
      axios
        .get(baseURI + endPointSkatepark)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
      store.dispatch(
        successGetSkateparkList(response.data)
      );
      })
      .catch((error) => {
        console.warn(error);
      });
      // store.dispatch(
      //   successGetSkateparkList(
      //     'a remplacer par le call API dans skateparkMiddleware'
      //   )
      // );

      break;
    case SUBMIT_ADD_SPOT:
      const endPointAdd_Spot = '/newskatepark-save';
      console.log('on y passe youpi');
      //console.log(store.getState().skatepark.addSpot.tryPromiseField);
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {
          title: store.getState().skatepark.addSpot.title,
          skatepark: store.getState().skatepark.addSpot.categorySkatepark,
          pumptrack: store.getState().skatepark.addSpot.categoryPumptrack,
          streetspot: store.getState().skatepark.addSpot.categoryStreet,
          street: store.getState().skatepark.addSpot.street,
          zipcode: store.getState().skatepark.addSpot.postal,
          city: store.getState().skatepark.addSpot.town,
          latitude: store.getState().skatepark.addSpot.latitude,
          longitude: store.getState().skatepark.addSpot.longitude,
          parking: store.getState().skatepark.addSpot.parking,
          water: store.getState().skatepark.addSpot.water,
          trashcan: store.getState().skatepark.addSpot.trashcan,
          lighting: store.getState().skatepark.addSpot.lighting,
          table: store.getState().skatepark.addSpot.table,
          benche: store.getState().skatepark.addSpot.benche,
          state: store.getState().skatepark.addSpot.etatRadioBtn,
          image: store.getState().skatepark.addSpot.uploadedImg,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successGetSkateparkList(
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
    default:
  }
  next(action);
};
export default skateparkMiddleware;
