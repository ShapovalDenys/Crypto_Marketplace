import React, { useState, useEffect } from 'react';

import './Operations.scss';

const OPERATIONS_DATA = [
  {operation: "change", startMoney: "0.002", endMoney: "0.005", fee:"0.1"},
  {operation: "sell", startMoney: "200", endMoney: "40", fee:"0.5"},
  {operation: "bonus", startMoney: "", endMoney: "14", fee:"0.2"},
  {operation: "change", startMoney: "0.045", endMoney: "0.005", fee:"0.1"},
  {operation: "sell", startMoney: "280", endMoney: "40", fee:"0.5"},
  {operation: "bonus", startMoney: "", endMoney: "17", fee:"0.2"},
  {operation: "change", startMoney: "0.05", endMoney: "0.005", fee:"0.1"},
  {operation: "sell", startMoney: "210", endMoney: "40", fee:"0.5"},
  {operation: "bonus", startMoney: "", endMoney: "198", fee:"0.2"},
]

const Operations = () => {

  const [toDate, setToDateState] = useState("");
  const [fromDate, setFromDateState] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    // eslint-disable-next-line
    setCurrentDate(year + "-" + `${month > 9 ? month : "0" + month}` + "-" + `${day > 9 ? day : "0" + day}`)
  }, [])

  const setToDate = (e) => {
    setToDateState(e.target.value);
  }

  const setFromDate = (e) => {
    setFromDateState(e.target.value);
  }

  console.log(fromDate, toDate);


  return (
  <div className="operations">

    <div className="module__article">
      <h2>Operations<img src="./img/search.svg" alt="search"></img></h2>
      <a href="#"><img src="./img/settings.svg" alt="setting"></img></a>
    </div>

    <form className="operations__form">

      <div>
        <label className="operations__form-label" htmlFor="date">DATE FROM: </label>
        <input className="operations__form-input" type="date" id="date" name="date" max={currentDate} onChange={(e) => setFromDate(e)}/>
      </div>

      <div>
        <label className="operations__form-label" htmlFor="date">DATE TO: </label>
        <input className="operations__form-input" type="date" id="date" name="date" max={currentDate} onChange={(e) => setToDate(e)}/>
      </div>

      <button className="operations__form-button" type="submit">Get data</button>

    </form>

    <div className="balance__line"></div>

    <div className="operations__transactions">
      {OPERATIONS_DATA.map(item =>
        <div className="operations__transaction" key={item.operation + item.startMoney + item.endMoney}>
          <img src={
            // eslint-disable-next-line
            item.operation === "change" && "./img/change.svg" ||
            // eslint-disable-next-line
            item.operation === "sell" && "./img/sell.svg" ||
            // eslint-disable-next-line
            item.operation === "bonus" && "./img/bonus.svg"
            } alt="transaction">
          </img>
          <div className="operations__transaction-inner">
             <h4><span>{item.operation}</span>{item.operation === "bonus" ? `${item.endMoney} USD` : (`${item.startMoney} BTC → ${item.endMoney} XMR`)}</h4>
             <h4><span>Fee</span>{item.fee} USD</h4>
          </div>
        </div>
      )}
    </div>

  </div>
);
}

export default Operations;
