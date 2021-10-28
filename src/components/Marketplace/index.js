import ArticleList from './ArticleList';
import './marketplace.scss';

const Marketplace = ({
  articlesList = [],
  handleOnSearchArticleFieldChange,
  submitArticleSearch,
}) => {
  return (
    <div id="marketplace">
      <div className="search">
        <h2 className="search-title">Trouve ton Matos</h2>

        <form className="search-form" onSubmit={submitArticleSearch}>
          <input
            id="town-search"
            className="search-input"
            type="text"
            name="town"
            placeholder="Recherche"
            required
            onChange={handleOnSearchArticleFieldChange}
          />
          <button className="button" type="submit">
            Rechercher
          </button>
        </form>
      </div>
      <ArticleList />
    </div>
  );
};

export default Marketplace;
