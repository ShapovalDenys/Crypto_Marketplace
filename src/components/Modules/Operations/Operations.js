import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Operations.scss';

const OPERATIONS_DATA = [{
	account_name:"acc1",
	account_id:"1234567",
	account_status:"active",
	account_currency:"USD",
	account_spent:"12",
	account_card:"*1234 Mastercard",
	account_dis_reason:"something",
	statistics:[{
			campaign_num:1,
			campaign_name:"мы потратили три ляма на херню",
			campaign_impressions:123.22,
			campaign_spent:10,
			campaign_frequency:0.12345,
			campaign_clicks:123,
			campaign_unique_clicks:98,
			campaign_ctr:1.11,
			campaign_unique_ctr:0.11,
			campaign_inline_clicks:1.21,
			campaign_inline_clicks_ctr:1.01,
			date_range:[{
					date_start:"01-01-2020",
					date_stop:"01-01-2020"
				}]
		}]
  },
  {
	account_name:"acc2",
	account_id:"1234568",
	account_status:"active",
	account_currency:"USD",
	account_spent:"12",
	account_card:"*1234 Mastercard",
	account_dis_reason:"something",
	statistics:[{
			campaign_num:1,
			campaign_name:"мы потратили три ляма на херню",
			campaign_impressions:123.22,
			campaign_spent:10,
			campaign_frequency:0.12345,
			campaign_clicks:123,
			campaign_unique_clicks:98,
			campaign_ctr:1.11,
			campaign_unique_ctr:0.11,
			campaign_inline_clicks:1.21,
			campaign_inline_clicks_ctr:1.01,
			date_range:[{
					"date_start":"01-01-2020",
					"date_stop":"01-01-2020"
				}]
		}]
  },
  {
	account_name:"acc3",
	account_id:"1234569",
	account_status:"disable",
	account_currency:"USD",
	account_spent:"12",
	account_card:"*1234 Mastercard",
	account_dis_reason:"something",
	statistics:[{
			campaign_num:1,
			campaign_name:"мы потратили три ляма на херню",
			campaign_impressions:123.22,
			campaign_spent:10,
			campaign_frequency:0.12345,
			campaign_clicks:123,
			campaign_unique_clicks:98,
			campaign_ctr:1.11,
			campaign_unique_ctr:0.11,
			campaign_inline_clicks:1.21,
			campaign_inline_clicks_ctr:1.01,
			date_range:[{
					date_start:"01-01-2020",
					date_stop:"01-01-2020"
				}]
		}]
  },
  {
    account_name:"acc2",
    account_id:"12344568",
    account_status:"active",
    account_currency:"USD",
    account_spent:"12",
    account_card:"*1234 Mastercard",
    account_dis_reason:"something",
    statistics:[{
        campaign_num:1,
        campaign_name:"мы потратили три ляма на херню",
        campaign_impressions:123.22,
        campaign_spent:10,
        campaign_frequency:0.12345,
        campaign_clicks:123,
        campaign_unique_clicks:98,
        campaign_ctr:1.11,
        campaign_unique_ctr:0.11,
        campaign_inline_clicks:1.21,
        campaign_inline_clicks_ctr:1.01,
        date_range:[{
            "date_start":"01-01-2020",
            "date_stop":"01-01-2020"
          }]
      }]
    },
    {
      account_name:"acc2",
      account_id:"1245464568",
      account_status:"active",
      account_currency:"USD",
      account_spent:"12",
      account_card:"*1234 Mastercard",
      account_dis_reason:"something",
      statistics:[{
          campaign_num:1,
          campaign_name:"мы потратили три ляма на херню",
          campaign_impressions:123.22,
          campaign_spent:10,
          campaign_frequency:0.12345,
          campaign_clicks:123,
          campaign_unique_clicks:98,
          campaign_ctr:1.11,
          campaign_unique_ctr:0.11,
          campaign_inline_clicks:1.21,
          campaign_inline_clicks_ctr:1.01,
          date_range:[{
              "date_start":"01-01-2020",
              "date_stop":"01-01-2020"
            }]
        }]
      },
      {
        account_name:"acc2",
        account_id:"143456568",
        account_status:"disable",
        account_currency:"USD",
        account_spent:"12",
        account_card:"*1234 Mastercard",
        account_dis_reason:"something",
        statistics:[{
            campaign_num:1,
            campaign_name:"мы потратили три ляма на херню",
            campaign_impressions:123.22,
            campaign_spent:10,
            campaign_frequency:0.12345,
            campaign_clicks:123,
            campaign_unique_clicks:98,
            campaign_ctr:1.11,
            campaign_unique_ctr:0.11,
            campaign_inline_clicks:1.21,
            campaign_inline_clicks_ctr:1.01,
            date_range:[{
                "date_start":"01-01-2020",
                "date_stop":"01-01-2020"
              }]
          }]
        },
        {
          account_name:"acc2",
          account_id:"121455668",
          account_status:"active",
          account_currency:"USD",
          account_spent:"12",
          account_card:"*1234 Mastercard",
          account_dis_reason:"something",
          statistics:[{
              campaign_num:1,
              campaign_name:"мы потратили три ляма на херню",
              campaign_impressions:123.22,
              campaign_spent:10,
              campaign_frequency:0.12345,
              campaign_clicks:123,
              campaign_unique_clicks:98,
              campaign_ctr:1.11,
              campaign_unique_ctr:0.11,
              campaign_inline_clicks:1.21,
              campaign_inline_clicks_ctr:1.01,
              date_range:[{
                  "date_start":"01-01-2020",
                  "date_stop":"01-01-2020"
                }]
            }]
          },
          {
            account_name:"acc2",
            account_id:"1238564568",
            account_status:"active",
            account_currency:"USD",
            account_spent:"12",
            account_card:"*1234 Mastercard",
            account_dis_reason:"something",
            statistics:[{
                campaign_num:1,
                campaign_name:"мы потратили три ляма на херню",
                campaign_impressions:123.22,
                campaign_spent:10,
                campaign_frequency:0.12345,
                campaign_clicks:123,
                campaign_unique_clicks:98,
                campaign_ctr:1.11,
                campaign_unique_ctr:0.11,
                campaign_inline_clicks:1.21,
                campaign_inline_clicks_ctr:1.01,
                date_range:[{
                    "date_start":"01-01-2020",
                    "date_stop":"01-01-2020"
                  }]
              }]
            },
            {
              account_name:"acc2",
              account_id:"123445768",
              account_status:"active",
              account_currency:"USD",
              account_spent:"12",
              account_card:"*1234 Mastercard",
              account_dis_reason:"something",
              statistics:[{
                  campaign_num:1,
                  campaign_name:"мы потратили три ляма на херню",
                  campaign_impressions:123.22,
                  campaign_spent:10,
                  campaign_frequency:0.12345,
                  campaign_clicks:123,
                  campaign_unique_clicks:98,
                  campaign_ctr:1.11,
                  campaign_unique_ctr:0.11,
                  campaign_inline_clicks:1.21,
                  campaign_inline_clicks_ctr:1.01,
                  date_range:[{
                      "date_start":"01-01-2020",
                      "date_stop":"01-01-2020"
                    }]
                }]
              },
              {
                account_name:"acc2",
                account_id:"1273454568",
                account_status:"active",
                account_currency:"USD",
                account_spent:"12",
                account_card:"*1234 Mastercard",
                account_dis_reason:"something",
                statistics:[{
                    campaign_num:1,
                    campaign_name:"мы потратили три ляма на херню",
                    campaign_impressions:123.22,
                    campaign_spent:10,
                    campaign_frequency:0.12345,
                    campaign_clicks:123,
                    campaign_unique_clicks:98,
                    campaign_ctr:1.11,
                    campaign_unique_ctr:0.11,
                    campaign_inline_clicks:1.21,
                    campaign_inline_clicks_ctr:1.01,
                    date_range:[{
                        "date_start":"01-01-2020",
                        "date_stop":"01-01-2020"
                      }]
                  }]
                },
                {
                  account_name:"acc2",
                  account_id:"1234455968",
                  account_status:"active",
                  account_currency:"USD",
                  account_spent:"12",
                  account_card:"*1234 Mastercard",
                  account_dis_reason:"something",
                  statistics:[{
                      campaign_num:1,
                      campaign_name:"мы потратили три ляма на херню",
                      campaign_impressions:123.22,
                      campaign_spent:10,
                      campaign_frequency:0.12345,
                      campaign_clicks:123,
                      campaign_unique_clicks:98,
                      campaign_ctr:1.11,
                      campaign_unique_ctr:0.11,
                      campaign_inline_clicks:1.21,
                      campaign_inline_clicks_ctr:1.01,
                      date_range:[{
                          "date_start":"01-01-2020",
                          "date_stop":"01-01-2020"
                        }]
                    }]
                  },
                  {
                    account_name:"acc2",
                    account_id:"14238456568",
                    account_status:"active",
                    account_currency:"USD",
                    account_spent:"12",
                    account_card:"*1234 Mastercard",
                    account_dis_reason:"something",
                    statistics:[{
                        campaign_num:1,
                        campaign_name:"мы потратили три ляма на херню",
                        campaign_impressions:123.22,
                        campaign_spent:10,
                        campaign_frequency:0.12345,
                        campaign_clicks:123,
                        campaign_unique_clicks:98,
                        campaign_ctr:1.11,
                        campaign_unique_ctr:0.11,
                        campaign_inline_clicks:1.21,
                        campaign_inline_clicks_ctr:1.01,
                        date_range:[{
                            "date_start":"01-01-2020",
                            "date_stop":"01-01-2020"
                          }]
                      }]
                    },
                    {
                      account_name:"acc2",
                      account_id:"12374456568",
                      account_status:"active",
                      account_currency:"USD",
                      account_spent:"12",
                      account_card:"*1234 Mastercard",
                      account_dis_reason:"something",
                      statistics:[{
                          campaign_num:1,
                          campaign_name:"мы потратили три ляма на херню",
                          campaign_impressions:123.22,
                          campaign_spent:10,
                          campaign_frequency:0.12345,
                          campaign_clicks:123,
                          campaign_unique_clicks:98,
                          campaign_ctr:1.11,
                          campaign_unique_ctr:0.11,
                          campaign_inline_clicks:1.21,
                          campaign_inline_clicks_ctr:1.01,
                          date_range:[{
                              "date_start":"01-01-2020",
                              "date_stop":"01-01-2020"
                            }]
                        }]
                      }
]

