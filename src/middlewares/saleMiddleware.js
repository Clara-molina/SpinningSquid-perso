import axios from 'axios';

const saleMiddleware = {

  //! A changer pour la mise en prod
  baseURI: 'http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/',

  endPointSale: 'sale?_embed=true',
  endPointSkatepark: 'skatepark?_embed=true',
  endPointArticle: 'article?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSale);

    return response.data;
  },

  // Méthode permettant de récupérer tous les post skatepark
  async loadSkateparkPost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointSkatepark);

    return response.data;
  },

  // Méthode permettant de récupérer tous les post article
  async loadArticlePost() {
    const response = await axios.get(saleMiddleware.baseURI + saleMiddleware.endPointArticle);

    return response.data;
  },
};
