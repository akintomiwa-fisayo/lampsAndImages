import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

class MainContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Home />} />
      </Switch>
    );
  }
}

export default MainContent;
