const Profile = ({ trystate }) => {
  return (
    <>
      <h2>Profile</h2>
      <label>Nom</label>
      <input id="name" />
      <label>Password</label>
      <input id="password" />
      <h2>essai state: {trystate}</h2>
    </>
  );
};

export default Profile;
