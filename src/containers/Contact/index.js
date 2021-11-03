import { connect } from 'react-redux';

import Contact from 'src/components/Contact';
import logo from 'src/assets/img/logo-blanc.png';
import { updateField } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  firstname: state.contact.firstname,
  name: state.contact.name,
  email: state.contact.email,
  message: state.contact.message,
  logo: logo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  handleSubmitMessage: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
