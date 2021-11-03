import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import { updateField, submitUpdateProfile } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  usernameConnection: state.user.usernameConnexion,
  usernameEdit: state.user.profile.usernameEdit,
  passwordEdit: state.user.profile.passwordEdit,
  lastnameEdit: state.user.profile.lastnameEdit,
  firstnameEdit: state.user.profile.firstnameEdit,
  streetEdit: state.user.profile.streetEdit,
  postalEdit: state.user.profile.postalEdit,
  cityEdit: state.user.profile.cityEdit,
  emailEdit: state.user.profile.emailEdit,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    console.log(inputId);
    console.log(inputValue);
    dispatch(updateField(inputId, inputValue));
  },
  handleSubmitUpdateProfile: (event) => {
    event.preventDefault();
    dispatch(submitUpdateProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
