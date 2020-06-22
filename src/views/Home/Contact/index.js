import React from 'react';
import Titles from '../../../components/Titles';
import ContactForm from '../../../components/Form';

function Contact() {
  return (
    <section className="container">
      <Titles title="Contáctanos" />
      <div className="row form_section">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
