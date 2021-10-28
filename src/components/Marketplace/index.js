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
      <div className="article-list">
        <article className="list-item">
          <img className="list-image" src=" " alt="" />
          <p className="list-description">description du skatepark</p>
          <button className="button" type="submit">
            Voir
          </button>
        </article>
      </div>
    </div>
  );
};

export default Marketplace;
