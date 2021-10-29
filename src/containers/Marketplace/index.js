import { connect } from 'react-redux';

import Marketplace from 'src/components/Marketplace';
import { updateField } from 'src/actions/userActions';
import { submitMarketplaceSearch } from 'src/actions/marketplaceActions';

const mapStateToProps = (state) => ({
  articlesList: state.marketplace.articlesList,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnSearchArticleFieldChange: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  submitArticleSearch: (event) => {
    event.preventDefault();
    dispatch(submitMarketplaceSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
