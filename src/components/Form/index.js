import React from 'react';
import './style.css';

function ContactForm() {
  return (
    <form className="contact_from">
      <div className="column_form">
        <label>Nombre</label>
        <input type="text" name="firstname" />
        <label>Apellido</label>
        <input type="text" name="lastname" />
      </div>
      <div className="column_form">
        <label>Mail</label>
        <input type="email" name="email" />
        <label>Teléfono</label>
        <input type="tel" name="phone" />
      </div>
      <button className="send_btn">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
