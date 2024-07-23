import React, { useState } from 'react';
import '../Pages/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.comment) formErrors.comment = 'Comment is required';

    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully');
      // Handle form submission logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
<div class="container">

    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Comment</label>
        <textarea name="comment" value={formData.comment} onChange={handleChange}
          ></textarea>
          {errors.comment && <p>{errors.comment}</p>}
        </div>
      <button type="submit">Submit</button>
    </form>
</div>

  );
};


export default ContactForm;

