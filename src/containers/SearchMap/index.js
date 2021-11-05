import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import { callGetSkateparkList } from 'src/actions/skateparkActions';

import SearchMap from 'src/components/SearchMap';

const mapStateToProps = (state, ownProps) => ({
    skateparkLocationList: state.skatepark.skateparkLocationList,
    responseAPI: state.skatepark.responseAPI,
  });

const mapDispatchToProps = (dispatch, state) => ({
  callApiGet: () => {
    dispatch(callGetSkateparkList());
  },
  searchFieldTown: (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    dispatch(updateField(inputId, inputValue));
  },
  submitSkateparkSearch: (event) => {
    event.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
