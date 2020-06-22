import React from 'react';
import './style.css';

function ContactForm() {
  return (
    <form className="contact_form">
      <div className="column_form">
        <label htmlFor="firstName">Nombre</label>
        <input id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">Apellido</label>
        <input id="lastName" type="text" name="lastName" />
      </div>
      <div className="column_form">
        <label htmlFor="email">Mail</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="phone">Teléfono</label>
        <input id="phone" type="tel" name="phone" />
      </div>
      <button className="send_btn">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
