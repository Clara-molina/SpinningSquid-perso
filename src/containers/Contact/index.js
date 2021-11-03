import { connect } from 'react-redux';

import Contact from 'src/components/Contact';
import logo from 'src/assets/img/logo-blanc.png';
import { updateField } from 'src/actions/userActions';
import { submitMessage } from 'src/actions/contactActions';

const mapStateToProps = (state) => ({
  firstname: state.contact.firstname,
  name: state.contact.name,
  email: state.contact.email,
  message: state.contact.message,
  logo: logo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  handleSubmitMessage: (event) => {
    event.preventDefault();
    dispatch(submitMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
