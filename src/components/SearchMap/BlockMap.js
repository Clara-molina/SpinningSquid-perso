import GoogleMapReact from 'google-map-react';
import SearchList from './SearchList';

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};
const BlockMap = (props) => {
  const Marker = () => {
    return <div className="iconeMarker">&#9733;</div>;
  };
  return (
    <>
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
    </>
  );
};
export default BlockMap;
