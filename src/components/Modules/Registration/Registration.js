import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Registration.scss';

const test = {success: "true", login:"testuser", sessid: "sadasdasdasdasd"}
const test1 = {success: "false", reason: "duplicating email"}

const Registration = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [regData, setRegData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onClickRegistration = (event) => {
    event.preventDefault();
    setIsLoading(true)
    const DATA = JSON.stringify({login: login, password: password})
    axios.post('/registration.php', DATA)
    .then(function (response) {
      console.log(response.json())
      setRegData(response.json())
      setIsLoading(false)
    })
    .catch(function (error) {
      console.log(error);
      setTimeout(() => {
        setRegData(test)
        setIsLoading(false)
      }, 500)
    });
  }

  if (regData && regData.success === "true") {
    return (
      <div className="login">
        <h2 className="login__article login__article-success">Registration Success</h2>
        <Link to="/login" className="login__button login__button-logout registration__link-login">Login</Link>
      </div>
    )
  }

  return (
    <form className="login" onSubmit={(e) => onClickRegistration(e)}>
      <h2 className="login__article">Registration</h2>

      {(regData && regData.success === "false") && <span className="registration__error">{regData.reason}</span>}
      <input onChange={(e) => setLogin(e.target.value)} className="login__input" type="login" placeholder="Login" autoFocus required />

      <input onChange={(e) => setPassword(e.target.value)} className="login__input" type="password" placeholder="Password" required />

      {isLoading
      ?
      <div className="spinner"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
      :
      <button className="login__button" type="submit">Registration</button>
      }
    </form>
  )
}

export default Registration;
