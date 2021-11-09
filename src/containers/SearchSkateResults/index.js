import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import {
  callGetSkateparkList,
} from 'src/actions/skateparkActions';
import SearchSkateResults from 'src/components/SearchSkateResults';

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return({
  skateparkName: ownProps.match.params.resultat,
})};

const mapDispatchToProps = (dispatch) => ({
  getSkateparkDetails: (skateparkName) => {
    console.log("pouet");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSkateResults);
