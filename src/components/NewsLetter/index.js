import './newsletter.scss';

const NewsLetter = (props) => (
  <div className="newsletter">
    <h1 className="newsletter-title">
      Inscrit toi à la newsletter pour ne rien louper !
    </h1>
    <div className="newsletter-container">
      <img className="newsletter-image" alt="" src={props.logo} />
      <form className="newsletter-form" onSubmit={props.submitNewsLetter}>
        <label className="newsletter-label">Email</label>
        <input
          id="email"
          onChange={props.handleChange}
          className="newsletter-input"
          type="email"
        />
        <button className="newsletter-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>
);

export default NewsLetter;
