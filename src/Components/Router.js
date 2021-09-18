import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tv" component={TV} exact />
        <Route path="/search" component={Search} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
