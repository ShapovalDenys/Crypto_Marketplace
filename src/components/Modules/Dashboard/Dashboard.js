import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getResponse } from '../../Store/index';
import Login from '../Login/Login';
import DashboardItems from './DashboardItems';

const Dashboard = () => {
  const [checkData, setCheckData] = useState("00");
  const reduxResponse = useSelector(getResponse)
  const localResponse = JSON.parse(localStorage.getItem('Response'));

  useEffect(() => {
    if ((reduxResponse !== null && reduxResponse.hasOwnProperty("sessid")) || (localResponse !== null && localResponse.hasOwnProperty("sessid"))) {
      setCheckData("1")
    } else {
      setCheckData("0")
    }
  }, [reduxResponse, localResponse])

  useEffect(() => {
    if (reduxResponse.hasOwnProperty("sessid") || localResponse.hasOwnProperty("sessid")) {
      setCheckData("1")
    } else {
      setCheckData("0")
    }

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
        setCheckData("1")
      } else {
        setCheckData("0");
      }
    })
    .catch(function (error) {
      console.log(error);
      /*setCheckData(false)*/
    });
  }, [])

  return (
    <>
      {checkData === "1"
      &&
      <DashboardItems />
      }
      {checkData === "0"
      &&
      <Login/>
      }
    </>
  )
}

export default Dashboard;
