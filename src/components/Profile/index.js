const Profile = ({ trystate, name, password, email, handleChange, handleSubmitLogin, handleSubmitRegister }) => {
  const handleOnChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    handleChange(inputId, inputValue);
  };
  return (
    <>
      <form onSubmit={handleSubmitRegister}>
        <h2>formulaire inscription</h2>
        <h2>Profile</h2>
        <h2>essai state: {trystate}</h2>
        <label>Nom</label>
        <input id="name" onChange={handleOnChange} />
        <label>Password</label>
        <input id="password" onChange={handleOnChange} />
        <label>Email</label>
        <input id="email" onChange={handleOnChange} />
        <h2>modification label depuis le state</h2>
        <label>Nom modifié : {name}</label>
        <label>Password modifié : {password}</label>
        <label>Email modifié : {email}</label>
        <button>Inscription</button>
      </form>
      <h2>-------------------------------------</h2>
      <h2>formulaire connexion</h2>
      <form onSubmit={handleSubmitLogin}>
      <label>Nom</label>
        <input id="name" onChange={handleOnChange} />
        <label>Password</label>
        <input id="password" onChange={handleOnChange} />
        <button>Connexion</button>
      </form>

    </>
  );
};

export default Profile;
