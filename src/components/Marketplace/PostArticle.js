const PostArticle = () => {
  return (
    <>
      <div id="postarticle">
        <div className="postarticle-block">
          <div className="postarticle-image">
            <div>
              <input
                type="file"
                id="postarticle-image"
                name="postarticle-image"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
          <div className="postarticle-characteristics">
            <div className="characteristics-details"></div>
            <div className="postarticle-button">
              <div>
                <button id="postarticle-button" className="button">
                  Poster mon matos
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="postarticle-description">
          <textarea
            id="postarticle-description"
            name="story"
            rows="5"
            cols="33"
          >
            Entre ta description ici
          </textarea>
        </div>
      </div>
      <div className="shadowDiv"></div>
    </>
  );
};

export default PostArticle;
