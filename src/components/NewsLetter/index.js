import whitelogo from 'src/assets/img/logo-blanc.png';
import './newsletter.scss';

const NewsLetter = () => (
  <div className="newsletter">
    <h1 className="newsletter-title">Inscrit toi à la newsletter pour ne rien louper !</h1>
    <div className="newsletter-container">
      <img className="newsletter-image" alt="" src={whitelogo} />
      <form className="newsletter-form">
        <label className="newsletter-label">Email</label>
        <input id="email" className="newsletter-input" type="email" />
        <button className="newsletter-button" type="submit">Envoyer</button>
      </form>
    </div>
    
  </div>
);

export default NewsLetter;
