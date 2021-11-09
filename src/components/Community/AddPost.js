import './community.scss';

const AddPost = () => (
  <>
    <div id="addpost">
      <div className="addpost-block">
        <div className="addpost-image">
          <div>
            <input
              type="file"
              id="addpost-image"
              name="addpost-image"
              accept="image/png, image/jpeg"
            />
          </div>
        </div>
        <div className="addpost-charateristics">
          <div className="characteristics-details">
            <div>
              <label for="date">Entrez une date</label>
            </div>
            <div>
              <input type="text" id="date"></input>
            </div>
            <div>
              <label for="date">Entrez un horaire</label>
            </div>
            <div>
              <input type="text" id="date"></input>
            </div>
            <div>
              <label for="adress">Entrez une adresse</label>
            </div>
            <div>
              <input type="text" id="adress"></input>
            </div>
          </div>
          <div className="addpost-button">
            <div>
              <button type="button" id="addpost-button" className="button">
                Poster evenement
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="addpost-description">
        <textarea id="addpost-description" name="story" rows="5" cols="33">
          Entre ta description ici
        </textarea>
      </div>
    </div>
    <div className="shadowDiv"></div>
  </>
);

export default AddPost;
