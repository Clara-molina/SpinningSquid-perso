import GoogleMapReact from 'google-map-react';
import './searchMap.scss';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};
const mapstyle = { width: '800px', height: '500px' };

const SearchMap = () => (
  <div className="map">
    <form>
      <h2 className="map-h2">Trouve ton SkatePark</h2>
      <label>
        Ville :
        <input type="text" name="town" />
      </label>
      <label>
        catégorie :
        <select>
          <option selected value="all">Tout</option>
          <option value="skatepark">SkatePark</option>
          <option value="pumptrack">PumpTrack</option>
          <option value="street">Street</option>
        </select>
      </label>
      <label>
        Rayon :
        <select>
          <option selected value="all">10 km</option>
          <option value="skatepark">30 km</option>
          <option value="pumptrack">50 km</option>
          <option value="street">+ de 50km</option>
        </select>
      </label>
      <button type="submit"> Rechercher </button>
    </form>
    <div className="google-map">

    </div>
  </div>
);

// TODO affichage de la map a faire
{/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY' }}
        defaultCenter={location}
        defaultZoom={8}
        style={mapstyle}
      >
        {/* <LocationPin lat={37.42216} lng={-122.08427} text={"test ici"} /> */}
// </GoogleMapReact> */}
export default SearchMap;
