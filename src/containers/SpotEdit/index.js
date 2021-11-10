import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import { submitUpdateSpot } from 'src/actions/skateparkActions';
import returnBase64Img from 'src/generic_functions';

import SpotEdit from 'src/components/SpotEdit';

const mapStateToProps = (state) => ({
  etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
});

const mapDispatchToProps = (dispatch, state) => ({
  handleChangeField: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  handleChangeCheckbox: (event) => {
    dispatch(updateField(event.target.id, event.target.checked));
  },
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    //<img src={URL.createObjectURL(`data:image/jpeg;base64,${this.state.image}`)} />
    const imgBase64 = await returnBase64Img(imgValue);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField(imgName, imgValue));
    dispatch(updateField('uploadImage', imgBase64));
    console.log('commande envoyée');
  },
  handleSubmitEditPost: (event) => {
    event.preventDefault();
    //const encodedImg = createBase64Image(selectedImg);
    //console.log('on passe dans handleSubmitUpdatePost');
    dispatch(submitUpdateSpot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotEdit);
