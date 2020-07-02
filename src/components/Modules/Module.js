import React from 'react';

import './Module.scss'
import Balance from './Balance/Balance';
import Advertisement from './Advertisement/Advertisement';
import Operations from './Operations/Operations';
import Rates from './Rates/Rates';
import Feed from './Feed/Feed';
import Wallets from './Wallets/Wallets';

const Module = () => (
  <>
    <section className="module">
      <Balance />
      <Advertisement />
      <Operations />
    </section>
    <section className="module">
      <Rates />
      <Feed />
      <Wallets />
    </section>
  </>
);

export default Module;
