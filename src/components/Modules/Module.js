import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './Module.scss'
import Balance from './Balance/Balance';
import Advertisement from './Advertisement/Advertisement';
import Operations from './Operations/Operations';
import Rates from './Rates/Rates';
import Feed from './Feed/Feed';
import Wallets from './Wallets/Wallets';
import Login from './Login/Login';

const Module = () => (
  <section className="module">
  <Switch>
      {/*<Balance />*/}
      <Route path="/" exact component={Operations} />
      <Route path="/dashboard" exact component={Operations} />
      <Route path="/login" exact component={Login} />
      <Redirect to="/"/>
    {/*<section className="module">
        <Rates />
        <Feed />
        <Wallets />
      </section>*/}
  </Switch>
  </section>
);

export default Module;
