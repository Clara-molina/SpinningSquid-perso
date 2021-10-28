import './spotadd.scss';

const SpotAdd = () => (
  <div className="spotadd-container">
    <h2 className="spotadd-title">Ajoute ton Spot</h2>

    <form className="spotadd-form">
      <label htmlFor="category-skatepark" className="spotadd-label-category">SkatePark
        <input
          id="category-skatepark"
          className="spotadd-check-category"
          type="checkbox"
          name="skatepark"
        />
      </label>

      <label htmlFor="category-pumptrack" className="spotadd-label-category">PumpTrack
        <input
          id="category-pumptrack"
          className="spotadd-check-category"
          type="checkbox"
          name="pumptrack"
        />
      </label>

      <label htmlFor="category-street" className="spotadd-label-category">Street
        <input
          id="category-street"
          className="spotadd-check-category"
          type="checkbox"
          name="street"
        />
      </label>

      <h2>Adresse</h2>
      <input
        id="street"
        className="spotadd-input"
        type="text"
        name="street"
        placeholder="Rue"
      />
      <input
        id="town"
        className="spotadd-input"
        type="text"
        name="town"
        placeholder="Ville"
      />
      <input
        id="postal"
        className="spotadd-input"
        type="text"
        name="postal"
        placeholder="Code Postal"
      />

      <h2>Equipement</h2>
      <label htmlFor="parking" className="spotadd-label">Parking
        <input
          id="parking"
          className="spotadd-check-equipment"
          type="checkbox"
          name="parking"
        />
      </label>

      <label htmlFor="water" className="spotadd-label">Eau potable
        <input
          id="water"
          className="spotadd-check-equipment"
          type="checkbox"
          name="water"
        />
      </label>

      <label htmlFor="trashcan" className="spotadd-label">Poubelle
        <input
          id="trashcan"
          className="spotadd-check-equipment"
          type="checkbox"
          name="trashcan"
        />
      </label>

      <label htmlFor="lighting" className="spotadd-label">Eclairage
        <input
          id="lighting"
          className="spotadd-check-equipment"
          type="checkbox"
          name="lighting"
        />
      </label>

      <label htmlFor="table" className="spotadd-label">Table
        <input
          id="table"
          className="spotadd-check-equipment"
          type="checkbox"
          name="table"
        />
      </label>

      <label htmlFor="benche" className="spotadd-label">Banc
        <input
          id="benche"
          className="spotadd-check-equipment"
          type="checkbox"
          name="benche"
        />
      </label>

      <h2>Image</h2>
      <label htmlFor="image" className="spotadd-label">Parcourir
        <input
          id="image"
          className="spotadd-input"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          multiple
        />
      </label>

      <h2>Difficulté</h2>

      <h2>Etat</h2>
      <label htmlFor="new" className="spotadd-label">Neuf
        <input
          id="new"
          className="spotadd-radio"
          type="radio"
          name="new"
        />
      </label>
      <label htmlFor="good" className="spotadd-label">Bien
        <input
          id="good"
          className="spotadd-radio"
          type="radio"
          name="good"
        />
      </label>
      <label htmlFor="way" className="spotadd-label">Moyen
        <input
          id="way"
          className="spotadd-radio"
          type="radio"
          name="way"
        />
      </label>
      <label htmlFor="endoflife" className="spotadd-label">En fin de vie
        <input
          id="endoflife"
          className="spotadd-radio"
          type="radio"
          name="endoflife"
        />
      </label>
    </form>
  </div>
);

export default SpotAdd;
