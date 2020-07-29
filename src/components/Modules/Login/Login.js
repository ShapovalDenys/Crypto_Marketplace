import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResponse, loginSuccess } from '../../Store/index';
import axios from 'axios';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const reduxResponse = useSelector(getResponse);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [dataFromServer, setDataFromServer] = useState(JSON.parse(localStorage.getItem('Response')) || reduxResponse);
  const [errorLogin, setErrorLogin] = useState(false);
  const [onClickSubmit, setOnClickSubmit] = useState(false);

  useEffect(() => {
    if (dataFromServer.sessid) {
      if (isRemember) {
        localStorage.setItem('Response', JSON.stringify(dataFromServer));
        setErrorLogin(false);
        setOnClickSubmit(false)
      } else {
        dispatch(loginSuccess(dataFromServer));
        setErrorLogin(false);
        setOnClickSubmit(false);
      }
    } else {
        setErrorLogin(onClickSubmit && true);
        setOnClickSubmit(false);
      }
  }, [dataFromServer])


  const onClickLogin = (event) => {
    event.preventDefault();
    setOnClickSubmit(true);
    const DATA = JSON.stringify({login: login, password: password})
    axios.post('/login.php', DATA)
    .then(function (response) {
      console.log(response.json())
      setDataFromServer(response.json())
    })
    .catch(function (error) {
      console.log(error);
      setDataFromServer({sessid: "test-test-test", login:"test"})
    });
  }

  const isLogOut = () => {
    localStorage.setItem('Response', JSON.stringify(""));
    setDataFromServer({});
    dispatch(loginSuccess({}));
  }

  if (dataFromServer.sessid) {
    return (
      <div className="login">
        <h2 className="login__article login__article-success">Login Success</h2>
        <button onClick={() => isLogOut()} className="login__button login__button-logout">Logout</button>
      </div>
    )
  }

  return (
    <form className="login" onSubmit={(e) => onClickLogin(e)}>
      <h2 className="login__article">Login</h2>

      {errorLogin && <span className="login__error">Error LOGIN</span>}

      <input onChange={(e) => setLogin(e.target.value)} className="login__input" type="login" placeholder="Login" autoFocus required />

      <input onChange={(e) => setPassword(e.target.value)} className="login__input" type="password" placeholder="Password" required />

      <input id="check" type="checkbox" value={isRemember} onChange={() => setIsRemember(!isRemember)}></input>
      <label htmlFor="check"> Remember Me</label>

      <button className="login__button" type="submit">Login</button>
    </form>
  )
}

export default Login;
