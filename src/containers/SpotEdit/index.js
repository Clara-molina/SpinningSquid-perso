import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';
import {
  submitUpdateSpot,
  callGetSkateparkDetails,
  fillState,
} from 'src/actions/skateparkActions';
import returnBase64Img from 'src/generic_functions';

import SpotEdit from 'src/components/SpotEdit';

const mapStateToProps = (state, ownProps) => ({
  skateparId: ownProps.match.params.resultat,
  title: state.skatepark.addSpot.title,
  categorySkatepark: state.skatepark.addSpot.categorySkatepark,
  categoryPumptrack: state.skatepark.addSpot.categoryPumptrack,
  categoryStreet: state.skatepark.addSpot.categoryStreet,
  street: state.skatepark.addSpot.street,
  postal: state.skatepark.addSpot.postal,
  town: state.skatepark.addSpot.town,
  latitude: state.skatepark.addSpot.latitude,
  longitude: state.skatepark.addSpot.longitude,
  parking: state.skatepark.addSpot.parking,
  water: state.skatepark.addSpot.water,
  trashcan: state.skatepark.addSpot.trashcan,
  lighting: state.skatepark.addSpot.lighting,
  table: state.skatepark.addSpot.table,
  benche: state.skatepark.addSpot.benche,
  etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
  uploadedImg: state.skatepark.addSpot.uploadedImg,
});

const mapDispatchToProps = (dispatch, state) => ({
  fillState: (skateparkId) => {
    dispatch(fillState(skateparkId));
  },
  getSkateparkDetails: (skateparkId) => {
    dispatch(callGetSkateparkDetails(skateparkId));
  },
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