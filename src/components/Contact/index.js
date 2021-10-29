import contact from 'src/assets/img/logo-blanc.png';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h1 className="contact-title">Que puis-je pour toi jeune skateur ?</h1>
    <div className="contact-container">
      <img className="contact-image" alt="" src={contact} />
      <form className="contact-form">
        <label className="contact-label">Prénom</label>
        <input id="firstname" className="contact-input" type="text" />
        <label className="contact-label">Nom</label>
        <input id="name" className="contact-input" type="text" />
        <label className="contact-label">Email</label>
        <input id="email" className="contact-input" type="email" />
        <label className="contact-label"> Message</label>
        <input id="message" className="contact-input-message" type="text" />

        <button className="contact-button" type="submit">Envoyer</button>
      </form>
    </div>
  </div>
);

export default Contact;
