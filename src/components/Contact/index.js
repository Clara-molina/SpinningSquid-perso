import './contact.scss';

const Contact = (props) => (
  <div className="contact main-container">
    <h1 className="contact-title">Que puis-je pour toi jeune skateur ?</h1>
    <div className="contact-container">
      <img className="contact-image" alt="" src={props.logo} />
      <form className="contact-form" onSubmit={props.handleSubmitMessage}>
        <label className="contact-label">Prénom</label>
        <input
          id="firstname"
          onChange={props.handleChange}
          className="contact-input"
          type="text"
        />
        <label className="contact-label">Nom</label>
        <input
          id="name"
          onChange={props.handleChange}
          className="contact-input"
          type="text"
        />
        <label className="contact-label">Email</label>
        <input
          id="email"
          onChange={props.handleChange}
          className="contact-input"
          type="email"
        />
        <label className="contact-label"> Message</label>
        <textarea
          id="message"
          onChange={props.handleChange}
          className="contact-input-message"
        />

        <button className="contact-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
