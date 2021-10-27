import GoogleMapReact from 'google-map-react';
import SearchList from './SearchList';
import './searchMap.scss';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

const SearchMap = ({
  skateparkLocationList = [],
  searchFieldTown,
  submitSkateparkSearch,
  callApiGet,
}) => {
  const handleOnTownFieldChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    searchFieldTown(inputId, inputValue);
  };
  callApiGet();
  return (
    <div className="search">
      <h2 className="search-title">Trouve ton SkatePark</h2>

      <form className="search-form" onSubmit={submitSkateparkSearch}>
        <label className="search-label">
          Ville :
          <input
            id="town-search"
            className="search-input"
            type="text"
            name="town"
            required
            onChange={handleOnTownFieldChange}
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
          <SearchList itemList={skateparkLocationList} />
        </div>
        <div className="search-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
            }}
            defaultCenter={location}
            defaultZoom={8}
          >
            {/* <LocationPin lat={37.42216} lng={-122.08427} text={"test ici"} /> */}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
