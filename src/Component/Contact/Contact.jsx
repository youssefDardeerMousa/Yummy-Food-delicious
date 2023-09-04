import React, { useState } from 'react'
import style from "./Contact.module.scss"
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Contact() {
  let nav=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  let [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side validation
    console.log('Form submitted:', formData);
  };
  return (
    <>
    <div className="container mt-5 text-light">
      <h2 className='text-center'>Contact Us</h2>
      <form onSubmit={handleSubmit} className=' w-50 mx-auto'>
        <div className="form-group my-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control "
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control "
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control "
            id="message"
            rows="4"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button disabled={!(formData.name.value!=="" && formData.email.value!=="" && formData.message!=="")} onClick={()=> nav("/Home")} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  
    <Helmet>
            <title>Contact</title>
            
          </Helmet>
    </>
  )
}