const Operations = () => {

  const [toDate, setToDateState] = useState("");
  const [fromDate, setFromDateState] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [dataRange, setDataRange] = useState("-");
  const [RegSuccess, setRegSuccess] = useState({});
  const [currentId, setCurrentId] = useState();
  const [sortBy, setSortBy] = useState("");
  const [isReverse, setIsReverse] = useState("false");

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

  const setRange = (e) => {
    setDataRange(e.target.value);
  }

  const onHandleClick = (id) => {
    if (id === currentId) {
      setCurrentId("0")
    } else {
      setCurrentId(id)
    }
  }

  const submitForm = (event) => {
    event.preventDefault();

    const DATA = JSON.stringify({fromDate: fromDate, toDate: toDate, dataRange:dataRange})

    axios.post('/send.php', DATA)
    .then(function (response) {
      console.log(response.json())
      setRegSuccess(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const visibleInfo = OPERATIONS_DATA.find(item => item.account_id === currentId);
  const visibleCampainInfo = visibleInfo && visibleInfo.statistics;

  let visibleData = OPERATIONS_DATA;

  if (sortBy === "status") {
    if (isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => a.account_status.localeCompare(b.account_status))
    }
    if (!isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => b.account_status.localeCompare(a.account_status))
    }
  }

  if (sortBy === "name") {
    if (isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => a.account_name.localeCompare(b.account_name))
    }
    if (!isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => b.account_name.localeCompare(a.account_name))
    }
  }

  if (sortBy === "id") {
    if (isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => a.account_id - b.account_id)
    }
    if (!isReverse) {
      visibleData = [...OPERATIONS_DATA].sort((a, b) => b.account_id - a.account_id)
    }
  }

  const Sort = (id) => {
    if (id === "status") {
      setSortBy("status")
      setIsReverse(!isReverse)
    }
    if (id === "name") {
      setSortBy("name")
      setIsReverse(!isReverse)
    }
    if (id === "id") {
      setSortBy("id")
      setIsReverse(!isReverse)
    }
  }


  return (
  <div className="operations">

    <div className="module__article">
      <h2>Operations</h2>
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

      <button className="operations__form-button" type="submit" onClick={(event) => submitForm(event)}>Select Data</button>

    </form>

    <form className="operations__form">

    <div>
      <label className="operations__form-label" htmlFor="date">RANGE: </label>
      <select onChange={(e) => setRange(e)} className="operations__form-input" type="date" id="date" name="date">
        <option>-</option>
        <option>DAY</option>
        <option>WEEK</option>
        <option>MONTH</option>
      </select>
    </div>

<button className="operations__form-button" type="submit" onClick={(event) => submitForm(event)}>Select Range</button>

</form>

    <div className="balance__line"></div>

    <div className="operations__transactions-title">
      <span id="name" onClick={(e) => Sort(e.target.id)}>Account Name</span>
      <span id="id" onClick={(e) => Sort(e.target.id)}>ID</span>
      <span id="status" onClick={(e) => Sort(e.target.id)}>Статус</span>
      <span>Spend total</span>
      <span>Disable reason</span>
      <span>Currency</span>
    </div>

    <div className="operations__transactions">

      {visibleData.map(item =><React.Fragment key={item.account_name + item.account_id}>
        <div className={item.account_status === "active" ? "operations__transaction" : "operations__transaction operations__transaction-disabled"} onClick={() => onHandleClick(item.account_id)}>

            <span>{item.account_name}</span>
            <span>{item.account_id}</span>
            <span>{item.account_status}</span>
            <span>{item.account_spent}</span>
            <span>{item.account_dis_reason}</span>
            <span>{item.account_currency}</span>

        </div>

      {currentId === item.account_id &&
      <div className="account-info">
        <h3>Account information: {item.account_name}</h3>

        <div className="account-info__inner">

        <div>
          <span>Campaign_num : {visibleCampainInfo[0].campaign_num}</span>
          <span>Campaign_name : {visibleCampainInfo[0].campaign_name}</span>
          <span>Campaign_impressions : {visibleCampainInfo[0].campaign_impressions}</span>
          <span>Campaign_spent : {visibleCampainInfo[0].campaign_spent}</span>
          <span>Campaign_frequency : {visibleCampainInfo[0].campaign_frequency}</span>
          <span>Campaign_clicks : {visibleCampainInfo[0].campaign_clicks}</span>
          <span>Campaign_unique_clicks : {visibleCampainInfo[0].campaign_unique_clicks}</span>
          <span>Campaign_ctr : {visibleCampainInfo[0].campaign_ctr}</span>
          <span>Campaign_unique_ctr : {visibleCampainInfo[0].campaign_unique_ctr}</span>
          <span>Campaign_inline_clicks : {visibleCampainInfo[0].campaign_inline_clicks}</span>
          <span>Campaign_inline_clicks_ctr : {visibleCampainInfo[0].campaign_inline_clicks_ctr}</span>
        </div>

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

        </div>
      </div>
      }
        </React.Fragment>
      )}
    </div>

  </div>
);
}

export default Operations;
