import { connect } from 'react-redux';
import { updateField } from 'src/actions/userActions';

import SpotAdd from 'src/components/SpotAdd';

const convertToBase64Image = (fileObject) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // reader.readAsBinaryString(fileObject);
    reader.readAsDataURL(fileObject);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    const imgBase64 = await convertToBase64Image(imgValue);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField(imgName, imgValueURL));
    dispatch(updateField('tryPromiseField', imgBase64));
    console.log('commande envoyée');
  },
  //handleSubmitAddPost: () => {
  //   const encodedImg = createBase64Image(selectedImg);
  //   console.log(encodedImg);
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotAdd);
