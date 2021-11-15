import { Link } from 'react-router-dom';
import ArticleList from './ArticleList';
import Loading from 'src/components/Loading';

import './marketplace.scss';

const Marketplace = (props) => {
  if (!props.isLoading) {
    props.callMarketplaceApiGet();
    props.setOnLoading();
  }

  return (
    <div id="marketplace" className="main-container">
      <div className="search">
        <h2 className="title search-title">Trouve ton Matos</h2>
        <div className="marketplace-post">
          {props.isLogged && (
            <Link to="/trouve-ton-matos/ajoute-ton-matos">
              <button type="button" className="button">Poster une annonce</button>
            </Link>
          )}
          {!props.isLogged && (
            <Link to="/connexion">
              <button type="button" className="button">Poster une annonce</button>
            </Link>
          )}
        </div>
        <form className="marketplace-form" onSubmit={props.submitArticleSearch}>
          <label htmlFor="marketplace-search">Recherche
            <input
              id="marketplace-search"
              className="marketplace-input"
              type="text"
              name="search"
              placeholder="Skateboard, roulement ..."
              required
              onChange={props.searchFieldTitle}
            />
          </label>
          {/* <label htmlFor="marketplace-search-where">Ou ?
            <input
              id="marketplace-search-where"
              className="marketplace-input"
              type="text"
              name="where"
              placeholder="Paris"
              required
              onChange={props.handleOnChange}
            />
          </label> */}
          <button className="button marketplace-search-button" type="submit">
            Rechercher
          </button>
        </form>
      </div>

      {!props.isLoaded && (
        <>
          <div className="marketplace-loading-wheel">
            <div className="loading-wheel">
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && <ArticleList isLogged={props.isLogged} itemList={props.responseApi} />}
    </div>
  );
};

export default Marketplace;
