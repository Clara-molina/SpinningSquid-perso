import './community.scss';

const AddPost = (props) => {
  const transfer = (event) => {
    props.handleUploadLocalImage(event);
    // console.log(event);
    const fileChosen = document.getElementById('file-chosen-addPost');
    fileChosen.textContent = event.target.files[0].name;
  };
  return (
    <div id="addpost" className="main-container">
      <h2 className="addpost-title">Ajoute un évènement</h2>
      <form onSubmit={props.handleAddArticle}>
        <div className="addpost-block">
          <div className="addpost-charateristics">
            <label htmlFor="addPostTitle">Titre
              <input
                className="addpost-input"
                type="text"
                id="addPostTitle"
                name="title"
                onChange={props.handleOnChange}
              />
            </label>

            <label htmlFor="addPostDate">Date
              <input
                className="addpost-input"
                type="date"
                id="addPostDate"
                name="date"
                onChange={props.handleOnChange}
              />
            </label>

            <label htmlFor="addPostPlace">Lieu
              <input
                className="addpost-input"
                type="text"
                id="addPostPlace"
                name="place"
                onChange={props.handleOnChange}
              />
            </label>
            <div className="spotadd-container-image">
              <h2 className="spotadd-title">Image</h2>
              <label htmlFor="addPostImage">Parcourir </label>
              <input
                className="addpost-input"
                type="file"
                id="addPostImage"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                onChange={transfer}
                hidden
              />
              <span id="file-chosen-addPost">No file chosen</span>
            </div>
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
};

export default AddPost;
