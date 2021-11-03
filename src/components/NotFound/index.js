import './notFound.scss';

const NotFound = () => (
  <div className="notFound">
    <h1 className="notFound-title">Oops ... t'as loupé ton back flip ?</h1>
    <div className="notFound-container">
      <img className="notFound-image" alt="" src="" />
      <p className="notFound-p">Erreur 404, la page n'héxiste pas</p>
      <button className="notFound-button" type="button" to="">Retour à l'accueil</button>
    </div>
  </div>
);

export default NotFound;
