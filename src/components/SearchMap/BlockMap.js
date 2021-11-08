import SearchList from './SearchList';
import MapAndMarkers from './MapAndMarkers';

const BlockMap = (props) => {
  return (
    <>
      <div className="search-list">
        <SearchList itemList={props.responseAPI} />
      </div>
      <div className="search-map">
        <MapAndMarkers />
      </div>
    </>
  );
};
export default BlockMap;
