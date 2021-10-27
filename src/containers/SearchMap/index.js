import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import { callGetSkateparkList } from 'src/actions/skateparkActions';

import SearchMap from 'src/components/SearchMap';

const mapStateToProps = (state) => ({
  skateparkLocationList: state.skatepark.skateparkLocationList,
});

const mapDispatchToProps = (dispatch, state) => ({
  callApiGet: () => {
    dispatch(callGetSkateparkList());
  },
  searchFieldTown: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  submitSkateparkSearch: (event) => {
    event.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
