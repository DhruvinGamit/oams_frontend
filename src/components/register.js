import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    address: '',
    contact: '',
  });

  const { email, password, fullName, address, contact } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("from formdata------")
      console.log( formData )
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        console.log("From register-----response")
        console.log(response)
      if (response.ok) {
        console.log('Registration successful');
       
        setFormData({
          email: '',
          password: '',
          fullName: '',
          address: '',
          contact: '',
        });
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  

  return (
    <div className="register-container"> 
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="register-form"> 
        <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
        <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={onChange} />
        <input type="text" placeholder="Address" name="address" value={address} onChange={onChange} />
        <input type="text" placeholder="Contact" name="contact" value={contact} onChange={onChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


