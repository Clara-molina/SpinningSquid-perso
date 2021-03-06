import './community.scss';

const AddPost = () => (
  <div id="addpost">
    <h2 className="addpost-title">Ajoute un évènement</h2>
    <div className="addpost-block">
      <div className="addpost-charateristics">
        <label htmlFor="date">Titre
          <input className="addpost-input" type="text" id="title" name="title" />
        </label>

        <label htmlFor="date">Date
          <input className="addpost-input" type="date" id="date" name="date" />
        </label>

        <label htmlFor="place">Lieu
          <input className="addpost-input" type="text" id="place" name="place" />
        </label>
        <label htmlFor="image">Image
          <input
            className="addpost-input"
            type="file"
            id="addpost-image"
            name="image"
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
    </div>
    <div className="addpost-description">
      <textarea id="addpost-description" name="story" rows="5" cols="33">
        Entre ta description ici
      </textarea>
    </div>
    <div className="addpost-button">
      <button type="button" id="addpost-button" className="button">
        Poster l'évènement
      </button>
    </div>
  </div>
);

export default AddPost;
