import axios from 'axios';
import 

const saleMiddleware = {

  endPointSale: 'sale?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSale);

    return response.data;
  },
};
