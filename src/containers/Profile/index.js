import { connect } from 'react-redux';
import returnBase64Img from 'src/generic_functions';

import Profile from 'src/components/Profile';
import { updateField, submitUpdateProfile, checkUserUpdateProfile } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  usernameConnection: state.user.usernameConnexion,
  usernameEdit: state.user.profile.usernameEdit,
  passwordEdit: state.user.profile.passwordEdit,
  lastnameEdit: state.user.profile.lastnameEdit,
  firstnameEdit: state.user.profile.firstnameEdit,
  streetEdit: state.user.profile.streetEdit,
  postalEdit: state.user.profile.postalEdit,
  cityEdit: state.user.profile.cityEdit,
  emailEdit: state.user.profile.emailEdit,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    console.log(inputId);
    console.log(inputValue);
    dispatch(updateField(inputId, inputValue));
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
    //dispatch(updateField(imgName, imgValue));
    dispatch(updateField('avatarImageEdit', imgBase64));
    console.log('commande envoyée');
  },
  handleCheckUserUpdateProfile: (event) => {
    console.log('essai');
    event.preventDefault();
    dispatch(checkUserUpdateProfile());
  },
  handleSubmitUpdateProfile: (event) => {
    event.preventDefault();
    dispatch(submitUpdateProfile());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
