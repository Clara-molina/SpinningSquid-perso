import axios from 'axios';
import { baseURI } from 'src/routesBack';

const saleMiddleware = {
  endPointSale: 'sale?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(baseURI + saleMiddleware.endPointSale);

    return response.data;
  },
};
