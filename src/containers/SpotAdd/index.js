import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import { submitAddSpot } from 'src/actions/skateparkActions';
import returnBase64Img from 'src/generic_functions';

import SpotAdd from 'src/components/SpotAdd';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, state) => ({
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    const imgBase64 = await returnBase64Img(imgValue);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField(imgName, imgValue));
    dispatch(updateField('tryPromiseField', imgBase64));
    console.log('commande envoyée');
  },
  handleSubmitAddPost: (event) => {
    event.preventDefault();
    //const encodedImg = createBase64Image(selectedImg);
    console.log('on passe dans handleSubmitAddPost');
    dispatch(submitAddSpot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotAdd);
