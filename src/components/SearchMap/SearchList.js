const SearchList = (list) => {
  //console.log(list);
  console.log(list.itemList);
  const mappingArticles = list.itemList.map((item) => (
    <article key={item} className="search-list-item">
      <img className="search-list-image" src=" " alt="" />
      <p className="search-list-description">description du skatepark</p>
      <button className="search-list-button" type="submit">
        Voir
      </button>
    </article>
  ));
  return mappingArticles;
};
export default SearchList;
