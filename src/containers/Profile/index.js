import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import {
  updateField,
  submitLogin,
  submitRegister,
} from 'src/actions/userActions';

const mapStateToProps = (state) => ({

  username: state.user.username,
  lastname: state.user.lastname,
  firstname: state.user.firstname,
  street: state.user.street,
  postal: state.user.postal,
  city: state.user.city,
  password: state.user.password,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  handleSubmitLogin: (event) => {
    event.preventDefault();
    dispatch(submitLogin());
  },
  handleSubmitRegister: (event) => {
    event.preventDefault();
    dispatch(submitRegister());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
