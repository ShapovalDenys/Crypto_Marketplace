import React, { useState } from 'react';
import axios from 'axios';

import './Registration.scss';

const Registration = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onClickRegistration = (event) => {
    event.preventDefault();
    const DATA = JSON.stringify({login: login, password: password})
    axios.post('/registration.php', DATA)
    .then(function (response) {
      console.log(response.json())

    })
    .catch(function (error) {
      console.log(error);

    });
  }

  return (
    <form className="login" onSubmit={(e) => onClickRegistration(e)}>
    <h2 className="login__article">Registration</h2>

    <input onChange={(e) => setLogin(e.target.value)} className="login__input" type="login" placeholder="Login" autoFocus required />

    <input onChange={(e) => setPassword(e.target.value)} className="login__input" type="password" placeholder="Password" required />

    <button className="login__button" type="submit">Registration</button>
  </form>
  )
}

export default Registration;
