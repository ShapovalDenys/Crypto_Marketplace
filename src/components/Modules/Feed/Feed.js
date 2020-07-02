import React from 'react';

import './Feed.scss';

const FEEDS = [
  {feed: "Two versions of Digital Dollar Emerge as Contenders, but Unlikely to Come Soon", source: "at Cointelegraph", date: "8 hours ago"},
  {feed: "US Debt Hits $24 Trillion as Bitcoin Marches On", source: "at Decrypt", date: "Apr 10"},
  {feed: "Monero Price is the Only One Outperforming Bitcoin?", source: "at Cryptopolitan", date: "Apr 8"},
  {feed: "Crypto Can Save User Data Amid Plans for Massive Surveillance During GXVID-20 Spread", source: "at Decrypt", date: "Apr 5"},
  {feed: "US Debt Hits $24 Trillion as Bitcoin Marches On", source: "at Decrypt", date: "Apr 4"},
  {feed: "Monero Price is the Only One Outperforming Bitcoin?", source: "at Cryptopolitan", date: "Apr 3"},
  {feed: "Crypto Can Save User Data Amid Plans for Massive Surveillance During GXVID-20 Spread", source: "at Decrypt", date: "Apr 1"},
]

const Feed = () => (
  <div className="feed">

    <div className="module__article">
      <h2>Feed<img src="./img/search.svg" alt="search"></img></h2>
      <a href="#"><img src="./img/settings.svg" alt="setting"></img></a>
    </div>

    <div className="feed__data">
      {FEEDS.map(item =>
      <div className="feed__data-item feed-item" key={item.feed + item.date}>
        <div className="feed-item__decoration"></div>
        <h4>{item.feed}<span className="feed-item__sourse">{item.source}</span></h4>
        <span className="feed-item__date">{item.date}</span>
      </div>
      )}
    </div>



  </div>
);

export default Feed;
