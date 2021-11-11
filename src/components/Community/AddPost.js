import './community.scss';

// const transfer = (event) => {
//   // console.log(event);
//   const fileChosen = document.getElementById('file-chosen');
//   fileChosen.textContent = event.target.files[0].name;
// };
const AddPost = (props) => (
  <div id="addpost">
    <h2 className="addpost-title">Ajoute un évènement</h2>
    <form onSubmit={props.handleAddArticle}>
      <div className="addpost-block">
        <div className="addpost-charateristics">
          <label htmlFor="date">Titre
            <input
              className="addpost-input"
              type="text"
              id="addPostTitle"
              name="title"
              onChange={props.handleOnChange}
            />
          </label>

          <label htmlFor="date">Date
            <input
              className="addpost-input"
              type="date"
              id="addPostDate"
              name="date"
              onChange={props.handleOnChange}
            />
          </label>

          <label htmlFor="place">Lieu
            <input
              className="addpost-input"
              type="text"
              id="addPostPlace"
              name="place"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="image">Image
            <input
              className="addpost-input"
              type="file"
              id="addPostImage"
              name="image"
              accept="image/png, image/jpeg"
              multiple
              onChange={props.handleUploadLocalImage}
              hidden
            />
          </label>

        </div>
      </div>
      <div className="addpost-description">
        <textarea
          id="addPostDescription"
          name="story"
          onChange={props.handleOnChange}
          rows="5"
          cols="33"
        >
          Entre ta description ici
        </textarea>
      </div>
      <div className="addpost-button">
        <button type="submit" id="addpost-button" className="button">
          Poster l'évènement
        </button>
      </div>
    </form>
  </div>
);

export default AddPost;
