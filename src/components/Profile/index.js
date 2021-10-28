import './profile.scss';

const Profile = ({
  trystate,
  name,
  password,
  email,
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
          <label>Nom</label>
          <input id="name" type="text" className="form-register-input" onChange={handleOnChange} />
          <label>Password</label>
          <input id="password" type="password" className="form-register-input" onChange={handleOnChange} />
          <label>Email</label>
          <input id="email" type="email" className="form-register-input" onChange={handleOnChange} />
          <button className="form-register-button" type="submit">Inscription</button>
        </form>

        <form className="form-connection" onSubmit={handleSubmitLogin}>
          <h2 className="form-connection-title">Tu a déjà un compte ? Connecte toi!</h2>
          <label>Email</label>
          <input id="email" type="email" className="form-connection-input" onChange={handleOnChange} />
          <label>Password</label>
          <input id="password" type="password" className="form-connection-input" onChange={handleOnChange} />
          <button className="form-connection-button" type="submit">Connexion</button>
        </form>
      </div>

    </div>
  );
};

export default Profile;
