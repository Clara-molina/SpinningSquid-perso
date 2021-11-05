import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import SearchList from './SearchList';
import './searchMap.scss';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

const SearchMap = (props) => {
  props.callApiGet();
  const Marker = (props) => {
    return <div className="iconeMarker">&#9733;</div>;
  };
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
          {' '}
          Rechercher{' '}
        </button>
      </form>

      <div className="search-result">
        <div className="search-list">
          <SearchList itemList={props.responseAPI} />
        </div>
        <div className="search-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
            }}
            defaultCenter={location}
            defaultZoom={8}
          >
            <Marker lat={37.42216} lng={-122.08427} />
            <Marker lat={37.38216} lng={-122.08827} />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
