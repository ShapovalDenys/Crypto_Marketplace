import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OperationsItem = ({ item, currentId, setCurrentId, expandAll, currentDate }) => {

  const [toDateItem, setToDateItem] = useState("");
  const [fromDateItem, setFromDateItem] = useState("");
  const [visibleInfo, setVisibleInfo] = useState(item);

  const [disable, setDisable] = useState(false);

  const onHandleClick = (id) => {
    if (id === currentId) {
      setCurrentId("0")
    } else {
      setCurrentId(id)
    }
  }

  const submitFormItem = (event) => {
    event.preventDefault();

    const DATA = JSON.stringify({fromDateItem: fromDateItem, toDateItem: toDateItem, id: item.account_id})
    console.log(DATA);

    axios.post('/sendItem.php', DATA)
    .then(function (response) {
      console.log(response.json())
      setVisibleInfo(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const HandleChange = (id) => {
    if (expandAll) {
      setDisable(!disable);
    }
    onHandleClick(id);
  }

  useEffect(() => {
    if (expandAll === false) {
      setDisable(false)
    }
  }, [expandAll])

  return (
    <>
    <div className={visibleInfo.account_status === "active" ? "operations__transaction" : "operations__transaction operations__transaction-disabled"} onClick={() => HandleChange(item.account_id)}>
      <span>{visibleInfo.account_name}</span>
      <span>{visibleInfo.account_id}</span>
      <span>{visibleInfo.account_status}</span>
      <span>{visibleInfo.account_spent}</span>
      <span>{visibleInfo.account_dis_reason}</span>
      <span>{visibleInfo.account_currency}</span>
    </div>

    {disable === false

    &&

    <>

    {(currentId === visibleInfo.account_id || expandAll === true) &&
      <div className="account-info">
      <h3>Account information: {visibleInfo.account_name}</h3>

      <div className="account-info__inner">
        <div>
          <span>Campaign_num : {visibleInfo.statistics[0].campaign_num}</span>
          <span>Campaign_name : {visibleInfo.statistics[0].campaign_name}</span>
          <span>Campaign_impressions : {visibleInfo.statistics[0].campaign_impressions}</span>
          <span>Campaign_spent : {visibleInfo.statistics[0].campaign_spent}</span>
          <span>Campaign_frequency : {visibleInfo.statistics[0].campaign_frequency}</span>
          <span>Campaign_clicks : {visibleInfo.statistics[0].campaign_clicks}</span>
          <span>Campaign_unique_clicks : {visibleInfo.statistics[0].campaign_unique_clicks}</span>
          <span>Campaign_ctr : {visibleInfo.statistics[0].campaign_ctr}</span>
          <span>Campaign_unique_ctr : {visibleInfo.statistics[0].campaign_unique_ctr}</span>
          <span>Campaign_inline_clicks : {visibleInfo.statistics[0].campaign_inline_clicks}</span>
          <span>Campaign_inline_clicks_ctr : {visibleInfo.statistics[0].campaign_inline_clicks_ctr}</span>
        </div>
        <div>
          <div>
            <span>Account_name : {visibleInfo.account_name}</span>
            <span>Account_id : {visibleInfo.account_id}</span>
            <span>Account_spent: {visibleInfo.account_spent}</span>
            <span>Account_dis_reason: {visibleInfo.account_dis_reason}</span>
            <span>Account_currency: {visibleInfo.account_currency}</span>
            <span>Account_card: {visibleInfo.account_card}</span>
            <div className="account-info__span">
            <span>Account_status:</span>
            <span className={visibleInfo.account_status === "disable" ? "account-info__disable" : "account-info__active"}>{visibleInfo.account_status}</span>
          </div>
        </div>

        <form className="operations__form operations__form-item">
          <div>
            <label className="operations__form-label" htmlFor="date">DATE FROM: </label>
            <input className="operations__form-input" value={visibleInfo.statistics[0].date_range[0].date_start.split("-").reverse().join("-")} type="date" id="date" name="date" max={currentDate} onChange={(e) => setFromDateItem(e.target.value)}/>
          </div>
          <div>
            <label className="operations__form-label" htmlFor="date">DATE TO: </label>
            <input className="operations__form-input" value={visibleInfo.statistics[0].date_range[0].date_stop.split("-").reverse().join("-")} type="date" id="date" name="date" max={currentDate} onChange={(e) => setToDateItem(e.target.value)}/>
          </div>
          <button className="operations__form-button operations__form-button-item" type="submit" onClick={(event) => submitFormItem(event)}>Select Data</button>
        </form>
      </div>
    </div>
  </div>
  }

  </>
  }


  </>
  )
}

export default OperationsItem;
