import { connect } from 'react-redux';
import { submitLogout, checkUserUpdateProfile, getUserDataProfile } from 'src/actions/userActions';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(submitLogout());
  },
  handleCheckUserUpdateProfile: () => {
    dispatch(checkUserUpdateProfile());
    dispatch(getUserDataProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
