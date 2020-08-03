import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getResponse } from '../../Store/index';

const CheckSsid = () => {
  const [checkData, setCheckData] = useState(false)
  const reduxResponse = useSelector(getResponse)
  const localResponse = JSON.parse(localStorage.getItem('Response'));

  useEffect(() => {
    if ((reduxResponse !== null && reduxResponse.hasOwnProperty("sessid")) || (localResponse !== null && localResponse.hasOwnProperty("sessid"))) {
      setCheckData(true)
    }
  }, [reduxResponse, localResponse])

  useEffect(() => {
    if (reduxResponse.hasOwnProperty("sessid") || localResponse.hasOwnProperty("sessid")) {
      setCheckData(true)
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
        setCheckData(true)
      } else {
        setCheckData(false);
      }
    })
    .catch(function (error) {
      console.log(error);
      /*setCheckData(false)*/
    });
  }, [])

  return (
    <div style={{
        width: "400px",
        margin: "0 auto",
      }}>
      <h1>CheckData component test</h1>
      {checkData ? <h2 style={{ color: "green" }}>true</h2> : <h2 style={{ color: "red" }}>false</h2>}
    </div>
  )
}


export default CheckSsid;
