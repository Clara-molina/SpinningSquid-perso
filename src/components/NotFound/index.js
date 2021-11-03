import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => (
  <div className="notFound">
    <h1 className="notFound-title">Oops ... t'as loupé ton back flip ?</h1>
    <div className="notFound-container">
      <img className="notFound-image" alt="" src="" />
      <p className="notFound-p">Erreur 404, la page n'héxiste pas</p>
      <Link to="/">
        <button className="button" type="button">Retour à l'accueil</button>
      </Link>
    </div>
  </div>
);

export default NotFound;
