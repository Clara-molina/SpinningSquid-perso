import axios from 'axios';
import {
  GET_SKATEPARK_LIST,
  successGetSkateparkList,
} from 'src/actions/skateparkActions';
import { baseURIUser } from 'src/routesBack';

const skateparkMiddleware = (store) => (next) => (action) => {
  const endPointSkatepark = 'skatepark?_embed=true';
  switch (action.type) {
    case GET_SKATEPARK_LIST:
      // axios
      //   .get(baseURIUser + endPointSkatepark)
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
    default:
  }
  next(action);
};
export default skateparkMiddleware;
