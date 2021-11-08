/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
const SearchList = (list) => {
  console.log(list);
  console.log(list.itemList);
  console.log(list.itemList[0]._embedded['wp:featuredmedia'][0].media_details.source_url);

  const getImageURL = () => {
    // Vérification : la recette a-t-elle une image
    if (list.itemLists._embedded['wp:featuredmedia']) {
      if (list.itemLists._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
        return list.itemLists._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
      }
      else if (list.itemLists._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
        return list.itemLists._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
      }
      else {
        return list.itemLists._embedded['wp:featuredmedia'][0].media_details.source_url;
      }
    }
    else {
      return 'https://picsum.photos/seed/picsum/400/300';
    }
  };

  const mappingArticles = list.itemList.map((item) => (
    <article key={item.id} id={item.id} className="search-list-item">
      <img className="search-list-image" src={getImageURL()} alt="" />
      <h2 className="search-list-description">{item.title.rendered}</h2>
      <h3 className="search-list-description">
        {item.meta.streetspot ? 'Street' : item.meta.pumptrack ? 'PumpTrack' : 'SkatePark'}
      </h3>
      <button className="search-list-button" type="submit">
        Voir
      </button>
    </article>
  ));
  return mappingArticles;
};
export default SearchList;
