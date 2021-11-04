
import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getLocalStorageDataToState: () => {
    console.log("test refresh de page");
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
