import contact from 'src/assets/img/contact.jpg';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h1 className="contact-title">Que puis-je pour toi jeune skateur ?</h1>
    <div className="contact-container">
      <img className="contact-image" alt="" src={contact} />
      <form className="contact-form">
        <label className="contact-label">
          Prénom :
          <input className="contact-input" type="text" />
        </label>
        <label className="contact-label">
          Nom :
          <input className="contact-input" type="text" />
        </label>
        <label className="contact-label">
          Email :
          <input className="contact-input" type="email" />
        </label>
        <label className="contact-label">
          Message :
          <input className="contact-input-message" type="text" />
        </label>
        <button className="contact-button" type="submit">Envoyer</button>
      </form>
    </div>
  </div>
);

export default Contact;
