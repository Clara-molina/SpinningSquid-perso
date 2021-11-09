import React from 'react';
import Img from '../../assets/img/Skateparktest.jpg';
import './searchSkateResults.scss';

const SearchSkateResults = (props) => {
  console.log(props.skateparkName);
  props.getSkateparkDetails(props.skateparkName);
  return(
  <div className="searchresult">
    <h3 className="searchresulttitle">Résultat</h3>
    <h4 className="searchresultname">Skatepark Achères</h4>
    <img className="searchresultimage" src={Img} alt="skatepark Achères" />
    <span className="searchresultstars">Etoiles</span>

    <div className="rating">
      <a href="#5" title="Génial !">★</a>
      <a href="#4" title="Chouette !">★</a>
      <a href="#3" title="Fonctionnel">★</a>
      <a href="#2" title="Bof">★</a>
      <a href="#1" title="Nul">★</a>
    </div>
    <span className="searchresultadress">Adresse : 227 Route Départementale 30, 78260 Achères</span>
    <span className="detailssearchresult">Parking</span>
    <span className="detailssearchresult">Poubelles</span>

    <div className="searchresultmap">Map de l'adresse</div>
  </div>

)};

export default SearchSkateResults;

//http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/skatepark/?meta_key=city&meta_value=[nomDeLaVille]
//baseSpinningSquid + /add-article ou /update-article ou /delete-article ou /add-sale ou /update-sale ou /delete-sale
//baseURI + "/skatepark/" + Id + "?_embed=true"
