import React, { useState } from 'react';
import './DashboardItem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardItem = ({ item }) => {
  const [onClickChange, setOnClickChange] = useState(false);

/*//////////////////////////////////////////*/

  const [id, setId] = useState(item.id);
  const [newId, setNewId] = useState("");
  const [newIdError, setNewIdError] = useState("");

  const submitNewId = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({item: item, newId: newId})
    axios.post('/setNewId.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const res = response.json();
      if (res && res.change === true) {
        setId(newId);
        setNewIdError("1");
        setTimeout(() => {
          setNewIdError("")
        }, 1000)
      } else {
        setNewIdError("2");
        setTimeout(() => {
          setNewIdError("")
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
      setNewIdError("2");
      setTimeout(() => {
        setNewIdError("")
      }, 1000)
    });
  }

/*//////////////////////////////////////////*/

  const [token, setToken] = useState(item.token);
  const [newToken, setNewToken] = useState("");
  const [newTokenError, setNewTokenError] = useState("");

  const submitNewToken = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({item: item, newToken: newToken})
    axios.post('/setNewToken.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const res = response.json();
      if (res && res.change === true) {
        setToken(newToken);
        setNewTokenError("1");
        setTimeout(() => {
          setNewTokenError("")
        }, 1000)
      } else {
        setNewTokenError("2");
        setTimeout(() => {
          setNewTokenError("")
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
      setNewTokenError("2");
      setTimeout(() => {
        setNewTokenError("")
      }, 1000)
    });
  }

  /*//////////////////////////////////////////*/

  const [BMtoken, setBMToken] = useState(item.token);
  const [newBMToken, setNewBMToken] = useState("");
  const [newBMTokenError, setNewBMTokenError] = useState("");

  const submitNewBMToken = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({item: item, newBMToken: newBMToken})
    axios.post('/setNewBMToken.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const res = response.json();
      if (res && res.change === true) {
        setBMToken(newBMToken);
        setNewBMTokenError("1");
        setTimeout(() => {
          setNewBMTokenError("")
        }, 1000)
      } else {
        setNewBMTokenError("2");
        setTimeout(() => {
          setNewBMTokenError("")
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
      setNewBMTokenError("2");
      setTimeout(() => {
        setNewBMTokenError("")
      }, 1000)
    });
  }

  /*//////////////////////////////////////////*/

  const [sessionName, setSessionName] = useState(item.session_name);
  const [newSessionName, setNewSessionName] = useState("");
  const [newSessionNameError, setNewSessionNameError] = useState("");

  const submitNewSessionName = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({item: item, newSessionName: newSessionName})
    axios.post('/setNewSessionName.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const res = response.json();
      if (res && res.change === true) {
        setSessionName(newSessionName);
        setNewSessionNameError("1");
        setTimeout(() => {
          setNewSessionNameError("")
        }, 1000)
      } else {
        setNewSessionNameError("2");
        setTimeout(() => {
          setNewSessionNameError("")
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
      setNewSessionNameError("2");
      setTimeout(() => {
        setNewSessionNameError("")
      }, 1000)
    });
  }

  /*//////////////////////////////////////////*/

  const [modem, setModem] = useState(item.modem);
  const [newModem, setNewModem] = useState("");
  const [newModemError, setNewModemError] = useState("");

  const submitNewModem = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({item: item, newModem: newModem})
    axios.post('/setNewModem.php', DATA)
    .then(function (response) {
      console.log(response.json())
      const res = response.json();
      if (res && res.change === true) {
        setModem(newModem);
        setNewModemError("1");
        setTimeout(() => {
          setNewModemError("")
        }, 1000)
      } else {
        setNewModemError("2");
        setTimeout(() => {
          setNewModemError("")
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
      setNewModemError("2");
      setTimeout(() => {
        setNewModemError("")
      }, 1000)
    });
  }

  /*//////////////////////////////////////////*/


  return (
    <section className="dashboardItem">
      <div className="operations__transaction">
        <span>{item.number}</span>
        <span>{id}</span>
        <span className="dashboardItem__span">{token}</span>
        <span>{sessionName}</span>
        <span>{modem}</span>
        <div className="dashboardItem__settings">
          <Link className="dashboardItem__settings-item" to="/statistic">Statistic</Link>
          <button onClick={() => setOnClickChange(!onClickChange)} className="dashboardItem__settings-item" type="button">Change</button>
        </div>
      </div>
      {onClickChange
      &&
      <div>

        <form onSubmit={(e) => submitNewId(e)} className="dashboardItem___form">
          <h5>Change ID</h5>
            <div className="dashboardItem___form-inner">
              <input onChange={(e) => setNewId(e.target.value)} defaultValue={id} type="text"></input>
              <button className="dashboardItem___form-button" type="submit">Submit ID</button>
              {newIdError === "1" && <span style={{color: "rgba(38, 222, 129, 1)"}} className="dashboardItem__message">Set ID successful</span>}
              {newIdError === "2" && <span style={{color: "red"}} className="dashboardItem__message">Set ID error</span>}
            </div>
        </form>

        <form onSubmit={(e) => submitNewToken(e)} className="dashboardItem___form">
          <h5>Change Token</h5>
          <div className="dashboardItem___form-inner">
            <input onChange={(e) => setNewToken(e.target.value)} defaultValue={item.token} type="text"></input>
            <button className="dashboardItem___form-button"  type="submit">Submit TOKEN</button>
            {newTokenError === "1" && <span style={{color: "rgba(38, 222, 129, 1)"}} className="dashboardItem__message">Set Token successful</span>}
            {newTokenError === "2" && <span style={{color: "red"}} className="dashboardItem__message">Set Token error</span>}
          </div>
        </form>

        <form onSubmit={(e) => submitNewBMToken(e)} className="dashboardItem___form">
          <h5>Change BM Token</h5>
          <div className="dashboardItem___form-inner">
            <input onChange={(e) => setNewBMToken(e.target.value)} defaultValue={item.token} type="text"></input>
            <button className="dashboardItem___form-button"  type="submit">Submit BM TOKEN</button>
            {newBMTokenError === "1" && <span style={{color: "rgba(38, 222, 129, 1)"}} className="dashboardItem__message">Set BMToken successful</span>}
            {newBMTokenError === "2" && <span style={{color: "red"}} className="dashboardItem__message">Set BMToken error</span>}
          </div>
        </form>

        <form onSubmit={(e) => submitNewSessionName(e)} className="dashboardItem___form">
          <h5>Change Session Name</h5>
          <div className="dashboardItem___form-inner">
            <input onChange={(e) => setNewSessionName(e.target.value)} defaultValue={item.session_name} type="text"></input>
            <button className="dashboardItem___form-button"  type="submit">Submit Session Name</button>
            {newSessionNameError === "1" && <span style={{color: "rgba(38, 222, 129, 1)"}} className="dashboardItem__message">Set SessionName successful</span>}
            {newSessionNameError === "2" && <span style={{color: "red"}} className="dashboardItem__message">Set SessionName error</span>}
          </div>
        </form>


        <form onSubmit={(e) => submitNewModem(e)} className="dashboardItem___form">
          <h5>Change Modem Number</h5>
          <div className="dashboardItem___form-inner">
            <select onChange={(e) => setNewModem(e.target.value)} className="dashboardItem___form-select" defaultValue={item.modem} type="text">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>10</option>
              <option>11</option>
            </select>
            <button className="dashboardItem___form-button"  type="submit">Submit Modem Number</button>
            {newModemError === "1" && <span style={{color: "rgba(38, 222, 129, 1)"}} className="dashboardItem__message">Set Modem successful</span>}
            {newModemError === "2" && <span style={{color: "red"}} className="dashboardItem__message">Set Modem error</span>}
          </div>
        </form>

      </div>
      }
    </section>
  );
}

export default DashboardItem;
