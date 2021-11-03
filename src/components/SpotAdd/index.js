import './spotadd.scss';

const SpotAdd = (props) => {
  return (
    <div className="spotadd-container">
      <h2 className="title">Ajoute ton Spot</h2>

      <form className="spotadd-form" onSubmit={props.handleSubmitAddPost}>
        <div className="spotadd-container-category">
          <label
            htmlFor="category-skatepark"
            className="spotadd-label-category"
          >
            SkatePark
            <input
              id="category-skatepark"
              className="spotadd-check-category"
              type="checkbox"
              name="skatepark"
              checked
            />
          </label>

          <label
            htmlFor="category-pumptrack"
            className="spotadd-label-category"
          >
            PumpTrack
            <input
              id="category-pumptrack"
              className="spotadd-check-category"
              type="checkbox"
              name="pumptrack"
            />
          </label>

          <label htmlFor="category-street" className="spotadd-label-category">
            Street
            <input
              id="category-street"
              className="spotadd-check-category"
              type="checkbox"
              name="streetspot"
            />
          </label>
        </div>

        <label htmlFor="category-street" className="spotadd-label-category">
          Street
          <input
            id="category-street"
            className="spotadd-check-category"
            type="checkbox"
            name="street"
          />
        </label>
      </div>

      <div className="spotadd-container-adress">
        <h2 className="spotadd-title">Adresse</h2>
        <input
          id="street"
          className="spotadd-input"
          type="text"
          name="street"
          placeholder="Rue"
          required
        />
        <input
          id="postal"
          className="spotadd-input"
          type="text"
          name="postal"
          placeholder="Code Postal"
          required
        />
        <input
          id="town"
          className="spotadd-input"
          type="text"
          name="town"
          placeholder="Ville"
          required
        />
      </div>

      <div className="spotadd-container-equipment">
        <h2 className="spotadd-title">Equipement</h2>
        <label htmlFor="parking" className="spotadd-label-equipment">
          Parking
          <input
            id="parking"
            className="spotadd-check-equipment"
            type="checkbox"
            name="parking"
          />
        </label>

        <label htmlFor="water" className="spotadd-label-equipment">
          Eau potable
          <input
            id="water"
            className="spotadd-check-equipment"
            type="checkbox"
            name="water"
          />
        </label>

        <label htmlFor="trashcan" className="spotadd-label-equipment">
          Poubelle
          <input
            id="trashcan"
            className="spotadd-check-equipment"
            type="checkbox"
            name="trashcan"
          />
        </label>

        <label htmlFor="lighting" className="spotadd-label-equipment">
          Eclairage
          <input
            id="lighting"
            className="spotadd-check-equipment"
            type="checkbox"
            name="lighting"
          />
        </label>

        <label htmlFor="table" className="spotadd-label-equipment">
          Table
          <input
            id="table"
            className="spotadd-check-equipment"
            type="checkbox"
            name="table"
          />
        </label>

        <label htmlFor="benche" className="spotadd-label-equipment">
          Banc
          <input
            id="benche"
            className="spotadd-check-equipment"
            type="checkbox"
            name="benche"
          />
        </label>
      </div>

        <div className="spotadd-container-image">
          <h2 className="spotadd-title">Image</h2>
          <label htmlFor="image" className="spotadd-label-image">
            Parcourir
            <input
              id="uploadImage"
              className="spotadd-input-image"
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              multiple
              required
              onChange={props.handleUploadLocalImage}
            />
          </label>
        </div>

      <div className="spotadd-container-state">
        <h2 className="spotadd-title">Etat</h2>
        <label htmlFor="new" className="spotadd-label-state">
          Neuf
          <input
            id="new"
            className="spotadd-radio"
            type="radio"
            name="state"
          />
        </label>
        <label htmlFor="good" className="spotadd-label-state">
          Bien
          <input
            id="good"
            className="spotadd-radio"
            type="radio"
            name="state"
          />
        </label>
        <label htmlFor="way" className="spotadd-label-state">
          Moyen
          <input
            id="way"
            className="spotadd-radio"
            type="radio"
            name="state"
          />
        </label>
        <label htmlFor="endoflife" className="spotadd-label-state">
          En fin de vie
          <input
            id="endoflife"
            className="spotadd-radio"
            type="radio"
            name="state"
          />
        </label>
      </div>
      <button type="submit" className="spotadd-button">
        Ajouter un Spot
      </button>
    </form>
  </div>
);

export default SpotAdd;
