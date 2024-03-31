// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate()
//   const { email, password } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
    
//     try {
//       if(email === "Admin" && password === "Admin"){

//         navigate("/admin")
//       }

//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log("in onsubmit---------")
//       const data = await response.json();
//       if(data.token != null){
//         localStorage.setItem('LoginToken', data.token);
//         localStorage.setItem('UserId', data.userId);
//         localStorage.setItem('IsProvider', data.isProvider);
//         console.log("data from login------------------")
//         console.log(data)
//         navigate('/home');
//       }
//       window.location.reload();

//     } catch (err) {
//       console.error('Authentication failed:', err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={onChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


//-------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();
//   const { email, password } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (email === 'Admin' && password === 'Admin') {
//         navigate('/admin');
//         return;
//       }

//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('LoginToken', data.token);
//         localStorage.setItem('UserId', data.userId);
//         localStorage.setItem('IsProvider', data.isProvider);
//         navigate('/home');
//         window.location.reload();
//       } else {
//         console.error('Authentication failed:', response.statusText);
//       }
//     } catch (err) {
//       console.error('Authentication failed:', err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={onChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email === 'Admin' && password === 'Admin') {
        navigate('/admin');
        return;
      }


      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('LoginToken', data.token);
        localStorage.setItem('UserId', data.userId);
        localStorage.setItem('IsProvider', data.isProvider);
        setFormData({ email: '', password: '' });
        navigate('/home');
        window.location.reload();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Authentication failed.');
      }
    } catch (err) {
      console.error('Authentication failed:', err.message);
      setErrorMessage('Authentication failed. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" name="email" value={email} onChange={onChange}  required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
