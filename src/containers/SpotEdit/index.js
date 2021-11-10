import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import { submitAddSpot } from 'src/actions/skateparkActions';
import returnBase64Img from 'src/generic_functions';

import SpotEdit from 'src/components/SpotEdit';

const mapStateToProps = (state) => ({
  etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
});

const mapDispatchToProps = (dispatch, state) => ({
  handleChangeField: (event) => {
    dispatch(updateField());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotEdit);
