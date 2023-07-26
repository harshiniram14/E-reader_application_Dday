import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/asignup.css'; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });
      console.log(response.status);
      if (response.status === 200) {
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
    if (isSubmit) {
      navigate('/Alogin');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='login2'>
        <form className='login_form' onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='form-group'>
            <div className='form-floating mb-3'>
              <label htmlFor='nm'>Username</label>
              <br />
              <br></br>
              <input
                type='text'
                className='form-control'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            </div>
            {errors.name && <span>{errors.name}</span>}
          </div>
          <br></br>
          <div className='form-group'>
            <div className='form-floating mb-3'>
              <label htmlFor='email'>Email</label>
              <br />
              <br></br>
              <input
                type='email'
                className='form-control'
                placeholder='email'
                id='email'
                value={email}
                onChange={handleEmail}
              />
            </div>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <br></br>
            <div className='form-group'>
              <div className='form-floating mb-3'>
                <label htmlFor='pwd'>Password</label>
                <br />
                <br></br>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  id='pwd'
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              {errors.password && <span>{errors.password}</span>}
            </div>
          
          <button type='submit' className='btn btn-secondary'>
            Sign Up
          </button>
          <br></br>
          <center>
          <br></br>
        <p>Don't have FLIP ? <a href='/addbk'>Login</a></p>
          </center>
        </form>
        
      </div>
    </>
  );
};

export default SignUp;
