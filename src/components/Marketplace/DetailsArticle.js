const DetailsArticle = (props) => {
  const styleBackground = 'background: url(' + props.photo + ') center/cover';
  return (
    <>
      <div id="detailpost">
        <div className="detailpost-block" style={{ styleBackground }}>
          {/* <img id="detailpost-image" src="" /> */}

          <div className="detailpost-resume">
            <div>
              <label id="detailpost-title" type="text">
                Roulement plaqué or
              </label>
            </div>
            <div>
              <h2 id="detailpost-message">Vendeur à la sauvette</h2>
            </div>
          </div>
        </div>
        <div className="detailpost-description">
          <h2>Description et détails</h2>
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

export default DetailsArticle;
