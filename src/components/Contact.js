import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={contactContainerStyle}>
      <h2>Contact Us</h2>
      {submitted ? (
        <div style={thankYouMessageStyle}>
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
          <label style={labelStyle}>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
          <label style={labelStyle}>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} style={textareaStyle} required />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      )}
    </div>
  );
}

// Inline styles for Contact form
const contactContainerStyle = {
  padding: '20px',
  backgroundColor: 'pink',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  width: '400px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  margin: '10px 0 5px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '13px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '10px',
};

const textareaStyle = {
  padding: '1px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  height: '100px',
  marginBottom: '15px',
};

const buttonStyle = {
  backgroundColor: '#000',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const thankYouMessageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#2127',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

export default Contact;
