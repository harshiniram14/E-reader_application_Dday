import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/signup.css';

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
      navigate('/Login');
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
    <div className='signup'>
      <form className='signup__form' onSubmit={handleSubmit}>
        <h1 className='signup__heading'>Register</h1>
        <div className='signup__group'>
          <div className='signup__input-container'>
            <label htmlFor='nm' className='signup__label'>
              Username
            </label>
            <br />
            <input
              type='name'
              className='signup__input'
              placeholder='username'
              value={name}
              id='nm'
              onChange={handleName}
            />
          </div>
          {errors.name && <span className='signup__error'>{errors.name}</span>}
        </div>
        <div className='signup__group'>
          <div className='signup__input-container'>
            <label htmlFor='email' className='signup__label'>
              Email
            </label>
            <input
              type='email'
              className='signup__input'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          </div>
          {errors.email && <span className='signup__error'>{errors.email}</span>}
        </div>
        <div className='signup__group'>
          <div className='signup__input-container'>
            <label htmlFor='pwd' className='signup__label'>
              Password
            </label>
            <input
              type='password'
              className='signup__input'
              placeholder='password'
              id='pwd'
              value={password}
              onChange={handlePassword}
            />
          </div>
          {errors.password && <span className='signup__error'>{errors.password}</span>}
        </div>
        <button
          type='submit'
          className='signup__btn'
          style={{ background: 'black', color: 'white', width: 250, height: 50, margin: 40 }}
        >
          Sign Up
        </button>
        <br></br>
        <center>
        <p>Alredy a FLIP user?<a href="/Login">Click me!</a></p>
        </center>
      </form>
    </div>
  );
};

export default SignUp;
