import React from 'react';
import Img from '../../assets/img/Skateparktest.jpg';
import './searchSkateResults.scss';

const SearchSkateResults = () => (
  <div className="searchresult">
    <h3 className="searchresulttitle">Résultat</h3>
    <h4 className="searchresultname">Skatepark Achères</h4>
    <img className="searchresultimage" src={Img} alt="skatepark Achères" />
    <span className="searchresultstars">Etoiles</span>

    <span className="star__container">
      <input type="radio" name="rating" value="1" id="star-1" className="star__radio visuhide" />
      <input type="radio" name="rating" value="2" id="star-2" className="star__radio visuhide" />
      <input type="radio" name="rating" value="3" id="star-3" className="star__radio visuhide" />
      <input type="radio" name="rating" value="4" id="star-4" className="star__radio visuhide" />
      <input type="radio" name="rating" value="5" id="star-5" className="star__radio visuhide" />

      <span className="star__item" htmlFor="star-1"><span className="visuhide">1 stars</span></span>
      <span className="star__item" htmlFor="star-2"><span className="visuhide">2 stars</span></span>
      <span className="star__item" htmlFor="star-3"><span className="visuhide">3 stars</span></span>
      <span className="star__item" htmlFor="star-4"><span className="visuhide">4 stars</span></span>
      <span className="star__item" htmlFor="star-5"><span className="visuhide">5 stars</span></span>
    </span>

    <span className="searchresultadress">Adresse : 227 Route Départementale 30, 78260 Achères</span>
    <span className="detailssearchresult">Parking</span>
    <span className="detailssearchresult">Poubelles</span>

    <div className="searchresultmap">Map de l'adresse</div>
  </div>

);

export default SearchSkateResults;
