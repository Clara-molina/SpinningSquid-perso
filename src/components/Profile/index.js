import './profile.scss';

const Profile = ({
  handleChange,
  handleSubmitLogin,
  handleSubmitRegister
}) => {
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
          <h2 className="form-register-title">Tu n'a pas de compte ? Crées-en un!</h2>
          <label>Nom d'utilisateur</label>
          <input id="username" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Nom</label>
          <input id="lastname" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Prénom</label>
          <input id="firstname" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Rue</label>
          <input id="street" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Code postal</label>
          <input id="postal" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Ville</label>
          <input id="city" type="text" className="form-register-input" required onChange={handleOnChange} />
          <label>Email</label>
          <input id="email" type="email" className="form-register-input" required onChange={handleOnChange} />
          <label>Password</label>
          <input id="password" type="password" className="form-register-input" required onChange={handleOnChange} />
          <button className="form-register-button" type="submit">Inscription</button>
        </form>

        <form className="form-connection" onSubmit={handleSubmitLogin}>
          <h2 className="form-connection-title">Tu a déjà un compte ? Connecte toi!</h2>
          <label>Email</label>
          <input id="email2" type="email" className="form-connection-input" required onChange={handleOnChange} />
          <label>Password</label>
          <input id="password2" type="password" className="form-connection-input" required onChange={handleOnChange} />
          <button className="form-connection-button" type="submit">Connexion</button>
        </form>
      </div>

    </div>
  );
};

export default Profile;
