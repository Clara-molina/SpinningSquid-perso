import './spotadd.scss';

const SpotAdd = (props) => (
  <div className="spotadd-container">
    <h2 className="title">Ajoute ton Spot</h2>

    <form className="spotadd-form" onSubmit={props.handleSubmitAddPost}>
      <div className="spotadd-container-title">
        <label htmlFor="title-skatepark" className="spotadd-label-title">
          Titre:
          <input
            id="titleSkatepark"
            className="spotadd-check-title"
            type="text"
            name="skatepark"
            onChange={props.handleChangeField}
          />
        </label>
      </div>
      <div className="spotadd-container-category">
        <label htmlFor="category-skatepark" className="spotadd-label-category">
          SkatePark
          <input
            id="categorySkatepark"
            className="spotadd-check-category"
            type="checkbox"
            name="skatepark"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="category-pumptrack" className="spotadd-label-category">
          PumpTrack
          <input
            id="categoryPumptrack"
            className="spotadd-check-category"
            type="checkbox"
            name="pumptrack"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="category-street" className="spotadd-label-category">
          Street
          <input
            id="categoryStreet"
            className="spotadd-check-category"
            type="checkbox"
            name="streetspot"
            onChange={props.handleChangeCheckbox}
          />
        </label>
      </div>
      <div className="spotadd-container-adress">
        <h2 className="spotadd-title">Adresse</h2>
        <input
          id="addSpotStreet"
          className="spotadd-input"
          type="text"
          name="street"
          placeholder="Rue"
          required
          onChange={props.handleChangeField}
        />
        <input
          id="addSpotPostal"
          className="spotadd-input"
          type="text"
          name="postal"
          placeholder="Code Postal"
          required
          onChange={props.handleChangeField}
        />
        <input
          id="addSpotTown"
          className="spotadd-input"
          type="text"
          name="town"
          placeholder="Ville"
          required
          onChange={props.handleChangeField}
        />
        <input
          id="addSpotlongitude"
          className="spotadd-input"
          type="text"
          name="town"
          placeholder="Ville"
          required
          onChange={props.handleChangeField}
        />
        <input
          id="addSpotlattitude"
          className="spotadd-input"
          type="text"
          name="town"
          placeholder="Ville"
          required
          onChange={props.handleChangeField}
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
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="water" className="spotadd-label-equipment">
          Eau potable
          <input
            id="water"
            className="spotadd-check-equipment"
            type="checkbox"
            name="water"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="trashcan" className="spotadd-label-equipment">
          Poubelle
          <input
            id="trashcan"
            className="spotadd-check-equipment"
            type="checkbox"
            name="trashcan"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="lighting" className="spotadd-label-equipment">
          Eclairage
          <input
            id="lighting"
            className="spotadd-check-equipment"
            type="checkbox"
            name="lighting"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="table" className="spotadd-label-equipment">
          Table
          <input
            id="table"
            className="spotadd-check-equipment"
            type="checkbox"
            name="table"
            onChange={props.handleChangeCheckbox}
          />
        </label>

        <label htmlFor="benche" className="spotadd-label-equipment">
          Banc
          <input
            id="benche"
            className="spotadd-check-equipment"
            type="checkbox"
            name="benche"
            onChange={props.handleChangeCheckbox}
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
            id="addSpotNew"
            className="spotadd-radio"
            type="radio"
            name="state"
            onChange={props.handleChangeCheckbox}
          />
        </label>
        <label htmlFor="good" className="spotadd-label-state">
          Bien
          <input
            id="addSpotGood"
            className="spotadd-radio"
            type="radio"
            name="state"
            onChange={props.handleChangeCheckbox}
          />
        </label>
        <label htmlFor="way" className="spotadd-label-state">
          Moyen
          <input
            id="addSpotWay"
            className="spotadd-radio"
            type="radio"
            name="state"
            onChange={props.handleChangeCheckbox}
          />
        </label>
        <label htmlFor="endoflife" className="spotadd-label-state">
          En fin de vie
          <input
            id="addSpotEndoflife"
            className="spotadd-radio"
            type="radio"
            name="state"
            onChange={props.handleChangeCheckbox}
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
