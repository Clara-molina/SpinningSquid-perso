import { connect } from 'react-redux';

import SpotAdd from 'src/components/SpotAdd';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  //handleSubmitAddPost: () => {},
  handleUploadLocalImage: (file) => {
    console.log(file);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotAdd);
