import React, { useEffect, useState } from 'react';
import './DashboardItems.scss';
import axios from 'axios';
import DashboardItem from './DashboardItem';

const test = [
  {number: "1", id: "12345", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",},
  {number: "2", id: "23456", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",},
  {number: "3", id: "34567", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",},
  {number: "4", id: "45678", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",},
  {number: "5", id: "56789", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",},
  {number: "6", id: "67891", token: "sasdasdasdsadasd12312dasdasd321321312adsdas", session_name :"some account", modem: "3",}
]

const DashboardItems = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    axios.post('/dashboard.php')
    .then(function (response) {
      console.log(response.json())
      setDashboardData(response.json())
    })
    .catch(function (error) {
      console.log(error);
      setDashboardData(test)
    });
  }, [])


  return (
    <section className="dashboard">

      <div className="module__article">
        <h2>Dashboard</h2>
      </div>

      <div className="balance__line"></div>

      <div className="operations__transactions-title">
        <span id="name">Number</span>
        <span id="id">ID</span>
        <span id="status">Token</span>
        <span>Session_name</span>
        <span>Modem</span>
        <span>Settings</span>
      </div>

      <div className="operations__transactions">
        {dashboardData.map(item => <DashboardItem key={item.number + item.id} item={item}/>)}
      </div>

    </section>
  );
}

export default DashboardItems;
