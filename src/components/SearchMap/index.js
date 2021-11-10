import Loading from 'src/components/Loading';
import BlockMap from './BlockMap';
import { Link } from 'react-router-dom';
import './searchMap.scss';

const SearchMap = (props) => {
  if (!props.isLoading) {
    props.callApiGet();
    props.setOnLoading();
  }
  return (
    <div className="search">
      <h1 className="search-title">Trouve ton SkatePark</h1>
      <button className="button-addspot" type="button">
        <Link to="/trouve-ton-skatepark/ajoute-ton-spot">Ajoute ton spot!</Link>
      </button>

      <form className="search-form" onSubmit={props.submitSkateparkSearch}>
        <label className="search-label">
          Ville :
          <input
            id="town-search"
            className="search-input"
            type="text"
            name="town"
            required
            onChange={props.searchFieldTown}
          />
        </label>
        <button className="search-button" type="submit">
          Rechercher
        </button>
      </form>

      <div className="search-result">
        {!props.isLoaded && (
          <>
            <div className="loading-wheel">
              <Loading color={'#FF8552'} />
            </div>
          </>
        )}
        {props.isLoaded && <BlockMap responseAPI={props.responseAPI} />}
      </div>
    </div>
  );
};

export default SearchMap;
