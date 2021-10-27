import axios from 'axios';
import {
  baseURI,
} from '../routesBack';

const saleMiddleware = {

  endPointSale: 'sale?_embed=true',
  endPointSkatepark: 'skatepark?_embed=true',
  endPointArticle: 'article?_embed=true',

  // Méthode permettant de récupérer tous les post sale
  async loadSalePost() {
    const response = await axios.get(baseURI + saleMiddleware.endPointSale);

    return response.data;
  },

  // Méthode permettant de récupérer tous les post skatepark
  async loadSkateparkPost() {
    const response = await axios.get(baseURI + saleMiddleware.endPointSkatepark);

    return response.data;
  },

  // Méthode permettant de récupérer tous les post article
  async loadArticlePost() {
    const response = await axios.get(baseURI + saleMiddleware.endPointArticle);

    return response.data;
  },
};
