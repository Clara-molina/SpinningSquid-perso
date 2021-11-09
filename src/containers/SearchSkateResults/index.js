import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import {
  callGetSkateparkDetails,
  setOnSkateparkDetailsLoading,
} from 'src/actions/skateparkActions';
import SearchSkateResults from 'src/components/SearchSkateResults';

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return {
    skateparkName: ownProps.match.params.resultat,
    isLoaded: state.skatepark.isLoaded,
    isLoading: state.skatepark.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSkateparkDetails: (skateparkName) => {
    dispatch(callGetSkateparkDetails(skateparkName));
    console.log('pouet');
  },
  setOnLoading: () => {
    dispatch(setOnSkateparkDetailsLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSkateResults);
