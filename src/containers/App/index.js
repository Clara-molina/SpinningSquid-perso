
import { connect } from 'react-redux';

import App from 'src/components/App';
import { fillState } from 'src/actions/userActions'

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getLocalStorageDataToState: () => {
    console.log('test refresh de page');
    const userLogs = localStorage.getItem('logged');
    console.log(userLogs);
    if (userLogs) {
      dispatch(fillState(userLogs));
    }
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
