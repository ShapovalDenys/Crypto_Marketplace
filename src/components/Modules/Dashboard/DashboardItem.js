import React from 'react';
import './DashboardItem.scss';
import { Link } from 'react-router-dom';

const DashboardItem = ({ item }) => {

  return (
    <section className="dashboardItem">
      <div className="operations__transaction">
        <span>{item.number}</span>
        <span>{item.id}</span>
        <span className="dashboardItem__span">{item.token}</span>
        <span>{item.session_name}</span>
        <span>{item.modem}</span>
        <span></span>
        <div className="dashboardItem__settings">
          <Link className="dashboardItem__settings-item" to="/statistic">Statistic</Link>
          <button className="dashboardItem__settings-item" type="button">Change</button>
        </div>
      </div>
    </section>
  );
}

export default DashboardItem;
