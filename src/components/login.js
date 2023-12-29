import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {

      if(email === "Admin" && password === "Admin"){

        navigate("../admin")
      }

      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      localStorage.setItem('LoginToken', data.token);
      console.log("data from login------------------")
      console.log(data)
      // history.push('/home');
    } catch (err) {
      // Handle authentication error (e.g., show error message)
      console.error('Authentication failed:', err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
