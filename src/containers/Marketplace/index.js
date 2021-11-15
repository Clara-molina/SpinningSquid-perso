import { connect } from 'react-redux';

import Marketplace from 'src/components/Marketplace';
import { updateField } from 'src/actions/userActions';
import {
  submitMarketplaceSearch,
  callGetMarketplaceList,
  setOnLoadingStatus,
} from 'src/actions/marketplaceActions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  articlesList: state.marketplace.articlesList,
  responseApi: state.marketplace.responseApi,
  isLoaded: state.marketplace.isLoaded,
  isLoading: state.marketplace.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  callMarketplaceApiGet: () => {
    dispatch(callGetMarketplaceList());
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
  handleOnChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  submitArticleSearch: (event) => {
    event.preventDefault();
    dispatch(submitMarketplaceSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
