import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import {
  callGetSkateparkList,
  successGetSkateparkList,
  successSubmitAddSpot,
  setOnLoadingStatus,
  getSkateparkByCity,
} from 'src/actions/skateparkActions';
import SearchMap from 'src/components/SearchMap';

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return {
    skateparkLocationList: state.skatepark.skateparkLocationList,
    responseAPI: state.skatepark.responseAPI,
    isLoading: state.skatepark.isLoading,
    isLoaded: state.skatepark.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  callApiGet: () => {
    dispatch(callGetSkateparkList());
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
  searchFieldTown: (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    dispatch(updateField(inputId, inputValue));
  },
  submitSkateparkSearch: (event) => {
    event.preventDefault();
    dispatch(getSkateparkByCity());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
