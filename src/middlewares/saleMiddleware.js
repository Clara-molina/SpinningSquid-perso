import axios from 'axios';

const saleMiddleware = {

  //! A changer
  baseURI: 'http://localhost/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/sale',

  endPointSale: 'sale?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSale);

    return response.data;
  },
};
