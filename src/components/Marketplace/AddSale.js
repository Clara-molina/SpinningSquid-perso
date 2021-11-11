// const transfer = (event) => {
//   // console.log(event);
//   const fileChosen = document.getElementById('file-chosen');
//   fileChosen.textContent = event.target.files[0].name;
// };

const AddSale = (props) => (
  <div id="postarticle">
    <h2 className="title">Ajoute du matos</h2>
    <form onSubmit={props.handleOnChange}>

      <div className="postarticle-block">
        <div className="postarticle-characteristics">
          <label htmlFor="title">Titre
            <input
              className="postarticle-input"
              type="text"
              id="title"
              name="title"
              onChange={props.handleOnChange}
            />
          </label>

          <label htmlFor="place">Lieu
            <input
              className="postarticle-input"
              type="text"
              id="place"
              name="place"
              onChange={props.handleOnChange}
            />
          </label>

          <label htmlFor="price">Tarif
            <input
              className="postarticle-input"
              type="number"
              id="price"
              name="price"
              onChange={props.handleOnChange}
            />
          </label>

          <label htmlFor="image">Image
            <input
              className="postarticle-input"
              type="file"
              id="postarticle-image"
              name="image"
              accept="image/png, image/jpeg"
              multiple
              onChange={props.handleUploadLocalImage}
              hidden
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

export default AddSale;
