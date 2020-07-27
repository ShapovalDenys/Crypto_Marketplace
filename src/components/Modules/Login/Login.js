import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin, loginSuccess } from '../../Store/index';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector(isLogin);

  console.log(login);

  return (
    <div className="login">
      <h2 className="login__article">Login</h2>
      <input autoFocus className="login__input" type="login" placeholder="Login" required />
      <input className="login__input" type="password" placeholder="Password" required />
      <button onClick={() => dispatch(loginSuccess())} className="login__button" type="submit">Login</button>
    </div>
  )
}

export default Login;
