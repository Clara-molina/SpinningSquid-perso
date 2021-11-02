import './profile.scss';
import logo2 from 'src/assets/img/logo2.png';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Profile = (props) => (
  <div className="profile">
    <h1 className="profile-title">Bienvenue {props.usernameEdit}</h1>

    <div className="profile-container">
      <img className="profile-avatar" src={logo2} alt="avatar" />
      <p className="profile-name">UserName</p>
      <Popup
        trigger={
          (
            <button className="profile-button-edit" type="button">
              Editer mon profil
            </button>
          )
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="header"> Modifie ton profil </div>
            <form className="form" onSubmit={props.handleSubmitUpdateProfile}>
              <div className="content">
                <label htmlFor="usernameEdit">
                  Nom d'utilisateur
                  <input
                    id="usernameEdit"
                    type="text"
                    className="form-edit-input"
                    value={props.usernameEdit}
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="lastnameEdit">
                  Nom
                  <input
                    id="lastnameEdit"
                    type="text"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="firstnameEdit">
                  Prénom
                  <input
                    id="firstnameEdit"
                    type="text"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="streetEdit">
                  Rue
                  <input
                    id="streetEdit"
                    type="text"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="postalEdit">
                  Code postal
                  <input
                    id="postalEdit"
                    type="text"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="cityEdit">
                  Ville
                  <input
                    id="cityEdit"
                    type="text"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="emailEdit">
                  Email
                  <input
                    id="emailEdit"
                    type="email"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
                <label htmlFor="passwordEdit">
                  Password
                  <input
                    id="passwordEdit"
                    type="password"
                    className="form-edit-input"
                    // required
                    onChange={props.handleChange}
                  />
                </label>
              </div>
              <div className="actions">
                <button type="submit" className="button">
                  {' '}
                  Modifier{' '}
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>

    <div className="profile-articles">
      <Link>
        <img className="profile-articles-img" src="" alt="" />
        <h2 className="profile-articles-title">Titre de l'annonce 1</h2>
      </Link>
      <Link>
        <img className="profile-articles-img" src="" alt="" />
        <h2 className="profile-articles-title">Titre de l'annonce 2</h2>
      </Link>
    </div>
  </div>
);

export default Profile;
