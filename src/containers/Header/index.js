import { connect } from 'react-redux';
import {
  submitLogout
} from 'src/actions/userActions';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: (event) => {
    event.preventDefault();
    dispatch(submitLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
