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
        <label className="search-label">
          Catégorie :
          <select className="search-selected">
            <option selected value="all">
              Tout
            </option>
            <option value="skatepark">SkatePark</option>
            <option value="pumptrack">PumpTrack</option>
            <option value="street">Street</option>
          </select>
        </label>
        <label className="search-label">
          Rayon :
          <select className="search-selected">
            <option selected value="all">
              10 km
            </option>
            <option value="skatepark">30 km</option>
            <option value="pumptrack">50 km</option>
            <option value="street">+ de 50km</option>
          </select>
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
