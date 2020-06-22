import React, { useState } from 'react';
import Titles from '../../../components/Titles';
import ContactForm from '../../../components/Form';
import { postNewSubscription } from '../../../utils/api';
import './contact.css';

function Contact() {
  const [succesfullSubscription, setSuccesfullSubscription] = useState(false);

  const subscribeNewsletter = async (data) => {
    let susbcriptionReady = await postNewSubscription(data);
    if (susbcriptionReady) {
      setSuccesfullSubscription(susbcriptionReady);
    }
  };


  return (
    <section className="container">
      <Titles title="Contáctanos" />
      <div className="row form_section">
        {!succesfullSubscription 
          ? <ContactForm subscribe={subscribeNewsletter} />
          : <div className="succesful_subscription">
              <p>Ya eres parte de nuestro Newsletter. Prepárate para recibir los mejores secretos para tu cocina.</p>
            </div>
        }
      </div>
    </section>
  );
}

export default Contact;
