import React from 'react';

import "./Balance.scss";

const BALANCE_DATA = [
  {growth: "down", price: "35.30", date: "today"},
  {growth: "up", price: "48.02", date: "today"},
  {growth: "up", price: "105.88", date: "yesterday"},
  {growth: "down", price: "95.42", date: "23 NOV 2020"},
  {growth: "down", price: "204.03", date: "23 NOV 2020"},
  {growth: "down", price: "35.30", date: "21 NOV 2020"},
  {growth: "up", price: "48.02", date: "19 NOV 2020"},
  {growth: "up", price: "105.88", date: "19  NOV 2020"},
  {growth: "down", price: "95.42", date: "19  NOV 2020"},
  {growth: "down", price: "204.03", date: "15 NOV 2020"},
  {growth: "down", price: "35.30", date: "10 NOV 2020"},
  {growth: "up", price: "48.02", date: "09 NOV 2020"},
  {growth: "up", price: "105.88", date: "09 NOV 2020"},
  {growth: "down", price: "95.42", date: "09 NOV 2020"},
  {growth: "down", price: "204.03", date: "04 NOV 2020"},
]

const Balance = () => (
  <div className="balance">

    <div className="balance__article module__article">
      <h2>Balance</h2>
      <a href="/"><img src="./img/settings.svg" alt="setting"></img></a>
    </div>

    <div className="balance__summ">
      <img src="./img/dollar.svg" alt="dollar"></img>
      <span>1754.76</span>
      <img src="./img/Circle.svg" alt="circle"></img>
    </div>

    <div className="balance__line"></div>

    <span className="balance__span">LOG</span>

    <div className="balance__data">
      {BALANCE_DATA.map(transaction =>
        <div className="balance__transaction" key={transaction.price + transaction.date}>
          <div className="balance__transaction-inner">
            <img src={transaction.growth === "down" ? "./img/down.svg" : "./img/up.svg"} alt="growth"></img>
            <span className={transaction.growth === "down" ? "balance__transaction-price balance__transaction-price-rd" : "balance__transaction-price balance__transaction-price-gr"}>$ {transaction.price}</span>
          </div>
          <span className="balance__transaction-date">{transaction.date}</span>
        </div>
        )}
    </div>

  </div>
);

export default Balance;
