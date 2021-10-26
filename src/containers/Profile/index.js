import { connect } from "react-redux";

// on importe le composant de présentation
import Profile from "src/components/Profile";

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  trystate: state.user.trystate,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
