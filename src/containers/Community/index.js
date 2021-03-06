import { connect } from 'react-redux';

import Community from 'src/components/Community';
import { updateField } from 'src/actions/userActions';
import {
  callGetArticleList,
  setOnLoadingStatus,
} from 'src/actions/communityActions';

const mapStateToProps = (state) => ({
  articlesList: state.community.articlesList,
  isLoaded: state.community.isLoaded,
  isLoading: state.community.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  callArticleApiGet: () => {
    dispatch(callGetArticleList());
  },
  handleOnChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
