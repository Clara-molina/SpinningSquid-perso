import axios from 'axios';

const articleMiddleware = {

  endPointArticle: 'article?_embed=true',

  // Méthode permettant de récupérer tous les post article
  async loadArticlePost() {
    const response = await axios.get(baseURI + articleMiddleware.endPointArticle);

    return response.data;
  },
}
