import SearchList from './SearchList';
import MapAndMarkers from './MapAndMarkers';

const BlockMap = (props) => {
  return (
    <>
      <div id="search-list" className="search-list">
        <SearchList itemList={props.responseAPI} />
      </div>
      <div className="search-map">
        <MapAndMarkers responseAPI={props.responseAPI} />
      </div>
    </>
  );
};
export default BlockMap;
