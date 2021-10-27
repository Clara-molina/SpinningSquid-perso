import axios from 'axios';
import {
  baseURI,
} from '../routesBack';

const skateparkMiddleware = {

  endPointSkatepark: 'skatepark?_embed=true',

  // Méthode permettant de récupérer tous les post skatepark
  async loadSkateparkPost() {
    const response = await axios.get(baseURI + skateparkMiddleware.endPointSkatepark);

    return response.data;
  },
};
