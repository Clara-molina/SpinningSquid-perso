import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import logo1 from 'src/assets/img/logo-hover.png';

const _onChildMouseEnter = (event) => {
  console.log('on entering child');
  document.querySelector('#search-list :nth-child(3)').style.color = "red";
};
const _onChildMouseLeave = (event) => {
  console.log('on leaving child');
  document.querySelector('#search-list :nth-child(3)').style.color = "black";
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
const Marker = (props) => {
  //console.log('conselog de marker');
  //console.log(props);
  //console.log(props.$hover);
  return <Wrapper id={'testWrapperId'+props.id} className="" src={logo1} ></Wrapper>;
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
      onChildMouseLeave={_onChildMouseLeave}
    >
      {props.responseAPI.map((place) => {
        //console.log(place.id);
        return (
        
        <Marker
          key={place.id}
          id={place.id}
          //text={place.name}
          lat={place.meta.lat}
          lng={place.meta.lng}
        />
      )})}
      <Marker id='test1' lat={37.42216} lng={-122.08427} />
      <Marker id='test2' lat={37.38216} lng={-122.08827} />
    </GoogleMapReact>
  );
};

export default MapAndMarkers;
