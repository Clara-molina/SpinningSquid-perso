import { Link } from 'react-router-dom';
import './connection.scss';

const Connection = ({ handleChange, handleSubmitLogin, handleSubmitRegister }) => {
  const handleOnChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    handleChange(inputId, inputValue);
  };
  return (
    <div className="connection">
      <h1 className="title-connection">Connecte toi et sinon, inscrit toi.</h1>

      <div className="container-forms">
        <form className="form-register" onSubmit={handleSubmitRegister}>
          <h2 className="form-register-title">
            Tu n'a pas de compte ? Crées-en un!
          </h2>
          <label htmlFor="usernameInscription">Nom d'utilisateur
            <input
              id="usernameInscription"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="lastname">Nom
            <input
              id="lastname"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="firstname">Prénom
            <input
              id="firstname"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="street">Rue
            <input
              id="street"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="postal">Code postal
            <input
              id="postal"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="city">Ville
            <input
              id="city"
              type="text"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="email">Email
            <input
              id="email"
              type="email"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="passwordInscription">Password
            <input
              id="passwordInscription"
              type="password"
              className="form-register-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <button className="form-register-button" type="submit">
            Inscription
          </button>
        </form>

        <form className="form-connection" onSubmit={handleSubmitLogin}>
          <h2 className="form-connection-title">
            Tu a déjà un compte ? Connecte toi!
          </h2>
          <label htmlFor="usernameConnexion">Nom d'utilisateur
            <input
              id="usernameConnexion"
              type="text"
              className="form-connection-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="passwordConnexion">Password
            <input
              id="passwordConnexion"
              type="password"
              className="form-connection-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <button className="form-connection-button" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connection;
