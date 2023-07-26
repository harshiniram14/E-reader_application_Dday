import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/login.css"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

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
   
    setErrors(validateForm({ email, password }));
    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });
      navigate('/Home');
      let token = response.data.token;
      localStorage.setItem('token', token);
      console.log(response.status);
      if (response.status === 200) {
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
      setIsSubmit(false);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    } else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    return errors;
  };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <h1 className='login__heading'>Login</h1>
        <div className='login__group'>
          <div className='login__input-container'>
            <label htmlFor='email' className='login__label'>
              Email
            </label>
            <input
              type='email'
              className='login__input'
              placeholder='abc@gmail.com'
              value={email}
              id='email'
              onChange={handleEmail}
            />
          </div>
          {errors.email && <span className='login__error'>{errors.email}</span>}
        </div>

        <div className='login__group'>
          <div className='login__input-container'>
            <label htmlFor='pwd' className='login__label'>
              Password
            </label>
            <input
              type='password'
              className='login__input'
              placeholder='password'
              id='pwd'
              value={password}
              onChange={handlePassword}
            />
          </div>
          {errors.password && <span className='login__error'>{errors.password}</span>}
        </div>

        <button
          type='submit'
          className='login__btn'
          style={{ background: 'black', color: 'white', width: 180, height: 50, margin: 40 }}
        >
          Sign In
        </button>
      </form>
      <br />
      <br />
      <h2 className='login__signup-text'>
        Don't have an account? <a href='/SignUp'>SignUp</a>
      </h2>
    </div>
  );
};

export default Login;
