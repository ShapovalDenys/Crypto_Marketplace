import React, { useState, useEffect } from 'react';

import './Rates.scss';
import { getData } from './API';

const Rates = () => {

  const [dataFromServerUSD, setDataFromServerUSD] = useState();
  const [dataFromServerEUR, setDataFromServerEUR] = useState();
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const [value, setValue] = useState("USD");

  const loadData = async () => {
    const [data] = await Promise.all(
      [getData()],
    );

    const usd = data.USD;
    const lastCourseUSD = usd.last;
    setDataFromServerUSD(lastCourseUSD)

    const eur = data.EUR;
    const lastCourseEUR = eur.last;
    setDataFromServerEUR(lastCourseEUR)
  };

  useEffect(() => {
      loadData();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 5000)
  }, [])

  const onClickDropdown = (e) => {
    setIsActiveDropdown(!isActiveDropdown);
    setValue(e.target.id);
  }

  let visibleValue = `${dataFromServerUSD}$`;

  if (value === "USD") {
    visibleValue = `${dataFromServerUSD}$`;
  }
  if (value === "EUR") {
    visibleValue = `${dataFromServerEUR}€`;
  }

  return (
  <div className="rates">

    <div className="module__article">
      <div className="rates__article-wrap">
        <h2>Rates <span>in {value}</span></h2>
        <button
          onClick={() => setIsActiveDropdown(!isActiveDropdown)}
          className="rates__article-button"
          type="button">
            <img
              src="./img/dropdown.svg"
              alt="dropdown">
            </img>
        </button>
      </div>
      <a href="/"><img src="./img/settings.svg" alt="setting"></img></a>
    </div>

    {isActiveDropdown &&
      <div className="rates__dropdown">
        <span onClick={(e) => onClickDropdown(e)} id="USD">USD</span>
        <span onClick={(e) => onClickDropdown(e)} id="EUR">EUR</span>
      </div>
    }

    <div className="rates__list">
      <img src="./img/LogoBitcoin.svg" alt="bitcoin"></img>
      <span>Bitcoin</span>
      <span>{visibleValue}</span>
    </div>

    <div className="rates__list">
      <img src="./img/LogoMonero.svg" alt="bitcoin"></img>
      <span>Monero</span>
      <span>{visibleValue}</span>
    </div>

    <div className="rates__list">
      <img src="./img/LogoBitShares.svg" alt="bitcoin"></img>
      <span>BitShares</span>
      <span>{visibleValue}</span>
    </div>

    <div className="rates__list">
      <img src="./img/LogoDash.svg" alt="bitcoin"></img>
      <span>Dash</span>
      <span>{visibleValue}</span>
    </div>

    <div className="rates__list">
      <img src="./img/LogoLitecoin.svg" alt="bitcoin"></img>
      <span>Litecoin</span>
      <span>{visibleValue}</span>
    </div>

  </div>
);
}

export default Rates;
