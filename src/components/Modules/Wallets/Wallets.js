import React from 'react';

import './Wallets.scss';

const Wallets = () => (
  <div className="wallets">

    <div className="module__article">
      <h2>Wallets</h2>
      <a href="/"><img src="./img/settings.svg" alt="setting"></img></a>
    </div>

    <div className="wallets__main">
    <img className="wallets__img" src="./img/WalletIcon.svg" alt="walletIcon"></img>
      <div className="wallets__wrap">
        <h4>Main Account<span className="wallets__main-summ">$ 3 035,89</span></h4>
        <img src="./img/Currency.svg" alt="Currency"></img>
      </div>
    </div>

    <div className="wallets__second">
      <img className="wallets__img" src="./img/WalletIconCoin.svg" alt="walletIcon"></img>
      <div className="wallets__wrap">
        <h4>Crypto Markets<span className="wallets__second-summ">B 0,00403</span></h4>
        <img src="./img/BTC.svg" alt="BTC"></img>
      </div>
    </div>

    <div className="wallets__second">
      <img className="wallets__img" src="./img/WalletIconCoin.svg" alt="walletIcon"></img>
      <div className="wallets__wrap">
        <h4>Investment<span className="wallets__second-summ">R 2,14594</span></h4>
        <img src="./img/Investment.svg" alt="Investment"></img>
      </div>
    </div>

  </div>
);

export default Wallets;
