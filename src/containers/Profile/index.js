import { connect } from 'react-redux';

// on importe le composant de présentation
import Profile from 'src/components/Profile';
import { updateField, submitLogin } from 'src/actions/userActions';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  trystate: state.user.trystate,
  name: state.user.name,
  password: state.user.password,
  email: state.user.email,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(submitLogin());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
