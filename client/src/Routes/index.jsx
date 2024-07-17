// src/routes/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Login from '../pages/login';
import Signup from '../pages/Signup';
import NoMatch from '../pages/NoMatch';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/NoMatch" component={NoMatch} />
        <PrivateRoute path="/chat" component={Chat} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
