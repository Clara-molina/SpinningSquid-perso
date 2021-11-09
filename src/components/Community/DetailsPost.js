import './detailpost.scss';

const DetailsPost = (props) => {
  const styleBackground = 'background: url(' + props.photo + ') center/cover';
  return (
    <>
      <div id="detailpost">
        <div className="detailpost-block" style={{ styleBackground }}>
          {/* <img id="detailpost-image" src="" /> */}
          <div className="detailpost-participants">
            <div>
              <p>150 participants</p>
            </div>
          </div>
          <div className="detailpost-participate-button">
            <button type="button" id="participate-button" className="button">
              J'y serai !
            </button>
          </div>
          <div className="detailpost-resume">
            <div>
              <label id="detailpost-title" type="text">
                Venez rider avec nous !
              </label>
            </div>
            <div>
              <h2 id="detailpost-time">15h</h2>
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
          <p>dfghierhgezhghzeotughzotrughorztghrotghortg</p>
          <p>dfghierhgezhghzeotughzotrughorztghrotghortg</p>
          <p>dfghierhgezhghzeotughzotrughorztghrotghortg</p>
          <p>dfghierhgezhghzeotughzotrughorztghrotghortg</p>
        </div>
      </div>

      <div className="shadowDiv"></div>
    </>
  );
};
export default DetailsPost;
