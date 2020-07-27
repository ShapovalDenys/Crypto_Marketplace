import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="nav__link-logo"><img src="./img/wallet.svg" alt="wallet"></img>CryptoWallet</Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav__link">Dashboard</Link>
          </li>
          <li>
            <Link to="/market" className="nav__link">Market</Link>
          </li>
          <li>
            <Link to="/trends" className="nav__link">Trends</Link>
          </li>
        </ul>
      </nav>

      <div className="user-menu">
        <Link to="/login" className="user-menu__link"><img className="user-menu__img" src="./img/user.svg" alt="user"></img></Link>
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
              <Link to="/dashboard" className="mobile__link">Dashboard</Link>
            </li>
            <li>
              <Link to="/market" className="mobile__link">Market</Link>
            </li>
            <li>
            <Link to="/trends" className="mobile__link">Trends</Link>
            </li>
          </ul>
        </div>

  </header>
);
}

export default Header;
