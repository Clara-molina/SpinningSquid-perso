import React from 'react';
import './searchMap.scss';
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import logo2 from 'src/assets/img/logo2.png';
import { Link } from 'react-router-dom';

const _onMouseEnter = (event) => {
  //console.log('on entering child');
  //console.log(event);
  var sheet = document.createElement('style');
  sheet.id = 'stylesheethoverlist';
  const element = '#WrapperId' + event.target.id.substring(7);
  //console.log(element);
  sheet.innerHTML =
    element +
    `{
    background-color: red;
  }`;
  document.body.appendChild(sheet);
};

const _onMouseLeave = (event) => {
  //console.log('on leaving child');
  var sheetToBeRemoved = document.getElementById('stylesheethoverlist');
  var sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
};

const SearchList = (list) => {
  //console.log(list);
  console.log('test' + list.itemList);
  console.log('test');
  // console.log(list.itemList[0]._embedded['wp:featuredmedia'][0].source_url);

  const mappingArticles = list.itemList.map((item) => {
    // const getImageURL = () => {
    //   // Vérification : la recette a-t-elle une image
    //   if (item._embedded['wp:featuredmedia']) {
    //     if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
    //       return item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    //     }
    //     else if (item._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
    //       return item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    //     }
    //     else {
    //       return item._embedded['wp:featuredmedia'][0].source_url;
    //     }
    //   }
    //   else {
    //     return { logo2 };
    //   }
    // };
    const urlDetailSkatepark = '/trouve-ton-skatepark/' + item.id;
    const location = {
      lat: item.meta.latitude,
      lng: item.meta.longitude,
    };
    const updateMap = () => {
      list.moveLocationOnMap(location);
    };
    return (
      <article
        key={item.id}
        id={'article' + item.id}
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
        className="search-list-item"
      >
        <img className="search-list-image" src="" alt="" />
        <h2 className="search-list-title">{item.title.rendered}</h2>
        <h3 className="search-list-description">
          {item.meta.streetspot
            ? 'Street'
            : item.meta.pumptrack
              ? 'PumpTrack'
              : 'SkatePark'}
        </h3>
        <button
          className="search-list-button"
          type="button"
          onClick={updateMap}
        >
          Voir
        </button>
        <Link to={urlDetailSkatepark}>details</Link>
      </article>
    );
  });
  return mappingArticles;
};
export default SearchList;
