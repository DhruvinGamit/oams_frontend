// import React, { useState } from 'react';
// import '../styles/Register.css'; 

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     fullName: '',
//     address: '',
//     contact: '',
//   });

//   const { email, password, fullName, address, contact } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       console.log("from formdata------")
//       console.log( formData )
//       const response = await fetch('http://localhost:8080/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//         console.log("From register-----response")
//         console.log(response)
//       if (response.ok) {
//         console.log('Registration successful');
       
//         setFormData({
//           email: '',
//           password: '',
//           fullName: '',
//           address: '',
//           contact: '',
//         });
//       } else {
//         console.error('Registration failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };
  
  

//   return (
//     <div className="register-container"> 
//       <h2>Register</h2>
//       <form onSubmit={onSubmit} className="register-form"> 
//         <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
//         <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
//         <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={onChange} />
//         <input type="text" placeholder="Address" name="address" value={address} onChange={onChange} />
//         <input type="text" placeholder="Contact" name="contact" value={contact} onChange={onChange} />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// components/Register.js
import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    address: '',
    contact: '',
    isProvider: false, // Default value for isProvider
  });

  const { email, password, fullName, address, contact, isProvider } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e) => {
    setFormData({ ...formData, isProvider: e.target.checked });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful');

        setFormData({
          email: '',
          password: '',
          fullName: '',
          address: '',
          contact: '',
          isProvider: false,
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
        {/* Existing input fields */}
        <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
        <input type="text" placeholder="Full Name" name="fullName" value={fullName} onChange={onChange} />
        <input type="text" placeholder="Address" name="address" value={address} onChange={onChange} />
        <input type="text" placeholder="Contact" name="contact" value={contact} onChange={onChange} />

        {/* New input field for the provider option */}
        <label>
          <input type="checkbox" name="isProvider" checked={isProvider} onChange={onCheckboxChange} />
          Register as a provider
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

