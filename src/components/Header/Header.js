import React, { useState } from 'react';

import './Header.scss';
import './hamburgers.css';

const Header = () => {

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
  <header className="header">
    <div className="header-wrap">

      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav__link-logo"><img src="./img/wallet.svg" alt="wallet"></img>CryptoWallet</a>
          </li>
          <li>
            <a href="#" className="nav__link">Dashboard</a>
          </li>
          <li>
            <a href="#" className="nav__link">Market</a>
          </li>
          <li>
            <a href="#" className="nav__link">Trends</a>
          </li>
        </ul>
      </nav>

      <div className="user-menu">
        <a href="#" className="user-menu__link"><img className="user-menu__img" src="./img/search.svg" alt="search"></img></a>
        <a href="#" className="user-menu__link"><img className="user-menu__img" src="./img/user.svg" alt="user"></img></a>
        <div className="user-menu__mobile-menu">
          <button
            className={isActiveMenu ? "hamburger hamburger--squeeze is-active" : "hamburger hamburger--squeeze"}
            type="button"
            onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

    </div>

    <div className={isActiveMenu ? "mobile mobile__active" : "mobile"}>
          <ul>
            <li>
              <a href="#" className="mobile__link">Dashboard</a>
            </li>
            <li>
              <a href="#" className="mobile__link">Market</a>
            </li>
            <li>
              <a href="#" className="mobile__link">Trends</a>
            </li>
          </ul>
        </div>

  </header>
);
}

export default Header;
