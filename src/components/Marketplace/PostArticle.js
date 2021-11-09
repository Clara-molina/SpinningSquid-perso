const PostArticle = () => (
  <div id="postarticle">
    <h2 className="title">Ajoute du matos</h2>
    <div className="postarticle-block">

      <div className="postarticle-characteristics">
        <label htmlFor="title">Titre
          <input className="postarticle-input" type="text" id="title" name="title" />
        </label>

        <label htmlFor="price">Tarif
          <input className="postarticle-input" type="number" id="price" name="price" />
        </label>

        <label htmlFor="image">Image
          <input
            className="postarticle-input"
            type="file"
            id="postarticle-image"
            name="image"
            accept="image/png, image/jpeg"
          />
        </label>
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
      <div className="postarticle-button">
        <button type="button" id="postarticle-button" className="button">
          Poster mon matos
        </button>
      </div>
  </div>
);

export default PostArticle;
