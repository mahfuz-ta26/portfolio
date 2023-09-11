import React, { useState } from 'react';
import '../Css/Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus({ submitted: true, error: null });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          throw new Error('Failed to submit the form');
        }
      })
      .catch((error) => {
        setFormStatus({ submitted: true, error: error.message });
      });

  };
  // console.log(formStatus)
  return (
    <div className='contact-holder'>
      <div className='infocont'>
            <h1>Contact Me...</h1>
            {/* <div className="hori"></div> */}
      </div>
      
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
      </div>

    </div>
  );
}

export default ContactForm;
