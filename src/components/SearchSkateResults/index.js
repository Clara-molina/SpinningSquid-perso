import React from 'react';
import {Link} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import logo1 from 'src/assets/img/logo-hover.png';
import Img from '../../assets/img/Skateparktest.jpg';
import './searchSkateResults.scss';
import Loading from 'src/components/Loading';

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
const Marker = (props) => {
  return <Wrapper id={'WrapperId'+props.id} className="" src={logo1} ></Wrapper>;
};

const SearchSkateResults = (props) => {
  if (!props.isLoading) {
    props.getSkateparkDetails(props.skateparkName);
    props.setOnLoading();
  }
  return (
    <div className="searchresult">
      {!props.isLoaded && (
        <>
          <div className="skateparkDetails-loading-wheel">
            <div className="loading-wheel">
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && (
        <>
          <h3 className="searchresulttitle">Résultat</h3>
          <h4 className="searchresultname">{props.title}</h4>
          <img
            className="searchresultimage"
            src={Img}
            alt="skatepark Achères"
          />
          <span className="searchresultstars">Etoiles</span>

          <div className="rating">
            <a href="#5" title="Génial !">
              ★
            </a>
            <a href="#4" title="Chouette !">
              ★
            </a>
            <a href="#3" title="Fonctionnel">
              ★
            </a>
            <a href="#2" title="Bof">
              ★
            </a>
            <a href="#1" title="Nul">
              ★
            </a>
          </div>
          <span className="searchresultadress">
            Adresse : 227 Route Départementale 30, 78260 Achères
          </span>
          <span className="detailssearchresult">Parking</span>
          <span className="detailssearchresult">Poubelles</span>

          <div className="searchresultmap">Map de l'adresse</div>
          <div className='search-map'>
          <GoogleMapReact
            id="googlemapreact"
            bootstrapURLKeys={{
              key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
            }}
            center={props.locationOnMap}
            defaultZoom={8}
            yesIWantToUseGoogleMapApiInternals
          >
            <Marker
              key={props.id}
              id={props.id}
              //text={place.name}
              lat={props.locationOnMap.lat}
              lng={props.locationOnMap.lng}
            />
          </GoogleMapReact>
          </div>
        </>
      )}
      <Link to='/trouve-ton-skatepark/modifie-ton-spot'>modifie ton spot</Link>
    </div>
  );
};

export default SearchSkateResults;

//http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/skatepark/?meta_key=city&meta_value=[nomDeLaVille]
//baseSpinningSquid + /add-article ou /update-article ou /delete-article ou /add-sale ou /update-sale ou /delete-sale
//baseURI + "/skatepark/" + Id + "?_embed=true"
