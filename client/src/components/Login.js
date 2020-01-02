import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    console.log(user)
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', user)
    .then(response => {
      localStorage.setItem('token', response.data.payload);
      props.history.push('/');
    })
    .catch(err => console.log(err));
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' />
        <input type='text' value={user.username} onChange={handleChanges} name='username' />
        <label htmlFor='password' />
        <input type='password' value={user.password} onChange={handleChanges} name='password' />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
