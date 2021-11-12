import './detailpost.scss';

const DetailsPost = (props) => {
  // if (!props.isLoading) {
  //   props.submitGetArticleDetails(props.postId);
  //   props.setOnLoading();
  // }
  const styleBackground = 'background: url(' + props.photo + ') center/cover';
  return (
    <div id="detailpost">
      <div className="detailpost-block" style={{ styleBackground }}>
        {/* <img id="detailpost-image" src="" /> */}
        <div className="detailpost-resume">
          <div>
            <h2 id="detailpost-title" type="text">
              Venez rider avec nous !
            </h2>
          </div>
          <div>
            <h2 id="detailpost-adress">Babeloued</h2>
          </div>
          <div>
            <h2 id="detailpost-message">details à rajouter</h2>
          </div>
        </div>
      </div>
      <div className="detailpost-description">
        <h2>Description</h2>
        <p>dfghierhgezhghzeotughzotrughorztghrotghortg</p>
      </div>
    </div>
  );
};
export default DetailsPost;
