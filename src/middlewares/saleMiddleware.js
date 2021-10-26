import axios from 'axios';

const saleMiddleware = {

  //! A changer pour la mise en prod
  baseURI: 'http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/',

  endPointSale: 'sale?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSale);

    return response.data;
  },
};
