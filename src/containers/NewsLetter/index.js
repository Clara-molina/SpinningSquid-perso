import logo from 'src/assets/img/logo-blanc.png';
import { connect } from 'react-redux';

import NewsLetter from 'src/components/NewsLetter';
import { updateField } from 'src/actions/userActions';
import { submitNewsLetter } from 'src/actions/newsLetterActions';

const mapStateToProps = (state) => ({
  email: state.newsLetter.email,
  logo: logo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(updateField('newsletter' + event.target.id, event.target.value));
  },
  submitNewsLetter: (event) => {
    event.preventDefault();
    dispatch(submitNewsLetter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
