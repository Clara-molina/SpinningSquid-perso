import { connect } from 'react-redux';

import Profile from 'src/components/Profile';
import {
  updateField,
  submitLogin,
  submitRegister,
} from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  trystate: state.user.trystate,
  name: state.user.name,
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
