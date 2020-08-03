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
import Home from './Home/Home';
import Registration from './Registration/Registration';
import CheckSsid from './CheckSsid/CheckSsid';
import Dashboard from './Dashboard/Dashboard';

const Module = () => (
  <section className="module">
  <Switch>
      {/*<Balance />*/}
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/market" exact component={Dashboard} />
      <Route path="/statistic" exact component={Operations} />
      <Route path="/trends" exact component={CheckSsid} />
      <Route path="/login" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
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
