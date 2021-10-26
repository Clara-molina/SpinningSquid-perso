const Profile = ({ trystate, name, password, handleChange }) => {
  const handleOnChange = (event) => {
    console.log(event);
    console.log(event.target.id);
    console.log(event.target.value);
    const inputId = event.target.id;
    const inputValue = event.target.value;

    handleChange(inputId, inputValue);
  };
  return (
    <>
      <h2>Profile</h2>
      <h2>essai state: {trystate}</h2>
      <label>Nom</label>
      <input id="name" onChange={handleOnChange} />
      <label>Password</label>
      <input id="password" onChange={handleOnChange} />
      <h2>modification label depuis le state</h2>
      <label>Nom modifié : {name}</label>
      <label>Password modifié : {password}</label>
    </>
  );
};

export default Profile;
