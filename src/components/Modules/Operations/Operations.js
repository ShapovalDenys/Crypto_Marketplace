import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getResponse } from '../../Store/index';
import { useHistory } from 'react-router-dom';

import './Operations.scss';
import OperationsItem from './OperationsItem';

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
            date_start:"01-01-2020",
            date_stop:"01-01-2020"
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
              date_start:"01-01-2020",
              date_stop:"01-01-2020"
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
                date_start:"01-01-2020",
                date_stop:"01-01-2020"
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
                  date_start:"01-01-2020",
                  date_stop:"01-01-2020"
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
                    date_start:"01-01-2020",
                    date_stop:"01-01-2020"
                  }]
              }]
            },
]

const Operations = () => {

  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [dataRange, setDataRange] = useState("-");
  const [Data, setData] = useState(OPERATIONS_DATA);
  const [currentId, setCurrentId] = useState();
  const [sortBy, setSortBy] = useState("");
  const [isReverse, setIsReverse] = useState(false);
  const [expandAll, setExpandAll] = useState(false);
  const history = useHistory();
  const [checkData, setCheckData] = useState();


  const reduxResponse = useSelector(getResponse);
  const localResponse = JSON.parse(localStorage.getItem('Response'));

  useEffect(() => {
  if (checkData === false) {
    history.push("/login")
  }
  }, [checkData])

  if ( (reduxResponse !== null && !reduxResponse.hasOwnProperty("sessid"))
  && (localResponse !== null && !localResponse.hasOwnProperty("sessid"))) {
    history.push("/login")
  }

  useEffect(() => {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    // eslint-disable-next-line
    setCurrentDate(year + "-" + `${month > 9 ? month : "0" + month}` + "-" + `${day > 9 ? day : "0" + day}`)


    let DATA = {};
    if (reduxResponse !== null && reduxResponse.hasOwnProperty("sessid")) {
      DATA = JSON.stringify(reduxResponse)
    }
    if (localResponse !== null && localResponse.hasOwnProperty("sessid")) {
      DATA = JSON.stringify(localResponse)
    }
    axios.post('/check.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const check = response.json()
      if (check.check) {
        setCheckData(true)
      } else {
        setCheckData(false);
        history.push("/login")
      }
    })
    .catch(function (error) {
      console.log(error);
      setCheckData(true)
    });

  }, [])

  const submitForm = (event) => {
    event.preventDefault();
    const DATA = JSON.stringify({fromDate: fromDate, toDate: toDate, dataRange:dataRange})
    axios.post('/send.php', DATA)
    .then(function (response) {
      console.log(response.json())
      setData(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  let visibleData = Data;

  if (sortBy === "status") {
    if (isReverse) {
      visibleData = [...Data].sort((a, b) => a.account_status.localeCompare(b.account_status))
    }
    if (!isReverse) {
      visibleData = [...Data].sort((a, b) => b.account_status.localeCompare(a.account_status))
    }
  }

  if (sortBy === "name") {
    if (isReverse) {
      visibleData = [...Data].sort((a, b) => a.account_name.localeCompare(b.account_name))
    }
    if (!isReverse) {
      visibleData = [...Data].sort((a, b) => b.account_name.localeCompare(a.account_name))
    }
  }

  if (sortBy === "id") {
    if (isReverse) {
      visibleData = [...Data].sort((a, b) => a.account_id - b.account_id)
    }
    if (!isReverse) {
      visibleData = [...Data].sort((a, b) => b.account_id - a.account_id)
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

  if (checkData) {
    return (
      <div className="operations">
        <div className="module__article">
          <h2>Operations</h2>
          <button className="operations__form-button" onClick={() => {setExpandAll(!expandAll); setCurrentId("")}} type="button">Expand all</button>
        </div>

        <form className="operations__form">
          <div>
            <label className="operations__form-label" htmlFor="date">DATE FROM: </label>
            <input className="operations__form-input" type="date" id="date" name="date" max={currentDate} onChange={(e) => setFromDate(e.target.value)}/>
          </div>
          <div>
            <label className="operations__form-label" htmlFor="date">DATE TO: </label>
            <input className="operations__form-input" type="date" id="date" name="date" max={currentDate} onChange={(e) => setToDate(e.target.value)}/>
          </div>
          <button className="operations__form-button" type="submit" onClick={(event) => submitForm(event)}>Select Data</button>
        </form>

        <form className="operations__form">
          <div>
            <label className="operations__form-label" htmlFor="date">RANGE: </label>
            <select onChange={(e) => setDataRange(e.target.value)} className="operations__form-input" type="date" id="date" name="date">
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
          {visibleData.map(item =>
            <OperationsItem
              key={item.account_name + item.account_id}
              item={item}
              currentId={currentId}
              setCurrentId={setCurrentId}
              expandAll={expandAll}
              currentDate={currentDate}
            />
          )}
        </div>

      </div>
    )
  } else return <div className="operations"></div>
}

export default Operations;
