import React, { useState, useEffect } from 'react';
import * as validations from '../../utils/validations';
import './style.css';

function ContactForm(params) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [formReady, setFormReady] = useState(false);

  const { subscribe } = params ? params : [];


  const handleTextChange = e => {
    let text = e.target.value;
    let name = e.target.name;
    if (validations.validatedText(text)) {
      if (name === 'firstName') {
        setFirstName(text);
      } else if (name === 'lastName') {
        setLastName(text);
      }
      e.target.classList.remove('invalid');
    } else {
      e.target.classList.add('invalid');
    }
  };

  const handleEmailChange = e => {
    let email = e.target.value;
    if (validations.validatedEmail(email)) {
      setEmail(email);
      e.target.classList.remove('invalid');
    } else {
      e.target.classList.add('invalid');
    }
  };

  const handlePhoneChange = e => {
    let phone = e.target.value;
    if (validations.validatedPhone(phone)) {
      setPhone(phone);
      e.target.classList.remove('invalid');
    } else {
      e.target.classList.add('invalid');
    }
  };

  useEffect(() => {
    const button = document.querySelector('#sendFormButton');
    const mandatoryForm = document.querySelector('#mandatoryForm');
    if (firstName && lastName && email && phone) {
      mandatoryForm.style.display = 'none';
      button.classList.remove('disabled');
      setFormReady(true);
    } else {
      mandatoryForm.style.display = 'block';
      button.classList.add('disabled');
    }
  }, [firstName, lastName, email, phone]);

  const handleSubmit = e => {
    e.preventDefault();
    if (formReady) {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      };
      subscribe(data);
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="contact_form">
      <label htmlFor="firstName">Nombre</label>
      <input id="firstName" type="text" name="firstName" onInput={e => handleTextChange(e)} />
      <label htmlFor="lastName">Apellido</label>
      <input id="lastName" type="text" name="lastName" onInput={e => handleTextChange(e)} />
      <label htmlFor="email">Mail</label>
      <input id="email" type="email" name="email" onInput={e => handleEmailChange(e)} />
      <label htmlFor="phone">Teléfono</label>
      <input id="phone" type="number" name="phone" onInput={e => handlePhoneChange(e)} />
      <span id="mandatoryForm">*Todos los campos son obligatorios</span>
      <button type="submit" className="send_btn" id="sendFormButton">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
