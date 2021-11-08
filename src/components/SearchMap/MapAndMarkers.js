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
  transform: translate(-15px,-15px);
  &:hover {
    width: 50px;
    height: 50px;
    transform: translate(-25px,-35px);
  }
`;
//&#9733;
const hoverIcon = (event)=>{
  console.log(event);
};
const Marker = () => {
  return <Wrapper className="" src={logo1} onHover={hoverIcon}></Wrapper>;
};
const places = [
  {
    id: 'testid1',
    name: 'testname1',
    lat: 37.40216,
    lng: -122.07427,
  },
];
const MapAndMarkers = (props) => {
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
      onChildMouseEnter={_onChildMouseEnter}
    >
      {props.responseAPI.map((place) => (
        <Marker
          key={place.id}
          //text={place.name}
          lat={place.meta.lat}
          lng={place.meta.lng}
          
        />
      ))}
      <Marker lat={37.42216} lng={-122.08427} />
      <Marker lat={37.38216} lng={-122.08827} />
    </GoogleMapReact>
  );
};

export default MapAndMarkers;
