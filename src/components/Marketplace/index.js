import ArticleList from './ArticleList';
import './marketplace.scss';

const Marketplace = ({
  articlesList = [],
  handleOnSearchArticleFieldChange,
  submitArticleSearch,
}) => {
  const handleOnChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    handleOnSearchArticleFieldChange(inputId, inputValue);
  };
  return (
    <div id="marketplace">
      <div className="search">
        <h2 className="title search-title">Trouve ton Matos</h2>

        <form className="marketplace-form" onSubmit={submitArticleSearch}>
          <input
            id="marketplace-search"
            className="marketplace-input"
            type="text"
            name="search"
            placeholder="Recherche"
            required
            onChange={handleOnChange}
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
