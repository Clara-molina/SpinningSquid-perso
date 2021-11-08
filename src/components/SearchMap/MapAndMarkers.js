import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import logo1 from 'src/assets/img/logo-hover.png';

const _onChildMouseEnter = () => {
  console.log('on hover child');
};
const Wrapper = styled.img`
  //background-color: black;
  border-radius: 25px;
  width: 30px;
  height: 30px;
  &:hover {
    width: 50px;
    height: 50px;
  }
`;
//&#9733;
const Marker = () => {
  return <Wrapper className="" src={logo1} ></Wrapper>;
};
const places = [
  {
    id: 'testid1',
    name: 'testname1',
    lat: 37.40216,
    lng: -122.07427,
  },
];
const MapAndMarkers = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
      }}
      defaultCenter={location}
      defaultZoom={8}
      yesIWantToUseGoogleMapApiInternals
      //onChildMouseEnter={_onChildMouseEnter}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          text={place.name}
          lat={place.lat}
          lng={place.lng}
          
        />
      ))}
      <Marker lat={37.42216} lng={-122.08427} />
      <Marker lat={37.38216} lng={-122.08827} />
    </GoogleMapReact>
  );
};

export default MapAndMarkers;
