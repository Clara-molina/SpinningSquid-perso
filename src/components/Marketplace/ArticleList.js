import { Link } from 'react-router-dom';
import logo2 from 'src/assets/img/logo2.png';

const ArticleList = (list) => {
  console.log('test' + list.itemList);

  const mappingArticles = list.itemList.map((item) => {
    const getImageURL = () => {
      // Vérification : l'annonce a-t-elle une image
      if (item._embedded['wp:featuredmedia']) {
        if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
          return item._embedded['wp:featuredmedia'][0].media_details.sizes.large
            .source_url;
        } else if (
          item._embedded['wp:featuredmedia'][0].media_details.sizes.full
        ) {
          return item._embedded['wp:featuredmedia'][0].media_details.sizes.full
            .source_url;
        } else {
          return item._embedded['wp:featuredmedia'][0].source_url;
        }
      } else {
        return { logo2 };
      }
    };
    const urlDetailSale = '/trouve-ton-matos/' + item.id;
    return (
      <article className="list-item">
        <h2 className="article-list-title">{item.title.rendered}</h2>
        <p>Combien? {item.meta.price}€</p>
        <p>Ou? {item.meta.place}</p>
        <div className="item-image">
          <img src={getImageURL()} alt="" />
        </div>
        <div>
          {list.isLogged && (
            <Link to={urlDetailSale}>
              <button className="button" type="button">
                Voir
              </button>
            </Link>
          )}
          {!list.isLogged && (
            <Link to="/connexion">
              <button className="button" type="button">
                Voir
              </button>
            </Link>
          )}
        </div>
      </article>
    );
  });
  return (
    <>
      <div className="article-list">{mappingArticles}</div>
    </>
  );
};
export default ArticleList;
