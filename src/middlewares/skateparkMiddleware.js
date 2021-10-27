import axios from 'axios';

const skateparkMiddleware = {

  endPointSkatepark: 'skatepark?_embed=true',

  // Méthode permettant de récupérer tous les post skatepark
  async loadSkateparkPost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSkatepark);

    return response.data;
  },
}
