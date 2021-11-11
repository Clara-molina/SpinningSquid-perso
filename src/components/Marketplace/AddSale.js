const AddSale = (props) => {
  const transfer = (event) => {
    // console.log(event);
    const fileChosen = document.getElementById('file-chosen-addSale');
    fileChosen.textContent = event.target.files[0].name;
  };
  return (
    <div id="postarticle">
      <h2 className="title">Ajoute du matos</h2>
      <form onSubmit={props.handleOnChange}>

        <div className="postarticle-block">
          <div className="postarticle-characteristics">
            <label htmlFor="addSaleTitle">Titre
              <input
                className="postarticle-input"
                type="text"
                id="addSaleTitle"
                name="title"
                onChange={props.handleOnChange}
              />
            </label>

            <label htmlFor="addSalePlace">Lieu
              <input
                className="postarticle-input"
                type="text"
                id="addSalePlace"
                name="place"
                onChange={props.handleOnChange}
              />
            </label>

            <label htmlFor="addSalePrice">Tarif
              <input
                className="postarticle-input"
                type="number"
                id="addSalePrice"
                name="price"
                onChange={props.handleOnChange}
              />
            </label>

            <div className="postarticle-container-image">
              <h2 className="postarticle-title">Image</h2>
              <label htmlFor="addSaleImage">Parcourir</label>
              <input
                className="postarticle-input"
                type="file"
                id="addSaleImage"
                name="image"
                accept="image/png, image/jpeg"
                multiple
                onChange={props.handleUploadLocalImage}
                hidden
              />
              <span id="file-chosen-addSale">No file chosen</span>
            </div>

          </div>
        </div>
        <div className="postarticle-description">
          <textarea
            id="addSaleDescription"
            name="story"
            rows="5"
            cols="33"
            onChange={props.handleOnChange}
          >
            Entre ta description ici
          </textarea>
        </div>
        <div className="postarticle-button">
          <button type="submit" id="postarticle-button" className="button">
            Poster mon matos
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSale;
