import React from 'react';

import './Home.scss';

import { CSSTransitionGroup } from 'react-transition-group';

const Home = () => {

  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={300}>

        <div className="homepage">
          <h2>Home Page</h2>
        </div>

    </CSSTransitionGroup>
  )
}

export default Home;
