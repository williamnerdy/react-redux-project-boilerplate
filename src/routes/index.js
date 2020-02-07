import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
